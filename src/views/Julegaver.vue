<template>
  <div>
    <div class="button deltager">
      <form class="row">
        <input class="adduserinput" v-model="name" placeholder=" Skriv inn navn" />
        <button class="adduserbutton" @click="adduser(folk, name, $event)">
          Legg til deltager
        </button>
      </form>
    </div>
    <div v-for="user in folk" :key="user.name" class="juleuser">
      <Juleuser v-bind:user="user" @removeuser="removeuser(folk, user)" />
    </div>
  </div>
</template>

<script>
import Juleuser from '../components/JuleUser.vue';

export default {
  name: 'Julegaver',
  components: {
    Juleuser,
  },
  methods: {
    adduser: function(folk, navn, event) {
      if (event) {
        event.preventDefault();
      }
      folk.push({ name: navn, number: 0, points: 0.0 });
    },
    removeuser: function(folk, user) {
      folk.splice(folk.indexOf(user), 1);
    },
  },
  data() {
    return {
      folk: [
        { name: 'bendik', number: 10, points: 2.0 },
        { name: 'daniel', number: 12, points: 10.0 },
        { name: 'Mamma', number: 10, points: 4.0 },
      ],
    };
  },
};
</script>
<style scoped>
div.button {
  text-align: left;
  margin-bottom: 1rem;
  /* padding-bottom: 1rem; */
}
button {
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
button:hover {
  border-color: #7a7a7a;
}
button:active {
  background-color: #999999;
}
.adduserinput {
  height: 2rem;
  padding: 0;
  border: 0;
  /* border: 0.5px solid; */
  margin-right: -4px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 70%;
  font-size: 20px;
}
.adduserbutton {
  /* border: 0.5px solid; */
  border-left: 0;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  padding: 0;
  height: 2.1rem;
  margin-left: 0;
  width: 31%;
}

.deltager {
  box-shadow: 2px 2px 5px #000;
  border-radius: 5px;
}
</style>
