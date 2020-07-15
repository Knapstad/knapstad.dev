<template>
  <div class="juleuser">
    <div class="nameheader row">
      <div class="username column">
        {{ user.name }}
      </div>
      <div class="buttonwrapper column">
        <button @click="removeuser(user)" class="danger">Slett</button>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="poeng">
          <p>Antall gaver: {{ user.antall }}</p>
          <p>Antall poeng: {{ user.poeng }}</p>
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
      user.antall++;
    },
    addpoeng: function(user) {
      user.poeng++;
    },
    addhalvtpoeng: function(user) {
      user.poeng = user.poeng + 0.5;
    },
    removeuser: function(user) {
      //TODO
      alert('hello' + user.name);
    },
  },
};
</script>

<style scoped>
div.juleuser {
  background: whitesmoke;
  text-align: left;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  box-shadow: 2px 2px 5px #000;
  width: 100%;
  margin-block-end: 1rem;
}
.row {
  display: flex;
}
.column {
  flex: 50%;
}
.username {
  padding-left: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.buttonwrapper {
  display: flex;
  height: 100%;
  margin: auto;
  justify-content: flex-end;
  padding-right: 0.7rem;
}
button {
  height: 10%;
}
div.poeng {
  padding-left: 1rem;
  width: 50%;
  position: relative;
}

/* span {
  left: 1rem;
} */
div.edit p {
  margin: 0;
  padding: 0.7rem;
  text-align: right;
  /* justify-content: flex-end; */
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
</style>
