<template>
  <div class="home">
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
  metaInfo() {
    return {
      title: 'Knapstad.dev - ',
      titleTemplate: '%s I make stuff in Python',
      meta: [
        {
          name: 'description',
          content: 'I`m a developer and analyst based in Oslo Norway, this is my site',
        },
      ],
    };
  },
};
</script>
<style></style>
