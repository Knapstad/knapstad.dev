<template>
  <div class="cardbg">
    <div class="nameheader row">
      <div class="name column">{{ event.date }}</div>
      <div class="buttonwrapper column">
        <button @click="$emit('removeuser', user)" class="delete">
          <svg style="width:24px;height:24px" viewBox="0 -2 24 24">
            <path
              fill="currentColor"
              d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="poeng">
          <p>Vinner: {{ event }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   /* eslint-disable */
  name: 'EventPreveiw',
  props: ['event'],
  methods: {
    prosent: function(user) {
      return `${Math.round((user.points / user.number) * 100)}%`;
    },
  },
};
</script>

<style scoped>
div.cardbg {
  background: whitesmoke;
  text-align: left;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  box-shadow: 2px 2px 5px #000;
  width: 100%;
  -webkit-margin-after: 1rem;
  margin-block-end: 1rem;
}
button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.name {
  padding-left: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
}
.buttonwrapper {
  display: flex;
  height: 100%;
  margin: auto;
  justify-content: flex-end;
}
div.poeng {
  padding-left: 1rem;
  width: 75%;
  position: relative;
}
div.edit p {
  margin: 0;
  padding: 0.7rem;
  text-align: right;
}
div.nameheader {
  background: lightgray;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.w3-light-grey {
  background: lightgray;
  border-radius: 0;
  margin-top: 1rem;
  position: relative;
}
.w3-grey {
  border-radius: 0;
  background: gray;
  color: white;
  text-align: center;
  height: 2rem;
  line-height: 2rem;
  font-size: 1.5rem;
}
button.delete {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: rgba(251, 75, 75, 0.623);
  color: white;
  font-size: 20px;
  border: 0;
  border-top-right-radius: 10px;
  display: block;
  width: 3rem;
  height: 2rem;
  text-align: center;
}
</style>
