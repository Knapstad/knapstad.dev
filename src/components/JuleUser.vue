<template>
  <div class="juleuser">
    <div class="nameheader row">
      <div class="username column">
        {{ user.name }}
      </div>
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
          <p>Antall gaver: {{ user.number }}</p>
          <p>Antall poeng: {{ user.points }}</p>
        </div>
      </div>
      <div class="column">
        <div class="edit">
          <p><button @click="addgave(user)">Ny gave</button></p>
          <p>
            <button @click="addhalvtpoeng(user)">+ 0.5</button
            ><button @click="addpoeng(user)">+ 1</button>
          </p>
        </div>
      </div>
    </div>
    <div class="w3-light-grey">
      <div class="w3-grey" :style="{ width: prosent(user) }">
        {{ prosent(user) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Juleuser',
  props: ['user'],
  methods: {
    prosent: function(user) {
      return `${Math.round((user.points / user.number) * 100)}%`;
    },
    addgave: function(user) {
      user.number++;
    },
    addpoeng: function(user) {
      user.points++;
    },
    addhalvtpoeng: function(user) {
      user.points = user.points + 0.5;
    },
    removeuser: function(user) {
      //TODO
      alert('hello' + user.name);
    },
  },
};
</script>

<style scoped>
div.juleuser[data-v-344f7ac2] {
  background: whitesmoke;
  text-align: left;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  box-shadow: 2px 2px 5px #000;
  width: 100%;
  -webkit-margin-after: 1rem;
  margin-block-end: 1rem;
}
.username[data-v-344f7ac2] {
  padding-left: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
}
.buttonwrapper[data-v-344f7ac2] {
  display: flex;
  height: 100%;
  margin: auto;
  justify-content: flex-end;
}
div.poeng[data-v-344f7ac2] {
  padding-left: 1rem;
  width: 75%;
  position: relative;
}
div.edit p[data-v-344f7ac2] {
  margin: 0;
  padding: 0.7rem;
  text-align: right;
}
div.nameheader[data-v-344f7ac2] {
  background: lightgray;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.w3-light-grey[data-v-344f7ac2] {
  background: lightgray;
  border-radius: 0;
  margin-top: 1rem;
  position: relative;
}
.w3-grey[data-v-344f7ac2] {
  border-radius: 0;
  background: gray;
  color: white;
  text-align: center;
  height: 2rem;
  line-height: 2rem;
  font-size: 1.5rem;
}
button.delete[data-v-344f7ac2] {
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
