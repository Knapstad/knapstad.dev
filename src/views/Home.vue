<template>
  <div class="home">
      <vue-headful
            title="Knapstad.dev"
            description="I make stuff in Python"
        />
    <img alt="Knapstad logo" src="@/assets/BlackLogo.png" />
    <HelloWorld msg="I make stuff with Python" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
