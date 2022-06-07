# How make a link-serializer for Sanity in Vue

Sanity is one of the best, if not the best, headless CMS/data solutions out there.

[Content is Data as they put it over at their own site Sanity.io](https://sanity.io)

The standard blog schema is great, but you might want to make some adjustments to it.
For instance i would like to add an option to open links in a new window.
My BlockContent schema is stored in a file called blockContent.js inside the schemas directory.
The standard schema looks like this:
#### **`Blockcontent.js`**
```js
export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'}
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        decorators: [{title: 'Strong', value: 'strong'}, {title: 'Emphasis', value: 'em'}],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              },
            ]
          },
        ]
      }
    },
  ]
}
```

If you look inside 'marks' you will find 'annotations', this is where the link type lives.
And this is the one we would like to change to get the "open in a new window" functionality.
We need to add an attribute to the object and we do this in the fields-array.
The new field needs a title, a name and a type. The title is what is displayed in the sanity studio.
And the name is the key used in the portable text. So well add 'Open in new window' as the title and 'newtab' as the name.
As for the type we'll set 'boolean' this gives the user a toggle to set when adding the url. This is what our new field looks like.
```js
{
  title: 'Open in new window',
  name: 'newtab',
  type: 'boolean'
}
```
Now we just need to add it to the url inside the annotationsarray inside the marks object:
```js
marks: {
        decorators: [{title: 'Strong', value: 'strong'}, {title: 'Emphasis', value: 'em'}],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              },
            ]
          },
        ]
      }
```

Thats pretty much it for the Sanity part of the job. Now we need a way to render this on our page.
To render the portable text from Sanity with Vue, I use 'sanity-blocks-vue-component'

To install this just run:

```$ npm i sanity-blocks-vue-component```

This is what a general vue view could look like using sanity block components:

#### **`Blogg.vue`**
```django
<template>
  <div>
    <block-content
      :blocks="blocks" :serializers="serializers" />
  </div>

</template>

<script>
import BlockContent from 'sanity-blocks-vue-component';

const serializers = {
        types: {
          },
        marks: {
        }
}

export default {
  name: 'Blogg',
  props: [],
  components: {
    BlockContent,
  },

  data() {
    return {
      blocks: "this is where your sanity data goes"
      serializers: serializers
    }
  }
}
</script>
```

Inside serializers you can override the standard serializers from 'sanity-blocks-vue-component'.
And we want to do that. We'll make a custom component called Links that we want to use to handle the links from sanity.

I will use a functional component and it looks like this:
#### **`Links.vue`**
```django
<template functional>
    <div>
        <a v-if="props.newtab" :href="props.href" target="blank_" rel="nofollow noopener"><slot /></a>
        <a v-else :href="props.href" rel="nofollow noopener"><slot /></a>
    </div>
</template>
```
Its as easy as that. Notice that I'm using '\<slot \/>' to render the link text.


Now we just need to import the component and add the name in the serializer
#### **`Blogg.vue`**
```django
<template>
  <div>
    <block-content
      :blocks="blocks" :serializers="serializers" />
  </div>

</template>

<script>
import BlockContent from 'sanity-blocks-vue-component';
import Links from '@/components/Links.vue'
const serializers = {
        types: {
          },
        marks: {
            link: Links
        }
}

export default {
  name: 'Blogg',
  props: [],
  components: {
    BlockContent,
  },

  data() {
    return {
      blocks: "this is where your sanity data goes"
      serializers: serializers
    }
  }
}
</script>
```
That should do it.