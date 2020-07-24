<template>
  <div>
    <div class="button user">
      <form class="row">
        <input class="adduserinput" v-model="name" placeholder=" Skriv inn navn" />
        <button class="adduserbutton" @click.prevent="$emit('adduser', name)">
          Legg til deltager
        </button>
      </form>
    </div>
    <div v-for="user in group" :key="user.name" class="noclass">
      <Juleuser v-bind:user="user" @removeuser="$emit('removeuser', $event)" />
    </div>
  </div>
</template>
<script>
import Juleuser from '@/components/JuleUser.vue';
export default {
  name: 'Group',
  props: ['group'],
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
      user: '',
      name: '',
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
  height: 2.1rem;
  margin-left: 0;
  min-width: 35%;
}

.user {
  box-shadow: 2px 2px 5px #000;
  border-radius: 5px;
}
</style>
