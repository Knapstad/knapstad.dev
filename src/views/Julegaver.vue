<template>
  <div>
    <Event
      v-bind:group="folk"
      @removeuser="removeuser(folk, $event)"
      @adduser="adduser(folk, $event)"
      @update="update(folk, $event)"
    />
  </div>
</template>

<script>
import Event from '@/components/Event.vue';

export default {
  name: 'Julegaver',
  components: {
    Event,
  },
  methods: {
    adduser: function(folk, navn) {
      folk.push({ name: navn, number: 0, points: 0.0 });
      window.localStorage.setItem('juledata', JSON.stringify(folk));
    },
    removeuser: function(folk, user) {
      folk.splice(folk.indexOf(user), 1);
      window.localStorage.setItem('juledata', JSON.stringify(folk));
    },
    update: function(folk, user) {
      folk[folk.indexOf(user)] = user;
      window.localStorage.setItem('juledata', JSON.stringify(folk));
    },
  },
  metaInfo() {
    return {
      title: 'Knapstad.dev - ',
      titleTemplate: `%s Julegave tracker`,
      meta: [
        {
          name: 'description',
          content: `Min private lille julegavetracker`,
        },
      ],
    };
  },
  data() {
    return {
      user: '',
      name: '',
      folk: JSON.parse(window.localStorage.getItem('juledata')) || [],
    };
  },
};
</script>
<style scoped>
div.button {
  text-align: left;
  margin-bottom: 1rem;
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
  padding-right: 1px;
  /* height: 2.1rem; */
  margin-left: 0;
  min-width: 33%;
}

.deltager {
  box-shadow: 2px 2px 5px #000;
  border-radius: 5px;
}
</style>
