<template>
  <div class="christmas-container">
    <div class="snowflakes behind" aria-hidden="true">
      <div class="snowflake" v-for="n in 50" :key="'behind-' + n">{{ getRandomSnowflake() }}</div>
    </div>
    <ChristmasCounter date="day" @dateObject="getData($event)" />
    <div class="snowflakes in-front" aria-hidden="true">
      <div class="snowflake" v-for="n in 50" :key="'in-front-' + n">{{ getRandomSnowflake() }}</div>
    </div>
    <router-link to="/ukerigjentiljul">
      <p>Lurer du på hvor mange uker det er til jul?</p>
    </router-link>
  </div>
</template>

<script>
import ChristmasCounter from '@/components/ChristmasCounter.vue';

export default {
  name: 'Dager igjen til jul',
  components: {
    ChristmasCounter,
  },
  mounted() {
    this.setSnowflakeStyles();
  },
  methods: {
    getData(data) {
      this.days = data.days;
      this.weeks = data.weeks;
      this.title = 'Knapstad.dev - ' + this.days + ' Dager Igjen Til Jul';
    },
    setSnowflakeStyles() {
      const snowflakesinfront = document.querySelectorAll('.in-front .snowflake');
      const snowflakesbehind = document.querySelectorAll('.behind .snowflake');
      snowflakesinfront.forEach(snowflake => {
        const randomLeft = Math.random() * 100;
        const randomDuration = Math.random() * 5 +5;
        const randomDelay = Math.random() * 10;
        const randomSize = Math.random() *1 + 1;
        snowflake.style.left = `${randomLeft}%`;
        snowflake.style.animationDuration = `${randomDuration}s`;
        snowflake.style.animationDelay = `${randomDelay}s`;
        snowflake.style.fontSize = `${randomSize}em`;
      });
      snowflakesbehind.forEach(snowflake => {
        const randomLeft = Math.random() * 100;
        const randomDuration = Math.random() * 5 +7;
        const randomDelay = Math.random() * 10;
        const randomSize = Math.random() *0.5 + 0.5;
        snowflake.style.left = `${randomLeft}%`;
        snowflake.style.animationDuration = `${randomDuration}s`;
        snowflake.style.animationDelay = `${randomDelay}s`;
        snowflake.style.fontSize = `${randomSize}em`;
      });
    },
    getRandomSnowflake() {
      const baseSnowflakes = ['❅', '❆', '❄', '✻', '✼', '❇', '❈', '❉', '❊', '❋'];
      const festiveSnowflakes = ['🎄', '🎅', '🎁', '🎀', '🌟'];

      // Shuffle the festiveSnowflakes array
      for (let i = festiveSnowflakes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [festiveSnowflakes[i], festiveSnowflakes[j]] = [festiveSnowflakes[j], festiveSnowflakes[i]];
      }
    //  #remove baseSnowflakes based on festivity level
      for (let i = 0; i < this.getFestivityLevel(); i++) {
        baseSnowflakes.pop();
      }

      const allSnowflakes = baseSnowflakes.concat(festiveSnowflakes.slice(0, this.getFestivityLevel()));
      return allSnowflakes[Math.floor(Math.random() * allSnowflakes.length)];
    },
    getFestivityLevel() {
      if (this.days <= 7) {
        return 10; // All festive emojis
      } else if (this.days <= 10) {
        return 7;
      } else if (this.days <= 15) {
        return 5; 
      }else if (this.days <= 20) {
        return 2;
      }else if (this.days <= 30) {
        return 1; 
      }
      else {
        return 0; // Only base snowflakes
      }
    },
    getChristmasContainerHeight() {
      return document.querySelector('.christmas-container').clientHeight;
    },
  },
  data() {
    return {
      days: '',
      weeks: '',
      title: '',
      
      
    };
  },
};
</script>

<style scoped>
.christmas-container {
  background-color: #008000;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  color: #2f4f4f;
  text-align: center;
  padding: 20px;
  border: 5px solid #ff0000;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.christmas-container p {
  font-size: 1.5em;
  color: #ff4500;
  margin: 20px 0;
}

.christmas-container a {
  color: #008000;
  text-decoration: underline;
}

.christmas-container h1 {
  font-size: 3em;
  color: #ff0000;
  text-shadow: 2px 2px #ffa500;
}

.christmas-container button {
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
}

.christmas-container button:hover {
  background-color: #ffa500;
}

.snowflakes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.snowflakes.behind {
  z-index: 0;
}

.snowflakes.in-front {
  z-index: 2;
}

.snowflake {
  position: absolute;
  top: -50px;
  color: #fff;
  font-size: 1em;
  user-select: none;
  animation: fall linear infinite;
}

@keyframes fall {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(var(--christmas-container-height,400px)) rotate(360deg);
  }
}
</style>