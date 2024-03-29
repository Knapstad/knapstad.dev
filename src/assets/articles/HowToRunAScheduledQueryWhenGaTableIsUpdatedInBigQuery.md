# How to run a scheduled query when the Google Analytics table is updated in BigQuery

[Google Analytics](https://analytics.google.com/) is the most used analytics tool for web, and one of the best tools as well.
It benefits from a large user base who happily share solutions and tips. And if you connect it to [Google BigQuery](https://cloud.google.com/bigquery) you get added benefits.

And if you are using Google Analytics with BigQuery, there is a chance you have set up some scheduled queries, and chances are you have set them to run on a specific time of day, probably some time around lunch, because the dump from Google Analytics does not happen at the same time every day. On my accounts it happens some time between 06:00 and 11:00.

This solution will check your logs, and run your queries when the data is updated.

## Requirements

This script requires:

- Python 3.6 or higher
- a Google Analytics account
- a Google Cloud account

## Setting things up

### Step 1: Google cloud project

If you already have set up a google cloud project you can skip this part.

First you want to set up your Google cloud Project.
Go to this link [create Google Cloud Project](https://console.cloud.google.com/projectcreate)

![Screenshot of the create new project form](./gtmversioncheckerimg/Create-project.png)

Give you project an awesome name and click create.
Remember to set up a billing account if you don't already have one:
[Create a billing account](https://console.cloud.google.com/billing/create)

![Screenshot of the create a billing account form](./gtmversioncheckerimg/createbilling.png)

### Step 2: Set up the sink

First you need to [open the Cloud Logging section of Google cloud](https://console.cloud.google.com/logs).
Make sure the query tab is selected:

![Screenshot of the logs Explorer](./scheduledqueryimg/querytab.png)

Then in the text field paste in this code. Just remember to substitute the placeholders.
```
protoPayload.serviceData.jobCompletedEvent.job.jobConfiguration.load.destinationTable.datasetId=[YOUR_DATASET_ID]
protoPayload.serviceData.jobCompletedEvent.job.jobConfiguration.load.destinationTable.projectId=[YOUR_PROJECT_ID]
protoPayload.authenticationInfo.principalEmail="analytics-processing-dev@system.gserviceaccount.com"
protoPayload.methodName="jobservice.jobcompleted"
protoPayload.serviceData.jobCompletedEvent.job.jobConfiguration.load.destinationTable.tableId:"ga_sessions"
NOT protoPayload.serviceData.jobCompletedEvent.job.jobConfiguration.load.destinationTable.tableId:"ga_sessions_intraday"
```

Then click on Run query and your screen should look some thing like this:

![Screenshot of logs Explorer after query is run](./scheduledqueryimg/querry_run.png)

If you cant see any logs try extending the time by 14 hours.

Next click on actions and choose "Create Sink":


![Screenshot of the create sink option](./scheduledqueryimg/create_sink.png)

This will open a new window that looks like this:

![Screenshot create sink screen step 1](./scheduledqueryimg/create_sink-step1.png)

Give it a cute name, and add a description if you like.

Choose "Cloud Pub/Sub topic" as the sink service and pick a topic or click create topic to make a new one.
Try to remember the topic as you will need it later.

![Screenshot of create sink step 2](./scheduledqueryimg/create_sink-step2.png)

Once you click next your inclusion filter should already be filled in for you, if it's not just paste the code from earlier.

![Screenshot of create sink step 3](./scheduledqueryimg/create_sink-step3.png)

Then click "CREATE SINK"

### Step 3: Set up the cloud function

Navigate over to [Cloud functions](https://console.cloud.google.com/functions/) and click create function.

Give your function a name, and choose "Pub/Sub" as your trigger. Find your topic in the dropdown. Set the region to the same as your BigQuery.
I left everything else as default. Click save and then next.

![Screenshot create function step 1](./scheduledqueryimg/create_function1.png)

In the next window choose Python 3.9 ("This is the latest stable supported version at the time of writing).
In the main.py file paste the folowing code:
```Python
import time
from typing import List
from google.protobuf.timestamp_pb2 import Timestamp 
from google.cloud import bigquery_datatransfer_v1

def runQuery (*args, **kwargs):
    client = bigquery_datatransfer_v1.DataTransferServiceClient()
    project_id : str = {project_id}
    config_ids : List[str]= [{query_id}, {query_id}, {query_id}]
    location_id : str= {your location}
    for id in config_ids:
        response = client.start_manual_transfer_runs(
            request={
                "parent": f"projects/{project_id}/locations/{location_id}/transferConfigs/{id}",
                "requested_run_time": Timestamp(seconds=int(time.time()), nanos=0),
            }
            )
```
Remember to replace the placeholders.
Your project id is a string if numbers and config_ids should be a list of ids from the queries you want to run.
Your project id and config ids can be found under [Scheduled queries](https://console.cloud.google.com/bigquery/scheduled-queries)
Just click one and choose configuration in the top menu.
You will find the data you need in the Resource name field and it looks some thing like this: 
`projects/{this is your project id}/locations/{this is your location}/transferConfigs/{this is your query id}`

Next add this line to your requirements file:
`google-cloud-bigquery-datatransfer`


Now you are ready to click deploy.

Your cloud function will run when the data dump in BigQuery is ready.

