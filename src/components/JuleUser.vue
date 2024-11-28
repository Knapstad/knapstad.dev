<template>
  <div class="juleuser" data-v-344f7ac2>
    <div class="nameheader row" data-v-344f7ac2>
      <div class="username column" data-v-344f7ac2>{{ user.name }}</div>
      <div class="buttonwrapper column" data-v-344f7ac2>
        <button @click="$emit('removeuser', user)" class="delete" data-v-344f7ac2>
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
        <div class="poeng" data-v-344f7ac2>
          <p>Antall gaver: {{ user.number }}</p>
          <p>Antall poeng: {{ user.points }}</p>
        </div>
      </div>
      <div class="column">
        <div class="edit" data-v-344f7ac2>
          <p data-v-344f7ac2>
            <button
              class="point"
              @click="
                addgave(user);
                $emit('update', user);
              "
            >
              Ny gave
            </button>
            <button class="point" @click="removegave(user)">Slett gave</button>
          </p>
          <p data-v-344f7ac2>
            <button
              class="point"
              @click="
                addhalvtpoeng(user);
                $emit('update', user);
              "
            >
              + 0.5
            </button>
            <button
              class="point"
              @click="
                addpoeng(user);
                $emit('update', user);
              "
            >
              + 1
            </button>
            <button
              class="point"
              @click="
                removehalvtpoeng(user);
                $emit('update', user);
              "
            >
              - 0.5
            </button>
            <button
              class="point"
              @click="
                removepoeng(user);
                $emit('update', user);
              "
            >
              - 1
            </button>
          </p>
        </div>
      </div>
    </div>
    <div class="w3-light-grey" data-v-344f7ac2>
      <div class="w3-grey" :style="{ width: prosent(user) }" data-v-344f7ac2>
        {{ prosent(user) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
   /* eslint-disable */
  name: 'Juleuser',
  props: ['user'],
  methods: {
    prosent: function(user) {
      return `${Math.round((user.points / user.number) * 100)}%`;
    },
    addgave: function(user) {
      user.number++;
      // $emit('update', user);
      // window.localStorage.setItem('juledata', JSON.stringify(folk));
    },
    removegave: function(user) {
      user.number--;
      // window.localStorage.setItem('juledata', JSON.stringify(folk));
    },
    addpoeng: function(user) {
      user.points++;
      // window.localStorage.setItem('juledata', JSON.stringify(folk));
    },
    removepoeng: function(user) {
      user.points--;
      // window.localStorage.setItem('juledata', JSON.stringify(folk));
    },
    addhalvtpoeng: function(user) {
      user.points = user.points + 0.5;
      // window.localStorage.setItem('juledata', JSON.stringify(folk));
    },
    removehalvtpoeng: function(user) {
      user.points = user.points - 0.5;
      // window.localStorage.setItem('juledata', JSON.stringify(folk));
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
  max-width: 100%;
}
button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-left: 1rem;
  padding: 0.2em 1.45em;
  border: 0.15em solid #cccccc;
  box-sizing: border-box;
  text-decoration: none;
  font-size: 1rem;
  color: #000000;
  background-color: #cccccc;
  text-align: center;
  position: relative;
  justify-content: left;
}
button.point {
  padding: 2px;
}
button:hover {
  border-color: #7a7a7a;
}
button:active {
  background-color: #999999;
}
.adduserinput {
  height: 2rem;
  padding: 0;
  border: 0.2px solid;
  border-right: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  min-width: 65%;
  font-size: 20px;
}
.adduserbutton {
  border: 0.2px solid;
  border-left: 0;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  padding-left: 1px;
  padding-right: 0;
  /* height: 2.1rem; */
  margin-left: 0;
  min-width: 35%;
}
button.delete[data-v-344f7ac2] {
  padding: 0;
  background: rgba(251, 75, 75, 0.623);
  color: white;
  font-size: 20px;
  border: 0;
  border-radius: 0;
  border-top-right-radius: 10px;
  display: block;
  width: 3rem;
  height: 2rem;
  text-align: center !important;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>
