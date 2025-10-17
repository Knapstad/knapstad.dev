<template>
  <div class="christmas-container">
    <div class="htmlNoPages">
      <div data-gwd-motion-path-node="x" class="gwd-motion-path-1ud8-anim-x"><div data-gwd-motion-path-node="y" class="gwd-motion-path-1ud8-anim-y"><div data-gwd-motion-path-node="theta" class="gwd-motion-path-1ud8-anim-theta"><img src="../assets/Santa.png" class="gwd-img-1mta gwd-img-13gv gwd-gen-1749gwdanimation" id="nisse_3" style="left: 0px; top: 0px; width: 100%; height: 100%;"></div></div></div>
      <div data-gwd-motion-path-node="x" class="gwd-motion-path-3ytk-anim-x"><div data-gwd-motion-path-node="y" class="gwd-motion-path-3ytk-anim-y"><div data-gwd-motion-path-node="theta" class="gwd-motion-path-3ytk-anim-theta"><img src="../assets/rein1.png" class="gwd-img-1k6m gwd-img-lvaf gwd-gen-18tbgwdanimation" id="rein1_3" style="left: 0px; top: 0px; width: 100%; height: 100%;"></div></div></div>
      <div data-gwd-motion-path-node="x" class="gwd-motion-path-1bqy-anim-x"><div data-gwd-motion-path-node="y" class="gwd-motion-path-1bqy-anim-y"><div data-gwd-motion-path-node="theta" class="gwd-motion-path-1bqy-anim-theta"><img src="../assets/rein1.png" class="gwd-img-r6l4 gwd-img-e1oc gwd-gen-1s3ggwdanimation" id="rein1_4" style="left: 0px; top: 0px; width: 100%; height: 100%;"></div></div></div>
      <div data-gwd-motion-path-node="x" class="gwd-motion-path-1f0h-anim-x"><div data-gwd-motion-path-node="y" class="gwd-motion-path-1f0h-anim-y"><div data-gwd-motion-path-node="theta" class="gwd-motion-path-1f0h-anim-theta"><img src="../assets/rein1.png" class="gwd-img-1fsq gwd-img-1b9n gwd-gen-5rc9gwdanimation" id="rein1_5" style="left: 0px; top: 0px; width: 100%; height: 100%;"></div></div></div>
      <div data-gwd-motion-path-node="x" class="gwd-motion-path-1lsa-anim-x"><div data-gwd-motion-path-node="y" class="gwd-motion-path-1lsa-anim-y"><div data-gwd-motion-path-node="theta" class="gwd-motion-path-1lsa-anim-theta"><img src="../assets/rein1.png" class="gwd-img-anwp gwd-img-1dzz gwd-gen-1wr1gwdanimation" id="rein1_6" style="left: 0px; top: 0px; width: 100%; height: 100%;"></div></div></div>
    </div>
    <div class="snowflakes behind" aria-hidden="true">
      <div class="snowflake" v-for="n in 50" :key="'behind-' + n">{{ getRandomSnowflake() }}</div>
    </div>
    <ChristmasCounter date="week" @dateObject="getData($event)" />
    <div class="snowflakes in-front" aria-hidden="true">
      <div class="snowflake" v-for="n in 50" :key="'in-front-' + n">{{ getRandomSnowflake() }}</div>
    </div>
    <router-link to="/dagerigjentiljul">
      <p>Lurer du på hvor mange dager det er til jul?</p>
    </router-link>
  </div>
</template>

<script>
import ChristmasCounter from "@/components/ChristmasCounter.vue";

export default {
	name: "Dager igjen til jul",
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
      this.title = `Knapstad.dev - ${this.days} Dager Igjen Til Jul`;
    },
    setSnowflakeStyles() {
      const snowflakesinfront = document.querySelectorAll('.in-front .snowflake');
      const snowflakesbehind = document.querySelectorAll('.behind .snowflake');
      for(const snowflake of snowflakesinfront){
        const randomLeft = Math.random() * 100;
        const randomDuration = Math.random() * 5 +5;
        const randomDelay = Math.random() * 10;
        const randomSize = Math.random() *1 + 1;
        snowflake.style.left = `${randomLeft}%`;
        snowflake.style.animationDuration = `${randomDuration}s`;
        snowflake.style.animationDelay = `${randomDelay}s`;
        snowflake.style.fontSize = `${randomSize}em`;
      };
      for(const snowflake of snowflakesbehind) {
        const randomLeft = Math.random() * 100;
        const randomDuration = Math.random() * 5 +7;
        const randomDelay = Math.random() * 10;
        const randomSize = Math.random() *0.5 + 0.5;
        snowflake.style.left = `${randomLeft}%`;
        snowflake.style.animationDuration = `${randomDuration}s`;
        snowflake.style.animationDelay = `${randomDelay}s`;
        snowflake.style.fontSize = `${randomSize}em`;
      };
    },
    getRandomSnowflake() {
      const baseSnowflakes = ['❅', '❆', '❄', '✻', '✼', '❇', '❈', '❉', '❊', '❋'];
      const festiveSnowflakes = ['🎄', '🎅', '🎁', '🎀', '🌟','🤶','⛄','🍪','🧑‍🎄','👼','☃️','🛷'];

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
      } if (this.days <= 10) {
        return 7;
      }
      if (this.days <= 15) {
        return 5; 
      }
      if (this.days <= 20) {
        return 2;
      }
      if (this.days <= 30) {
        return 1; 
      }
      return 0; // Only base snowflakes
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
  max-width: 640px;
  margin: 0 auto;
}

.christmas-container > * {
  position: relative;
  z-index: 1;
}

.christmas-container p {
  font-size: 1.5em;
  color: #ff4500;
  margin: 20px 0;
}

.christmas-container a {
  color: #008000;
  text-decoration: underline;
  font-weight: 600;
}

.christmas-container a:hover {
  color: #ffef96;
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

.htmlNoPages {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
}

.htmlNoPages,
.htmlNoPages > div {
  width: 100%;
  height: 100%;
}

.htmlNoPages * {
  pointer-events: none;
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
  opacity: 0.55;
}

.snowflakes.in-front {
  z-index: 4;
  opacity: 0.75;
}

.snowflake {
  position: absolute;
  top: -50px;
  color: #fff;
  font-size: 1em;
  user-select: none;
  animation: fall linear infinite;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.18));
}

@keyframes fall {
  0% {
    transform: translateY(-10%) rotate(0deg);
  }
  100% {
    transform: translateY(var(--christmas-container-height, 400px)) rotate(360deg);
  }
}

@keyframes gwd-gen-18tbgwdanimation_gwd-keyframes {
    0% {
        transform: rotateZ(-16.9472deg);
        -webkit-transform: rotateZ(-16.9472deg);
        -moz-transform: rotateZ(-16.9472deg);
        transform-origin: 23px 23.211px;
        -webkit-transform-origin: 23px 23.211px;
        -moz-transform-origin: 23px 23.211px;
        animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
        -webkit-animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
        -moz-animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
    }
    11.1111% {
        transform: rotateZ(1.9685deg);
        -webkit-transform: rotateZ(1.9685deg);
        -moz-transform: rotateZ(1.9685deg);
        transform-origin: 50% 50%;
        -webkit-transform-origin: 50% 50%;
        -moz-transform-origin: 50% 50%;
        animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
        -webkit-animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
        -moz-animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
    }
    34.9206% {
        transform: rotateZ(-26.1633deg);
        -webkit-transform: rotateZ(-26.1633deg);
        -moz-transform: rotateZ(-26.1633deg);
        transform-origin: 50% 50%;
        -webkit-transform-origin: 50% 50%;
        -moz-transform-origin: 50% 50%;
        animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
        -webkit-animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
        -moz-animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
    }
    68.254% {
        transform: rotateZ(-8.5298deg);
        -webkit-transform: rotateZ(-8.5298deg);
        -moz-transform: rotateZ(-8.5298deg);
        transform-origin: 50% 50%;
        -webkit-transform-origin: 50% 50%;
        -moz-transform-origin: 50% 50%;
        animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
        -webkit-animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
        -moz-animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
    }
    84.127% {
        transform: rotateZ(-2.497deg);
        -webkit-transform: rotateZ(-2.497deg);
        -moz-transform: rotateZ(-2.497deg);
        transform-origin: 50% 50%;
        -webkit-transform-origin: 50% 50%;
        -moz-transform-origin: 50% 50%;
        animation-timing-function: linear;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
    }
    100% {
        transform: rotateZ(-26.1633deg);
        -webkit-transform: rotateZ(-26.1633deg);
        -moz-transform: rotateZ(-26.1633deg);
        transform-origin: 23px 23.2109px 0px;
        -webkit-transform-origin: 23px 23.2109px 0px;
        -moz-transform-origin: 23px 23.2109px 0px;
        animation-timing-function: linear;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
    }
}
@-webkit-keyframes gwd-gen-18tbgwdanimation_gwd-keyframes {
    0% {
        -webkit-transform: rotateZ(-16.9472deg);
        -webkit-transform-origin: 23px 23.211px;
        -webkit-animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
    }
    11.1111% {
        -webkit-transform: rotateZ(1.9685deg);
        -webkit-transform-origin: 50% 50%;
        -webkit-animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
    }
    34.9206% {
        -webkit-transform: rotateZ(-26.1633deg);
        -webkit-transform-origin: 50% 50%;
        -webkit-animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
    }
    68.254% {
        -webkit-transform: rotateZ(-8.5298deg);
        -webkit-transform-origin: 50% 50%;
        -webkit-animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
    }
    84.127% {
        -webkit-transform: rotateZ(-2.497deg);
        -webkit-transform-origin: 50% 50%;
        -webkit-animation-timing-function: linear;
    }
    100% {
        -webkit-transform: rotateZ(-26.1633deg);
        -webkit-transform-origin: 23px 23.2109px 0px;
        -webkit-animation-timing-function: linear;
    }
}
@-moz-keyframes gwd-gen-18tbgwdanimation_gwd-keyframes {
    0% {
        -moz-transform: rotateZ(-16.9472deg);
        -moz-transform-origin: 23px 23.211px;
        -moz-animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
    }
    11.1111% {
        -moz-transform: rotateZ(1.9685deg);
        -moz-transform-origin: 50% 50%;
        -moz-animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
    }
    34.9206% {
        -moz-transform: rotateZ(-26.1633deg);
        -moz-transform-origin: 50% 50%;
        -moz-animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
    }
    68.254% {
        -moz-transform: rotateZ(-8.5298deg);
        -moz-transform-origin: 50% 50%;
        -moz-animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
    }
    84.127% {
        -moz-transform: rotateZ(-2.497deg);
        -moz-transform-origin: 50% 50%;
        -moz-animation-timing-function: linear;
    }
    100% {
        -moz-transform: rotateZ(-26.1633deg);
        -moz-transform-origin: 23px 23.2109px 0px;
        -moz-animation-timing-function: linear;
    }
}
.htmlNoPages .gwd-gen-18tbgwdanimation {
    animation: 6.3s linear 0s infinite normal forwards gwd-gen-18tbgwdanimation_gwd-keyframes;
    -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-gen-18tbgwdanimation_gwd-keyframes;
    -moz-animation: 6.3s linear 0s infinite normal forwards gwd-gen-18tbgwdanimation_gwd-keyframes;
}
@keyframes gwd-gen-1749gwdanimation_gwd-keyframes {
    0% {
        transform: rotateZ(-9.0046deg);
        -webkit-transform: rotateZ(-9.0046deg);
        -moz-transform: rotateZ(-9.0046deg);
        animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
        -webkit-animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
        -moz-animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
    }
    11.1111% {
        transform: rotateZ(3.5072deg);
        -webkit-transform: rotateZ(3.5072deg);
        -moz-transform: rotateZ(3.5072deg);
        animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
        -webkit-animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
        -moz-animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
    }
    34.9206% {
        transform: rotateZ(-7.7893deg);
        -webkit-transform: rotateZ(-7.7893deg);
        -moz-transform: rotateZ(-7.7893deg);
        animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
        -webkit-animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
        -moz-animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
    }
    68.254% {
        transform: rotateZ(-0.4512deg);
        -webkit-transform: rotateZ(-0.4512deg);
        -moz-transform: rotateZ(-0.4512deg);
        animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
        -webkit-animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
        -moz-animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
    }
    84.127% {
        transform: rotateZ(-1.5878deg);
        -webkit-transform: rotateZ(-1.5878deg);
        -moz-transform: rotateZ(-1.5878deg);
        animation-timing-function: linear;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
    }
    100% {
        transform: rotateZ(-33.462deg);
        -webkit-transform: rotateZ(-33.462deg);
        -moz-transform: rotateZ(-33.462deg);
        animation-timing-function: linear;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
    }
}
@-webkit-keyframes gwd-gen-1749gwdanimation_gwd-keyframes {
    0% {
        -webkit-transform: rotateZ(-9.0046deg);
        -webkit-animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
    }
    11.1111% {
        -webkit-transform: rotateZ(3.5072deg);
        -webkit-animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
    }
    34.9206% {
        -webkit-transform: rotateZ(-7.7893deg);
        -webkit-animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
    }
    68.254% {
        -webkit-transform: rotateZ(-0.4512deg);
        -webkit-animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
    }
    84.127% {
        -webkit-transform: rotateZ(-1.5878deg);
        -webkit-animation-timing-function: linear;
    }
    100% {
        -webkit-transform: rotateZ(-33.462deg);
        -webkit-animation-timing-function: linear;
    }
}
@-moz-keyframes gwd-gen-1749gwdanimation_gwd-keyframes {
    0% {
        -moz-transform: rotateZ(-9.0046deg);
        -moz-animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
    }
    11.1111% {
        -moz-transform: rotateZ(3.5072deg);
        -moz-animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
    }
    34.9206% {
        -moz-transform: rotateZ(-7.7893deg);
        -moz-animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
    }
    68.254% {
        -moz-transform: rotateZ(-0.4512deg);
        -moz-animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
    }
    84.127% {
        -moz-transform: rotateZ(-1.5878deg);
        -moz-animation-timing-function: linear;
    }
    100% {
        -moz-transform: rotateZ(-33.462deg);
        -moz-animation-timing-function: linear;
    }
}
.htmlNoPages .gwd-gen-1749gwdanimation {
    animation: 6.3s linear 0s infinite normal forwards gwd-gen-1749gwdanimation_gwd-keyframes;
    -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-gen-1749gwdanimation_gwd-keyframes;
    -moz-animation: 6.3s linear 0s infinite normal forwards gwd-gen-1749gwdanimation_gwd-keyframes;
}
@keyframes gwd-gen-1s3ggwdanimation_gwd-keyframes {
    0% {
        transform: rotateZ(-11.5954deg);
        -webkit-transform: rotateZ(-11.5954deg);
        -moz-transform: rotateZ(-11.5954deg);
        transform-origin: 14.2543px 13.0813px 0px;
        -webkit-transform-origin: 14.2543px 13.0813px 0px;
        -moz-transform-origin: 14.2543px 13.0813px 0px;
        animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
        -webkit-animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
        -moz-animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
    }
    11.1111% {
        transform: rotateZ(8.8499deg);
        -webkit-transform: rotateZ(8.8499deg);
        -moz-transform: rotateZ(8.8499deg);
        transform-origin: 23px 23.2109px 0px;
        -webkit-transform-origin: 23px 23.2109px 0px;
        -moz-transform-origin: 23px 23.2109px 0px;
        animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
        -webkit-animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
        -moz-animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
    }
    30.1587% {
        transform: rotateZ(0.7185deg);
        -webkit-transform: rotateZ(0.7185deg);
        -moz-transform: rotateZ(0.7185deg);
        transform-origin: 50% 50%;
        -webkit-transform-origin: 50% 50%;
        -moz-transform-origin: 50% 50%;
        animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
        -webkit-animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
        -moz-animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
    }
    63.4921% {
        transform: rotateZ(-8.5298deg);
        -webkit-transform: rotateZ(-8.5298deg);
        -moz-transform: rotateZ(-8.5298deg);
        transform-origin: 50% 50%;
        -webkit-transform-origin: 50% 50%;
        -moz-transform-origin: 50% 50%;
        animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
        -webkit-animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
        -moz-animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
    }
    80.9524% {
        transform: rotateZ(-2.497deg);
        -webkit-transform: rotateZ(-2.497deg);
        -moz-transform: rotateZ(-2.497deg);
        transform-origin: 50% 50%;
        -webkit-transform-origin: 50% 50%;
        -moz-transform-origin: 50% 50%;
        animation-timing-function: linear;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
    }
    100% {
        transform: rotateZ(-26.1633deg);
        -webkit-transform: rotateZ(-26.1633deg);
        -moz-transform: rotateZ(-26.1633deg);
        transform-origin: 23px 23.2109px 0px;
        -webkit-transform-origin: 23px 23.2109px 0px;
        -moz-transform-origin: 23px 23.2109px 0px;
        animation-timing-function: linear;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
    }
}
@-webkit-keyframes gwd-gen-1s3ggwdanimation_gwd-keyframes {
    0% {
        -webkit-transform: rotateZ(-11.5954deg);
        -webkit-transform-origin: 14.2543px 13.0813px 0px;
        -webkit-animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
    }
    11.1111% {
        -webkit-transform: rotateZ(8.8499deg);
        -webkit-transform-origin: 23px 23.2109px 0px;
        -webkit-animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
    }
    30.1587% {
        -webkit-transform: rotateZ(0.7185deg);
        -webkit-transform-origin: 50% 50%;
        -webkit-animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
    }
    63.4921% {
        -webkit-transform: rotateZ(-8.5298deg);
        -webkit-transform-origin: 50% 50%;
        -webkit-animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
    }
    80.9524% {
        -webkit-transform: rotateZ(-2.497deg);
        -webkit-transform-origin: 50% 50%;
        -webkit-animation-timing-function: linear;
    }
    100% {
        -webkit-transform: rotateZ(-26.1633deg);
        -webkit-transform-origin: 23px 23.2109px 0px;
        -webkit-animation-timing-function: linear;
    }
}
@-moz-keyframes gwd-gen-1s3ggwdanimation_gwd-keyframes {
    0% {
        -moz-transform: rotateZ(-11.5954deg);
        -moz-transform-origin: 14.2543px 13.0813px 0px;
        -moz-animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
    }
    11.1111% {
        -moz-transform: rotateZ(8.8499deg);
        -moz-transform-origin: 23px 23.2109px 0px;
        -moz-animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
    }
    30.1587% {
        -moz-transform: rotateZ(0.7185deg);
        -moz-transform-origin: 50% 50%;
        -moz-animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
    }
    63.4921% {
        -moz-transform: rotateZ(-8.5298deg);
        -moz-transform-origin: 50% 50%;
        -moz-animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
    }
    80.9524% {
        -moz-transform: rotateZ(-2.497deg);
        -moz-transform-origin: 50% 50%;
        -moz-animation-timing-function: linear;
    }
    100% {
        -moz-transform: rotateZ(-26.1633deg);
        -moz-transform-origin: 23px 23.2109px 0px;
        -moz-animation-timing-function: linear;
    }
}
.htmlNoPages .gwd-gen-1s3ggwdanimation {
    animation: 6.3s linear 0s infinite normal forwards gwd-gen-1s3ggwdanimation_gwd-keyframes;
    -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-gen-1s3ggwdanimation_gwd-keyframes;
    -moz-animation: 6.3s linear 0s infinite normal forwards gwd-gen-1s3ggwdanimation_gwd-keyframes;
}
.gwd-img-r6l4 {
    pointer-events: auto;
    transform-origin: 14.2543px 13.0813px 0px;
    -webkit-transform-origin: 14.2543px 13.0813px 0px;
    -moz-transform-origin: 14.2543px 13.0813px 0px;
    left: 42.9253px;
    top: 236.906px;
    position: absolute;
}
.gwd-img-e1oc {
    width: 46px;
    height: 46.43px;
    transform: rotateZ(-11.5954deg);
    -webkit-transform: rotateZ(-11.5954deg);
    -moz-transform: rotateZ(-11.5954deg);
}
@keyframes gwd-gen-5rc9gwdanimation_gwd-keyframes {
    0% {
        transform: rotateZ(-16.9472deg);
        -webkit-transform: rotateZ(-16.9472deg);
        -moz-transform: rotateZ(-16.9472deg);
        transform-origin: 23px 23.211px;
        -webkit-transform-origin: 23px 23.211px;
        -moz-transform-origin: 23px 23.211px;
        animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
        -webkit-animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
        -moz-animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
    }
    11.1111% {
        transform: rotateZ(8.8499deg);
        -webkit-transform: rotateZ(8.8499deg);
        -moz-transform: rotateZ(8.8499deg);
        transform-origin: 23px 23.2109px 0px;
        -webkit-transform-origin: 23px 23.2109px 0px;
        -moz-transform-origin: 23px 23.2109px 0px;
        animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
        -webkit-animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
        -moz-animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
    }
    25.3968% {
        transform: rotateZ(0.7185deg);
        -webkit-transform: rotateZ(0.7185deg);
        -moz-transform: rotateZ(0.7185deg);
        transform-origin: 50% 50%;
        -webkit-transform-origin: 50% 50%;
        -moz-transform-origin: 50% 50%;
        animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
        -webkit-animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
        -moz-animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
    }
    58.7302% {
        transform: rotateZ(-8.5298deg);
        -webkit-transform: rotateZ(-8.5298deg);
        -moz-transform: rotateZ(-8.5298deg);
        transform-origin: 50% 50%;
        -webkit-transform-origin: 50% 50%;
        -moz-transform-origin: 50% 50%;
        animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
        -webkit-animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
        -moz-animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
    }
    76.1905% {
        transform: rotateZ(-2.497deg);
        -webkit-transform: rotateZ(-2.497deg);
        -moz-transform: rotateZ(-2.497deg);
        transform-origin: 50% 50%;
        -webkit-transform-origin: 50% 50%;
        -moz-transform-origin: 50% 50%;
        animation-timing-function: linear;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
    }
    95.2381% {
        transform: rotateZ(-26.1633deg);
        -webkit-transform: rotateZ(-26.1633deg);
        -moz-transform: rotateZ(-26.1633deg);
        transform-origin: 23px 23.2109px 0px;
        -webkit-transform-origin: 23px 23.2109px 0px;
        -moz-transform-origin: 23px 23.2109px 0px;
        animation-timing-function: linear;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
    }
    100% {
        transform: rotateZ(-26.1633deg);
        -webkit-transform: rotateZ(-26.1633deg);
        -moz-transform: rotateZ(-26.1633deg);
        transform-origin: 23px 23.2109px 0px;
        -webkit-transform-origin: 23px 23.2109px 0px;
        -moz-transform-origin: 23px 23.2109px 0px;
        animation-timing-function: linear;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
    }
}
@-webkit-keyframes gwd-gen-5rc9gwdanimation_gwd-keyframes {
    0% {
        -webkit-transform: rotateZ(-16.9472deg);
        -webkit-transform-origin: 23px 23.211px;
        -webkit-animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
    }
    11.1111% {
        -webkit-transform: rotateZ(8.8499deg);
        -webkit-transform-origin: 23px 23.2109px 0px;
        -webkit-animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
    }
    25.3968% {
        -webkit-transform: rotateZ(0.7185deg);
        -webkit-transform-origin: 50% 50%;
        -webkit-animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
    }
    58.7302% {
        -webkit-transform: rotateZ(-8.5298deg);
        -webkit-transform-origin: 50% 50%;
        -webkit-animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
    }
    76.1905% {
        -webkit-transform: rotateZ(-2.497deg);
        -webkit-transform-origin: 50% 50%;
        -webkit-animation-timing-function: linear;
    }
    95.2381% {
        -webkit-transform: rotateZ(-26.1633deg);
        -webkit-transform-origin: 23px 23.2109px 0px;
        -webkit-animation-timing-function: linear;
    }
    100% {
        -webkit-transform: rotateZ(-26.1633deg);
        -webkit-transform-origin: 23px 23.2109px 0px;
        -webkit-animation-timing-function: linear;
    }
}
@-moz-keyframes gwd-gen-5rc9gwdanimation_gwd-keyframes {
    0% {
        -moz-transform: rotateZ(-16.9472deg);
        -moz-transform-origin: 23px 23.211px;
        -moz-animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
    }
    11.1111% {
        -moz-transform: rotateZ(8.8499deg);
        -moz-transform-origin: 23px 23.2109px 0px;
        -moz-animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
    }
    25.3968% {
        -moz-transform: rotateZ(0.7185deg);
        -moz-transform-origin: 50% 50%;
        -moz-animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
    }
    58.7302% {
        -moz-transform: rotateZ(-8.5298deg);
        -moz-transform-origin: 50% 50%;
        -moz-animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
    }
    76.1905% {
        -moz-transform: rotateZ(-2.497deg);
        -moz-transform-origin: 50% 50%;
        -moz-animation-timing-function: linear;
    }
    95.2381% {
        -moz-transform: rotateZ(-26.1633deg);
        -moz-transform-origin: 23px 23.2109px 0px;
        -moz-animation-timing-function: linear;
    }
    100% {
        -moz-transform: rotateZ(-26.1633deg);
        -moz-transform-origin: 23px 23.2109px 0px;
        -moz-animation-timing-function: linear;
    }
}
.htmlNoPages .gwd-gen-5rc9gwdanimation {
    animation: 6.3s linear 0s infinite normal forwards gwd-gen-5rc9gwdanimation_gwd-keyframes;
    -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-gen-5rc9gwdanimation_gwd-keyframes;
    -moz-animation: 6.3s linear 0s infinite normal forwards gwd-gen-5rc9gwdanimation_gwd-keyframes;
}
.gwd-img-1fsq {
    width: 46px;
    height: 46.43px;
    transform: rotateZ(-16.9472deg);
    -webkit-transform: rotateZ(-16.9472deg);
    -moz-transform: rotateZ(-16.9472deg);
}
.gwd-img-1b9n {
    pointer-events: auto;
    transform-origin: 23px 23.211px;
    -webkit-transform-origin: 23px 23.211px;
    -moz-transform-origin: 23px 23.211px;
    left: 42.9253px;
    top: 236.906px;
    position: absolute;
}
@keyframes gwd-gen-1wr1gwdanimation_gwd-keyframes {
    0% {
        transform: rotateZ(-16.9472deg);
        -webkit-transform: rotateZ(-16.9472deg);
        -moz-transform: rotateZ(-16.9472deg);
        transform-origin: 23px 23.211px;
        -webkit-transform-origin: 23px 23.211px;
        -moz-transform-origin: 23px 23.211px;
        animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
        -webkit-animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
        -moz-animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
    }
    11.1111% {
        transform: rotateZ(15.2241deg);
        -webkit-transform: rotateZ(15.2241deg);
        -moz-transform: rotateZ(15.2241deg);
        transform-origin: 23px 23.2109px 0px;
        -webkit-transform-origin: 23px 23.2109px 0px;
        -moz-transform-origin: 23px 23.2109px 0px;
        animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
        -webkit-animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
        -moz-animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
    }
    20.6349% {
        transform: rotateZ(0.7185deg);
        -webkit-transform: rotateZ(0.7185deg);
        -moz-transform: rotateZ(0.7185deg);
        transform-origin: 50% 50%;
        -webkit-transform-origin: 50% 50%;
        -moz-transform-origin: 50% 50%;
        animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
        -webkit-animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
        -moz-animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
    }
    53.9683% {
        transform: rotateZ(-8.5298deg);
        -webkit-transform: rotateZ(-8.5298deg);
        -moz-transform: rotateZ(-8.5298deg);
        transform-origin: 50% 50%;
        -webkit-transform-origin: 50% 50%;
        -moz-transform-origin: 50% 50%;
        animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
        -webkit-animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
        -moz-animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
    }
    71.4286% {
        transform: rotateZ(-2.497deg);
        -webkit-transform: rotateZ(-2.497deg);
        -moz-transform: rotateZ(-2.497deg);
        transform-origin: 50% 50%;
        -webkit-transform-origin: 50% 50%;
        -moz-transform-origin: 50% 50%;
        animation-timing-function: linear;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
    }
    92.0635% {
        transform: rotateZ(-26.1633deg);
        -webkit-transform: rotateZ(-26.1633deg);
        -moz-transform: rotateZ(-26.1633deg);
        transform-origin: 23px 23.2109px 0px;
        -webkit-transform-origin: 23px 23.2109px 0px;
        -moz-transform-origin: 23px 23.2109px 0px;
        animation-timing-function: linear;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
    }
    100% {
        transform: rotateZ(-26.1633deg);
        -webkit-transform: rotateZ(-26.1633deg);
        -moz-transform: rotateZ(-26.1633deg);
        transform-origin: 23px 23.2109px 0px;
        -webkit-transform-origin: 23px 23.2109px 0px;
        -moz-transform-origin: 23px 23.2109px 0px;
        animation-timing-function: linear;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
    }
}
@-webkit-keyframes gwd-gen-1wr1gwdanimation_gwd-keyframes {
    0% {
        -webkit-transform: rotateZ(-16.9472deg);
        -webkit-transform-origin: 23px 23.211px;
        -webkit-animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
    }
    11.1111% {
        -webkit-transform: rotateZ(15.2241deg);
        -webkit-transform-origin: 23px 23.2109px 0px;
        -webkit-animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
    }
    20.6349% {
        -webkit-transform: rotateZ(0.7185deg);
        -webkit-transform-origin: 50% 50%;
        -webkit-animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
    }
    53.9683% {
        -webkit-transform: rotateZ(-8.5298deg);
        -webkit-transform-origin: 50% 50%;
        -webkit-animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
    }
    71.4286% {
        -webkit-transform: rotateZ(-2.497deg);
        -webkit-transform-origin: 50% 50%;
        -webkit-animation-timing-function: linear;
    }
    92.0635% {
        -webkit-transform: rotateZ(-26.1633deg);
        -webkit-transform-origin: 23px 23.2109px 0px;
        -webkit-animation-timing-function: linear;
    }
    100% {
        -webkit-transform: rotateZ(-26.1633deg);
        -webkit-transform-origin: 23px 23.2109px 0px;
        -webkit-animation-timing-function: linear;
    }
}
@-moz-keyframes gwd-gen-1wr1gwdanimation_gwd-keyframes {
    0% {
        -moz-transform: rotateZ(-16.9472deg);
        -moz-transform-origin: 23px 23.211px;
        -moz-animation-timing-function: cubic-bezier(0, 0, 0.555, 0.872);
    }
    11.1111% {
        -moz-transform: rotateZ(15.2241deg);
        -moz-transform-origin: 23px 23.2109px 0px;
        -moz-animation-timing-function: cubic-bezier(0.855, 0.432, 1, 1);
    }
    20.6349% {
        -moz-transform: rotateZ(0.7185deg);
        -moz-transform-origin: 50% 50%;
        -moz-animation-timing-function: cubic-bezier(0.375, 0.772, 0.75, 0.75);
    }
    53.9683% {
        -moz-transform: rotateZ(-8.5298deg);
        -moz-transform-origin: 50% 50%;
        -moz-animation-timing-function: cubic-bezier(0.995, 0.472, 1, 1);
    }
    71.4286% {
        -moz-transform: rotateZ(-2.497deg);
        -moz-transform-origin: 50% 50%;
        -moz-animation-timing-function: linear;
    }
    92.0635% {
        -moz-transform: rotateZ(-26.1633deg);
        -moz-transform-origin: 23px 23.2109px 0px;
        -moz-animation-timing-function: linear;
    }
    100% {
        -moz-transform: rotateZ(-26.1633deg);
        -moz-transform-origin: 23px 23.2109px 0px;
        -moz-animation-timing-function: linear;
    }
}
.htmlNoPages .gwd-gen-1wr1gwdanimation {
    animation: 6.3s linear 0s infinite normal forwards gwd-gen-1wr1gwdanimation_gwd-keyframes;
    -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-gen-1wr1gwdanimation_gwd-keyframes;
    -moz-animation: 6.3s linear 0s infinite normal forwards gwd-gen-1wr1gwdanimation_gwd-keyframes;
}
.gwd-img-anwp {
    pointer-events: auto;
    transform-origin: 23px 23.211px;
    -webkit-transform-origin: 23px 23.211px;
    -moz-transform-origin: 23px 23.211px;
    left: 42.9253px;
    top: 236.906px;
    position: absolute;
}
.gwd-img-1dzz {
    width: 46px;
    height: 46.43px;
    transform: rotateZ(-16.9472deg);
    -webkit-transform: rotateZ(-16.9472deg);
    -moz-transform: rotateZ(-16.9472deg);
}
.gwd-script-hubr {
    flex-grow: 0;
    flex-shrink: 1;
}
.gwd-script-1xho {}
@media (min-width: 739.001px) and (max-width: 742px) and (min-height: 248px) and (max-height: 254px) {}
@media (min-width: 1192px) and (max-width: 1198px) and (min-height: 623px) and (max-height: 626.999px) {}
@media (min-width: 1193px) and (max-width: 1199px) and (min-height: 627px) and (max-height: 630px) {}
.htmlNoPages .gwd-motion-path-1ud8-anim-x {
    animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1ud8-keys-x;
    -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1ud8-keys-x;
    -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1ud8-keys-x;
    transform: translate3d(-260.17px, 0px, 0px);
    -webkit-transform: translate3d(-260.17px, 0px, 0px);
    -moz-transform: translate3d(-260.17px, 0px, 0px);
}
@keyframes gwd-motion-path-1ud8-keys-x {
    0% {
        z-index: 0;
        transform: translate3d(-260.17px, 0px, 0px);
        -webkit-transform: translate3d(-260.17px, 0px, 0px);
        -moz-transform: translate3d(-260.17px, 0px, 0px);
        animation-timing-function: cubic-bezier(0.2866, 0.3654, 0.6091, 0.7441);
        -webkit-animation-timing-function: cubic-bezier(0.2866, 0.3654, 0.6091, 0.7441);
        -moz-animation-timing-function: cubic-bezier(0.2866, 0.3654, 0.6091, 0.7441);
      }
    9.44% {
      z-index: 0;
      transform: translate3d(-60.75px, 0px, 0px);
      -webkit-transform: translate3d(-60.75px, 0px, 0px);
      -moz-transform: translate3d(-60.75px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.2908, 0.3684, 0.6083, 0.7353);
      -webkit-animation-timing-function: cubic-bezier(0.2908, 0.3684, 0.6083, 0.7353);
      -moz-animation-timing-function: cubic-bezier(0.2908, 0.3684, 0.6083, 0.7353);
    }
    11.11% {
      z-index: 0;
      transform: translate3d(-44px, 0px, 0px);
      -webkit-transform: translate3d(-44px, 0px, 0px);
      -moz-transform: translate3d(-44px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3697, 0.3054, 0.5954, 0.73);
      -webkit-animation-timing-function: cubic-bezier(0.3697, 0.3054, 0.5954, 0.73);
      -moz-animation-timing-function: cubic-bezier(0.3697, 0.3054, 0.5954, 0.73);
    }
    30.75% {
      z-index: 0;
      transform: translate3d(92.1px, 0px, 0px);
      -webkit-transform: translate3d(92.1px, 0px, 0px);
      -moz-transform: translate3d(92.1px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3867, 0.2624, 0.8296, 0.5388);
      -webkit-animation-timing-function: cubic-bezier(0.3867, 0.2624, 0.8296, 0.5388);
      -moz-animation-timing-function: cubic-bezier(0.3867, 0.2624, 0.8296, 0.5388);
    }
    34.92% {
      z-index: 0;
      transform: translate3d(125px, 0px, 0px);
      -webkit-transform: translate3d(125px, 0px, 0px);
      -moz-transform: translate3d(125px, 0px, 0px);
    }
    35.75% {
      z-index: 0;
      transform: translate3d(138.57px, 0px, 0px);
      -webkit-transform: translate3d(138.57px, 0px, 0px);
      -moz-transform: translate3d(138.57px, 0px, 0px);
    }
    36.59% {
      z-index: 2;
      transform: translate3d(155.8px, 0px, 0px);
      -webkit-transform: translate3d(155.8px, 0px, 0px);
      -moz-transform: translate3d(155.8px, 0px, 0px);
    }
    37.42% {
      z-index: 2;
      transform: translate3d(175.35px, 0px, 0px);
      -webkit-transform: translate3d(175.35px, 0px, 0px);
      -moz-transform: translate3d(175.35px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.2434, 0.415, 0.5846, 0.7555);
      -webkit-animation-timing-function: cubic-bezier(0.2434, 0.415, 0.5846, 0.7555);
      -moz-animation-timing-function: cubic-bezier(0.2434, 0.415, 0.5846, 0.7555);
    }
    49.92% {
      z-index: 2;
      transform: translate3d(359.17px, 0px, 0px);
      -webkit-transform: translate3d(359.17px, 0px, 0px);
      -moz-transform: translate3d(359.17px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.2885, 0.3797, 0.738, 0.6008);
      -webkit-animation-timing-function: cubic-bezier(0.2885, 0.3797, 0.738, 0.6008);
      -moz-animation-timing-function: cubic-bezier(0.2885, 0.3797, 0.738, 0.6008);
    }
    68.25% {
      z-index: 2;
      transform: translate3d(490px, 0px, 0px);
      -webkit-transform: translate3d(490px, 0px, 0px);
      -moz-transform: translate3d(490px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.4062, 0.2534, 0.6707, 0.6618);
      -webkit-animation-timing-function: cubic-bezier(0.4062, 0.2534, 0.6707, 0.6618);
      -moz-animation-timing-function: cubic-bezier(0.4062, 0.2534, 0.6707, 0.6618);
    }
    80.95% {
      z-index: 2;
      transform: translate3d(617.48px, 0px, 0px);
      -webkit-transform: translate3d(617.48px, 0px, 0px);
      -moz-transform: translate3d(617.48px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3718, 0.2443, 0.8993, 0.5249);
      -webkit-animation-timing-function: cubic-bezier(0.3718, 0.2443, 0.8993, 0.5249);
      -moz-animation-timing-function: cubic-bezier(0.3718, 0.2443, 0.8993, 0.5249);
    }
    84.13% {
      z-index: 2;
      transform: translate3d(676px, 0px, 0px);
      -webkit-transform: translate3d(676px, 0px, 0px);
      -moz-transform: translate3d(676px, 0px, 0px);
    }
    84.52% {
      z-index: 2;
      transform: translate3d(679.53px, 0px, 0px);
      -webkit-transform: translate3d(679.53px, 0px, 0px);
      -moz-transform: translate3d(679.53px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3796, 0.2752, 0.6747, 0.6648);
      -webkit-animation-timing-function: cubic-bezier(0.3796, 0.2752, 0.6747, 0.6648);
      -moz-animation-timing-function: cubic-bezier(0.3796, 0.2752, 0.6747, 0.6648);
    }
    100% {
      z-index: 2;
      transform: translate3d(885px, 0px, 0px);
      -webkit-transform: translate3d(885px, 0px, 0px);
      -moz-transform: translate3d(885px, 0px, 0px);
    }
}
@-webkit-keyframes gwd-motion-path-1ud8-keys-x {
  0% {
    z-index: 0;
    -webkit-transform: translate3d(-260.17px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2866, 0.3654, 0.6091, 0.7441);
  }

  9.44% {
    z-index: 0;
    -webkit-transform: translate3d(-60.75px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2908, 0.3684, 0.6083, 0.7353);
  }

  11.11% {
    z-index: 0;
    -webkit-transform: translate3d(-44px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3697, 0.3054, 0.5954, 0.73);
  }

  30.75% {
    z-index: 0;
    -webkit-transform: translate3d(92.1px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3867, 0.2624, 0.8296, 0.5388);
  }

  34.92% {
    z-index: 0;
    -webkit-transform: translate3d(125px, 0px, 0px);
  }

  35.75% {
    z-index: 0;
    -webkit-transform: translate3d(138.57px, 0px, 0px);
  }

  36.59% {
    z-index: 0;
    -webkit-transform: translate3d(155.8px, 0px, 0px);
  }

  37.42% {
    z-index: 2;
    -webkit-transform: translate3d(175.35px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2434, 0.415, 0.5846, 0.7555);
  }

  49.92% {
    z-index: 2;
    -webkit-transform: translate3d(359.17px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2885, 0.3797, 0.738, 0.6008);
  }

  68.25% {
    z-index: 2;
    -webkit-transform: translate3d(490px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.4062, 0.2534, 0.6707, 0.6618);
  }

  80.95% {
    z-index: 2;
    -webkit-transform: translate3d(617.48px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3718, 0.2443, 0.8993, 0.5249);
  }

  84.13% {
    z-index: 2;
    -webkit-transform: translate3d(676px, 0px, 0px);
  }

  84.52% {
    z-index: 2;
    -webkit-transform: translate3d(679.53px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3796, 0.2752, 0.6747, 0.6648);
  }

  100% {
    z-index: 2;
    -webkit-transform: translate3d(885px, 0px, 0px);
  }
}
@-moz-keyframes gwd-motion-path-1ud8-keys-x {
  0% {
    -moz-transform: translate3d(-260.17px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2866, 0.3654, 0.6091, 0.7441);
  }

  9.44% {
    -moz-transform: translate3d(-60.75px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2908, 0.3684, 0.6083, 0.7353);
  }

  11.11% {
    -moz-transform: translate3d(-44px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3697, 0.3054, 0.5954, 0.73);
  }

  30.75% {
    -moz-transform: translate3d(92.1px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3867, 0.2624, 0.8296, 0.5388);
  }

  34.92% {
    -moz-transform: translate3d(125px, 0px, 0px);
  }

  35.75% {
    -moz-transform: translate3d(138.57px, 0px, 0px);
  }

  36.59% {
    -moz-transform: translate3d(155.8px, 0px, 0px);
  }

  37.42% {
    -moz-transform: translate3d(175.35px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2434, 0.415, 0.5846, 0.7555);
  }

  49.92% {
    -moz-transform: translate3d(359.17px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2885, 0.3797, 0.738, 0.6008);
  }

  68.25% {
    -moz-transform: translate3d(490px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.4062, 0.2534, 0.6707, 0.6618);
  }

  80.95% {
    -moz-transform: translate3d(617.48px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3718, 0.2443, 0.8993, 0.5249);
  }

  84.13% {
    -moz-transform: translate3d(676px, 0px, 0px);
  }

  84.52% {
    -moz-transform: translate3d(679.53px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3796, 0.2752, 0.6747, 0.6648);
  }

  100% {
    -moz-transform: translate3d(885px, 0px, 0px);
  }
}

.htmlNoPages .gwd-motion-path-1ud8-anim-y {
  animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1ud8-keys-y;
  -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1ud8-keys-y;
  -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1ud8-keys-y;
  transform: translate3d(0px, -95.03px, 0px);
  -webkit-transform: translate3d(0px, -95.03px, 0px);
  -moz-transform: translate3d(0px, -95.03px, 0px);
}

@keyframes gwd-motion-path-1ud8-keys-y {
  0% {
    transform: translate3d(0px, -95.03px, 0px);
    -webkit-transform: translate3d(0px, -95.03px, 0px);
    -moz-transform: translate3d(0px, -95.03px, 0px);
    animation-timing-function: cubic-bezier(0.2546, 0.371, 0.5725, 0.8206);
    -webkit-animation-timing-function: cubic-bezier(0.2546, 0.371, 0.5725, 0.8206);
    -moz-animation-timing-function: cubic-bezier(0.2546, 0.371, 0.5725, 0.8206);
  }

  9.44% {
    transform: translate3d(0px, -241.85px, 0px);
    -webkit-transform: translate3d(0px, -241.85px, 0px);
    -moz-transform: translate3d(0px, -241.85px, 0px);
    animation-timing-function: cubic-bezier(0.2545, 0.395, 0.5671, 0.7914);
    -webkit-animation-timing-function: cubic-bezier(0.2545, 0.395, 0.5671, 0.7914);
    -moz-animation-timing-function: cubic-bezier(0.2545, 0.395, 0.5671, 0.7914);
  }

  11.11% {
    transform: translate3d(0px, -248px, 0px);
    -webkit-transform: translate3d(0px, -248px, 0px);
    -moz-transform: translate3d(0px, -248px, 0px);
    animation-timing-function: cubic-bezier(0.6494, -0.3927, 0.8386, 0.5095);
    -webkit-animation-timing-function: cubic-bezier(0.6494, -0.3927, 0.8386, 0.5095);
    -moz-animation-timing-function: cubic-bezier(0.6494, -0.3927, 0.8386, 0.5095);
  }

  27.18% {
    transform: translate3d(0px, -195.53px, 0px);
    -webkit-transform: translate3d(0px, -195.53px, 0px);
    -moz-transform: translate3d(0px, -195.53px, 0px);
    animation-timing-function: cubic-bezier(0.3905, 0.2537, 0.7733, 0.5856);
    -webkit-animation-timing-function: cubic-bezier(0.3905, 0.2537, 0.7733, 0.5856);
    -moz-animation-timing-function: cubic-bezier(0.3905, 0.2537, 0.7733, 0.5856);
  }

  34.92% {
    transform: translate3d(0px, -57px, 0px);
    -webkit-transform: translate3d(0px, -57px, 0px);
    -moz-transform: translate3d(0px, -57px, 0px);
    animation-timing-function: cubic-bezier(0.1929, 0.6522, 0.3517, 2.0484);
    -webkit-animation-timing-function: cubic-bezier(0.1929, 0.6522, 0.3517, 2.0484);
    -moz-animation-timing-function: cubic-bezier(0.1929, 0.6522, 0.3517, 2.0484);
  }

  39.92% {
    transform: translate3d(0px, -30.09px, 0px);
    -webkit-transform: translate3d(0px, -30.09px, 0px);
    -moz-transform: translate3d(0px, -30.09px, 0px);
    animation-timing-function: cubic-bezier(0.3392, 0.3264, 0.6356, 0.6958);
    -webkit-animation-timing-function: cubic-bezier(0.3392, 0.3264, 0.6356, 0.6958);
    -moz-animation-timing-function: cubic-bezier(0.3392, 0.3264, 0.6356, 0.6958);
  }

  49.09% {
    transform: translate3d(0px, -112.25px, 0px);
    -webkit-transform: translate3d(0px, -112.25px, 0px);
    -moz-transform: translate3d(0px, -112.25px, 0px);
    animation-timing-function: cubic-bezier(0.2807, 0.3901, 0.7058, 0.6257);
    -webkit-animation-timing-function: cubic-bezier(0.2807, 0.3901, 0.7058, 0.6257);
    -moz-animation-timing-function: cubic-bezier(0.2807, 0.3901, 0.7058, 0.6257);
  }

  68.25% {
    transform: translate3d(0px, -227px, 0px);
    -webkit-transform: translate3d(0px, -227px, 0px);
    -moz-transform: translate3d(0px, -227px, 0px);
    animation-timing-function: cubic-bezier(0.6348, -2.0646, 0.773, -0.752);
    -webkit-animation-timing-function: cubic-bezier(0.6348, -2.0646, 0.773, -0.752);
    -moz-animation-timing-function: cubic-bezier(0.6348, -2.0646, 0.773, -0.752);
  }

  79.76% {
    transform: translate3d(0px, -208.87px, 0px);
    -webkit-transform: translate3d(0px, -208.87px, 0px);
    -moz-transform: translate3d(0px, -208.87px, 0px);
    animation-timing-function: cubic-bezier(0.3978, 0.2492, 0.7777, 0.5797);
    -webkit-animation-timing-function: cubic-bezier(0.3978, 0.2492, 0.7777, 0.5797);
    -moz-animation-timing-function: cubic-bezier(0.3978, 0.2492, 0.7777, 0.5797);
  }

  83.73% {
    transform: translate3d(0px, -120.4px, 0px);
    -webkit-transform: translate3d(0px, -120.4px, 0px);
    -moz-transform: translate3d(0px, -120.4px, 0px);
  }

  84.13% {
    transform: translate3d(0px, -94px, 0px);
    -webkit-transform: translate3d(0px, -94px, 0px);
    -moz-transform: translate3d(0px, -94px, 0px);
    animation-timing-function: cubic-bezier(0.2063, 0.4587, 0.4088, 0.9999);
    -webkit-animation-timing-function: cubic-bezier(0.2063, 0.4587, 0.4088, 0.9999);
    -moz-animation-timing-function: cubic-bezier(0.2063, 0.4587, 0.4088, 0.9999);
  }

  99.21% {
    transform: translate3d(0px, -20.83px, 0px);
    -webkit-transform: translate3d(0px, -20.83px, 0px);
    -moz-transform: translate3d(0px, -20.83px, 0px);
  }

  99.6% {
    transform: translate3d(0px, -20.17px, 0px);
    -webkit-transform: translate3d(0px, -20.17px, 0px);
    -moz-transform: translate3d(0px, -20.17px, 0px);
  }

  100% {
    transform: translate3d(0px, -18px, 0px);
    -webkit-transform: translate3d(0px, -18px, 0px);
    -moz-transform: translate3d(0px, -18px, 0px);
  }
}

@-webkit-keyframes gwd-motion-path-1ud8-keys-y {
  0% {
    -webkit-transform: translate3d(0px, -95.03px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2546, 0.371, 0.5725, 0.8206);
  }

  9.44% {
    -webkit-transform: translate3d(0px, -241.85px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2545, 0.395, 0.5671, 0.7914);
  }

  11.11% {
    -webkit-transform: translate3d(0px, -248px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.6494, -0.3927, 0.8386, 0.5095);
  }

  27.18% {
    -webkit-transform: translate3d(0px, -195.53px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3905, 0.2537, 0.7733, 0.5856);
  }

  34.92% {
    -webkit-transform: translate3d(0px, -57px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.1929, 0.6522, 0.3517, 2.0484);
  }

  39.92% {
    -webkit-transform: translate3d(0px, -30.09px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3392, 0.3264, 0.6356, 0.6958);
  }

  49.09% {
    -webkit-transform: translate3d(0px, -112.25px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2807, 0.3901, 0.7058, 0.6257);
  }

  68.25% {
    -webkit-transform: translate3d(0px, -227px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.6348, -2.0646, 0.773, -0.752);
  }

  79.76% {
    -webkit-transform: translate3d(0px, -208.87px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3978, 0.2492, 0.7777, 0.5797);
  }

  83.73% {
    -webkit-transform: translate3d(0px, -120.4px, 0px);
  }

  84.13% {
    -webkit-transform: translate3d(0px, -94px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2063, 0.4587, 0.4088, 0.9999);
  }

  99.21% {
    -webkit-transform: translate3d(0px, -20.83px, 0px);
  }

  99.6% {
    -webkit-transform: translate3d(0px, -20.17px, 0px);
  }

  100% {
    -webkit-transform: translate3d(0px, -18px, 0px);
  }
}

@-moz-keyframes gwd-motion-path-1ud8-keys-y {
  0% {
    -moz-transform: translate3d(0px, -95.03px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2546, 0.371, 0.5725, 0.8206);
  }

  9.44% {
    -moz-transform: translate3d(0px, -241.85px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2545, 0.395, 0.5671, 0.7914);
  }

  11.11% {
    -moz-transform: translate3d(0px, -248px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.6494, -0.3927, 0.8386, 0.5095);
  }

  27.18% {
    -moz-transform: translate3d(0px, -195.53px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3905, 0.2537, 0.7733, 0.5856);
  }

  34.92% {
    -moz-transform: translate3d(0px, -57px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.1929, 0.6522, 0.3517, 2.0484);
  }

  39.92% {
    -moz-transform: translate3d(0px, -30.09px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3392, 0.3264, 0.6356, 0.6958);
  }

  49.09% {
    -moz-transform: translate3d(0px, -112.25px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2807, 0.3901, 0.7058, 0.6257);
  }

  68.25% {
    -moz-transform: translate3d(0px, -227px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.6348, -2.0646, 0.773, -0.752);
  }

  79.76% {
    -moz-transform: translate3d(0px, -208.87px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3978, 0.2492, 0.7777, 0.5797);
  }

  83.73% {
    -moz-transform: translate3d(0px, -120.4px, 0px);
  }

  84.13% {
    -moz-transform: translate3d(0px, -94px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2063, 0.4587, 0.4088, 0.9999);
  }

  99.21% {
    -moz-transform: translate3d(0px, -20.83px, 0px);
  }

  99.6% {
    -moz-transform: translate3d(0px, -20.17px, 0px);
  }

  100% {
    -moz-transform: translate3d(0px, -18px, 0px);
  }
}

.htmlNoPages .gwd-motion-path-1ud8-anim-theta {
  animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1ud8-keys-theta;
  -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1ud8-keys-theta;
  -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1ud8-keys-theta;
  transform: rotateZ(-40.53deg);
  -webkit-transform: rotateZ(-40.53deg);
  -moz-transform: rotateZ(-40.53deg);
}

@keyframes gwd-motion-path-1ud8-keys-theta {
  0% {
    transform: rotateZ(-40.53deg);
    -webkit-transform: rotateZ(-40.53deg);
    -moz-transform: rotateZ(-40.53deg);
    animation-timing-function: cubic-bezier(0.5941, 0.1114, 0.8072, 0.4569);
    -webkit-animation-timing-function: cubic-bezier(0.5941, 0.1114, 0.8072, 0.4569);
    -moz-animation-timing-function: cubic-bezier(0.5941, 0.1114, 0.8072, 0.4569);
  }

  11.11% {
    transform: rotateZ(-14.85deg);
    -webkit-transform: rotateZ(-14.85deg);
    -moz-transform: rotateZ(-14.85deg);
    animation-timing-function: cubic-bezier(0.4569, 0.1605, 0.5282, 1.0268);
    -webkit-animation-timing-function: cubic-bezier(0.4569, 0.1605, 0.5282, 1.0268);
    -moz-animation-timing-function: cubic-bezier(0.4569, 0.1605, 0.5282, 1.0268);
  }

  33.13% {
    transform: rotateZ(72.07deg);
    -webkit-transform: rotateZ(72.07deg);
    -moz-transform: rotateZ(72.07deg);
  }

  34.33% {
    transform: rotateZ(67.31deg);
    -webkit-transform: rotateZ(67.31deg);
    -moz-transform: rotateZ(67.31deg);
  }

  34.92% {
    transform: rotateZ(59.31deg);
    -webkit-transform: rotateZ(59.31deg);
    -moz-transform: rotateZ(59.31deg);
    animation-timing-function: cubic-bezier(0.3526, 0.4071, 0.3838, 0.8806);
    -webkit-animation-timing-function: cubic-bezier(0.3526, 0.4071, 0.3838, 0.8806);
    -moz-animation-timing-function: cubic-bezier(0.3526, 0.4071, 0.3838, 0.8806);
  }

  41.59% {
    transform: rotateZ(-30.05deg);
    -webkit-transform: rotateZ(-30.05deg);
    -moz-transform: rotateZ(-30.05deg);
    animation-timing-function: cubic-bezier(0, 2.0759, 0.8859, 3.1922);
    -webkit-animation-timing-function: cubic-bezier(0, 2.0759, 0.8859, 3.1922);
    -moz-animation-timing-function: cubic-bezier(0, 2.0759, 0.8859, 3.1922);
  }

  68.25% {
    transform: rotateZ(-34.99deg);
    -webkit-transform: rotateZ(-34.99deg);
    -moz-transform: rotateZ(-34.99deg);
    animation-timing-function: cubic-bezier(0.4987, 0.1609, 0.4894, 0.9643);
    -webkit-animation-timing-function: cubic-bezier(0.4987, 0.1609, 0.4894, 0.9643);
    -moz-animation-timing-function: cubic-bezier(0.4987, 0.1609, 0.4894, 0.9643);
  }

  83.33% {
    transform: rotateZ(60.26deg);
    -webkit-transform: rotateZ(60.26deg);
    -moz-transform: rotateZ(60.26deg);
  }

  83.73% {
    transform: rotateZ(59.09deg);
    -webkit-transform: rotateZ(59.09deg);
    -moz-transform: rotateZ(59.09deg);
  }

  84.13% {
    transform: rotateZ(53.43deg);
    -webkit-transform: rotateZ(53.43deg);
    -moz-transform: rotateZ(53.43deg);
    animation-timing-function: cubic-bezier(0.0536, 0.1493, 0.907, 1.7554);
    -webkit-animation-timing-function: cubic-bezier(0.0536, 0.1493, 0.907, 1.7554);
    -moz-animation-timing-function: cubic-bezier(0.0536, 0.1493, 0.907, 1.7554);
  }

  99.6% {
    transform: rotateZ(10.01deg);
    -webkit-transform: rotateZ(10.01deg);
    -moz-transform: rotateZ(10.01deg);
  }

  100% {
    transform: rotateZ(53.97deg);
    -webkit-transform: rotateZ(53.97deg);
    -moz-transform: rotateZ(53.97deg);
  }
}

@-webkit-keyframes gwd-motion-path-1ud8-keys-theta {
  0% {
    -webkit-transform: rotateZ(-40.53deg);
    -webkit-animation-timing-function: cubic-bezier(0.5941, 0.1114, 0.8072, 0.4569);
  }

  11.11% {
    -webkit-transform: rotateZ(-14.85deg);
    -webkit-animation-timing-function: cubic-bezier(0.4569, 0.1605, 0.5282, 1.0268);
  }

  33.13% {
    -webkit-transform: rotateZ(72.07deg);
  }

  34.33% {
    -webkit-transform: rotateZ(67.31deg);
  }

  34.92% {
    -webkit-transform: rotateZ(59.31deg);
    -webkit-animation-timing-function: cubic-bezier(0.3526, 0.4071, 0.3838, 0.8806);
  }

  41.59% {
    -webkit-transform: rotateZ(-30.05deg);
    -webkit-animation-timing-function: cubic-bezier(0, 2.0759, 0.8859, 3.1922);
  }

  68.25% {
    -webkit-transform: rotateZ(-34.99deg);
    -webkit-animation-timing-function: cubic-bezier(0.4987, 0.1609, 0.4894, 0.9643);
  }

  83.33% {
    -webkit-transform: rotateZ(60.26deg);
  }

  83.73% {
    -webkit-transform: rotateZ(59.09deg);
  }

  84.13% {
    -webkit-transform: rotateZ(53.43deg);
    -webkit-animation-timing-function: cubic-bezier(0.0536, 0.1493, 0.907, 1.7554);
  }

  99.6% {
    -webkit-transform: rotateZ(10.01deg);
  }

  100% {
    -webkit-transform: rotateZ(53.97deg);
  }
}

@-moz-keyframes gwd-motion-path-1ud8-keys-theta {
  0% {
    -moz-transform: rotateZ(-40.53deg);
    -moz-animation-timing-function: cubic-bezier(0.5941, 0.1114, 0.8072, 0.4569);
  }

  11.11% {
    -moz-transform: rotateZ(-14.85deg);
    -moz-animation-timing-function: cubic-bezier(0.4569, 0.1605, 0.5282, 1.0268);
  }

  33.13% {
    -moz-transform: rotateZ(72.07deg);
  }

  34.33% {
    -moz-transform: rotateZ(67.31deg);
  }

  34.92% {
    -moz-transform: rotateZ(59.31deg);
    -moz-animation-timing-function: cubic-bezier(0.3526, 0.4071, 0.3838, 0.8806);
  }

  41.59% {
    -moz-transform: rotateZ(-30.05deg);
    -moz-animation-timing-function: cubic-bezier(0, 2.0759, 0.8859, 3.1922);
  }

  68.25% {
    -moz-transform: rotateZ(-34.99deg);
    -moz-animation-timing-function: cubic-bezier(0.4987, 0.1609, 0.4894, 0.9643);
  }

  83.33% {
    -moz-transform: rotateZ(60.26deg);
  }

  83.73% {
    -moz-transform: rotateZ(59.09deg);
  }

  84.13% {
    -moz-transform: rotateZ(53.43deg);
    -moz-animation-timing-function: cubic-bezier(0.0536, 0.1493, 0.907, 1.7554);
  }

  99.6% {
    -moz-transform: rotateZ(10.01deg);
  }

  100% {
    -moz-transform: rotateZ(53.97deg);
  }
}

.htmlNoPages .gwd-motion-path-3ytk-anim-x {
  animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-3ytk-keys-x;
  -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-3ytk-keys-x;
  -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-3ytk-keys-x;
  transform: translate3d(-207px, 0px, 0px);
  -webkit-transform: translate3d(-207px, 0px, 0px);
  -moz-transform: translate3d(-207px, 0px, 0px);
}

@keyframes gwd-motion-path-3ytk-keys-x {
  0% {
    z-index: 0;
    transform: translate3d(-207px, 0px, 0px);
    -webkit-transform: translate3d(-207px, 0px, 0px);
    -moz-transform: translate3d(-207px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.2995, 0.3604, 0.641, 0.7004);
    -webkit-animation-timing-function: cubic-bezier(0.2995, 0.3604, 0.641, 0.7004);
    -moz-animation-timing-function: cubic-bezier(0.2995, 0.3604, 0.641, 0.7004);
  }

  7.78% {
    z-index: 0;
    transform: translate3d(-17.23px, 0px, 0px);
    -webkit-transform: translate3d(-17.23px, 0px, 0px);
    -moz-transform: translate3d(-17.23px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.2737, 0.3724, 0.5799, 0.785);
    -webkit-animation-timing-function: cubic-bezier(0.2737, 0.3724, 0.5799, 0.785);
    -moz-animation-timing-function: cubic-bezier(0.2737, 0.3724, 0.5799, 0.785);
  }

  11.11% {
    z-index: 0;
    transform: translate3d(29px, 0px, 0px);
    -webkit-transform: translate3d(29px, 0px, 0px);
    -moz-transform: translate3d(29px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.2889, 0.3927, 0.6236, 0.6932);
    -webkit-animation-timing-function: cubic-bezier(0.2889, 0.3927, 0.6236, 0.6932);
    -moz-animation-timing-function: cubic-bezier(0.2889, 0.3927, 0.6236, 0.6932);
  }

  27.78% {
    z-index: 0;
    transform: translate3d(111.41px, 0px, 0px);
    -webkit-transform: translate3d(111.41px, 0px, 0px);
    -moz-transform: translate3d(111.41px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.4751, 0.2111, 0.8465, 0.4759);
    -webkit-animation-timing-function: cubic-bezier(0.4751, 0.2111, 0.8465, 0.4759);
    -moz-animation-timing-function: cubic-bezier(0.4751, 0.2111, 0.8465, 0.4759);
  }

  34.33% {
    z-index: 0;
    transform: translate3d(176.07px, 0px, 0px);
    -webkit-transform: translate3d(176.07px, 0px, 0px);
    -moz-transform: translate3d(176.07px, 0px, 0px);
  }

  34.92% {
    z-index: 0;
    transform: translate3d(197px, 0px, 0px);
    -webkit-transform: translate3d(197px, 0px, 0px);
    -moz-transform: translate3d(197px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.2188, 0.4403, 0.559, 0.7819);
    -webkit-animation-timing-function: cubic-bezier(0.2188, 0.4403, 0.559, 0.7819);
    -moz-animation-timing-function: cubic-bezier(0.2188, 0.4403, 0.559, 0.7819);
  }

  53.25% {
    z-index: 2;
    transform: translate3d(447.98px, 0px, 0px);
    -webkit-transform: translate3d(447.98px, 0px, 0px);
    -moz-transform: translate3d(447.98px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.3415, 0.329, 0.7695, 0.5716);
    -webkit-animation-timing-function: cubic-bezier(0.3415, 0.329, 0.7695, 0.5716);
    -moz-animation-timing-function: cubic-bezier(0.3415, 0.329, 0.7695, 0.5716);
  }

  68.25% {
    z-index: 2;
    transform: translate3d(559px, 0px, 0px);
    -webkit-transform: translate3d(559px, 0px, 0px);
    -moz-transform: translate3d(559px, 0px, 0px);
  }

  72.22% {
    z-index: 2;
    transform: translate3d(591.34px, 0px, 0px);
    -webkit-transform: translate3d(591.34px, 0px, 0px);
    -moz-transform: translate3d(591.34px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.3641, 0.2911, 0.9638, 0.4513);
    -webkit-animation-timing-function: cubic-bezier(0.3641, 0.2911, 0.9638, 0.4513);
    -moz-animation-timing-function: cubic-bezier(0.3641, 0.2911, 0.9638, 0.4513);
  }

  84.13% {
    z-index: 2;
    transform: translate3d(727px, 0px, 0px);
    -webkit-transform: translate3d(727px, 0px, 0px);
    -moz-transform: translate3d(727px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.3525, 0.3102, 0.6667, 0.6681);
    -webkit-animation-timing-function: cubic-bezier(0.3525, 0.3102, 0.6667, 0.6681);
    -moz-animation-timing-function: cubic-bezier(0.3525, 0.3102, 0.6667, 0.6681);
  }

  100% {
    z-index: 2;
    transform: translate3d(962px, 0px, 0px);
    -webkit-transform: translate3d(962px, 0px, 0px);
    -moz-transform: translate3d(962px, 0px, 0px);
  }
}

@-webkit-keyframes gwd-motion-path-3ytk-keys-x {
  0% {
    -webkit-transform: translate3d(-207px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2995, 0.3604, 0.641, 0.7004);
  }

  7.78% {
    -webkit-transform: translate3d(-17.23px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2737, 0.3724, 0.5799, 0.785);
  }

  11.11% {
    -webkit-transform: translate3d(29px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2889, 0.3927, 0.6236, 0.6932);
  }

  27.78% {
    -webkit-transform: translate3d(111.41px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.4751, 0.2111, 0.8465, 0.4759);
  }

  34.33% {
    -webkit-transform: translate3d(176.07px, 0px, 0px);
  }

  34.92% {
    -webkit-transform: translate3d(197px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2188, 0.4403, 0.559, 0.7819);
  }

  53.25% {
    -webkit-transform: translate3d(447.98px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3415, 0.329, 0.7695, 0.5716);
  }

  68.25% {
    -webkit-transform: translate3d(559px, 0px, 0px);
  }

  72.22% {
    -webkit-transform: translate3d(591.34px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3641, 0.2911, 0.9638, 0.4513);
  }

  84.13% {
    -webkit-transform: translate3d(727px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3525, 0.3102, 0.6667, 0.6681);
  }

  100% {
    -webkit-transform: translate3d(962px, 0px, 0px);
  }
}

@-moz-keyframes gwd-motion-path-3ytk-keys-x {
  0% {
    -moz-transform: translate3d(-207px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2995, 0.3604, 0.641, 0.7004);
  }

  7.78% {
    -moz-transform: translate3d(-17.23px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2737, 0.3724, 0.5799, 0.785);
  }

  11.11% {
    -moz-transform: translate3d(29px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2889, 0.3927, 0.6236, 0.6932);
  }

  27.78% {
    -moz-transform: translate3d(111.41px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.4751, 0.2111, 0.8465, 0.4759);
  }

  34.33% {
    -moz-transform: translate3d(176.07px, 0px, 0px);
  }

  34.92% {
    -moz-transform: translate3d(197px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2188, 0.4403, 0.559, 0.7819);
  }

  53.25% {
    -moz-transform: translate3d(447.98px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3415, 0.329, 0.7695, 0.5716);
  }

  68.25% {
    -moz-transform: translate3d(559px, 0px, 0px);
  }

  72.22% {
    -moz-transform: translate3d(591.34px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3641, 0.2911, 0.9638, 0.4513);
  }

  84.13% {
    -moz-transform: translate3d(727px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3525, 0.3102, 0.6667, 0.6681);
  }

  100% {
    -moz-transform: translate3d(962px, 0px, 0px);
  }
}

.htmlNoPages .gwd-motion-path-3ytk-anim-y {
  animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-3ytk-keys-y;
  -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-3ytk-keys-y;
  -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-3ytk-keys-y;
  transform: translate3d(0px, -147px, 0px);
  -webkit-transform: translate3d(0px, -147px, 0px);
  -moz-transform: translate3d(0px, -147px, 0px);
}

@keyframes gwd-motion-path-3ytk-keys-y {
  0% {
    transform: translate3d(0px, -147px, 0px);
    -webkit-transform: translate3d(0px, -147px, 0px);
    -moz-transform: translate3d(0px, -147px, 0px);
    animation-timing-function: cubic-bezier(0.2324, 0.3419, 0.5397, 0.948);
    -webkit-animation-timing-function: cubic-bezier(0.2324, 0.3419, 0.5397, 0.948);
    -moz-animation-timing-function: cubic-bezier(0.2324, 0.3419, 0.5397, 0.948);
  }

  8.61% {
    transform: translate3d(0px, -262.13px, 0px);
    -webkit-transform: translate3d(0px, -262.13px, 0px);
    -moz-transform: translate3d(0px, -262.13px, 0px);
    animation-timing-function: cubic-bezier(0.389, -0.3224, 0.8129, 0.7818);
    -webkit-animation-timing-function: cubic-bezier(0.389, -0.3224, 0.8129, 0.7818);
    -moz-animation-timing-function: cubic-bezier(0.389, -0.3224, 0.8129, 0.7818);
  }

  11.11% {
    transform: translate3d(0px, -259px, 0px);
    -webkit-transform: translate3d(0px, -259px, 0px);
    -moz-transform: translate3d(0px, -259px, 0px);
    animation-timing-function: cubic-bezier(0.4456, 0.1197, 0.7758, 0.6277);
    -webkit-animation-timing-function: cubic-bezier(0.4456, 0.1197, 0.7758, 0.6277);
    -moz-animation-timing-function: cubic-bezier(0.4456, 0.1197, 0.7758, 0.6277);
  }

  27.78% {
    transform: translate3d(0px, -134.01px, 0px);
    -webkit-transform: translate3d(0px, -134.01px, 0px);
    -moz-transform: translate3d(0px, -134.01px, 0px);
    animation-timing-function: cubic-bezier(0.3721, 0.2985, 0.6815, 0.6506);
    -webkit-animation-timing-function: cubic-bezier(0.3721, 0.2985, 0.6815, 0.6506);
    -moz-animation-timing-function: cubic-bezier(0.3721, 0.2985, 0.6815, 0.6506);
  }

  33.73% {
    transform: translate3d(0px, -39.1px, 0px);
    -webkit-transform: translate3d(0px, -39.1px, 0px);
    -moz-transform: translate3d(0px, -39.1px, 0px);
  }

  34.33% {
    transform: translate3d(0px, -31.47px, 0px);
    -webkit-transform: translate3d(0px, -31.47px, 0px);
    -moz-transform: translate3d(0px, -31.47px, 0px);
  }

  34.92% {
    transform: translate3d(0px, -30px, 0px);
    -webkit-transform: translate3d(0px, -30px, 0px);
    -moz-transform: translate3d(0px, -30px, 0px);
    animation-timing-function: cubic-bezier(0.4113, 0.2034, 0.7052, 0.6608);
    -webkit-animation-timing-function: cubic-bezier(0.4113, 0.2034, 0.7052, 0.6608);
    -moz-animation-timing-function: cubic-bezier(0.4113, 0.2034, 0.7052, 0.6608);
  }

  39.92% {
    transform: translate3d(0px, -73.97px, 0px);
    -webkit-transform: translate3d(0px, -73.97px, 0px);
    -moz-transform: translate3d(0px, -73.97px, 0px);
    animation-timing-function: cubic-bezier(0.2668, 0.4087, 0.5668, 0.7605);
    -webkit-animation-timing-function: cubic-bezier(0.2668, 0.4087, 0.5668, 0.7605);
    -moz-animation-timing-function: cubic-bezier(0.2668, 0.4087, 0.5668, 0.7605);
  }

  59.92% {
    transform: translate3d(0px, -223.37px, 0px);
    -webkit-transform: translate3d(0px, -223.37px, 0px);
    -moz-transform: translate3d(0px, -223.37px, 0px);
    animation-timing-function: cubic-bezier(0.2854, 0.2856, 0.6263, 0.8756);
    -webkit-animation-timing-function: cubic-bezier(0.2854, 0.2856, 0.6263, 0.8756);
    -moz-animation-timing-function: cubic-bezier(0.2854, 0.2856, 0.6263, 0.8756);
  }

  68.25% {
    transform: translate3d(0px, -254px, 0px);
    -webkit-transform: translate3d(0px, -254px, 0px);
    -moz-transform: translate3d(0px, -254px, 0px);
    animation-timing-function: cubic-bezier(0.4845, -0.0064, 0.817, 0.6312);
    -webkit-animation-timing-function: cubic-bezier(0.4845, -0.0064, 0.817, 0.6312);
    -moz-animation-timing-function: cubic-bezier(0.4845, -0.0064, 0.817, 0.6312);
  }

  80.95% {
    transform: translate3d(0px, -152.43px, 0px);
    -webkit-transform: translate3d(0px, -152.43px, 0px);
    -moz-transform: translate3d(0px, -152.43px, 0px);
    animation-timing-function: cubic-bezier(0.3726, 0.2857, 0.735, 0.6088);
    -webkit-animation-timing-function: cubic-bezier(0.3726, 0.2857, 0.735, 0.6088);
    -moz-animation-timing-function: cubic-bezier(0.3726, 0.2857, 0.735, 0.6088);
  }

  83.73% {
    transform: translate3d(0px, -88.89px, 0px);
    -webkit-transform: translate3d(0px, -88.89px, 0px);
    -moz-transform: translate3d(0px, -88.89px, 0px);
  }

  84.13% {
    transform: translate3d(0px, -69px, 0px);
    -webkit-transform: translate3d(0px, -69px, 0px);
    -moz-transform: translate3d(0px, -69px, 0px);
    animation-timing-function: cubic-bezier(0.2267, 0.6464, 0.3608, 0.8282);
    -webkit-animation-timing-function: cubic-bezier(0.2267, 0.6464, 0.3608, 0.8282);
    -moz-animation-timing-function: cubic-bezier(0.2267, 0.6464, 0.3608, 0.8282);
  }

  97.62% {
    transform: translate3d(0px, -27.72px, 0px);
    -webkit-transform: translate3d(0px, -27.72px, 0px);
    -moz-transform: translate3d(0px, -27.72px, 0px);
  }

  100% {
    transform: translate3d(0px, -23px, 0px);
    -webkit-transform: translate3d(0px, -23px, 0px);
    -moz-transform: translate3d(0px, -23px, 0px);
  }
}

@-webkit-keyframes gwd-motion-path-3ytk-keys-y {
  0% {
    -webkit-transform: translate3d(0px, -147px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2324, 0.3419, 0.5397, 0.948);
  }

  8.61% {
    -webkit-transform: translate3d(0px, -262.13px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.389, -0.3224, 0.8129, 0.7818);
  }

  11.11% {
    -webkit-transform: translate3d(0px, -259px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.4456, 0.1197, 0.7758, 0.6277);
  }

  27.78% {
    -webkit-transform: translate3d(0px, -134.01px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3721, 0.2985, 0.6815, 0.6506);
  }

  33.73% {
    -webkit-transform: translate3d(0px, -39.1px, 0px);
  }

  34.33% {
    -webkit-transform: translate3d(0px, -31.47px, 0px);
  }

  34.92% {
    -webkit-transform: translate3d(0px, -30px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.4113, 0.2034, 0.7052, 0.6608);
  }

  39.92% {
    -webkit-transform: translate3d(0px, -73.97px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2668, 0.4087, 0.5668, 0.7605);
  }

  59.92% {
    -webkit-transform: translate3d(0px, -223.37px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2854, 0.2856, 0.6263, 0.8756);
  }

  68.25% {
    -webkit-transform: translate3d(0px, -254px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.4845, -0.0064, 0.817, 0.6312);
  }

  80.95% {
    -webkit-transform: translate3d(0px, -152.43px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3726, 0.2857, 0.735, 0.6088);
  }

  83.73% {
    -webkit-transform: translate3d(0px, -88.89px, 0px);
  }

  84.13% {
    -webkit-transform: translate3d(0px, -69px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2267, 0.6464, 0.3608, 0.8282);
  }

  97.62% {
    -webkit-transform: translate3d(0px, -27.72px, 0px);
  }

  100% {
    -webkit-transform: translate3d(0px, -23px, 0px);
  }
}

@-moz-keyframes gwd-motion-path-3ytk-keys-y {
  0% {
    -moz-transform: translate3d(0px, -147px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2324, 0.3419, 0.5397, 0.948);
  }

  8.61% {
    -moz-transform: translate3d(0px, -262.13px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.389, -0.3224, 0.8129, 0.7818);
  }

  11.11% {
    -moz-transform: translate3d(0px, -259px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.4456, 0.1197, 0.7758, 0.6277);
  }

  27.78% {
    -moz-transform: translate3d(0px, -134.01px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3721, 0.2985, 0.6815, 0.6506);
  }

  33.73% {
    -moz-transform: translate3d(0px, -39.1px, 0px);
  }

  34.33% {
    -moz-transform: translate3d(0px, -31.47px, 0px);
  }

  34.92% {
    -moz-transform: translate3d(0px, -30px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.4113, 0.2034, 0.7052, 0.6608);
  }

  39.92% {
    -moz-transform: translate3d(0px, -73.97px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2668, 0.4087, 0.5668, 0.7605);
  }

  59.92% {
    -moz-transform: translate3d(0px, -223.37px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2854, 0.2856, 0.6263, 0.8756);
  }

  68.25% {
    -moz-transform: translate3d(0px, -254px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.4845, -0.0064, 0.817, 0.6312);
  }

  80.95% {
    -moz-transform: translate3d(0px, -152.43px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3726, 0.2857, 0.735, 0.6088);
  }

  83.73% {
    -moz-transform: translate3d(0px, -88.89px, 0px);
  }

  84.13% {
    -moz-transform: translate3d(0px, -69px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2267, 0.6464, 0.3608, 0.8282);
  }

  97.62% {
    -moz-transform: translate3d(0px, -27.72px, 0px);
  }

  100% {
    -moz-transform: translate3d(0px, -23px, 0px);
  }
}

.htmlNoPages .gwd-motion-path-3ytk-anim-theta {
  animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-3ytk-keys-theta;
  -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-3ytk-keys-theta;
  -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-3ytk-keys-theta;
  transform: rotateZ(-33.15deg);
  -webkit-transform: rotateZ(-33.15deg);
  -moz-transform: rotateZ(-33.15deg);
}

@keyframes gwd-motion-path-3ytk-keys-theta {
  0% {
    transform: rotateZ(-33.15deg);
    -webkit-transform: rotateZ(-33.15deg);
    -moz-transform: rotateZ(-33.15deg);
  }

  0.28% {
    transform: rotateZ(-35.46deg);
    -webkit-transform: rotateZ(-35.46deg);
    -moz-transform: rotateZ(-35.46deg);
    animation-timing-function: cubic-bezier(0.4583, -0.21, 0.7815, 0.7425);
    -webkit-animation-timing-function: cubic-bezier(0.4583, -0.21, 0.7815, 0.7425);
    -moz-animation-timing-function: cubic-bezier(0.4583, -0.21, 0.7815, 0.7425);
  }

  11.11% {
    transform: rotateZ(15.85deg);
    -webkit-transform: rotateZ(15.85deg);
    -moz-transform: rotateZ(15.85deg);
    animation-timing-function: cubic-bezier(0.1104, 0.3179, 0.5612, 1.4858);
    -webkit-animation-timing-function: cubic-bezier(0.1104, 0.3179, 0.5612, 1.4858);
    -moz-animation-timing-function: cubic-bezier(0.1104, 0.3179, 0.5612, 1.4858);
  }

  31.35% {
    transform: rotateZ(65.25deg);
    -webkit-transform: rotateZ(65.25deg);
    -moz-transform: rotateZ(65.25deg);
    animation-timing-function: cubic-bezier(0.594, 0.1054, 0.7603, 0.4959);
    -webkit-animation-timing-function: cubic-bezier(0.594, 0.1054, 0.7603, 0.4959);
    -moz-animation-timing-function: cubic-bezier(0.594, 0.1054, 0.7603, 0.4959);
  }

  34.92% {
    transform: rotateZ(-7.57deg);
    -webkit-transform: rotateZ(-7.57deg);
    -moz-transform: rotateZ(-7.57deg);
    animation-timing-function: cubic-bezier(0.0821, 0.8052, 0.314, 1.5127);
    -webkit-animation-timing-function: cubic-bezier(0.0821, 0.8052, 0.314, 1.5127);
    -moz-animation-timing-function: cubic-bezier(0.0821, 0.8052, 0.314, 1.5127);
  }

  59.92% {
    transform: rotateZ(-35.94deg);
    -webkit-transform: rotateZ(-35.94deg);
    -moz-transform: rotateZ(-35.94deg);
    animation-timing-function: cubic-bezier(0.5699, 0.1285, 0.8544, 0.4229);
    -webkit-animation-timing-function: cubic-bezier(0.5699, 0.1285, 0.8544, 0.4229);
    -moz-animation-timing-function: cubic-bezier(0.5699, 0.1285, 0.8544, 0.4229);
  }

  68.25% {
    transform: rotateZ(0.71deg);
    -webkit-transform: rotateZ(0.71deg);
    -moz-transform: rotateZ(0.71deg);
    animation-timing-function: cubic-bezier(0.186, 0.2935, 0.5785, 1.852);
    -webkit-animation-timing-function: cubic-bezier(0.186, 0.2935, 0.5785, 1.852);
    -moz-animation-timing-function: cubic-bezier(0.186, 0.2935, 0.5785, 1.852);
  }

  83.33% {
    transform: rotateZ(49.74deg);
    -webkit-transform: rotateZ(49.74deg);
    -moz-transform: rotateZ(49.74deg);
  }

  83.73% {
    transform: rotateZ(45.25deg);
    -webkit-transform: rotateZ(45.25deg);
    -moz-transform: rotateZ(45.25deg);
  }

  84.13% {
    transform: rotateZ(35.91deg);
    -webkit-transform: rotateZ(35.91deg);
    -moz-transform: rotateZ(35.91deg);
    animation-timing-function: cubic-bezier(0.1294, 0.4802, 0.4771, 1.8561);
    -webkit-animation-timing-function: cubic-bezier(0.1294, 0.4802, 0.4771, 1.8561);
    -moz-animation-timing-function: cubic-bezier(0.1294, 0.4802, 0.4771, 1.8561);
  }

  100% {
    transform: rotateZ(10.24deg);
    -webkit-transform: rotateZ(10.24deg);
    -moz-transform: rotateZ(10.24deg);
  }
}

@-webkit-keyframes gwd-motion-path-3ytk-keys-theta {
  0% {
    -webkit-transform: rotateZ(-33.15deg);
  }

  0.28% {
    -webkit-transform: rotateZ(-35.46deg);
    -webkit-animation-timing-function: cubic-bezier(0.4583, -0.21, 0.7815, 0.7425);
  }

  11.11% {
    -webkit-transform: rotateZ(15.85deg);
    -webkit-animation-timing-function: cubic-bezier(0.1104, 0.3179, 0.5612, 1.4858);
  }

  31.35% {
    -webkit-transform: rotateZ(65.25deg);
    -webkit-animation-timing-function: cubic-bezier(0.594, 0.1054, 0.7603, 0.4959);
  }

  34.92% {
    -webkit-transform: rotateZ(-7.57deg);
    -webkit-animation-timing-function: cubic-bezier(0.0821, 0.8052, 0.314, 1.5127);
  }

  59.92% {
    -webkit-transform: rotateZ(-35.94deg);
    -webkit-animation-timing-function: cubic-bezier(0.5699, 0.1285, 0.8544, 0.4229);
  }

  68.25% {
    -webkit-transform: rotateZ(0.71deg);
    -webkit-animation-timing-function: cubic-bezier(0.186, 0.2935, 0.5785, 1.852);
  }

  83.33% {
    -webkit-transform: rotateZ(49.74deg);
  }

  83.73% {
    -webkit-transform: rotateZ(45.25deg);
  }

  84.13% {
    -webkit-transform: rotateZ(35.91deg);
    -webkit-animation-timing-function: cubic-bezier(0.1294, 0.4802, 0.4771, 1.8561);
  }

  100% {
    -webkit-transform: rotateZ(10.24deg);
  }
}

@-moz-keyframes gwd-motion-path-3ytk-keys-theta {
  0% {
    -moz-transform: rotateZ(-33.15deg);
  }

  0.28% {
    -moz-transform: rotateZ(-35.46deg);
    -moz-animation-timing-function: cubic-bezier(0.4583, -0.21, 0.7815, 0.7425);
  }

  11.11% {
    -moz-transform: rotateZ(15.85deg);
    -moz-animation-timing-function: cubic-bezier(0.1104, 0.3179, 0.5612, 1.4858);
  }

  31.35% {
    -moz-transform: rotateZ(65.25deg);
    -moz-animation-timing-function: cubic-bezier(0.594, 0.1054, 0.7603, 0.4959);
  }

  34.92% {
    -moz-transform: rotateZ(-7.57deg);
    -moz-animation-timing-function: cubic-bezier(0.0821, 0.8052, 0.314, 1.5127);
  }

  59.92% {
    -moz-transform: rotateZ(-35.94deg);
    -moz-animation-timing-function: cubic-bezier(0.5699, 0.1285, 0.8544, 0.4229);
  }

  68.25% {
    -moz-transform: rotateZ(0.71deg);
    -moz-animation-timing-function: cubic-bezier(0.186, 0.2935, 0.5785, 1.852);
  }

  83.33% {
    -moz-transform: rotateZ(49.74deg);
  }

  83.73% {
    -moz-transform: rotateZ(45.25deg);
  }

  84.13% {
    -moz-transform: rotateZ(35.91deg);
    -moz-animation-timing-function: cubic-bezier(0.1294, 0.4802, 0.4771, 1.8561);
  }

  100% {
    -moz-transform: rotateZ(10.24deg);
  }
}

.htmlNoPages .gwd-motion-path-1bqy-anim-x {
  animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1bqy-keys-x;
  -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1bqy-keys-x;
  -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1bqy-keys-x;
  transform: translate3d(-154.6px, 0px, 0px);
  -webkit-transform: translate3d(-154.6px, 0px, 0px);
  -moz-transform: translate3d(-154.6px, 0px, 0px);
}

@keyframes gwd-motion-path-1bqy-keys-x {
  0% {
    z-index: 0;
    transform: translate3d(-154.6px, 0px, 0px);
    -webkit-transform: translate3d(-154.6px, 0px, 0px);
    -moz-transform: translate3d(-154.6px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.3326, 0.3311, 0.6334, 0.7069);
    -webkit-animation-timing-function: cubic-bezier(0.3326, 0.3311, 0.6334, 0.7069);
    -moz-animation-timing-function: cubic-bezier(0.3326, 0.3311, 0.6334, 0.7069);
  }

  7.78% {
    z-index: 0;
    transform: translate3d(37.84px, 0px, 0px);
    -webkit-transform: translate3d(37.84px, 0px, 0px);
    -moz-transform: translate3d(37.84px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.2421, 0.399, 0.5408, 0.8364);
    -webkit-animation-timing-function: cubic-bezier(0.2421, 0.399, 0.5408, 0.8364);
    -moz-animation-timing-function: cubic-bezier(0.2421, 0.399, 0.5408, 0.8364);
  }

  11.11% {
    z-index: 0;
    transform: translate3d(75px, 0px, 0px);
    -webkit-transform: translate3d(75px, 0px, 0px);
    -moz-transform: translate3d(75px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.3551, 0.2932, 0.874, 0.5187);
    -webkit-animation-timing-function: cubic-bezier(0.3551, 0.2932, 0.874, 0.5187);
    -moz-animation-timing-function: cubic-bezier(0.3551, 0.2932, 0.874, 0.5187);
  }

  28.73% {
    z-index: 0;
    transform: translate3d(165.66px, 0px, 0px);
    -webkit-transform: translate3d(165.66px, 0px, 0px);
    -moz-transform: translate3d(165.66px, 0px, 0px);
  }

  29.21% {
    z-index: 0;
    transform: translate3d(175.27px, 0px, 0px);
    -webkit-transform: translate3d(175.27px, 0px, 0px);
    -moz-transform: translate3d(175.27px, 0px, 0px);
  }

  29.68% {
    z-index: 0;
    transform: translate3d(188.17px, 0px, 0px);
    -webkit-transform: translate3d(188.17px, 0px, 0px);
    -moz-transform: translate3d(188.17px, 0px, 0px);
  }

  30.16% {
    z-index: 2;
    transform: translate3d(206px, 0px, 0px);
    -webkit-transform: translate3d(206px, 0px, 0px);
    -moz-transform: translate3d(206px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.219, 0.44, 0.5594, 0.7816);
    -webkit-animation-timing-function: cubic-bezier(0.219, 0.44, 0.5594, 0.7816);
    -moz-animation-timing-function: cubic-bezier(0.219, 0.44, 0.5594, 0.7816);
  }

  48.49% {
    z-index: 2;
    transform: translate3d(456.88px, 0px, 0px);
    -webkit-transform: translate3d(456.88px, 0px, 0px);
    -moz-transform: translate3d(456.88px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.3415, 0.329, 0.7692, 0.5717);
    -webkit-animation-timing-function: cubic-bezier(0.3415, 0.329, 0.7692, 0.5717);
    -moz-animation-timing-function: cubic-bezier(0.3415, 0.329, 0.7692, 0.5717);
  }

  63.49% {
    z-index: 2;
    transform: translate3d(568px, 0px, 0px);
    -webkit-transform: translate3d(568px, 0px, 0px);
    -moz-transform: translate3d(568px, 0px, 0px);
  }

  67.86% {
    z-index: 2;
    transform: translate3d(600.34px, 0px, 0px);
    -webkit-transform: translate3d(600.34px, 0px, 0px);
    -moz-transform: translate3d(600.34px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.3641, 0.2911, 0.9638, 0.4513);
    -webkit-animation-timing-function: cubic-bezier(0.3641, 0.2911, 0.9638, 0.4513);
    -moz-animation-timing-function: cubic-bezier(0.3641, 0.2911, 0.9638, 0.4513);
  }

  80.95% {
    z-index: 2;
    transform: translate3d(736px, 0px, 0px);
    -webkit-transform: translate3d(736px, 0px, 0px);
    -moz-transform: translate3d(736px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.3524, 0.3102, 0.6667, 0.6681);
    -webkit-animation-timing-function: cubic-bezier(0.3524, 0.3102, 0.6667, 0.6681);
    -moz-animation-timing-function: cubic-bezier(0.3524, 0.3102, 0.6667, 0.6681);
  }

  100% {
    z-index: 2;
    transform: translate3d(971px, 0px, 0px);
    -webkit-transform: translate3d(971px, 0px, 0px);
    -moz-transform: translate3d(971px, 0px, 0px);
  }
}

@-webkit-keyframes gwd-motion-path-1bqy-keys-x {
  0% {
    -webkit-transform: translate3d(-154.6px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3326, 0.3311, 0.6334, 0.7069);
  }

  7.78% {
    -webkit-transform: translate3d(37.84px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2421, 0.399, 0.5408, 0.8364);
  }

  11.11% {
    -webkit-transform: translate3d(75px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3551, 0.2932, 0.874, 0.5187);
  }

  28.73% {
    -webkit-transform: translate3d(165.66px, 0px, 0px);
  }

  29.21% {
    -webkit-transform: translate3d(175.27px, 0px, 0px);
  }

  29.68% {
    -webkit-transform: translate3d(188.17px, 0px, 0px);
  }

  30.16% {
    -webkit-transform: translate3d(206px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.219, 0.44, 0.5594, 0.7816);
  }

  48.49% {
    -webkit-transform: translate3d(456.88px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3415, 0.329, 0.7692, 0.5717);
  }

  63.49% {
    -webkit-transform: translate3d(568px, 0px, 0px);
  }

  67.86% {
    -webkit-transform: translate3d(600.34px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3641, 0.2911, 0.9638, 0.4513);
  }

  80.95% {
    -webkit-transform: translate3d(736px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3524, 0.3102, 0.6667, 0.6681);
  }

  100% {
    -webkit-transform: translate3d(971px, 0px, 0px);
  }
}

@-moz-keyframes gwd-motion-path-1bqy-keys-x {
  0% {
    -moz-transform: translate3d(-154.6px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3326, 0.3311, 0.6334, 0.7069);
  }

  7.78% {
    -moz-transform: translate3d(37.84px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2421, 0.399, 0.5408, 0.8364);
  }

  11.11% {
    -moz-transform: translate3d(75px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3551, 0.2932, 0.874, 0.5187);
  }

  28.73% {
    -moz-transform: translate3d(165.66px, 0px, 0px);
  }

  29.21% {
    -moz-transform: translate3d(175.27px, 0px, 0px);
  }

  29.68% {
    -moz-transform: translate3d(188.17px, 0px, 0px);
  }

  30.16% {
    -moz-transform: translate3d(206px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.219, 0.44, 0.5594, 0.7816);
  }

  48.49% {
    -moz-transform: translate3d(456.88px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3415, 0.329, 0.7692, 0.5717);
  }

  63.49% {
    -moz-transform: translate3d(568px, 0px, 0px);
  }

  67.86% {
    -moz-transform: translate3d(600.34px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3641, 0.2911, 0.9638, 0.4513);
  }

  80.95% {
    -moz-transform: translate3d(736px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3524, 0.3102, 0.6667, 0.6681);
  }

  100% {
    -moz-transform: translate3d(971px, 0px, 0px);
  }
}

.htmlNoPages .gwd-motion-path-1bqy-anim-y {
  animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1bqy-keys-y;
  -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1bqy-keys-y;
  -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1bqy-keys-y;
  transform: translate3d(0px, -168.91px, 0px);
  -webkit-transform: translate3d(0px, -168.91px, 0px);
  -moz-transform: translate3d(0px, -168.91px, 0px);
}

@keyframes gwd-motion-path-1bqy-keys-y {
  0% {
    transform: translate3d(0px, -168.91px, 0px);
    -webkit-transform: translate3d(0px, -168.91px, 0px);
    -moz-transform: translate3d(0px, -168.91px, 0px);
    animation-timing-function: cubic-bezier(0.1336, 0.3954, 0.4926, 1.6298);
    -webkit-animation-timing-function: cubic-bezier(0.1336, 0.3954, 0.4926, 1.6298);
    -moz-animation-timing-function: cubic-bezier(0.1336, 0.3954, 0.4926, 1.6298);
  }

  9.17% {
    transform: translate3d(0px, -242.19px, 0px);
    -webkit-transform: translate3d(0px, -242.19px, 0px);
    -moz-transform: translate3d(0px, -242.19px, 0px);
    animation-timing-function: cubic-bezier(0.3202, 0.3431, 0.6192, 0.7212);
    -webkit-animation-timing-function: cubic-bezier(0.3202, 0.3431, 0.6192, 0.7212);
    -moz-animation-timing-function: cubic-bezier(0.3202, 0.3431, 0.6192, 0.7212);
  }

  11.11% {
    transform: translate3d(0px, -227px, 0px);
    -webkit-transform: translate3d(0px, -227px, 0px);
    -moz-transform: translate3d(0px, -227px, 0px);
    animation-timing-function: cubic-bezier(0.4302, 0.2224, 0.7649, 0.5826);
    -webkit-animation-timing-function: cubic-bezier(0.4302, 0.2224, 0.7649, 0.5826);
    -moz-animation-timing-function: cubic-bezier(0.4302, 0.2224, 0.7649, 0.5826);
  }

  28.73% {
    transform: translate3d(0px, -36.58px, 0px);
    -webkit-transform: translate3d(0px, -36.58px, 0px);
    -moz-transform: translate3d(0px, -36.58px, 0px);
  }

  29.21% {
    transform: translate3d(0px, -28.68px, 0px);
    -webkit-transform: translate3d(0px, -28.68px, 0px);
    -moz-transform: translate3d(0px, -28.68px, 0px);
  }

  29.68% {
    transform: translate3d(0px, -22.89px, 0px);
    -webkit-transform: translate3d(0px, -22.89px, 0px);
    -moz-transform: translate3d(0px, -22.89px, 0px);
  }

  30.16% {
    transform: translate3d(0px, -22px, 0px);
    -webkit-transform: translate3d(0px, -22px, 0px);
    -moz-transform: translate3d(0px, -22px, 0px);
    animation-timing-function: cubic-bezier(0.4096, 0.2093, 0.7031, 0.6601);
    -webkit-animation-timing-function: cubic-bezier(0.4096, 0.2093, 0.7031, 0.6601);
    -moz-animation-timing-function: cubic-bezier(0.4096, 0.2093, 0.7031, 0.6601);
  }

  35.16% {
    transform: translate3d(0px, -66.37px, 0px);
    -webkit-transform: translate3d(0px, -66.37px, 0px);
    -moz-transform: translate3d(0px, -66.37px, 0px);
    animation-timing-function: cubic-bezier(0.2664, 0.409, 0.5667, 0.7608);
    -webkit-animation-timing-function: cubic-bezier(0.2664, 0.409, 0.5667, 0.7608);
    -moz-animation-timing-function: cubic-bezier(0.2664, 0.409, 0.5667, 0.7608);
  }

  55.16% {
    transform: translate3d(0px, -215.51px, 0px);
    -webkit-transform: translate3d(0px, -215.51px, 0px);
    -moz-transform: translate3d(0px, -215.51px, 0px);
    animation-timing-function: cubic-bezier(0.2851, 0.2856, 0.6262, 0.8761);
    -webkit-animation-timing-function: cubic-bezier(0.2851, 0.2856, 0.6262, 0.8761);
    -moz-animation-timing-function: cubic-bezier(0.2851, 0.2856, 0.6262, 0.8761);
  }

  63.49% {
    transform: translate3d(0px, -246px, 0px);
    -webkit-transform: translate3d(0px, -246px, 0px);
    -moz-transform: translate3d(0px, -246px, 0px);
    animation-timing-function: cubic-bezier(0.4845, -0.0064, 0.817, 0.6312);
    -webkit-animation-timing-function: cubic-bezier(0.4845, -0.0064, 0.817, 0.6312);
    -moz-animation-timing-function: cubic-bezier(0.4845, -0.0064, 0.817, 0.6312);
  }

  77.46% {
    transform: translate3d(0px, -144.43px, 0px);
    -webkit-transform: translate3d(0px, -144.43px, 0px);
    -moz-transform: translate3d(0px, -144.43px, 0px);
    animation-timing-function: cubic-bezier(0.3726, 0.2857, 0.735, 0.6088);
    -webkit-animation-timing-function: cubic-bezier(0.3726, 0.2857, 0.735, 0.6088);
    -moz-animation-timing-function: cubic-bezier(0.3726, 0.2857, 0.735, 0.6088);
  }

  80.52% {
    transform: translate3d(0px, -80.89px, 0px);
    -webkit-transform: translate3d(0px, -80.89px, 0px);
    -moz-transform: translate3d(0px, -80.89px, 0px);
  }

  80.95% {
    transform: translate3d(0px, -61px, 0px);
    -webkit-transform: translate3d(0px, -61px, 0px);
    -moz-transform: translate3d(0px, -61px, 0px);
    animation-timing-function: cubic-bezier(0.2267, 0.6464, 0.3608, 0.8282);
    -webkit-animation-timing-function: cubic-bezier(0.2267, 0.6464, 0.3608, 0.8282);
    -moz-animation-timing-function: cubic-bezier(0.2267, 0.6464, 0.3608, 0.8282);
  }

  97.14% {
    transform: translate3d(0px, -19.72px, 0px);
    -webkit-transform: translate3d(0px, -19.72px, 0px);
    -moz-transform: translate3d(0px, -19.72px, 0px);
  }

  100% {
    transform: translate3d(0px, -15px, 0px);
    -webkit-transform: translate3d(0px, -15px, 0px);
    -moz-transform: translate3d(0px, -15px, 0px);
  }
}

@-webkit-keyframes gwd-motion-path-1bqy-keys-y {
  0% {
    -webkit-transform: translate3d(0px, -168.91px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.1336, 0.3954, 0.4926, 1.6298);
  }

  9.17% {
    -webkit-transform: translate3d(0px, -242.19px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3202, 0.3431, 0.6192, 0.7212);
  }

  11.11% {
    -webkit-transform: translate3d(0px, -227px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.4302, 0.2224, 0.7649, 0.5826);
  }

  28.73% {
    -webkit-transform: translate3d(0px, -36.58px, 0px);
  }

  29.21% {
    -webkit-transform: translate3d(0px, -28.68px, 0px);
  }

  29.68% {
    -webkit-transform: translate3d(0px, -22.89px, 0px);
  }

  30.16% {
    -webkit-transform: translate3d(0px, -22px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.4096, 0.2093, 0.7031, 0.6601);
  }

  35.16% {
    -webkit-transform: translate3d(0px, -66.37px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2664, 0.409, 0.5667, 0.7608);
  }

  55.16% {
    -webkit-transform: translate3d(0px, -215.51px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2851, 0.2856, 0.6262, 0.8761);
  }

  63.49% {
    -webkit-transform: translate3d(0px, -246px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.4845, -0.0064, 0.817, 0.6312);
  }

  77.46% {
    -webkit-transform: translate3d(0px, -144.43px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3726, 0.2857, 0.735, 0.6088);
  }

  80.52% {
    -webkit-transform: translate3d(0px, -80.89px, 0px);
  }

  80.95% {
    -webkit-transform: translate3d(0px, -61px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2267, 0.6464, 0.3608, 0.8282);
  }

  97.14% {
    -webkit-transform: translate3d(0px, -19.72px, 0px);
  }

  100% {
    -webkit-transform: translate3d(0px, -15px, 0px);
  }
}

@-moz-keyframes gwd-motion-path-1bqy-keys-y {
  0% {
    -moz-transform: translate3d(0px, -168.91px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.1336, 0.3954, 0.4926, 1.6298);
  }

  9.17% {
    -moz-transform: translate3d(0px, -242.19px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3202, 0.3431, 0.6192, 0.7212);
  }

  11.11% {
    -moz-transform: translate3d(0px, -227px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.4302, 0.2224, 0.7649, 0.5826);
  }

  28.73% {
    -moz-transform: translate3d(0px, -36.58px, 0px);
  }

  29.21% {
    -moz-transform: translate3d(0px, -28.68px, 0px);
  }

  29.68% {
    -moz-transform: translate3d(0px, -22.89px, 0px);
  }

  30.16% {
    -moz-transform: translate3d(0px, -22px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.4096, 0.2093, 0.7031, 0.6601);
  }

  35.16% {
    -moz-transform: translate3d(0px, -66.37px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2664, 0.409, 0.5667, 0.7608);
  }

  55.16% {
    -moz-transform: translate3d(0px, -215.51px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2851, 0.2856, 0.6262, 0.8761);
  }

  63.49% {
    -moz-transform: translate3d(0px, -246px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.4845, -0.0064, 0.817, 0.6312);
  }

  77.46% {
    -moz-transform: translate3d(0px, -144.43px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3726, 0.2857, 0.735, 0.6088);
  }

  80.52% {
    -moz-transform: translate3d(0px, -80.89px, 0px);
  }

  80.95% {
    -moz-transform: translate3d(0px, -61px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2267, 0.6464, 0.3608, 0.8282);
  }

  97.14% {
    -moz-transform: translate3d(0px, -19.72px, 0px);
  }

  100% {
    -moz-transform: translate3d(0px, -15px, 0px);
  }
}

.htmlNoPages .gwd-motion-path-1bqy-anim-theta {
  animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1bqy-keys-theta;
  -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1bqy-keys-theta;
  -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1bqy-keys-theta;
  transform: rotateZ(-45.8deg);
  -webkit-transform: rotateZ(-45.8deg);
  -moz-transform: rotateZ(-45.8deg);
}

@keyframes gwd-motion-path-1bqy-keys-theta {
  0% {
    transform: rotateZ(-45.8deg);
    -webkit-transform: rotateZ(-45.8deg);
    -moz-transform: rotateZ(-45.8deg);
    animation-timing-function: cubic-bezier(0.4697, 0.2558, 0.7291, 0.5478);
    -webkit-animation-timing-function: cubic-bezier(0.4697, 0.2558, 0.7291, 0.5478);
    -moz-animation-timing-function: cubic-bezier(0.4697, 0.2558, 0.7291, 0.5478);
  }

  9.72% {
    transform: rotateZ(41.63deg);
    -webkit-transform: rotateZ(41.63deg);
    -moz-transform: rotateZ(41.63deg);
    animation-timing-function: cubic-bezier(0.2896, 0.3705, 0.607, 0.7354);
    -webkit-animation-timing-function: cubic-bezier(0.2896, 0.3705, 0.607, 0.7354);
    -moz-animation-timing-function: cubic-bezier(0.2896, 0.3705, 0.607, 0.7354);
  }

  11.11% {
    transform: rotateZ(54.85deg);
    -webkit-transform: rotateZ(54.85deg);
    -moz-transform: rotateZ(54.85deg);
    animation-timing-function: cubic-bezier(0.2979, -6.3863, 0.9171, -12.2836);
    -webkit-animation-timing-function: cubic-bezier(0.2979, -6.3863, 0.9171, -12.2836);
    -moz-animation-timing-function: cubic-bezier(0.2979, -6.3863, 0.9171, -12.2836);
  }

  28.25% {
    transform: rotateZ(52.75deg);
    -webkit-transform: rotateZ(52.75deg);
    -moz-transform: rotateZ(52.75deg);
    animation-timing-function: cubic-bezier(0.4782, 0.1758, 0.7388, 0.591);
    -webkit-animation-timing-function: cubic-bezier(0.4782, 0.1758, 0.7388, 0.591);
    -moz-animation-timing-function: cubic-bezier(0.4782, 0.1758, 0.7388, 0.591);
  }

  30.16% {
    transform: rotateZ(-8.02deg);
    -webkit-transform: rotateZ(-8.02deg);
    -moz-transform: rotateZ(-8.02deg);
    animation-timing-function: cubic-bezier(0.0816, 0.8097, 0.3163, 1.523);
    -webkit-animation-timing-function: cubic-bezier(0.0816, 0.8097, 0.3163, 1.523);
    -moz-animation-timing-function: cubic-bezier(0.0816, 0.8097, 0.3163, 1.523);
  }

  55.16% {
    transform: rotateZ(-35.81deg);
    -webkit-transform: rotateZ(-35.81deg);
    -moz-transform: rotateZ(-35.81deg);
    animation-timing-function: cubic-bezier(0.5692, 0.1289, 0.8542, 0.4237);
    -webkit-animation-timing-function: cubic-bezier(0.5692, 0.1289, 0.8542, 0.4237);
    -moz-animation-timing-function: cubic-bezier(0.5692, 0.1289, 0.8542, 0.4237);
  }

  63.49% {
    transform: rotateZ(0.71deg);
    -webkit-transform: rotateZ(0.71deg);
    -moz-transform: rotateZ(0.71deg);
    animation-timing-function: cubic-bezier(0.186, 0.2935, 0.5784, 1.852);
    -webkit-animation-timing-function: cubic-bezier(0.186, 0.2935, 0.5784, 1.852);
    -moz-animation-timing-function: cubic-bezier(0.186, 0.2935, 0.5784, 1.852);
  }

  80.08% {
    transform: rotateZ(49.74deg);
    -webkit-transform: rotateZ(49.74deg);
    -moz-transform: rotateZ(49.74deg);
  }

  80.52% {
    transform: rotateZ(45.25deg);
    -webkit-transform: rotateZ(45.25deg);
    -moz-transform: rotateZ(45.25deg);
  }

  80.95% {
    transform: rotateZ(35.91deg);
    -webkit-transform: rotateZ(35.91deg);
    -moz-transform: rotateZ(35.91deg);
    animation-timing-function: cubic-bezier(0.1294, 0.4802, 0.4771, 1.8561);
    -webkit-animation-timing-function: cubic-bezier(0.1294, 0.4802, 0.4771, 1.8561);
    -moz-animation-timing-function: cubic-bezier(0.1294, 0.4802, 0.4771, 1.8561);
  }

  100% {
    transform: rotateZ(10.24deg);
    -webkit-transform: rotateZ(10.24deg);
    -moz-transform: rotateZ(10.24deg);
  }
}

@-webkit-keyframes gwd-motion-path-1bqy-keys-theta {
  0% {
    -webkit-transform: rotateZ(-45.8deg);
    -webkit-animation-timing-function: cubic-bezier(0.4697, 0.2558, 0.7291, 0.5478);
  }

  9.72% {
    -webkit-transform: rotateZ(41.63deg);
    -webkit-animation-timing-function: cubic-bezier(0.2896, 0.3705, 0.607, 0.7354);
  }

  11.11% {
    -webkit-transform: rotateZ(54.85deg);
    -webkit-animation-timing-function: cubic-bezier(0.2979, -6.3863, 0.9171, -12.2836);
  }

  28.25% {
    -webkit-transform: rotateZ(52.75deg);
    -webkit-animation-timing-function: cubic-bezier(0.4782, 0.1758, 0.7388, 0.591);
  }

  30.16% {
    -webkit-transform: rotateZ(-8.02deg);
    -webkit-animation-timing-function: cubic-bezier(0.0816, 0.8097, 0.3163, 1.523);
  }

  55.16% {
    -webkit-transform: rotateZ(-35.81deg);
    -webkit-animation-timing-function: cubic-bezier(0.5692, 0.1289, 0.8542, 0.4237);
  }

  63.49% {
    -webkit-transform: rotateZ(0.71deg);
    -webkit-animation-timing-function: cubic-bezier(0.186, 0.2935, 0.5784, 1.852);
  }

  80.08% {
    -webkit-transform: rotateZ(49.74deg);
  }

  80.52% {
    -webkit-transform: rotateZ(45.25deg);
  }

  80.95% {
    -webkit-transform: rotateZ(35.91deg);
    -webkit-animation-timing-function: cubic-bezier(0.1294, 0.4802, 0.4771, 1.8561);
  }

  100% {
    -webkit-transform: rotateZ(10.24deg);
  }
}

@-moz-keyframes gwd-motion-path-1bqy-keys-theta {
  0% {
    -moz-transform: rotateZ(-45.8deg);
    -moz-animation-timing-function: cubic-bezier(0.4697, 0.2558, 0.7291, 0.5478);
  }

  9.72% {
    -moz-transform: rotateZ(41.63deg);
    -moz-animation-timing-function: cubic-bezier(0.2896, 0.3705, 0.607, 0.7354);
  }

  11.11% {
    -moz-transform: rotateZ(54.85deg);
    -moz-animation-timing-function: cubic-bezier(0.2979, -6.3863, 0.9171, -12.2836);
  }

  28.25% {
    -moz-transform: rotateZ(52.75deg);
    -moz-animation-timing-function: cubic-bezier(0.4782, 0.1758, 0.7388, 0.591);
  }

  30.16% {
    -moz-transform: rotateZ(-8.02deg);
    -moz-animation-timing-function: cubic-bezier(0.0816, 0.8097, 0.3163, 1.523);
  }

  55.16% {
    -moz-transform: rotateZ(-35.81deg);
    -moz-animation-timing-function: cubic-bezier(0.5692, 0.1289, 0.8542, 0.4237);
  }

  63.49% {
    -moz-transform: rotateZ(0.71deg);
    -moz-animation-timing-function: cubic-bezier(0.186, 0.2935, 0.5784, 1.852);
  }

  80.08% {
    -moz-transform: rotateZ(49.74deg);
  }

  80.52% {
    -moz-transform: rotateZ(45.25deg);
  }

  80.95% {
    -moz-transform: rotateZ(35.91deg);
    -moz-animation-timing-function: cubic-bezier(0.1294, 0.4802, 0.4771, 1.8561);
  }

  100% {
    -moz-transform: rotateZ(10.24deg);
  }
}

.htmlNoPages .gwd-motion-path-1f0h-anim-x {
  animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1f0h-keys-x;
  -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1f0h-keys-x;
  -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1f0h-keys-x;
  transform: translate3d(-115.12px, 0px, 0px);
  -webkit-transform: translate3d(-115.12px, 0px, 0px);
  -moz-transform: translate3d(-115.12px, 0px, 0px);
}

@keyframes gwd-motion-path-1f0h-keys-x {
  0% {
    z-index: 0;
    transform: translate3d(-115.12px, 0px, 0px);
    -webkit-transform: translate3d(-115.12px, 0px, 0px);
    -moz-transform: translate3d(-115.12px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.3189, 0.3472, 0.6623, 0.6716);
    -webkit-animation-timing-function: cubic-bezier(0.3189, 0.3472, 0.6623, 0.6716);
    -moz-animation-timing-function: cubic-bezier(0.3189, 0.3472, 0.6623, 0.6716);
  }

  2.5% {
    z-index: 0;
    transform: translate3d(-43.37px, 0px, 0px);
    -webkit-transform: translate3d(-43.37px, 0px, 0px);
    -moz-transform: translate3d(-43.37px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.2571, 0.4077, 0.4572, 0.9312);
    -webkit-animation-timing-function: cubic-bezier(0.2571, 0.4077, 0.4572, 0.9312);
    -moz-animation-timing-function: cubic-bezier(0.2571, 0.4077, 0.4572, 0.9312);
  }

  11.11% {
    z-index: 0;
    transform: translate3d(96.97px, 0px, 0px);
    -webkit-transform: translate3d(96.97px, 0px, 0px);
    -moz-transform: translate3d(96.97px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.4459, 0.2149, 0.8804, 0.4873);
    -webkit-animation-timing-function: cubic-bezier(0.4459, 0.2149, 0.8804, 0.4873);
    -moz-animation-timing-function: cubic-bezier(0.4459, 0.2149, 0.8804, 0.4873);
  }

  24.33% {
    z-index: 0;
    transform: translate3d(172.17px, 0px, 0px);
    -webkit-transform: translate3d(172.17px, 0px, 0px);
    -moz-transform: translate3d(172.17px, 0px, 0px);
  }

  24.68% {
    z-index: 0;
    transform: translate3d(180.65px, 0px, 0px);
    -webkit-transform: translate3d(180.65px, 0px, 0px);
    -moz-transform: translate3d(180.65px, 0px, 0px);
  }

  25.04% {
    z-index: 0;
    transform: translate3d(191.48px, 0px, 0px);
    -webkit-transform: translate3d(191.48px, 0px, 0px);
    -moz-transform: translate3d(191.48px, 0px, 0px);
  }

  25.4% {
    z-index: 0;
    transform: translate3d(206px, 0px, 0px);
    -webkit-transform: translate3d(206px, 0px, 0px);
    -moz-transform: translate3d(206px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.2338, 0.4246, 0.5734, 0.7681);
    -webkit-animation-timing-function: cubic-bezier(0.2338, 0.4246, 0.5734, 0.7681);
    -moz-animation-timing-function: cubic-bezier(0.2338, 0.4246, 0.5734, 0.7681);
  }

  40.4% {
    z-index: 2;
    transform: translate3d(431.65px, 0px, 0px);
    -webkit-transform: translate3d(431.65px, 0px, 0px);
    -moz-transform: translate3d(431.65px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.3043, 0.3638, 0.7672, 0.5762);
    -webkit-animation-timing-function: cubic-bezier(0.3043, 0.3638, 0.7672, 0.5762);
    -moz-animation-timing-function: cubic-bezier(0.3043, 0.3638, 0.7672, 0.5762);
  }

  58.73% {
    z-index: 2;
    transform: translate3d(568px, 0px, 0px);
    -webkit-transform: translate3d(568px, 0px, 0px);
    -moz-transform: translate3d(568px, 0px, 0px);
  }

  63.1% {
    z-index: 2;
    transform: translate3d(600.34px, 0px, 0px);
    -webkit-transform: translate3d(600.34px, 0px, 0px);
    -moz-transform: translate3d(600.34px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.3641, 0.2911, 0.9638, 0.4513);
    -webkit-animation-timing-function: cubic-bezier(0.3641, 0.2911, 0.9638, 0.4513);
    -moz-animation-timing-function: cubic-bezier(0.3641, 0.2911, 0.9638, 0.4513);
  }

  76.19% {
    z-index: 2;
    transform: translate3d(736px, 0px, 0px);
    -webkit-transform: translate3d(736px, 0px, 0px);
    -moz-transform: translate3d(736px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.3524, 0.3102, 0.6667, 0.6681);
    -webkit-animation-timing-function: cubic-bezier(0.3524, 0.3102, 0.6667, 0.6681);
    -moz-animation-timing-function: cubic-bezier(0.3524, 0.3102, 0.6667, 0.6681);
  }

  95.24% {
    z-index: 2;
    transform: translate3d(971px, 0px, 0px);
    -webkit-transform: translate3d(971px, 0px, 0px);
    -moz-transform: translate3d(971px, 0px, 0px);
  }

  100% {
    z-index: 2;
    transform: translate3d(971px, 0px, 0px);
    -webkit-transform: translate3d(971px, 0px, 0px);
    -moz-transform: translate3d(971px, 0px, 0px);
  }
}

@-webkit-keyframes gwd-motion-path-1f0h-keys-x {
  0% {
    -webkit-transform: translate3d(-115.12px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3189, 0.3472, 0.6623, 0.6716);
  }

  2.5% {
    -webkit-transform: translate3d(-43.37px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2571, 0.4077, 0.4572, 0.9312);
  }

  11.11% {
    -webkit-transform: translate3d(96.97px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.4459, 0.2149, 0.8804, 0.4873);
  }

  24.33% {
    -webkit-transform: translate3d(172.17px, 0px, 0px);
  }

  24.68% {
    -webkit-transform: translate3d(180.65px, 0px, 0px);
  }

  25.04% {
    -webkit-transform: translate3d(191.48px, 0px, 0px);
  }

  25.4% {
    -webkit-transform: translate3d(206px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2338, 0.4246, 0.5734, 0.7681);
  }

  40.4% {
    -webkit-transform: translate3d(431.65px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3043, 0.3638, 0.7672, 0.5762);
  }

  58.73% {
    -webkit-transform: translate3d(568px, 0px, 0px);
  }

  63.1% {
    -webkit-transform: translate3d(600.34px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3641, 0.2911, 0.9638, 0.4513);
  }

  76.19% {
    -webkit-transform: translate3d(736px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3524, 0.3102, 0.6667, 0.6681);
  }

  95.24% {
    -webkit-transform: translate3d(971px, 0px, 0px);
  }

  100% {
    -webkit-transform: translate3d(971px, 0px, 0px);
  }
}

@-moz-keyframes gwd-motion-path-1f0h-keys-x {
  0% {
    -moz-transform: translate3d(-115.12px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3189, 0.3472, 0.6623, 0.6716);
  }

  2.5% {
    -moz-transform: translate3d(-43.37px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2571, 0.4077, 0.4572, 0.9312);
  }

  11.11% {
    -moz-transform: translate3d(96.97px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.4459, 0.2149, 0.8804, 0.4873);
  }

  24.33% {
    -moz-transform: translate3d(172.17px, 0px, 0px);
  }

  24.68% {
    -moz-transform: translate3d(180.65px, 0px, 0px);
  }

  25.04% {
    -moz-transform: translate3d(191.48px, 0px, 0px);
  }

  25.4% {
    -moz-transform: translate3d(206px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2338, 0.4246, 0.5734, 0.7681);
  }

  40.4% {
    -moz-transform: translate3d(431.65px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3043, 0.3638, 0.7672, 0.5762);
  }

  58.73% {
    -moz-transform: translate3d(568px, 0px, 0px);
  }

  63.1% {
    -moz-transform: translate3d(600.34px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3641, 0.2911, 0.9638, 0.4513);
  }

  76.19% {
    -moz-transform: translate3d(736px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3524, 0.3102, 0.6667, 0.6681);
  }

  95.24% {
    -moz-transform: translate3d(971px, 0px, 0px);
  }

  100% {
    -moz-transform: translate3d(971px, 0px, 0px);
  }
}

.htmlNoPages .gwd-motion-path-1f0h-anim-y {
  animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1f0h-keys-y;
  -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1f0h-keys-y;
  -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1f0h-keys-y;
  transform: translate3d(0px, -192.59px, 0px);
  -webkit-transform: translate3d(0px, -192.59px, 0px);
  -moz-transform: translate3d(0px, -192.59px, 0px);
}

@keyframes gwd-motion-path-1f0h-keys-y {
  0% {
    transform: translate3d(0px, -192.59px, 0px);
    -webkit-transform: translate3d(0px, -192.59px, 0px);
    -moz-transform: translate3d(0px, -192.59px, 0px);
    animation-timing-function: cubic-bezier(0.1687, 0.392, 0.5749, 1.9941);
    -webkit-animation-timing-function: cubic-bezier(0.1687, 0.392, 0.5749, 1.9941);
    -moz-animation-timing-function: cubic-bezier(0.1687, 0.392, 0.5749, 1.9941);
  }

  6.39% {
    transform: translate3d(0px, -231.53px, 0px);
    -webkit-transform: translate3d(0px, -231.53px, 0px);
    -moz-transform: translate3d(0px, -231.53px, 0px);
    animation-timing-function: cubic-bezier(0.3257, 0.3307, 0.5838, 0.7734);
    -webkit-animation-timing-function: cubic-bezier(0.3257, 0.3307, 0.5838, 0.7734);
    -moz-animation-timing-function: cubic-bezier(0.3257, 0.3307, 0.5838, 0.7734);
  }

  11.11% {
    transform: translate3d(0px, -173.03px, 0px);
    -webkit-transform: translate3d(0px, -173.03px, 0px);
    -moz-transform: translate3d(0px, -173.03px, 0px);
    animation-timing-function: cubic-bezier(0.415, 0.246, 0.7502, 0.59);
    -webkit-animation-timing-function: cubic-bezier(0.415, 0.246, 0.7502, 0.59);
    -moz-animation-timing-function: cubic-bezier(0.415, 0.246, 0.7502, 0.59);
  }

  23.97% {
    transform: translate3d(0px, -26.07px, 0px);
    -webkit-transform: translate3d(0px, -26.07px, 0px);
    -moz-transform: translate3d(0px, -26.07px, 0px);
    animation-timing-function: cubic-bezier(0.2046, 0.2254, 0.5802, 1.116);
    -webkit-animation-timing-function: cubic-bezier(0.2046, 0.2254, 0.5802, 1.116);
    -moz-animation-timing-function: cubic-bezier(0.2046, 0.2254, 0.5802, 1.116);
  }

  25.4% {
    transform: translate3d(0px, -10px, 0px);
    -webkit-transform: translate3d(0px, -10px, 0px);
    -moz-transform: translate3d(0px, -10px, 0px);
    animation-timing-function: cubic-bezier(0.4126, 0.1991, 0.7066, 0.6614);
    -webkit-animation-timing-function: cubic-bezier(0.4126, 0.1991, 0.7066, 0.6614);
    -moz-animation-timing-function: cubic-bezier(0.4126, 0.1991, 0.7066, 0.6614);
  }

  30.4% {
    transform: translate3d(0px, -53.68px, 0px);
    -webkit-transform: translate3d(0px, -53.68px, 0px);
    -moz-transform: translate3d(0px, -53.68px, 0px);
    animation-timing-function: cubic-bezier(0.2671, 0.4085, 0.5669, 0.7603);
    -webkit-animation-timing-function: cubic-bezier(0.2671, 0.4085, 0.5669, 0.7603);
    -moz-animation-timing-function: cubic-bezier(0.2671, 0.4085, 0.5669, 0.7603);
  }

  50.4% {
    transform: translate3d(0px, -203.28px, 0px);
    -webkit-transform: translate3d(0px, -203.28px, 0px);
    -moz-transform: translate3d(0px, -203.28px, 0px);
    animation-timing-function: cubic-bezier(0.2856, 0.2855, 0.6264, 0.8753);
    -webkit-animation-timing-function: cubic-bezier(0.2856, 0.2855, 0.6264, 0.8753);
    -moz-animation-timing-function: cubic-bezier(0.2856, 0.2855, 0.6264, 0.8753);
  }

  58.73% {
    transform: translate3d(0px, -234px, 0px);
    -webkit-transform: translate3d(0px, -234px, 0px);
    -moz-transform: translate3d(0px, -234px, 0px);
    animation-timing-function: cubic-bezier(0.4845, -0.0064, 0.817, 0.6312);
    -webkit-animation-timing-function: cubic-bezier(0.4845, -0.0064, 0.817, 0.6312);
    -moz-animation-timing-function: cubic-bezier(0.4845, -0.0064, 0.817, 0.6312);
  }

  72.7% {
    transform: translate3d(0px, -132.43px, 0px);
    -webkit-transform: translate3d(0px, -132.43px, 0px);
    -moz-transform: translate3d(0px, -132.43px, 0px);
    animation-timing-function: cubic-bezier(0.3726, 0.2857, 0.735, 0.6088);
    -webkit-animation-timing-function: cubic-bezier(0.3726, 0.2857, 0.735, 0.6088);
    -moz-animation-timing-function: cubic-bezier(0.3726, 0.2857, 0.735, 0.6088);
  }

  75.75% {
    transform: translate3d(0px, -68.89px, 0px);
    -webkit-transform: translate3d(0px, -68.89px, 0px);
    -moz-transform: translate3d(0px, -68.89px, 0px);
  }

  76.19% {
    transform: translate3d(0px, -49px, 0px);
    -webkit-transform: translate3d(0px, -49px, 0px);
    -moz-transform: translate3d(0px, -49px, 0px);
    animation-timing-function: cubic-bezier(0.2267, 0.6464, 0.3608, 0.8282);
    -webkit-animation-timing-function: cubic-bezier(0.2267, 0.6464, 0.3608, 0.8282);
    -moz-animation-timing-function: cubic-bezier(0.2267, 0.6464, 0.3608, 0.8282);
  }

  92.38% {
    transform: translate3d(0px, -7.72px, 0px);
    -webkit-transform: translate3d(0px, -7.72px, 0px);
    -moz-transform: translate3d(0px, -7.72px, 0px);
  }

  95.24% {
    transform: translate3d(0px, -3px, 0px);
    -webkit-transform: translate3d(0px, -3px, 0px);
    -moz-transform: translate3d(0px, -3px, 0px);
  }

  100% {
    transform: translate3d(0px, -3px, 0px);
    -webkit-transform: translate3d(0px, -3px, 0px);
    -moz-transform: translate3d(0px, -3px, 0px);
  }
}

@-webkit-keyframes gwd-motion-path-1f0h-keys-y {
  0% {
    -webkit-transform: translate3d(0px, -192.59px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.1687, 0.392, 0.5749, 1.9941);
  }

  6.39% {
    -webkit-transform: translate3d(0px, -231.53px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3257, 0.3307, 0.5838, 0.7734);
  }

  11.11% {
    -webkit-transform: translate3d(0px, -173.03px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.415, 0.246, 0.7502, 0.59);
  }

  23.97% {
    -webkit-transform: translate3d(0px, -26.07px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2046, 0.2254, 0.5802, 1.116);
  }

  25.4% {
    -webkit-transform: translate3d(0px, -10px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.4126, 0.1991, 0.7066, 0.6614);
  }

  30.4% {
    -webkit-transform: translate3d(0px, -53.68px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2671, 0.4085, 0.5669, 0.7603);
  }

  50.4% {
    -webkit-transform: translate3d(0px, -203.28px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2856, 0.2855, 0.6264, 0.8753);
  }

  58.73% {
    -webkit-transform: translate3d(0px, -234px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.4845, -0.0064, 0.817, 0.6312);
  }

  72.7% {
    -webkit-transform: translate3d(0px, -132.43px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3726, 0.2857, 0.735, 0.6088);
  }

  75.75% {
    -webkit-transform: translate3d(0px, -68.89px, 0px);
  }

  76.19% {
    -webkit-transform: translate3d(0px, -49px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2267, 0.6464, 0.3608, 0.8282);
  }

  92.38% {
    -webkit-transform: translate3d(0px, -7.72px, 0px);
  }

  95.24% {
    -webkit-transform: translate3d(0px, -3px, 0px);
  }

  100% {
    -webkit-transform: translate3d(0px, -3px, 0px);
  }
}

@-moz-keyframes gwd-motion-path-1f0h-keys-y {
  0% {
    -moz-transform: translate3d(0px, -192.59px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.1687, 0.392, 0.5749, 1.9941);
  }

  6.39% {
    -moz-transform: translate3d(0px, -231.53px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3257, 0.3307, 0.5838, 0.7734);
  }

  11.11% {
    -moz-transform: translate3d(0px, -173.03px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.415, 0.246, 0.7502, 0.59);
  }

  23.97% {
    -moz-transform: translate3d(0px, -26.07px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2046, 0.2254, 0.5802, 1.116);
  }

  25.4% {
    -moz-transform: translate3d(0px, -10px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.4126, 0.1991, 0.7066, 0.6614);
  }

  30.4% {
    -moz-transform: translate3d(0px, -53.68px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2671, 0.4085, 0.5669, 0.7603);
  }

  50.4% {
    -moz-transform: translate3d(0px, -203.28px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2856, 0.2855, 0.6264, 0.8753);
  }

  58.73% {
    -moz-transform: translate3d(0px, -234px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.4845, -0.0064, 0.817, 0.6312);
  }

  72.7% {
    -moz-transform: translate3d(0px, -132.43px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3726, 0.2857, 0.735, 0.6088);
  }

  75.75% {
    -moz-transform: translate3d(0px, -68.89px, 0px);
  }

  76.19% {
    -moz-transform: translate3d(0px, -49px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2267, 0.6464, 0.3608, 0.8282);
  }

  92.38% {
    -moz-transform: translate3d(0px, -7.72px, 0px);
  }

  95.24% {
    -moz-transform: translate3d(0px, -3px, 0px);
  }

  100% {
    -moz-transform: translate3d(0px, -3px, 0px);
  }
}

.htmlNoPages .gwd-motion-path-1f0h-anim-theta {
  animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1f0h-keys-theta;
  -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1f0h-keys-theta;
  -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1f0h-keys-theta;
  transform: rotateZ(-27.79deg);
  -webkit-transform: rotateZ(-27.79deg);
  -moz-transform: rotateZ(-27.79deg);
}

@keyframes gwd-motion-path-1f0h-keys-theta {
  0% {
    transform: rotateZ(-27.79deg);
    -webkit-transform: rotateZ(-27.79deg);
    -moz-transform: rotateZ(-27.79deg);
  }

  0.28% {
    transform: rotateZ(-29.59deg);
    -webkit-transform: rotateZ(-29.59deg);
    -moz-transform: rotateZ(-29.59deg);
    animation-timing-function: cubic-bezier(0.5154, 0.0019, 0.4355, 0.9271);
    -webkit-animation-timing-function: cubic-bezier(0.5154, 0.0019, 0.4355, 0.9271);
    -moz-animation-timing-function: cubic-bezier(0.5154, 0.0019, 0.4355, 0.9271);
  }

  11.11% {
    transform: rotateZ(68.35deg);
    -webkit-transform: rotateZ(68.35deg);
    -moz-transform: rotateZ(68.35deg);
    animation-timing-function: cubic-bezier(0.7285, -0.2621, 0.9089, 0.1611);
    -webkit-animation-timing-function: cubic-bezier(0.7285, -0.2621, 0.9089, 0.1611);
    -moz-animation-timing-function: cubic-bezier(0.7285, -0.2621, 0.9089, 0.1611);
  }

  23.61% {
    transform: rotateZ(50.99deg);
    -webkit-transform: rotateZ(50.99deg);
    -moz-transform: rotateZ(50.99deg);
    animation-timing-function: cubic-bezier(0.4855, 0.1721, 0.7616, 0.5655);
    -webkit-animation-timing-function: cubic-bezier(0.4855, 0.1721, 0.7616, 0.5655);
    -moz-animation-timing-function: cubic-bezier(0.4855, 0.1721, 0.7616, 0.5655);
  }

  25.4% {
    transform: rotateZ(-7.25deg);
    -webkit-transform: rotateZ(-7.25deg);
    -moz-transform: rotateZ(-7.25deg);
    animation-timing-function: cubic-bezier(0.0824, 0.8024, 0.3124, 1.5057);
    -webkit-animation-timing-function: cubic-bezier(0.0824, 0.8024, 0.3124, 1.5057);
    -moz-animation-timing-function: cubic-bezier(0.0824, 0.8024, 0.3124, 1.5057);
  }

  50.4% {
    transform: rotateZ(-36.03deg);
    -webkit-transform: rotateZ(-36.03deg);
    -moz-transform: rotateZ(-36.03deg);
    animation-timing-function: cubic-bezier(0.5705, 0.1281, 0.8545, 0.4224);
    -webkit-animation-timing-function: cubic-bezier(0.5705, 0.1281, 0.8545, 0.4224);
    -moz-animation-timing-function: cubic-bezier(0.5705, 0.1281, 0.8545, 0.4224);
  }

  58.73% {
    transform: rotateZ(0.71deg);
    -webkit-transform: rotateZ(0.71deg);
    -moz-transform: rotateZ(0.71deg);
    animation-timing-function: cubic-bezier(0.186, 0.2935, 0.5784, 1.852);
    -webkit-animation-timing-function: cubic-bezier(0.186, 0.2935, 0.5784, 1.852);
    -moz-animation-timing-function: cubic-bezier(0.186, 0.2935, 0.5784, 1.852);
  }

  75.32% {
    transform: rotateZ(49.74deg);
    -webkit-transform: rotateZ(49.74deg);
    -moz-transform: rotateZ(49.74deg);
  }

  75.75% {
    transform: rotateZ(45.25deg);
    -webkit-transform: rotateZ(45.25deg);
    -moz-transform: rotateZ(45.25deg);
  }

  76.19% {
    transform: rotateZ(35.91deg);
    -webkit-transform: rotateZ(35.91deg);
    -moz-transform: rotateZ(35.91deg);
    animation-timing-function: cubic-bezier(0.1299, 0.4445, 0.4716, 1.7391);
    -webkit-animation-timing-function: cubic-bezier(0.1299, 0.4445, 0.4716, 1.7391);
    -moz-animation-timing-function: cubic-bezier(0.1299, 0.4445, 0.4716, 1.7391);
  }

  94.76% {
    transform: rotateZ(9.17deg);
    -webkit-transform: rotateZ(9.17deg);
    -moz-transform: rotateZ(9.17deg);
  }

  95.24% {
    transform: rotateZ(0deg);
    -webkit-transform: rotateZ(0deg);
    -moz-transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(0deg);
    -webkit-transform: rotateZ(0deg);
    -moz-transform: rotateZ(0deg);
  }
}

@-webkit-keyframes gwd-motion-path-1f0h-keys-theta {
  0% {
    -webkit-transform: rotateZ(-27.79deg);
  }

  0.28% {
    -webkit-transform: rotateZ(-29.59deg);
    -webkit-animation-timing-function: cubic-bezier(0.5154, 0.0019, 0.4355, 0.9271);
  }

  11.11% {
    -webkit-transform: rotateZ(68.35deg);
    -webkit-animation-timing-function: cubic-bezier(0.7285, -0.2621, 0.9089, 0.1611);
  }

  23.61% {
    -webkit-transform: rotateZ(50.99deg);
    -webkit-animation-timing-function: cubic-bezier(0.4855, 0.1721, 0.7616, 0.5655);
  }

  25.4% {
    -webkit-transform: rotateZ(-7.25deg);
    -webkit-animation-timing-function: cubic-bezier(0.0824, 0.8024, 0.3124, 1.5057);
  }

  50.4% {
    -webkit-transform: rotateZ(-36.03deg);
    -webkit-animation-timing-function: cubic-bezier(0.5705, 0.1281, 0.8545, 0.4224);
  }

  58.73% {
    -webkit-transform: rotateZ(0.71deg);
    -webkit-animation-timing-function: cubic-bezier(0.186, 0.2935, 0.5784, 1.852);
  }

  75.32% {
    -webkit-transform: rotateZ(49.74deg);
  }

  75.75% {
    -webkit-transform: rotateZ(45.25deg);
  }

  76.19% {
    -webkit-transform: rotateZ(35.91deg);
    -webkit-animation-timing-function: cubic-bezier(0.1299, 0.4445, 0.4716, 1.7391);
  }

  94.76% {
    -webkit-transform: rotateZ(9.17deg);
  }

  95.24% {
    -webkit-transform: rotateZ(0deg);
  }

  100% {
    -webkit-transform: rotateZ(0deg);
  }
}

@-moz-keyframes gwd-motion-path-1f0h-keys-theta {
  0% {
    -moz-transform: rotateZ(-27.79deg);
  }

  0.28% {
    -moz-transform: rotateZ(-29.59deg);
    -moz-animation-timing-function: cubic-bezier(0.5154, 0.0019, 0.4355, 0.9271);
  }

  11.11% {
    -moz-transform: rotateZ(68.35deg);
    -moz-animation-timing-function: cubic-bezier(0.7285, -0.2621, 0.9089, 0.1611);
  }

  23.61% {
    -moz-transform: rotateZ(50.99deg);
    -moz-animation-timing-function: cubic-bezier(0.4855, 0.1721, 0.7616, 0.5655);
  }

  25.4% {
    -moz-transform: rotateZ(-7.25deg);
    -moz-animation-timing-function: cubic-bezier(0.0824, 0.8024, 0.3124, 1.5057);
  }

  50.4% {
    -moz-transform: rotateZ(-36.03deg);
    -moz-animation-timing-function: cubic-bezier(0.5705, 0.1281, 0.8545, 0.4224);
  }

  58.73% {
    -moz-transform: rotateZ(0.71deg);
    -moz-animation-timing-function: cubic-bezier(0.186, 0.2935, 0.5784, 1.852);
  }

  75.32% {
    -moz-transform: rotateZ(49.74deg);
  }

  75.75% {
    -moz-transform: rotateZ(45.25deg);
  }

  76.19% {
    -moz-transform: rotateZ(35.91deg);
    -moz-animation-timing-function: cubic-bezier(0.1299, 0.4445, 0.4716, 1.7391);
  }

  94.76% {
    -moz-transform: rotateZ(9.17deg);
  }

  95.24% {
    -moz-transform: rotateZ(0deg);
  }

  100% {
    -moz-transform: rotateZ(0deg);
  }
}

.htmlNoPages .gwd-motion-path-1lsa-anim-x {
  animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1lsa-keys-x;
  -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1lsa-keys-x;
  -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1lsa-keys-x;
  transform: translate3d(-63.12px, 0px, 0px);
  -webkit-transform: translate3d(-63.12px, 0px, 0px);
  -moz-transform: translate3d(-63.12px, 0px, 0px);
}

@keyframes gwd-motion-path-1lsa-keys-x {
  0% {
    z-index: 0;
    transform: translate3d(-63.12px, 0px, 0px);
    -webkit-transform: translate3d(-63.12px, 0px, 0px);
    -moz-transform: translate3d(-63.12px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.3186, 0.3469, 0.6637, 0.6708);
    -webkit-animation-timing-function: cubic-bezier(0.3186, 0.3469, 0.6637, 0.6708);
    -moz-animation-timing-function: cubic-bezier(0.3186, 0.3469, 0.6637, 0.6708);
  }

  3.06% {
    z-index: 0;
    transform: translate3d(28.4px, 0px, 0px);
    -webkit-transform: translate3d(28.4px, 0px, 0px);
    -moz-transform: translate3d(28.4px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.1834, 0.4661, 0.4809, 0.8906);
    -webkit-animation-timing-function: cubic-bezier(0.1834, 0.4661, 0.4809, 0.8906);
    -moz-animation-timing-function: cubic-bezier(0.1834, 0.4661, 0.4809, 0.8906);
  }

  11.11% {
    z-index: 0;
    transform: translate3d(126.94px, 0px, 0px);
    -webkit-transform: translate3d(126.94px, 0px, 0px);
    -moz-transform: translate3d(126.94px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.4285, 0.2274, 0.8744, 0.5016);
    -webkit-animation-timing-function: cubic-bezier(0.4285, 0.2274, 0.8744, 0.5016);
    -moz-animation-timing-function: cubic-bezier(0.4285, 0.2274, 0.8744, 0.5016);
  }

  19.44% {
    z-index: 0;
    transform: translate3d(178.52px, 0px, 0px);
    -webkit-transform: translate3d(178.52px, 0px, 0px);
    -moz-transform: translate3d(178.52px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.3997, 0.2477, 0.7574, 0.5962);
    -webkit-animation-timing-function: cubic-bezier(0.3997, 0.2477, 0.7574, 0.5962);
    -moz-animation-timing-function: cubic-bezier(0.3997, 0.2477, 0.7574, 0.5962);
  }

  20.63% {
    z-index: 0;
    transform: translate3d(219px, 0px, 0px);
    -webkit-transform: translate3d(219px, 0px, 0px);
    -moz-transform: translate3d(219px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.2324, 0.4275, 0.5696, 0.7703);
    -webkit-animation-timing-function: cubic-bezier(0.2324, 0.4275, 0.5696, 0.7703);
    -moz-animation-timing-function: cubic-bezier(0.2324, 0.4275, 0.5696, 0.7703);
  }

  35.63% {
    z-index: ;
    transform: translate3d(445.85px, 0px, 0px);
    -webkit-transform: translate3d(445.85px, 0px, 0px);
    -moz-transform: translate3d(445.85px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.3046, 0.3635, 0.7696, 0.5743);
    -webkit-animation-timing-function: cubic-bezier(0.3046, 0.3635, 0.7696, 0.5743);
    -moz-animation-timing-function: cubic-bezier(0.3046, 0.3635, 0.7696, 0.5743);
  }

  53.97% {
    z-index: 2;
    transform: translate3d(581px, 0px, 0px);
    -webkit-transform: translate3d(581px, 0px, 0px);
    -moz-transform: translate3d(581px, 0px, 0px);
  }

  58.33% {
    z-index: 2;
    transform: translate3d(613.34px, 0px, 0px);
    -webkit-transform: translate3d(613.34px, 0px, 0px);
    -moz-transform: translate3d(613.34px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.3641, 0.2911, 0.9638, 0.4513);
    -webkit-animation-timing-function: cubic-bezier(0.3641, 0.2911, 0.9638, 0.4513);
    -moz-animation-timing-function: cubic-bezier(0.3641, 0.2911, 0.9638, 0.4513);
  }

  71.43% {
    z-index: 2;
    transform: translate3d(749px, 0px, 0px);
    -webkit-transform: translate3d(749px, 0px, 0px);
    -moz-transform: translate3d(749px, 0px, 0px);
    animation-timing-function: cubic-bezier(0.3524, 0.3102, 0.6667, 0.6681);
    -webkit-animation-timing-function: cubic-bezier(0.3524, 0.3102, 0.6667, 0.6681);
    -moz-animation-timing-function: cubic-bezier(0.3524, 0.3102, 0.6667, 0.6681);
  }

  92.06% {
    z-index: 2;
    transform: translate3d(984px, 0px, 0px);
    -webkit-transform: translate3d(984px, 0px, 0px);
    -moz-transform: translate3d(984px, 0px, 0px);
  }

  100% {
    z-index: 2;
    transform: translate3d(984px, 0px, 0px);
    -webkit-transform: translate3d(984px, 0px, 0px);
    -moz-transform: translate3d(984px, 0px, 0px);
  }
}

@-webkit-keyframes gwd-motion-path-1lsa-keys-x {
  0% {
    -webkit-transform: translate3d(-63.12px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3186, 0.3469, 0.6637, 0.6708);
  }

  3.06% {
    -webkit-transform: translate3d(28.4px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.1834, 0.4661, 0.4809, 0.8906);
  }

  11.11% {
    -webkit-transform: translate3d(126.94px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.4285, 0.2274, 0.8744, 0.5016);
  }

  19.44% {
    -webkit-transform: translate3d(178.52px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3997, 0.2477, 0.7574, 0.5962);
  }

  20.63% {
    -webkit-transform: translate3d(219px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2324, 0.4275, 0.5696, 0.7703);
  }

  35.63% {
    -webkit-transform: translate3d(445.85px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3046, 0.3635, 0.7696, 0.5743);
  }

  53.97% {
    -webkit-transform: translate3d(581px, 0px, 0px);
  }

  58.33% {
    -webkit-transform: translate3d(613.34px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3641, 0.2911, 0.9638, 0.4513);
  }

  71.43% {
    -webkit-transform: translate3d(749px, 0px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3524, 0.3102, 0.6667, 0.6681);
  }

  92.06% {
    -webkit-transform: translate3d(984px, 0px, 0px);
  }

  100% {
    -webkit-transform: translate3d(984px, 0px, 0px);
  }
}

@-moz-keyframes gwd-motion-path-1lsa-keys-x {
  0% {
    -moz-transform: translate3d(-63.12px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3186, 0.3469, 0.6637, 0.6708);
  }

  3.06% {
    -moz-transform: translate3d(28.4px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.1834, 0.4661, 0.4809, 0.8906);
  }

  11.11% {
    -moz-transform: translate3d(126.94px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.4285, 0.2274, 0.8744, 0.5016);
  }

  19.44% {
    -moz-transform: translate3d(178.52px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3997, 0.2477, 0.7574, 0.5962);
  }

  20.63% {
    -moz-transform: translate3d(219px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2324, 0.4275, 0.5696, 0.7703);
  }

  35.63% {
    -moz-transform: translate3d(445.85px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3046, 0.3635, 0.7696, 0.5743);
  }

  53.97% {
    -moz-transform: translate3d(581px, 0px, 0px);
  }

  58.33% {
    -moz-transform: translate3d(613.34px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3641, 0.2911, 0.9638, 0.4513);
  }

  71.43% {
    -moz-transform: translate3d(749px, 0px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3524, 0.3102, 0.6667, 0.6681);
  }

  92.06% {
    -moz-transform: translate3d(984px, 0px, 0px);
  }

  100% {
    -moz-transform: translate3d(984px, 0px, 0px);
  }
}

.htmlNoPages .gwd-motion-path-1lsa-anim-y {
  animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1lsa-keys-y;
  -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1lsa-keys-y;
  -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1lsa-keys-y;
  transform: translate3d(0px, -209.59px, 0px);
  -webkit-transform: translate3d(0px, -209.59px, 0px);
  -moz-transform: translate3d(0px, -209.59px, 0px);
}

@keyframes gwd-motion-path-1lsa-keys-y {
  0% {
    transform: translate3d(0px, -209.59px, 0px);
    -webkit-transform: translate3d(0px, -209.59px, 0px);
    -moz-transform: translate3d(0px, -209.59px, 0px);
    animation-timing-function: cubic-bezier(0.2063, 0.4255, 0.6029, 2.2605);
    -webkit-animation-timing-function: cubic-bezier(0.2063, 0.4255, 0.6029, 2.2605);
    -moz-animation-timing-function: cubic-bezier(0.2063, 0.4255, 0.6029, 2.2605);
  }

  4.17% {
    transform: translate3d(0px, -228.82px, 0px);
    -webkit-transform: translate3d(0px, -228.82px, 0px);
    -moz-transform: translate3d(0px, -228.82px, 0px);
    animation-timing-function: cubic-bezier(0.3298, 0.3218, 0.5696, 0.7949);
    -webkit-animation-timing-function: cubic-bezier(0.3298, 0.3218, 0.5696, 0.7949);
    -moz-animation-timing-function: cubic-bezier(0.3298, 0.3218, 0.5696, 0.7949);
  }

  11.11% {
    transform: translate3d(0px, -126.07px, 0px);
    -webkit-transform: translate3d(0px, -126.07px, 0px);
    -moz-transform: translate3d(0px, -126.07px, 0px);
    animation-timing-function: cubic-bezier(0.4163, 0.2523, 0.734, 0.5994);
    -webkit-animation-timing-function: cubic-bezier(0.4163, 0.2523, 0.734, 0.5994);
    -moz-animation-timing-function: cubic-bezier(0.4163, 0.2523, 0.734, 0.5994);
  }

  19.44% {
    transform: translate3d(0px, -14.05px, 0px);
    -webkit-transform: translate3d(0px, -14.05px, 0px);
    -moz-transform: translate3d(0px, -14.05px, 0px);
    animation-timing-function: cubic-bezier(0.1897, 0.2916, 0.5479, 1.0771);
    -webkit-animation-timing-function: cubic-bezier(0.1897, 0.2916, 0.5479, 1.0771);
    -moz-animation-timing-function: cubic-bezier(0.1897, 0.2916, 0.5479, 1.0771);
  }

  20.63% {
    transform: translate3d(0px, -2px, 0px);
    -webkit-transform: translate3d(0px, -2px, 0px);
    -moz-transform: translate3d(0px, -2px, 0px);
    animation-timing-function: cubic-bezier(0.4246, 0.1279, 0.731, 0.6752);
    -webkit-animation-timing-function: cubic-bezier(0.4246, 0.1279, 0.731, 0.6752);
    -moz-animation-timing-function: cubic-bezier(0.4246, 0.1279, 0.731, 0.6752);
  }

  25.63% {
    transform: translate3d(0px, -41.94px, 0px);
    -webkit-transform: translate3d(0px, -41.94px, 0px);
    -moz-transform: translate3d(0px, -41.94px, 0px);
    animation-timing-function: cubic-bezier(0.2705, 0.406, 0.5681, 0.7579);
    -webkit-animation-timing-function: cubic-bezier(0.2705, 0.406, 0.5681, 0.7579);
    -moz-animation-timing-function: cubic-bezier(0.2705, 0.406, 0.5681, 0.7579);
  }

  45.63% {
    transform: translate3d(0px, -194.05px, 0px);
    -webkit-transform: translate3d(0px, -194.05px, 0px);
    -moz-transform: translate3d(0px, -194.05px, 0px);
    animation-timing-function: cubic-bezier(0.2882, 0.2854, 0.6271, 0.8722);
    -webkit-animation-timing-function: cubic-bezier(0.2882, 0.2854, 0.6271, 0.8722);
    -moz-animation-timing-function: cubic-bezier(0.2882, 0.2854, 0.6271, 0.8722);
  }

  53.97% {
    transform: translate3d(0px, -226px, 0px);
    -webkit-transform: translate3d(0px, -226px, 0px);
    -moz-transform: translate3d(0px, -226px, 0px);
    animation-timing-function: cubic-bezier(0.4845, -0.0064, 0.817, 0.6312);
    -webkit-animation-timing-function: cubic-bezier(0.4845, -0.0064, 0.817, 0.6312);
    -moz-animation-timing-function: cubic-bezier(0.4845, -0.0064, 0.817, 0.6312);
  }

  67.94% {
    transform: translate3d(0px, -124.43px, 0px);
    -webkit-transform: translate3d(0px, -124.43px, 0px);
    -moz-transform: translate3d(0px, -124.43px, 0px);
    animation-timing-function: cubic-bezier(0.3726, 0.2857, 0.735, 0.6088);
    -webkit-animation-timing-function: cubic-bezier(0.3726, 0.2857, 0.735, 0.6088);
    -moz-animation-timing-function: cubic-bezier(0.3726, 0.2857, 0.735, 0.6088);
  }

  70.99% {
    transform: translate3d(0px, -60.89px, 0px);
    -webkit-transform: translate3d(0px, -60.89px, 0px);
    -moz-transform: translate3d(0px, -60.89px, 0px);
  }

  71.43% {
    transform: translate3d(0px, -41px, 0px);
    -webkit-transform: translate3d(0px, -41px, 0px);
    -moz-transform: translate3d(0px, -41px, 0px);
    animation-timing-function: cubic-bezier(0.2267, 0.6464, 0.3608, 0.8282);
    -webkit-animation-timing-function: cubic-bezier(0.2267, 0.6464, 0.3608, 0.8282);
    -moz-animation-timing-function: cubic-bezier(0.2267, 0.6464, 0.3608, 0.8282);
  }

  88.97% {
    transform: translate3d(0px, 0.28px, 0px);
    -webkit-transform: translate3d(0px, 0.28px, 0px);
    -moz-transform: translate3d(0px, 0.28px, 0px);
  }

  92.06% {
    transform: translate3d(0px, 5px, 0px);
    -webkit-transform: translate3d(0px, 5px, 0px);
    -moz-transform: translate3d(0px, 5px, 0px);
  }

  100% {
    transform: translate3d(0px, 5px, 0px);
    -webkit-transform: translate3d(0px, 5px, 0px);
    -moz-transform: translate3d(0px, 5px, 0px);
  }
}

@-webkit-keyframes gwd-motion-path-1lsa-keys-y {
  0% {
    -webkit-transform: translate3d(0px, -209.59px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2063, 0.4255, 0.6029, 2.2605);
  }

  4.17% {
    -webkit-transform: translate3d(0px, -228.82px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3298, 0.3218, 0.5696, 0.7949);
  }

  11.11% {
    -webkit-transform: translate3d(0px, -126.07px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.4163, 0.2523, 0.734, 0.5994);
  }

  19.44% {
    -webkit-transform: translate3d(0px, -14.05px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.1897, 0.2916, 0.5479, 1.0771);
  }

  20.63% {
    -webkit-transform: translate3d(0px, -2px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.4246, 0.1279, 0.731, 0.6752);
  }

  25.63% {
    -webkit-transform: translate3d(0px, -41.94px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2705, 0.406, 0.5681, 0.7579);
  }

  45.63% {
    -webkit-transform: translate3d(0px, -194.05px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2882, 0.2854, 0.6271, 0.8722);
  }

  53.97% {
    -webkit-transform: translate3d(0px, -226px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.4845, -0.0064, 0.817, 0.6312);
  }

  67.94% {
    -webkit-transform: translate3d(0px, -124.43px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.3726, 0.2857, 0.735, 0.6088);
  }

  70.99% {
    -webkit-transform: translate3d(0px, -60.89px, 0px);
  }

  71.43% {
    -webkit-transform: translate3d(0px, -41px, 0px);
    -webkit-animation-timing-function: cubic-bezier(0.2267, 0.6464, 0.3608, 0.8282);
  }

  88.97% {
    -webkit-transform: translate3d(0px, 0.28px, 0px);
  }

  92.06% {
    -webkit-transform: translate3d(0px, 5px, 0px);
  }

  100% {
    -webkit-transform: translate3d(0px, 5px, 0px);
  }
}

@-moz-keyframes gwd-motion-path-1lsa-keys-y {
  0% {
    -moz-transform: translate3d(0px, -209.59px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2063, 0.4255, 0.6029, 2.2605);
  }

  4.17% {
    -moz-transform: translate3d(0px, -228.82px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3298, 0.3218, 0.5696, 0.7949);
  }

  11.11% {
    -moz-transform: translate3d(0px, -126.07px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.4163, 0.2523, 0.734, 0.5994);
  }

  19.44% {
    -moz-transform: translate3d(0px, -14.05px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.1897, 0.2916, 0.5479, 1.0771);
  }

  20.63% {
    -moz-transform: translate3d(0px, -2px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.4246, 0.1279, 0.731, 0.6752);
  }

  25.63% {
    -moz-transform: translate3d(0px, -41.94px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2705, 0.406, 0.5681, 0.7579);
  }

  45.63% {
    -moz-transform: translate3d(0px, -194.05px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2882, 0.2854, 0.6271, 0.8722);
  }

  53.97% {
    -moz-transform: translate3d(0px, -226px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.4845, -0.0064, 0.817, 0.6312);
  }

  67.94% {
    -moz-transform: translate3d(0px, -124.43px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.3726, 0.2857, 0.735, 0.6088);
  }

  70.99% {
    -moz-transform: translate3d(0px, -60.89px, 0px);
  }

  71.43% {
    -moz-transform: translate3d(0px, -41px, 0px);
    -moz-animation-timing-function: cubic-bezier(0.2267, 0.6464, 0.3608, 0.8282);
  }

  88.97% {
    -moz-transform: translate3d(0px, 0.28px, 0px);
  }

  92.06% {
    -moz-transform: translate3d(0px, 5px, 0px);
  }

  100% {
    -moz-transform: translate3d(0px, 5px, 0px);
  }
}

.htmlNoPages .gwd-motion-path-1lsa-anim-theta {
  animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1lsa-keys-theta;
  -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1lsa-keys-theta;
  -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1lsa-keys-theta;
  transform: rotateZ(-19.55deg);
  -webkit-transform: rotateZ(-19.55deg);
  -moz-transform: rotateZ(-19.55deg);
}

@keyframes gwd-motion-path-1lsa-keys-theta {
  0% {
    transform: rotateZ(-19.55deg);
    -webkit-transform: rotateZ(-19.55deg);
    -moz-transform: rotateZ(-19.55deg);
    animation-timing-function: cubic-bezier(0.4865, -0.7161, 0.8934, 0.5956);
    -webkit-animation-timing-function: cubic-bezier(0.4865, -0.7161, 0.8934, 0.5956);
    -moz-animation-timing-function: cubic-bezier(0.4865, -0.7161, 0.8934, 0.5956);
  }

  2.78% {
    transform: rotateZ(-3.28deg);
    -webkit-transform: rotateZ(-3.28deg);
    -moz-transform: rotateZ(-3.28deg);
    animation-timing-function: cubic-bezier(0.2185, 0.6146, 0.3012, 0.9473);
    -webkit-animation-timing-function: cubic-bezier(0.2185, 0.6146, 0.3012, 0.9473);
    -moz-animation-timing-function: cubic-bezier(0.2185, 0.6146, 0.3012, 0.9473);
  }

  11.11% {
    transform: rotateZ(69.07deg);
    -webkit-transform: rotateZ(69.07deg);
    -moz-transform: rotateZ(69.07deg);
    animation-timing-function: cubic-bezier(0.8694, -0.0744, 0.8002, 0.0274);
    -webkit-animation-timing-function: cubic-bezier(0.8694, -0.0744, 0.8002, 0.0274);
    -moz-animation-timing-function: cubic-bezier(0.8694, -0.0744, 0.8002, 0.0274);
  }

  20.63% {
    transform: rotateZ(-3.07deg);
    -webkit-transform: rotateZ(-3.07deg);
    -moz-transform: rotateZ(-3.07deg);
    animation-timing-function: cubic-bezier(0.0785, 0.8184, 0.317, 1.4935);
    -webkit-animation-timing-function: cubic-bezier(0.0785, 0.8184, 0.317, 1.4935);
    -moz-animation-timing-function: cubic-bezier(0.0785, 0.8184, 0.317, 1.4935);
  }

  46.47% {
    transform: rotateZ(-36.24deg);
    -webkit-transform: rotateZ(-36.24deg);
    -moz-transform: rotateZ(-36.24deg);
    animation-timing-function: cubic-bezier(0.5621, 0.1305, 0.8486, 0.4352);
    -webkit-animation-timing-function: cubic-bezier(0.5621, 0.1305, 0.8486, 0.4352);
    -moz-animation-timing-function: cubic-bezier(0.5621, 0.1305, 0.8486, 0.4352);
  }

  53.97% {
    transform: rotateZ(0.71deg);
    -webkit-transform: rotateZ(0.71deg);
    -moz-transform: rotateZ(0.71deg);
    animation-timing-function: cubic-bezier(0.186, 0.2935, 0.5784, 1.852);
    -webkit-animation-timing-function: cubic-bezier(0.186, 0.2935, 0.5784, 1.852);
    -moz-animation-timing-function: cubic-bezier(0.186, 0.2935, 0.5784, 1.852);
  }

  70.56% {
    transform: rotateZ(49.74deg);
    -webkit-transform: rotateZ(49.74deg);
    -moz-transform: rotateZ(49.74deg);
  }

  70.99% {
    transform: rotateZ(45.25deg);
    -webkit-transform: rotateZ(45.25deg);
    -moz-transform: rotateZ(45.25deg);
  }

  71.43% {
    transform: rotateZ(35.91deg);
    -webkit-transform: rotateZ(35.91deg);
    -moz-transform: rotateZ(35.91deg);
    animation-timing-function: cubic-bezier(0.1299, 0.4445, 0.4716, 1.739);
    -webkit-animation-timing-function: cubic-bezier(0.1299, 0.4445, 0.4716, 1.739);
    -moz-animation-timing-function: cubic-bezier(0.1299, 0.4445, 0.4716, 1.739);
  }

  91.55% {
    transform: rotateZ(9.17deg);
    -webkit-transform: rotateZ(9.17deg);
    -moz-transform: rotateZ(9.17deg);
  }

  92.06% {
    transform: rotateZ(0deg);
    -webkit-transform: rotateZ(0deg);
    -moz-transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(0deg);
    -webkit-transform: rotateZ(0deg);
    -moz-transform: rotateZ(0deg);
  }
}

@-webkit-keyframes gwd-motion-path-1lsa-keys-theta {
  0% {
    -webkit-transform: rotateZ(-19.55deg);
    -webkit-animation-timing-function: cubic-bezier(0.4865, -0.7161, 0.8934, 0.5956);
  }

  2.78% {
    -webkit-transform: rotateZ(-3.28deg);
    -webkit-animation-timing-function: cubic-bezier(0.2185, 0.6146, 0.3012, 0.9473);
  }

  11.11% {
    -webkit-transform: rotateZ(69.07deg);
    -webkit-animation-timing-function: cubic-bezier(0.8694, -0.0744, 0.8002, 0.0274);
  }

  20.63% {
    -webkit-transform: rotateZ(-3.07deg);
    -webkit-animation-timing-function: cubic-bezier(0.0785, 0.8184, 0.317, 1.4935);
  }

  46.47% {
    -webkit-transform: rotateZ(-36.24deg);
    -webkit-animation-timing-function: cubic-bezier(0.5621, 0.1305, 0.8486, 0.4352);
  }

  53.97% {
    -webkit-transform: rotateZ(0.71deg);
    -webkit-animation-timing-function: cubic-bezier(0.186, 0.2935, 0.5784, 1.852);
  }

  70.56% {
    -webkit-transform: rotateZ(49.74deg);
  }

  70.99% {
    -webkit-transform: rotateZ(45.25deg);
  }

  71.43% {
    -webkit-transform: rotateZ(35.91deg);
    -webkit-animation-timing-function: cubic-bezier(0.1299, 0.4445, 0.4716, 1.739);
  }

  91.55% {
    -webkit-transform: rotateZ(9.17deg);
  }

  92.06% {
    -webkit-transform: rotateZ(0deg);
  }

  100% {
    -webkit-transform: rotateZ(0deg);
  }
}

@-moz-keyframes gwd-motion-path-1lsa-keys-theta {
  0% {
    -moz-transform: rotateZ(-19.55deg);
    -moz-animation-timing-function: cubic-bezier(0.4865, -0.7161, 0.8934, 0.5956);
  }

  2.78% {
    -moz-transform: rotateZ(-3.28deg);
    -moz-animation-timing-function: cubic-bezier(0.2185, 0.6146, 0.3012, 0.9473);
  }

  11.11% {
    -moz-transform: rotateZ(69.07deg);
    -moz-animation-timing-function: cubic-bezier(0.8694, -0.0744, 0.8002, 0.0274);
  }

  20.63% {
    -moz-transform: rotateZ(-3.07deg);
    -moz-animation-timing-function: cubic-bezier(0.0785, 0.8184, 0.317, 1.4935);
  }

  46.47% {
    -moz-transform: rotateZ(-36.24deg);
    -moz-animation-timing-function: cubic-bezier(0.5621, 0.1305, 0.8486, 0.4352);
  }

  53.97% {
    -moz-transform: rotateZ(0.71deg);
    -moz-animation-timing-function: cubic-bezier(0.186, 0.2935, 0.5784, 1.852);
  }

  70.56% {
    -moz-transform: rotateZ(49.74deg);
  }

  70.99% {
    -moz-transform: rotateZ(45.25deg);
  }

  71.43% {
    -moz-transform: rotateZ(35.91deg);
    -moz-animation-timing-function: cubic-bezier(0.1299, 0.4445, 0.4716, 1.739);
  }

  91.55% {
    -moz-transform: rotateZ(9.17deg);
  }

  92.06% {
    -moz-transform: rotateZ(0deg);
  }

  100% {
    -moz-transform: rotateZ(0deg);
  }
}

[data-gwd-motion-path-node] {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

[data-gwd-motion-path-node].gwd-motion-path-1ud8-anim-x {
  left: 42.9253px;
  top: 236.906px;
  width: 64.1953px;
  height: 46.43px;
}

[data-gwd-motion-path-node].gwd-motion-path-3ytk-anim-x {
  left: 42.9253px;
  top: 236.906px;
  width: 46px;
  height: 46.43px;
}

[data-gwd-motion-path-node].gwd-motion-path-1bqy-anim-x {
  left: 42.9253px;
  top: 236.906px;
  width: 46px;
  height: 46.43px;
}

[data-gwd-motion-path-node].gwd-motion-path-1f0h-anim-x {
  left: 42.9253px;
  top: 236.906px;
  width: 46px;
  height: 46.43px;
}

[data-gwd-motion-path-node].gwd-motion-path-1lsa-anim-x {
  left: 42.9253px;
  top: 236.906px;
  width: 46px;
  height: 46.43px;
}

@media (min-width: 736px) and (max-width: 739px) and (min-height: 248px) and (max-height: 254px) {
  .htmlNoPages .gwd-motion-path-1ud8-anim-x {
    animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1ud8-keys-x;
    -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1ud8-keys-x;
    -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1ud8-keys-x;
    transform: translate3d(-260.17px, 0px, 0px);
    -webkit-transform: translate3d(-260.17px, 0px, 0px);
    -moz-transform: translate3d(-260.17px, 0px, 0px);
  }

  @keyframes gwd-motion-path-1ud8-keys-x {
    0% {
      transform: translate3d(-260.17px, 0px, 0px);
      -webkit-transform: translate3d(-260.17px, 0px, 0px);
      -moz-transform: translate3d(-260.17px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.2849, 0.3628, 0.6066, 0.753);
      -webkit-animation-timing-function: cubic-bezier(0.2849, 0.3628, 0.6066, 0.753);
      -moz-animation-timing-function: cubic-bezier(0.2849, 0.3628, 0.6066, 0.753);
    }

    10% {
      transform: translate3d(-93.56px, 0px, 0px);
      -webkit-transform: translate3d(-93.56px, 0px, 0px);
      -moz-transform: translate3d(-93.56px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.2994, 0.3638, 0.6217, 0.7162);
      -webkit-animation-timing-function: cubic-bezier(0.2994, 0.3638, 0.6217, 0.7162);
      -moz-animation-timing-function: cubic-bezier(0.2994, 0.3638, 0.6217, 0.7162);
    }

    11.11% {
      transform: translate3d(-84.96px, 0px, 0px);
      -webkit-transform: translate3d(-84.96px, 0px, 0px);
      -moz-transform: translate3d(-84.96px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3553, 0.327, 0.5679, 0.7506);
      -webkit-animation-timing-function: cubic-bezier(0.3553, 0.327, 0.5679, 0.7506);
      -moz-animation-timing-function: cubic-bezier(0.3553, 0.327, 0.5679, 0.7506);
    }

    29.56% {
      transform: translate3d(22.12px, 0px, 0px);
      -webkit-transform: translate3d(22.12px, 0px, 0px);
      -moz-transform: translate3d(22.12px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3775, 0.269, 0.8441, 0.5332);
      -webkit-animation-timing-function: cubic-bezier(0.3775, 0.269, 0.8441, 0.5332);
      -moz-animation-timing-function: cubic-bezier(0.3775, 0.269, 0.8441, 0.5332);
    }

    34.92% {
      transform: translate3d(52.03px, 0px, 0px);
      -webkit-transform: translate3d(52.03px, 0px, 0px);
      -moz-transform: translate3d(52.03px, 0px, 0px);
    }

    35.75% {
      transform: translate3d(62.22px, 0px, 0px);
      -webkit-transform: translate3d(62.22px, 0px, 0px);
      -moz-transform: translate3d(62.22px, 0px, 0px);
    }

    36.59% {
      transform: translate3d(75.79px, 0px, 0px);
      -webkit-transform: translate3d(75.79px, 0px, 0px);
      -moz-transform: translate3d(75.79px, 0px, 0px);
    }

    37.42% {
      transform: translate3d(92.36px, 0px, 0px);
      -webkit-transform: translate3d(92.36px, 0px, 0px);
      -moz-transform: translate3d(92.36px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.2356, 0.4213, 0.5831, 0.7568);
      -webkit-animation-timing-function: cubic-bezier(0.2356, 0.4213, 0.5831, 0.7568);
      -moz-animation-timing-function: cubic-bezier(0.2356, 0.4213, 0.5831, 0.7568);
    }

    49.09% {
      transform: translate3d(237.77px, 0px, 0px);
      -webkit-transform: translate3d(237.77px, 0px, 0px);
      -moz-transform: translate3d(237.77px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.2803, 0.3891, 0.7366, 0.6019);
      -webkit-animation-timing-function: cubic-bezier(0.2803, 0.3891, 0.7366, 0.6019);
      -moz-animation-timing-function: cubic-bezier(0.2803, 0.3891, 0.7366, 0.6019);
    }

    68.25% {
      transform: translate3d(347.87px, 0px, 0px);
      -webkit-transform: translate3d(347.87px, 0px, 0px);
      -moz-transform: translate3d(347.87px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.4116, 0.2551, 0.6408, 0.6824);
      -webkit-animation-timing-function: cubic-bezier(0.4116, 0.2551, 0.6408, 0.6824);
      -moz-animation-timing-function: cubic-bezier(0.4116, 0.2551, 0.6408, 0.6824);
    }

    80.16% {
      transform: translate3d(447.04px, 0px, 0px);
      -webkit-transform: translate3d(447.04px, 0px, 0px);
      -moz-transform: translate3d(447.04px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3641, 0.2479, 0.9073, 0.5246);
      -webkit-animation-timing-function: cubic-bezier(0.3641, 0.2479, 0.9073, 0.5246);
      -moz-animation-timing-function: cubic-bezier(0.3641, 0.2479, 0.9073, 0.5246);
    }

    84.13% {
      transform: translate3d(498.64px, 0px, 0px);
      -webkit-transform: translate3d(498.64px, 0px, 0px);
      -moz-transform: translate3d(498.64px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3998, 0.2484, 0.6815, 0.6612);
      -webkit-animation-timing-function: cubic-bezier(0.3998, 0.2484, 0.6815, 0.6612);
      -moz-animation-timing-function: cubic-bezier(0.3998, 0.2484, 0.6815, 0.6612);
    }

    100% {
      transform: translate3d(668.04px, 0px, 0px);
      -webkit-transform: translate3d(668.04px, 0px, 0px);
      -moz-transform: translate3d(668.04px, 0px, 0px);
    }
  }

  @-webkit-keyframes gwd-motion-path-1ud8-keys-x {
    0% {
      -webkit-transform: translate3d(-260.17px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.2849, 0.3628, 0.6066, 0.753);
    }

    10% {
      -webkit-transform: translate3d(-93.56px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.2994, 0.3638, 0.6217, 0.7162);
    }

    11.11% {
      -webkit-transform: translate3d(-84.96px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3553, 0.327, 0.5679, 0.7506);
    }

    29.56% {
      -webkit-transform: translate3d(22.12px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3775, 0.269, 0.8441, 0.5332);
    }

    34.92% {
      -webkit-transform: translate3d(52.03px, 0px, 0px);
    }

    35.75% {
      -webkit-transform: translate3d(62.22px, 0px, 0px);
    }

    36.59% {
      -webkit-transform: translate3d(75.79px, 0px, 0px);
    }

    37.42% {
      -webkit-transform: translate3d(92.36px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.2356, 0.4213, 0.5831, 0.7568);
    }

    49.09% {
      -webkit-transform: translate3d(237.77px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.2803, 0.3891, 0.7366, 0.6019);
    }

    68.25% {
      -webkit-transform: translate3d(347.87px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.4116, 0.2551, 0.6408, 0.6824);
    }

    80.16% {
      -webkit-transform: translate3d(447.04px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3641, 0.2479, 0.9073, 0.5246);
    }

    84.13% {
      -webkit-transform: translate3d(498.64px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3998, 0.2484, 0.6815, 0.6612);
    }

    100% {
      -webkit-transform: translate3d(668.04px, 0px, 0px);
    }
  }

  @-moz-keyframes gwd-motion-path-1ud8-keys-x {
    0% {
      -moz-transform: translate3d(-260.17px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.2849, 0.3628, 0.6066, 0.753);
    }

    10% {
      -moz-transform: translate3d(-93.56px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.2994, 0.3638, 0.6217, 0.7162);
    }

    11.11% {
      -moz-transform: translate3d(-84.96px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3553, 0.327, 0.5679, 0.7506);
    }

    29.56% {
      -moz-transform: translate3d(22.12px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3775, 0.269, 0.8441, 0.5332);
    }

    34.92% {
      -moz-transform: translate3d(52.03px, 0px, 0px);
    }

    35.75% {
      -moz-transform: translate3d(62.22px, 0px, 0px);
    }

    36.59% {
      -moz-transform: translate3d(75.79px, 0px, 0px);
    }

    37.42% {
      -moz-transform: translate3d(92.36px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.2356, 0.4213, 0.5831, 0.7568);
    }

    49.09% {
      -moz-transform: translate3d(237.77px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.2803, 0.3891, 0.7366, 0.6019);
    }

    68.25% {
      -moz-transform: translate3d(347.87px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.4116, 0.2551, 0.6408, 0.6824);
    }

    80.16% {
      -moz-transform: translate3d(447.04px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3641, 0.2479, 0.9073, 0.5246);
    }

    84.13% {
      -moz-transform: translate3d(498.64px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3998, 0.2484, 0.6815, 0.6612);
    }

    100% {
      -moz-transform: translate3d(668.04px, 0px, 0px);
    }
  }

  .htmlNoPages .gwd-motion-path-1ud8-anim-y {
    animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1ud8-keys-y;
    -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1ud8-keys-y;
    -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1ud8-keys-y;
    transform: translate3d(0px, -95.03px, 0px);
    -webkit-transform: translate3d(0px, -95.03px, 0px);
    -moz-transform: translate3d(0px, -95.03px, 0px);
  }

  @keyframes gwd-motion-path-1ud8-keys-y {
    0% {
      transform: translate3d(0px, -95.03px, 0px);
      -webkit-transform: translate3d(0px, -95.03px, 0px);
      -moz-transform: translate3d(0px, -95.03px, 0px);
      animation-timing-function: cubic-bezier(0.258, 0.3703, 0.5763, 0.8125);
      -webkit-animation-timing-function: cubic-bezier(0.258, 0.3703, 0.5763, 0.8125);
      -moz-animation-timing-function: cubic-bezier(0.258, 0.3703, 0.5763, 0.8125);
    }

    9.44% {
      transform: translate3d(0px, -241.48px, 0px);
      -webkit-transform: translate3d(0px, -241.48px, 0px);
      -moz-transform: translate3d(0px, -241.48px, 0px);
      animation-timing-function: cubic-bezier(0.2562, 0.3932, 0.5682, 0.7905);
      -webkit-animation-timing-function: cubic-bezier(0.2562, 0.3932, 0.5682, 0.7905);
      -moz-animation-timing-function: cubic-bezier(0.2562, 0.3932, 0.5682, 0.7905);
    }

    11.11% {
      transform: translate3d(0px, -248px, 0px);
      -webkit-transform: translate3d(0px, -248px, 0px);
      -moz-transform: translate3d(0px, -248px, 0px);
      animation-timing-function: cubic-bezier(0.6089, -0.4297, 0.8363, 0.5597);
      -webkit-animation-timing-function: cubic-bezier(0.6089, -0.4297, 0.8363, 0.5597);
      -moz-animation-timing-function: cubic-bezier(0.6089, -0.4297, 0.8363, 0.5597);
    }

    25.99% {
      transform: translate3d(0px, -200.62px, 0px);
      -webkit-transform: translate3d(0px, -200.62px, 0px);
      -moz-transform: translate3d(0px, -200.62px, 0px);
      animation-timing-function: cubic-bezier(0.3915, 0.2496, 0.7833, 0.5795);
      -webkit-animation-timing-function: cubic-bezier(0.3915, 0.2496, 0.7833, 0.5795);
      -moz-animation-timing-function: cubic-bezier(0.3915, 0.2496, 0.7833, 0.5795);
    }

    34.92% {
      transform: translate3d(0px, -57px, 0px);
      -webkit-transform: translate3d(0px, -57px, 0px);
      -moz-transform: translate3d(0px, -57px, 0px);
      animation-timing-function: cubic-bezier(0.1796, 0.3643, 0.4259, 1.5785);
      -webkit-animation-timing-function: cubic-bezier(0.1796, 0.3643, 0.4259, 1.5785);
      -moz-animation-timing-function: cubic-bezier(0.1796, 0.3643, 0.4259, 1.5785);
    }

    39.09% {
      transform: translate3d(0px, -24.78px, 0px);
      -webkit-transform: translate3d(0px, -24.78px, 0px);
      -moz-transform: translate3d(0px, -24.78px, 0px);
      animation-timing-function: cubic-bezier(0.3471, 0.3148, 0.6291, 0.7011);
      -webkit-animation-timing-function: cubic-bezier(0.3471, 0.3148, 0.6291, 0.7011);
      -moz-animation-timing-function: cubic-bezier(0.3471, 0.3148, 0.6291, 0.7011);
    }

    49.09% {
      transform: translate3d(0px, -114.32px, 0px);
      -webkit-transform: translate3d(0px, -114.32px, 0px);
      -moz-transform: translate3d(0px, -114.32px, 0px);
      animation-timing-function: cubic-bezier(0.2803, 0.3905, 0.7085, 0.6234);
      -webkit-animation-timing-function: cubic-bezier(0.2803, 0.3905, 0.7085, 0.6234);
      -moz-animation-timing-function: cubic-bezier(0.2803, 0.3905, 0.7085, 0.6234);
    }

    68.25% {
      transform: translate3d(0px, -227px, 0px);
      -webkit-transform: translate3d(0px, -227px, 0px);
      -moz-transform: translate3d(0px, -227px, 0px);
      animation-timing-function: cubic-bezier(0.6197, -2.6625, 0.7379, -1.2399);
      -webkit-animation-timing-function: cubic-bezier(0.6197, -2.6625, 0.7379, -1.2399);
      -moz-animation-timing-function: cubic-bezier(0.6197, -2.6625, 0.7379, -1.2399);
    }

    78.97% {
      transform: translate3d(0px, -213.79px, 0px);
      -webkit-transform: translate3d(0px, -213.79px, 0px);
      -moz-transform: translate3d(0px, -213.79px, 0px);
      animation-timing-function: cubic-bezier(0.3991, 0.2449, 0.7871, 0.5744);
      -webkit-animation-timing-function: cubic-bezier(0.3991, 0.2449, 0.7871, 0.5744);
      -moz-animation-timing-function: cubic-bezier(0.3991, 0.2449, 0.7871, 0.5744);
    }

    83.73% {
      transform: translate3d(0px, -119.21px, 0px);
      -webkit-transform: translate3d(0px, -119.21px, 0px);
      -moz-transform: translate3d(0px, -119.21px, 0px);
    }

    84.13% {
      transform: translate3d(0px, -94px, 0px);
      -webkit-transform: translate3d(0px, -94px, 0px);
      -moz-transform: translate3d(0px, -94px, 0px);
      animation-timing-function: cubic-bezier(0.2171, 0.4289, 0.428, 1.007);
      -webkit-animation-timing-function: cubic-bezier(0.2171, 0.4289, 0.428, 1.007);
      -moz-animation-timing-function: cubic-bezier(0.2171, 0.4289, 0.428, 1.007);
    }

    99.21% {
      transform: translate3d(0px, -20.85px, 0px);
      -webkit-transform: translate3d(0px, -20.85px, 0px);
      -moz-transform: translate3d(0px, -20.85px, 0px);
    }

    99.6% {
      transform: translate3d(0px, -20.17px, 0px);
      -webkit-transform: translate3d(0px, -20.17px, 0px);
      -moz-transform: translate3d(0px, -20.17px, 0px);
    }

    100% {
      transform: translate3d(0px, -18px, 0px);
      -webkit-transform: translate3d(0px, -18px, 0px);
      -moz-transform: translate3d(0px, -18px, 0px);
    }
  }

  @-webkit-keyframes gwd-motion-path-1ud8-keys-y {
    0% {
      -webkit-transform: translate3d(0px, -95.03px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.258, 0.3703, 0.5763, 0.8125);
    }

    9.44% {
      -webkit-transform: translate3d(0px, -241.48px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.2562, 0.3932, 0.5682, 0.7905);
    }

    11.11% {
      -webkit-transform: translate3d(0px, -248px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.6089, -0.4297, 0.8363, 0.5597);
    }

    25.99% {
      -webkit-transform: translate3d(0px, -200.62px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3915, 0.2496, 0.7833, 0.5795);
    }

    34.92% {
      -webkit-transform: translate3d(0px, -57px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.1796, 0.3643, 0.4259, 1.5785);
    }

    39.09% {
      -webkit-transform: translate3d(0px, -24.78px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3471, 0.3148, 0.6291, 0.7011);
    }

    49.09% {
      -webkit-transform: translate3d(0px, -114.32px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.2803, 0.3905, 0.7085, 0.6234);
    }

    68.25% {
      -webkit-transform: translate3d(0px, -227px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.6197, -2.6625, 0.7379, -1.2399);
    }

    78.97% {
      -webkit-transform: translate3d(0px, -213.79px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3991, 0.2449, 0.7871, 0.5744);
    }

    83.73% {
      -webkit-transform: translate3d(0px, -119.21px, 0px);
    }

    84.13% {
      -webkit-transform: translate3d(0px, -94px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.2171, 0.4289, 0.428, 1.007);
    }

    99.21% {
      -webkit-transform: translate3d(0px, -20.85px, 0px);
    }

    99.6% {
      -webkit-transform: translate3d(0px, -20.17px, 0px);
    }

    100% {
      -webkit-transform: translate3d(0px, -18px, 0px);
    }
  }

  @-moz-keyframes gwd-motion-path-1ud8-keys-y {
    0% {
      -moz-transform: translate3d(0px, -95.03px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.258, 0.3703, 0.5763, 0.8125);
    }

    9.44% {
      -moz-transform: translate3d(0px, -241.48px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.2562, 0.3932, 0.5682, 0.7905);
    }

    11.11% {
      -moz-transform: translate3d(0px, -248px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.6089, -0.4297, 0.8363, 0.5597);
    }

    25.99% {
      -moz-transform: translate3d(0px, -200.62px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3915, 0.2496, 0.7833, 0.5795);
    }

    34.92% {
      -moz-transform: translate3d(0px, -57px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.1796, 0.3643, 0.4259, 1.5785);
    }

    39.09% {
      -moz-transform: translate3d(0px, -24.78px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3471, 0.3148, 0.6291, 0.7011);
    }

    49.09% {
      -moz-transform: translate3d(0px, -114.32px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.2803, 0.3905, 0.7085, 0.6234);
    }

    68.25% {
      -moz-transform: translate3d(0px, -227px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.6197, -2.6625, 0.7379, -1.2399);
    }

    78.97% {
      -moz-transform: translate3d(0px, -213.79px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3991, 0.2449, 0.7871, 0.5744);
    }

    83.73% {
      -moz-transform: translate3d(0px, -119.21px, 0px);
    }

    84.13% {
      -moz-transform: translate3d(0px, -94px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.2171, 0.4289, 0.428, 1.007);
    }

    99.21% {
      -moz-transform: translate3d(0px, -20.85px, 0px);
    }

    99.6% {
      -moz-transform: translate3d(0px, -20.17px, 0px);
    }

    100% {
      -moz-transform: translate3d(0px, -18px, 0px);
    }
  }

  .htmlNoPages .gwd-motion-path-1ud8-anim-theta {
    animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1ud8-keys-theta;
    -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1ud8-keys-theta;
    -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1ud8-keys-theta;
    transform: rotateZ(-46.52deg);
    -webkit-transform: rotateZ(-46.52deg);
    -moz-transform: rotateZ(-46.52deg);
  }

  @keyframes gwd-motion-path-1ud8-keys-theta {
    0% {
      transform: rotateZ(-46.52deg);
      -webkit-transform: rotateZ(-46.52deg);
      -moz-transform: rotateZ(-46.52deg);
      animation-timing-function: cubic-bezier(0.6112, 0.1026, 0.8219, 0.4275);
      -webkit-animation-timing-function: cubic-bezier(0.6112, 0.1026, 0.8219, 0.4275);
      -moz-animation-timing-function: cubic-bezier(0.6112, 0.1026, 0.8219, 0.4275);
    }

    11.11% {
      transform: rotateZ(-18.11deg);
      -webkit-transform: rotateZ(-18.11deg);
      -moz-transform: rotateZ(-18.11deg);
      animation-timing-function: cubic-bezier(0.385, 0.2043, 0.4566, 1.143);
      -webkit-animation-timing-function: cubic-bezier(0.385, 0.2043, 0.4566, 1.143);
      -moz-animation-timing-function: cubic-bezier(0.385, 0.2043, 0.4566, 1.143);
    }

    33.73% {
      transform: rotateZ(73.79deg);
      -webkit-transform: rotateZ(73.79deg);
      -moz-transform: rotateZ(73.79deg);
    }

    34.33% {
      transform: rotateZ(71.07deg);
      -webkit-transform: rotateZ(71.07deg);
      -moz-transform: rotateZ(71.07deg);
    }

    34.92% {
      transform: rotateZ(64.31deg);
      -webkit-transform: rotateZ(64.31deg);
      -moz-transform: rotateZ(64.31deg);
      animation-timing-function: cubic-bezier(0.4138, 0.3514, 0.3479, 0.8928);
      -webkit-animation-timing-function: cubic-bezier(0.4138, 0.3514, 0.3479, 0.8928);
      -moz-animation-timing-function: cubic-bezier(0.4138, 0.3514, 0.3479, 0.8928);
    }

    41.59% {
      transform: rotateZ(-36.24deg);
      -webkit-transform: rotateZ(-36.24deg);
      -moz-transform: rotateZ(-36.24deg);
      animation-timing-function: cubic-bezier(0, 2.3232, 0.9144, 3.3493);
      -webkit-animation-timing-function: cubic-bezier(0, 2.3232, 0.9144, 3.3493);
      -moz-animation-timing-function: cubic-bezier(0, 2.3232, 0.9144, 3.3493);
    }

    68.25% {
      transform: rotateZ(-40.81deg);
      -webkit-transform: rotateZ(-40.81deg);
      -moz-transform: rotateZ(-40.81deg);
      animation-timing-function: cubic-bezier(0.4862, 0.1663, 0.3996, 1.076);
      -webkit-animation-timing-function: cubic-bezier(0.4862, 0.1663, 0.3996, 1.076);
      -moz-animation-timing-function: cubic-bezier(0.4862, 0.1663, 0.3996, 1.076);
    }

    83.73% {
      transform: rotateZ(63.99deg);
      -webkit-transform: rotateZ(63.99deg);
      -moz-transform: rotateZ(63.99deg);
    }

    84.13% {
      transform: rotateZ(58.98deg);
      -webkit-transform: rotateZ(58.98deg);
      -moz-transform: rotateZ(58.98deg);
      animation-timing-function: cubic-bezier(0.1107, 0.0956, 0.945, 1.8306);
      -webkit-animation-timing-function: cubic-bezier(0.1107, 0.0956, 0.945, 1.8306);
      -moz-animation-timing-function: cubic-bezier(0.1107, 0.0956, 0.945, 1.8306);
    }

    99.6% {
      transform: rotateZ(12.3deg);
      -webkit-transform: rotateZ(12.3deg);
      -moz-transform: rotateZ(12.3deg);
    }

    100% {
      transform: rotateZ(59.46deg);
      -webkit-transform: rotateZ(59.46deg);
      -moz-transform: rotateZ(59.46deg);
    }
  }

  @-webkit-keyframes gwd-motion-path-1ud8-keys-theta {
    0% {
      -webkit-transform: rotateZ(-46.52deg);
      -webkit-animation-timing-function: cubic-bezier(0.6112, 0.1026, 0.8219, 0.4275);
    }

    11.11% {
      -webkit-transform: rotateZ(-18.11deg);
      -webkit-animation-timing-function: cubic-bezier(0.385, 0.2043, 0.4566, 1.143);
    }

    33.73% {
      -webkit-transform: rotateZ(73.79deg);
    }

    34.33% {
      -webkit-transform: rotateZ(71.07deg);
    }

    34.92% {
      -webkit-transform: rotateZ(64.31deg);
      -webkit-animation-timing-function: cubic-bezier(0.4138, 0.3514, 0.3479, 0.8928);
    }

    41.59% {
      -webkit-transform: rotateZ(-36.24deg);
      -webkit-animation-timing-function: cubic-bezier(0, 2.3232, 0.9144, 3.3493);
    }

    68.25% {
      -webkit-transform: rotateZ(-40.81deg);
      -webkit-animation-timing-function: cubic-bezier(0.4862, 0.1663, 0.3996, 1.076);
    }

    83.73% {
      -webkit-transform: rotateZ(63.99deg);
    }

    84.13% {
      -webkit-transform: rotateZ(58.98deg);
      -webkit-animation-timing-function: cubic-bezier(0.1107, 0.0956, 0.945, 1.8306);
    }

    99.6% {
      -webkit-transform: rotateZ(12.3deg);
    }

    100% {
      -webkit-transform: rotateZ(59.46deg);
    }
  }

  @-moz-keyframes gwd-motion-path-1ud8-keys-theta {
    0% {
      -moz-transform: rotateZ(-46.52deg);
      -moz-animation-timing-function: cubic-bezier(0.6112, 0.1026, 0.8219, 0.4275);
    }

    11.11% {
      -moz-transform: rotateZ(-18.11deg);
      -moz-animation-timing-function: cubic-bezier(0.385, 0.2043, 0.4566, 1.143);
    }

    33.73% {
      -moz-transform: rotateZ(73.79deg);
    }

    34.33% {
      -moz-transform: rotateZ(71.07deg);
    }

    34.92% {
      -moz-transform: rotateZ(64.31deg);
      -moz-animation-timing-function: cubic-bezier(0.4138, 0.3514, 0.3479, 0.8928);
    }

    41.59% {
      -moz-transform: rotateZ(-36.24deg);
      -moz-animation-timing-function: cubic-bezier(0, 2.3232, 0.9144, 3.3493);
    }

    68.25% {
      -moz-transform: rotateZ(-40.81deg);
      -moz-animation-timing-function: cubic-bezier(0.4862, 0.1663, 0.3996, 1.076);
    }

    83.73% {
      -moz-transform: rotateZ(63.99deg);
    }

    84.13% {
      -moz-transform: rotateZ(58.98deg);
      -moz-animation-timing-function: cubic-bezier(0.1107, 0.0956, 0.945, 1.8306);
    }

    99.6% {
      -moz-transform: rotateZ(12.3deg);
    }

    100% {
      -moz-transform: rotateZ(59.46deg);
    }
  }

  .htmlNoPages .gwd-motion-path-1f0h-anim-x {
    animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1f0h-keys-x;
    -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1f0h-keys-x;
    -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1f0h-keys-x;
    transform: translate3d(-115.12px, 0px, 0px);
    -webkit-transform: translate3d(-115.12px, 0px, 0px);
    -moz-transform: translate3d(-115.12px, 0px, 0px);
  }

  @keyframes gwd-motion-path-1f0h-keys-x {
    0% {
      transform: translate3d(-115.12px, 0px, 0px);
      -webkit-transform: translate3d(-115.12px, 0px, 0px);
      -moz-transform: translate3d(-115.12px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3197, 0.3466, 0.6676, 0.6662);
      -webkit-animation-timing-function: cubic-bezier(0.3197, 0.3466, 0.6676, 0.6662);
      -moz-animation-timing-function: cubic-bezier(0.3197, 0.3466, 0.6676, 0.6662);
    }

    2.5% {
      transform: translate3d(-61.67px, 0px, 0px);
      -webkit-transform: translate3d(-61.67px, 0px, 0px);
      -moz-transform: translate3d(-61.67px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.2656, 0.4679, 0.3934, 0.9305);
      -webkit-animation-timing-function: cubic-bezier(0.2656, 0.4679, 0.3934, 0.9305);
      -moz-animation-timing-function: cubic-bezier(0.2656, 0.4679, 0.3934, 0.9305);
    }

    11.11% {
      transform: translate3d(39.57px, 0px, 0px);
      -webkit-transform: translate3d(39.57px, 0px, 0px);
      -moz-transform: translate3d(39.57px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.4546, 0.2057, 0.9117, 0.468);
      -webkit-animation-timing-function: cubic-bezier(0.4546, 0.2057, 0.9117, 0.468);
      -moz-animation-timing-function: cubic-bezier(0.4546, 0.2057, 0.9117, 0.468);
    }

    24.68% {
      transform: translate3d(97.13px, 0px, 0px);
      -webkit-transform: translate3d(97.13px, 0px, 0px);
      -moz-transform: translate3d(97.13px, 0px, 0px);
    }

    25.04% {
      transform: translate3d(105.94px, 0px, 0px);
      -webkit-transform: translate3d(105.94px, 0px, 0px);
      -moz-transform: translate3d(105.94px, 0px, 0px);
    }

    25.4% {
      transform: translate3d(119.09px, 0px, 0px);
      -webkit-transform: translate3d(119.09px, 0px, 0px);
      -moz-transform: translate3d(119.09px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.1966, 0.4588, 0.5508, 0.7906);
      -webkit-animation-timing-function: cubic-bezier(0.1966, 0.4588, 0.5508, 0.7906);
      -moz-animation-timing-function: cubic-bezier(0.1966, 0.4588, 0.5508, 0.7906);
    }

    44.56% {
      transform: translate3d(305.67px, 0px, 0px);
      -webkit-transform: translate3d(305.67px, 0px, 0px);
      -moz-transform: translate3d(305.67px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3588, 0.3127, 0.7886, 0.5551);
      -webkit-animation-timing-function: cubic-bezier(0.3588, 0.3127, 0.7886, 0.5551);
      -moz-animation-timing-function: cubic-bezier(0.3588, 0.3127, 0.7886, 0.5551);
    }

    58.73% {
      transform: translate3d(383.11px, 0px, 0px);
      -webkit-transform: translate3d(383.11px, 0px, 0px);
      -moz-transform: translate3d(383.11px, 0px, 0px);
    }

    61.35% {
      transform: translate3d(399.74px, 0px, 0px);
      -webkit-transform: translate3d(399.74px, 0px, 0px);
      -moz-transform: translate3d(399.74px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3325, 0.3331, 0.9751, 0.4406);
      -webkit-animation-timing-function: cubic-bezier(0.3325, 0.3331, 0.9751, 0.4406);
      -moz-animation-timing-function: cubic-bezier(0.3325, 0.3331, 0.9751, 0.4406);
    }

    76.19% {
      transform: translate3d(505.64px, 0px, 0px);
      -webkit-transform: translate3d(505.64px, 0px, 0px);
      -moz-transform: translate3d(505.64px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3653, 0.2925, 0.6688, 0.6687);
      -webkit-animation-timing-function: cubic-bezier(0.3653, 0.2925, 0.6688, 0.6687);
      -moz-animation-timing-function: cubic-bezier(0.3653, 0.2925, 0.6688, 0.6687);
    }

    94.76% {
      transform: translate3d(672.63px, 0px, 0px);
      -webkit-transform: translate3d(672.63px, 0px, 0px);
      -moz-transform: translate3d(672.63px, 0px, 0px);
    }

    95.24% {
      transform: translate3d(677.04px, 0px, 0px);
      -webkit-transform: translate3d(677.04px, 0px, 0px);
      -moz-transform: translate3d(677.04px, 0px, 0px);
    }

    100% {
      transform: translate3d(677.04px, 0px, 0px);
      -webkit-transform: translate3d(677.04px, 0px, 0px);
      -moz-transform: translate3d(677.04px, 0px, 0px);
    }
  }

  @-webkit-keyframes gwd-motion-path-1f0h-keys-x {
    0% {
      -webkit-transform: translate3d(-115.12px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3197, 0.3466, 0.6676, 0.6662);
    }

    2.5% {
      -webkit-transform: translate3d(-61.67px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.2656, 0.4679, 0.3934, 0.9305);
    }

    11.11% {
      -webkit-transform: translate3d(39.57px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.4546, 0.2057, 0.9117, 0.468);
    }

    24.68% {
      -webkit-transform: translate3d(97.13px, 0px, 0px);
    }

    25.04% {
      -webkit-transform: translate3d(105.94px, 0px, 0px);
    }

    25.4% {
      -webkit-transform: translate3d(119.09px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.1966, 0.4588, 0.5508, 0.7906);
    }

    44.56% {
      -webkit-transform: translate3d(305.67px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3588, 0.3127, 0.7886, 0.5551);
    }

    58.73% {
      -webkit-transform: translate3d(383.11px, 0px, 0px);
    }

    61.35% {
      -webkit-transform: translate3d(399.74px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3325, 0.3331, 0.9751, 0.4406);
    }

    76.19% {
      -webkit-transform: translate3d(505.64px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3653, 0.2925, 0.6688, 0.6687);
    }

    94.76% {
      -webkit-transform: translate3d(672.63px, 0px, 0px);
    }

    95.24% {
      -webkit-transform: translate3d(677.04px, 0px, 0px);
    }

    100% {
      -webkit-transform: translate3d(677.04px, 0px, 0px);
    }
  }

  @-moz-keyframes gwd-motion-path-1f0h-keys-x {
    0% {
      -moz-transform: translate3d(-115.12px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3197, 0.3466, 0.6676, 0.6662);
    }

    2.5% {
      -moz-transform: translate3d(-61.67px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.2656, 0.4679, 0.3934, 0.9305);
    }

    11.11% {
      -moz-transform: translate3d(39.57px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.4546, 0.2057, 0.9117, 0.468);
    }

    24.68% {
      -moz-transform: translate3d(97.13px, 0px, 0px);
    }

    25.04% {
      -moz-transform: translate3d(105.94px, 0px, 0px);
    }

    25.4% {
      -moz-transform: translate3d(119.09px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.1966, 0.4588, 0.5508, 0.7906);
    }

    44.56% {
      -moz-transform: translate3d(305.67px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3588, 0.3127, 0.7886, 0.5551);
    }

    58.73% {
      -moz-transform: translate3d(383.11px, 0px, 0px);
    }

    61.35% {
      -moz-transform: translate3d(399.74px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3325, 0.3331, 0.9751, 0.4406);
    }

    76.19% {
      -moz-transform: translate3d(505.64px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3653, 0.2925, 0.6688, 0.6687);
    }

    94.76% {
      -moz-transform: translate3d(672.63px, 0px, 0px);
    }

    95.24% {
      -moz-transform: translate3d(677.04px, 0px, 0px);
    }

    100% {
      -moz-transform: translate3d(677.04px, 0px, 0px);
    }
  }

  .htmlNoPages .gwd-motion-path-1f0h-anim-y {
    animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1f0h-keys-y;
    -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1f0h-keys-y;
    -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1f0h-keys-y;
    transform: translate3d(0px, -192.59px, 0px);
    -webkit-transform: translate3d(0px, -192.59px, 0px);
    -moz-transform: translate3d(0px, -192.59px, 0px);
  }

  @keyframes gwd-motion-path-1f0h-keys-y {
    0% {
      transform: translate3d(0px, -192.59px, 0px);
      -webkit-transform: translate3d(0px, -192.59px, 0px);
      -moz-transform: translate3d(0px, -192.59px, 0px);
      animation-timing-function: cubic-bezier(0.1569, 0.2333, 0.621, 1.2781);
      -webkit-animation-timing-function: cubic-bezier(0.1569, 0.2333, 0.621, 1.2781);
      -moz-animation-timing-function: cubic-bezier(0.1569, 0.2333, 0.621, 1.2781);
    }

    5% {
      transform: translate3d(0px, -241.72px, 0px);
      -webkit-transform: translate3d(0px, -241.72px, 0px);
      -moz-transform: translate3d(0px, -241.72px, 0px);
      animation-timing-function: cubic-bezier(0.3609, 0.2864, 0.5666, 0.782);
      -webkit-animation-timing-function: cubic-bezier(0.3609, 0.2864, 0.5666, 0.782);
      -moz-animation-timing-function: cubic-bezier(0.3609, 0.2864, 0.5666, 0.782);
    }

    11.11% {
      transform: translate3d(0px, -173.03px, 0px);
      -webkit-transform: translate3d(0px, -173.03px, 0px);
      -moz-transform: translate3d(0px, -173.03px, 0px);
      animation-timing-function: cubic-bezier(0.4221, 0.237, 0.7683, 0.5764);
      -webkit-animation-timing-function: cubic-bezier(0.4221, 0.237, 0.7683, 0.5764);
      -moz-animation-timing-function: cubic-bezier(0.4221, 0.237, 0.7683, 0.5764);
    }

    24.68% {
      transform: translate3d(0px, -17.23px, 0px);
      -webkit-transform: translate3d(0px, -17.23px, 0px);
      -moz-transform: translate3d(0px, -17.23px, 0px);
    }

    25.04% {
      transform: translate3d(0px, -11.44px, 0px);
      -webkit-transform: translate3d(0px, -11.44px, 0px);
      -moz-transform: translate3d(0px, -11.44px, 0px);
    }

    25.4% {
      transform: translate3d(0px, -10px, 0px);
      -webkit-transform: translate3d(0px, -10px, 0px);
      -moz-transform: translate3d(0px, -10px, 0px);
      animation-timing-function: cubic-bezier(0.4042, 0.2108, 0.6951, 0.6693);
      -webkit-animation-timing-function: cubic-bezier(0.4042, 0.2108, 0.6951, 0.6693);
      -moz-animation-timing-function: cubic-bezier(0.4042, 0.2108, 0.6951, 0.6693);
    }

    30.4% {
      transform: translate3d(0px, -56.76px, 0px);
      -webkit-transform: translate3d(0px, -56.76px, 0px);
      -moz-transform: translate3d(0px, -56.76px, 0px);
      animation-timing-function: cubic-bezier(0.2582, 0.4203, 0.5666, 0.7568);
      -webkit-animation-timing-function: cubic-bezier(0.2582, 0.4203, 0.5666, 0.7568);
      -moz-animation-timing-function: cubic-bezier(0.2582, 0.4203, 0.5666, 0.7568);
    }

    51.23% {
      transform: translate3d(0px, -205.27px, 0px);
      -webkit-transform: translate3d(0px, -205.27px, 0px);
      -moz-transform: translate3d(0px, -205.27px, 0px);
      animation-timing-function: cubic-bezier(0.3018, 0.2827, 0.6288, 0.8591);
      -webkit-animation-timing-function: cubic-bezier(0.3018, 0.2827, 0.6288, 0.8591);
      -moz-animation-timing-function: cubic-bezier(0.3018, 0.2827, 0.6288, 0.8591);
    }

    58.73% {
      transform: translate3d(0px, -234px, 0px);
      -webkit-transform: translate3d(0px, -234px, 0px);
      -moz-transform: translate3d(0px, -234px, 0px);
      animation-timing-function: cubic-bezier(0.4422, 0.0168, 0.8051, 0.6648);
      -webkit-animation-timing-function: cubic-bezier(0.4422, 0.0168, 0.8051, 0.6648);
      -moz-animation-timing-function: cubic-bezier(0.4422, 0.0168, 0.8051, 0.6648);
    }

    70.95% {
      transform: translate3d(0px, -154.73px, 0px);
      -webkit-transform: translate3d(0px, -154.73px, 0px);
      -moz-transform: translate3d(0px, -154.73px, 0px);
      animation-timing-function: cubic-bezier(0.3841, 0.2675, 0.7641, 0.5885);
      -webkit-animation-timing-function: cubic-bezier(0.3841, 0.2675, 0.7641, 0.5885);
      -moz-animation-timing-function: cubic-bezier(0.3841, 0.2675, 0.7641, 0.5885);
    }

    75.75% {
      transform: translate3d(0px, -69.69px, 0px);
      -webkit-transform: translate3d(0px, -69.69px, 0px);
      -moz-transform: translate3d(0px, -69.69px, 0px);
    }

    76.19% {
      transform: translate3d(0px, -49px, 0px);
      -webkit-transform: translate3d(0px, -49px, 0px);
      -moz-transform: translate3d(0px, -49px, 0px);
      animation-timing-function: cubic-bezier(0.2416, 0.6205, 0.3644, 0.8304);
      -webkit-animation-timing-function: cubic-bezier(0.2416, 0.6205, 0.3644, 0.8304);
      -moz-animation-timing-function: cubic-bezier(0.2416, 0.6205, 0.3644, 0.8304);
    }

    92.38% {
      transform: translate3d(0px, -7.77px, 0px);
      -webkit-transform: translate3d(0px, -7.77px, 0px);
      -moz-transform: translate3d(0px, -7.77px, 0px);
    }

    95.24% {
      transform: translate3d(0px, -3px, 0px);
      -webkit-transform: translate3d(0px, -3px, 0px);
      -moz-transform: translate3d(0px, -3px, 0px);
    }

    100% {
      transform: translate3d(0px, -3px, 0px);
      -webkit-transform: translate3d(0px, -3px, 0px);
      -moz-transform: translate3d(0px, -3px, 0px);
    }
  }

  @-webkit-keyframes gwd-motion-path-1f0h-keys-y {
    0% {
      -webkit-transform: translate3d(0px, -192.59px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.1569, 0.2333, 0.621, 1.2781);
    }

    5% {
      -webkit-transform: translate3d(0px, -241.72px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3609, 0.2864, 0.5666, 0.782);
    }

    11.11% {
      -webkit-transform: translate3d(0px, -173.03px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.4221, 0.237, 0.7683, 0.5764);
    }

    24.68% {
      -webkit-transform: translate3d(0px, -17.23px, 0px);
    }

    25.04% {
      -webkit-transform: translate3d(0px, -11.44px, 0px);
    }

    25.4% {
      -webkit-transform: translate3d(0px, -10px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.4042, 0.2108, 0.6951, 0.6693);
    }

    30.4% {
      -webkit-transform: translate3d(0px, -56.76px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.2582, 0.4203, 0.5666, 0.7568);
    }

    51.23% {
      -webkit-transform: translate3d(0px, -205.27px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3018, 0.2827, 0.6288, 0.8591);
    }

    58.73% {
      -webkit-transform: translate3d(0px, -234px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.4422, 0.0168, 0.8051, 0.6648);
    }

    70.95% {
      -webkit-transform: translate3d(0px, -154.73px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3841, 0.2675, 0.7641, 0.5885);
    }

    75.75% {
      -webkit-transform: translate3d(0px, -69.69px, 0px);
    }

    76.19% {
      -webkit-transform: translate3d(0px, -49px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.2416, 0.6205, 0.3644, 0.8304);
    }

    92.38% {
      -webkit-transform: translate3d(0px, -7.77px, 0px);
    }

    95.24% {
      -webkit-transform: translate3d(0px, -3px, 0px);
    }

    100% {
      -webkit-transform: translate3d(0px, -3px, 0px);
    }
  }

  @-moz-keyframes gwd-motion-path-1f0h-keys-y {
    0% {
      -moz-transform: translate3d(0px, -192.59px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.1569, 0.2333, 0.621, 1.2781);
    }

    5% {
      -moz-transform: translate3d(0px, -241.72px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3609, 0.2864, 0.5666, 0.782);
    }

    11.11% {
      -moz-transform: translate3d(0px, -173.03px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.4221, 0.237, 0.7683, 0.5764);
    }

    24.68% {
      -moz-transform: translate3d(0px, -17.23px, 0px);
    }

    25.04% {
      -moz-transform: translate3d(0px, -11.44px, 0px);
    }

    25.4% {
      -moz-transform: translate3d(0px, -10px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.4042, 0.2108, 0.6951, 0.6693);
    }

    30.4% {
      -moz-transform: translate3d(0px, -56.76px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.2582, 0.4203, 0.5666, 0.7568);
    }

    51.23% {
      -moz-transform: translate3d(0px, -205.27px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3018, 0.2827, 0.6288, 0.8591);
    }

    58.73% {
      -moz-transform: translate3d(0px, -234px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.4422, 0.0168, 0.8051, 0.6648);
    }

    70.95% {
      -moz-transform: translate3d(0px, -154.73px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3841, 0.2675, 0.7641, 0.5885);
    }

    75.75% {
      -moz-transform: translate3d(0px, -69.69px, 0px);
    }

    76.19% {
      -moz-transform: translate3d(0px, -49px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.2416, 0.6205, 0.3644, 0.8304);
    }

    92.38% {
      -moz-transform: translate3d(0px, -7.77px, 0px);
    }

    95.24% {
      -moz-transform: translate3d(0px, -3px, 0px);
    }

    100% {
      -moz-transform: translate3d(0px, -3px, 0px);
    }
  }

  .htmlNoPages .gwd-motion-path-1f0h-anim-theta {
    animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1f0h-keys-theta;
    -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1f0h-keys-theta;
    -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1f0h-keys-theta;
    transform: rotateZ(-35.85deg);
    -webkit-transform: rotateZ(-35.85deg);
    -moz-transform: rotateZ(-35.85deg);
  }

  @keyframes gwd-motion-path-1f0h-keys-theta {
    0% {
      transform: rotateZ(-35.85deg);
      -webkit-transform: rotateZ(-35.85deg);
      -moz-transform: rotateZ(-35.85deg);
      animation-timing-function: cubic-bezier(0.3992, -0.4301, 0.9422, 0.6843);
      -webkit-animation-timing-function: cubic-bezier(0.3992, -0.4301, 0.9422, 0.6843);
      -moz-animation-timing-function: cubic-bezier(0.3992, -0.4301, 0.9422, 0.6843);
    }

    3.89% {
      transform: rotateZ(-9.54deg);
      -webkit-transform: rotateZ(-9.54deg);
      -moz-transform: rotateZ(-9.54deg);
      animation-timing-function: cubic-bezier(0.2609, 0.5548, 0.3146, 0.9398);
      -webkit-animation-timing-function: cubic-bezier(0.2609, 0.5548, 0.3146, 0.9398);
      -moz-animation-timing-function: cubic-bezier(0.2609, 0.5548, 0.3146, 0.9398);
    }

    11.11% {
      transform: rotateZ(73.86deg);
      -webkit-transform: rotateZ(73.86deg);
      -moz-transform: rotateZ(73.86deg);
      animation-timing-function: cubic-bezier(0.6006, -0.3813, 1, 0.3503);
      -webkit-animation-timing-function: cubic-bezier(0.6006, -0.3813, 1, 0.3503);
      -moz-animation-timing-function: cubic-bezier(0.6006, -0.3813, 1, 0.3503);
    }

    23.61% {
      transform: rotateZ(62.43deg);
      -webkit-transform: rotateZ(62.43deg);
      -moz-transform: rotateZ(62.43deg);
      animation-timing-function: cubic-bezier(0.5898, 0.1069, 0.806, 0.4493);
      -webkit-animation-timing-function: cubic-bezier(0.5898, 0.1069, 0.806, 0.4493);
      -moz-animation-timing-function: cubic-bezier(0.5898, 0.1069, 0.806, 0.4493);
    }

    25.4% {
      transform: rotateZ(-9.9deg);
      -webkit-transform: rotateZ(-9.9deg);
      -moz-transform: rotateZ(-9.9deg);
      animation-timing-function: cubic-bezier(0.0735, 0.8786, 0.3021, 1.3172);
      -webkit-animation-timing-function: cubic-bezier(0.0735, 0.8786, 0.3021, 1.3172);
      -moz-animation-timing-function: cubic-bezier(0.0735, 0.8786, 0.3021, 1.3172);
    }

    49.56% {
      transform: rotateZ(-46.12deg);
      -webkit-transform: rotateZ(-46.12deg);
      -moz-transform: rotateZ(-46.12deg);
      animation-timing-function: cubic-bezier(0.6316, 0.1019, 0.8779, 0.3368);
      -webkit-animation-timing-function: cubic-bezier(0.6316, 0.1019, 0.8779, 0.3368);
      -moz-animation-timing-function: cubic-bezier(0.6316, 0.1019, 0.8779, 0.3368);
    }

    58.73% {
      transform: rotateZ(0.97deg);
      -webkit-transform: rotateZ(0.97deg);
      -moz-transform: rotateZ(0.97deg);
      animation-timing-function: cubic-bezier(0.1701, 0.4044, 0.4075, 1.3593);
      -webkit-animation-timing-function: cubic-bezier(0.1701, 0.4044, 0.4075, 1.3593);
      -moz-animation-timing-function: cubic-bezier(0.1701, 0.4044, 0.4075, 1.3593);
    }

    74.44% {
      transform: rotateZ(63.26deg);
      -webkit-transform: rotateZ(63.26deg);
      -moz-transform: rotateZ(63.26deg);
      animation-timing-function: cubic-bezier(0.4545, 0.1656, 0.9149, 0.4742);
      -webkit-animation-timing-function: cubic-bezier(0.4545, 0.1656, 0.9149, 0.4742);
      -moz-animation-timing-function: cubic-bezier(0.4545, 0.1656, 0.9149, 0.4742);
    }

    76.19% {
      transform: rotateZ(44.79deg);
      -webkit-transform: rotateZ(44.79deg);
      -moz-transform: rotateZ(44.79deg);
      animation-timing-function: cubic-bezier(0.1699, 0.4067, 0.4934, 1.816);
      -webkit-animation-timing-function: cubic-bezier(0.1699, 0.4067, 0.4934, 1.816);
      -moz-animation-timing-function: cubic-bezier(0.1699, 0.4067, 0.4934, 1.816);
    }

    94.76% {
      transform: rotateZ(12.46deg);
      -webkit-transform: rotateZ(12.46deg);
      -moz-transform: rotateZ(12.46deg);
    }

    95.24% {
      transform: rotateZ(0deg);
      -webkit-transform: rotateZ(0deg);
      -moz-transform: rotateZ(0deg);
    }

    100% {
      transform: rotateZ(0deg);
      -webkit-transform: rotateZ(0deg);
      -moz-transform: rotateZ(0deg);
    }
  }

  @-webkit-keyframes gwd-motion-path-1f0h-keys-theta {
    0% {
      -webkit-transform: rotateZ(-35.85deg);
      -webkit-animation-timing-function: cubic-bezier(0.3992, -0.4301, 0.9422, 0.6843);
    }

    3.89% {
      -webkit-transform: rotateZ(-9.54deg);
      -webkit-animation-timing-function: cubic-bezier(0.2609, 0.5548, 0.3146, 0.9398);
    }

    11.11% {
      -webkit-transform: rotateZ(73.86deg);
      -webkit-animation-timing-function: cubic-bezier(0.6006, -0.3813, 1, 0.3503);
    }

    23.61% {
      -webkit-transform: rotateZ(62.43deg);
      -webkit-animation-timing-function: cubic-bezier(0.5898, 0.1069, 0.806, 0.4493);
    }

    25.4% {
      -webkit-transform: rotateZ(-9.9deg);
      -webkit-animation-timing-function: cubic-bezier(0.0735, 0.8786, 0.3021, 1.3172);
    }

    49.56% {
      -webkit-transform: rotateZ(-46.12deg);
      -webkit-animation-timing-function: cubic-bezier(0.6316, 0.1019, 0.8779, 0.3368);
    }

    58.73% {
      -webkit-transform: rotateZ(0.97deg);
      -webkit-animation-timing-function: cubic-bezier(0.1701, 0.4044, 0.4075, 1.3593);
    }

    74.44% {
      -webkit-transform: rotateZ(63.26deg);
      -webkit-animation-timing-function: cubic-bezier(0.4545, 0.1656, 0.9149, 0.4742);
    }

    76.19% {
      -webkit-transform: rotateZ(44.79deg);
      -webkit-animation-timing-function: cubic-bezier(0.1699, 0.4067, 0.4934, 1.816);
    }

    94.76% {
      -webkit-transform: rotateZ(12.46deg);
    }

    95.24% {
      -webkit-transform: rotateZ(0deg);
    }

    100% {
      -webkit-transform: rotateZ(0deg);
    }
  }

  @-moz-keyframes gwd-motion-path-1f0h-keys-theta {
    0% {
      -moz-transform: rotateZ(-35.85deg);
      -moz-animation-timing-function: cubic-bezier(0.3992, -0.4301, 0.9422, 0.6843);
    }

    3.89% {
      -moz-transform: rotateZ(-9.54deg);
      -moz-animation-timing-function: cubic-bezier(0.2609, 0.5548, 0.3146, 0.9398);
    }

    11.11% {
      -moz-transform: rotateZ(73.86deg);
      -moz-animation-timing-function: cubic-bezier(0.6006, -0.3813, 1, 0.3503);
    }

    23.61% {
      -moz-transform: rotateZ(62.43deg);
      -moz-animation-timing-function: cubic-bezier(0.5898, 0.1069, 0.806, 0.4493);
    }

    25.4% {
      -moz-transform: rotateZ(-9.9deg);
      -moz-animation-timing-function: cubic-bezier(0.0735, 0.8786, 0.3021, 1.3172);
    }

    49.56% {
      -moz-transform: rotateZ(-46.12deg);
      -moz-animation-timing-function: cubic-bezier(0.6316, 0.1019, 0.8779, 0.3368);
    }

    58.73% {
      -moz-transform: rotateZ(0.97deg);
      -moz-animation-timing-function: cubic-bezier(0.1701, 0.4044, 0.4075, 1.3593);
    }

    74.44% {
      -moz-transform: rotateZ(63.26deg);
      -moz-animation-timing-function: cubic-bezier(0.4545, 0.1656, 0.9149, 0.4742);
    }

    76.19% {
      -moz-transform: rotateZ(44.79deg);
      -moz-animation-timing-function: cubic-bezier(0.1699, 0.4067, 0.4934, 1.816);
    }

    94.76% {
      -moz-transform: rotateZ(12.46deg);
    }

    95.24% {
      -moz-transform: rotateZ(0deg);
    }

    100% {
      -moz-transform: rotateZ(0deg);
    }
  }

  .htmlNoPages .gwd-motion-path-3ytk-anim-x {
    animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-3ytk-keys-x;
    -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-3ytk-keys-x;
    -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-3ytk-keys-x;
    transform: translate3d(-207px, 0px, 0px);
    -webkit-transform: translate3d(-207px, 0px, 0px);
    -moz-transform: translate3d(-207px, 0px, 0px);
  }

  @keyframes gwd-motion-path-3ytk-keys-x {
    0% {
      transform: translate3d(-207px, 0px, 0px);
      -webkit-transform: translate3d(-207px, 0px, 0px);
      -moz-transform: translate3d(-207px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3021, 0.3581, 0.6484, 0.6928);
      -webkit-animation-timing-function: cubic-bezier(0.3021, 0.3581, 0.6484, 0.6928);
      -moz-animation-timing-function: cubic-bezier(0.3021, 0.3581, 0.6484, 0.6928);
    }

    8.33% {
      transform: translate3d(-57.63px, 0px, 0px);
      -webkit-transform: translate3d(-57.63px, 0px, 0px);
      -moz-transform: translate3d(-57.63px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.2751, 0.3748, 0.5813, 0.7781);
      -webkit-animation-timing-function: cubic-bezier(0.2751, 0.3748, 0.5813, 0.7781);
      -moz-animation-timing-function: cubic-bezier(0.2751, 0.3748, 0.5813, 0.7781);
    }

    11.11% {
      transform: translate3d(-28.53px, 0px, 0px);
      -webkit-transform: translate3d(-28.53px, 0px, 0px);
      -moz-transform: translate3d(-28.53px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.2564, 0.4327, 0.6361, 0.6731);
      -webkit-animation-timing-function: cubic-bezier(0.2564, 0.4327, 0.6361, 0.6731);
      -moz-animation-timing-function: cubic-bezier(0.2564, 0.4327, 0.6361, 0.6731);
    }

    29.56% {
      transform: translate3d(39.61px, 0px, 0px);
      -webkit-transform: translate3d(39.61px, 0px, 0px);
      -moz-transform: translate3d(39.61px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.5282, 0.1787, 0.8695, 0.4178);
      -webkit-animation-timing-function: cubic-bezier(0.5282, 0.1787, 0.8695, 0.4178);
      -moz-animation-timing-function: cubic-bezier(0.5282, 0.1787, 0.8695, 0.4178);
    }

    34.92% {
      transform: translate3d(98.52px, 0px, 0px);
      -webkit-transform: translate3d(98.52px, 0px, 0px);
      -moz-transform: translate3d(98.52px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.1993, 0.4567, 0.5515, 0.7897);
      -webkit-animation-timing-function: cubic-bezier(0.1993, 0.4567, 0.5515, 0.7897);
      -moz-animation-timing-function: cubic-bezier(0.1993, 0.4567, 0.5515, 0.7897);
    }

    54.09% {
      transform: translate3d(292px, 0px, 0px);
      -webkit-transform: translate3d(292px, 0px, 0px);
      -moz-transform: translate3d(292px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3578, 0.3137, 0.7857, 0.5573);
      -webkit-animation-timing-function: cubic-bezier(0.3578, 0.3137, 0.7857, 0.5573);
      -moz-animation-timing-function: cubic-bezier(0.3578, 0.3137, 0.7857, 0.5573);
    }

    68.25% {
      transform: translate3d(372.28px, 0px, 0px);
      -webkit-transform: translate3d(372.28px, 0px, 0px);
      -moz-transform: translate3d(372.28px, 0px, 0px);
    }

    71.03% {
      transform: translate3d(391.93px, 0px, 0px);
      -webkit-transform: translate3d(391.93px, 0px, 0px);
      -moz-transform: translate3d(391.93px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3416, 0.3263, 0.9739, 0.4397);
      -webkit-animation-timing-function: cubic-bezier(0.3416, 0.3263, 0.9739, 0.4397);
      -moz-animation-timing-function: cubic-bezier(0.3416, 0.3263, 0.9739, 0.4397);
    }

    84.13% {
      transform: translate3d(499.32px, 0px, 0px);
      -webkit-transform: translate3d(499.32px, 0px, 0px);
      -moz-transform: translate3d(499.32px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3636, 0.295, 0.6685, 0.6685);
      -webkit-animation-timing-function: cubic-bezier(0.3636, 0.295, 0.6685, 0.6685);
      -moz-animation-timing-function: cubic-bezier(0.3636, 0.295, 0.6685, 0.6685);
    }

    99.6% {
      transform: translate3d(672.47px, 0px, 0px);
      -webkit-transform: translate3d(672.47px, 0px, 0px);
      -moz-transform: translate3d(672.47px, 0px, 0px);
    }

    100% {
      transform: translate3d(677.04px, 0px, 0px);
      -webkit-transform: translate3d(677.04px, 0px, 0px);
      -moz-transform: translate3d(677.04px, 0px, 0px);
    }
  }

  @-webkit-keyframes gwd-motion-path-3ytk-keys-x {
    0% {
      -webkit-transform: translate3d(-207px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3021, 0.3581, 0.6484, 0.6928);
    }

    8.33% {
      -webkit-transform: translate3d(-57.63px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.2751, 0.3748, 0.5813, 0.7781);
    }

    11.11% {
      -webkit-transform: translate3d(-28.53px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.2564, 0.4327, 0.6361, 0.6731);
    }

    29.56% {
      -webkit-transform: translate3d(39.61px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.5282, 0.1787, 0.8695, 0.4178);
    }

    34.92% {
      -webkit-transform: translate3d(98.52px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.1993, 0.4567, 0.5515, 0.7897);
    }

    54.09% {
      -webkit-transform: translate3d(292px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3578, 0.3137, 0.7857, 0.5573);
    }

    68.25% {
      -webkit-transform: translate3d(372.28px, 0px, 0px);
    }

    71.03% {
      -webkit-transform: translate3d(391.93px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3416, 0.3263, 0.9739, 0.4397);
    }

    84.13% {
      -webkit-transform: translate3d(499.32px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3636, 0.295, 0.6685, 0.6685);
    }

    99.6% {
      -webkit-transform: translate3d(672.47px, 0px, 0px);
    }

    100% {
      -webkit-transform: translate3d(677.04px, 0px, 0px);
    }
  }

  @-moz-keyframes gwd-motion-path-3ytk-keys-x {
    0% {
      -moz-transform: translate3d(-207px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3021, 0.3581, 0.6484, 0.6928);
    }

    8.33% {
      -moz-transform: translate3d(-57.63px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.2751, 0.3748, 0.5813, 0.7781);
    }

    11.11% {
      -moz-transform: translate3d(-28.53px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.2564, 0.4327, 0.6361, 0.6731);
    }

    29.56% {
      -moz-transform: translate3d(39.61px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.5282, 0.1787, 0.8695, 0.4178);
    }

    34.92% {
      -moz-transform: translate3d(98.52px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.1993, 0.4567, 0.5515, 0.7897);
    }

    54.09% {
      -moz-transform: translate3d(292px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3578, 0.3137, 0.7857, 0.5573);
    }

    68.25% {
      -moz-transform: translate3d(372.28px, 0px, 0px);
    }

    71.03% {
      -moz-transform: translate3d(391.93px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3416, 0.3263, 0.9739, 0.4397);
    }

    84.13% {
      -moz-transform: translate3d(499.32px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3636, 0.295, 0.6685, 0.6685);
    }

    99.6% {
      -moz-transform: translate3d(672.47px, 0px, 0px);
    }

    100% {
      -moz-transform: translate3d(677.04px, 0px, 0px);
    }
  }

  .htmlNoPages .gwd-motion-path-3ytk-anim-y {
    animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-3ytk-keys-y;
    -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-3ytk-keys-y;
    -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-3ytk-keys-y;
    transform: translate3d(0px, -147px, 0px);
    -webkit-transform: translate3d(0px, -147px, 0px);
    -moz-transform: translate3d(0px, -147px, 0px);
  }

  @keyframes gwd-motion-path-3ytk-keys-y {
    0% {
      transform: translate3d(0px, -147px, 0px);
      -webkit-transform: translate3d(0px, -147px, 0px);
      -moz-transform: translate3d(0px, -147px, 0px);
      animation-timing-function: cubic-bezier(0.2562, 0.3503, 0.5615, 0.8663);
      -webkit-animation-timing-function: cubic-bezier(0.2562, 0.3503, 0.5615, 0.8663);
      -moz-animation-timing-function: cubic-bezier(0.2562, 0.3503, 0.5615, 0.8663);
    }

    8.06% {
      transform: translate3d(0px, -260.63px, 0px);
      -webkit-transform: translate3d(0px, -260.63px, 0px);
      -moz-transform: translate3d(0px, -260.63px, 0px);
      animation-timing-function: cubic-bezier(0.3709, -2.4515, 0.7415, 0.1293);
      -webkit-animation-timing-function: cubic-bezier(0.3709, -2.4515, 0.7415, 0.1293);
      -moz-animation-timing-function: cubic-bezier(0.3709, -2.4515, 0.7415, 0.1293);
    }

    11.11% {
      transform: translate3d(0px, -259px, 0px);
      -webkit-transform: translate3d(0px, -259px, 0px);
      -moz-transform: translate3d(0px, -259px, 0px);
      animation-timing-function: cubic-bezier(0.4258, 0.1533, 0.7638, 0.634);
      -webkit-animation-timing-function: cubic-bezier(0.4258, 0.1533, 0.7638, 0.634);
      -moz-animation-timing-function: cubic-bezier(0.4258, 0.1533, 0.7638, 0.634);
    }

    27.18% {
      transform: translate3d(0px, -142.67px, 0px);
      -webkit-transform: translate3d(0px, -142.67px, 0px);
      -moz-transform: translate3d(0px, -142.67px, 0px);
      animation-timing-function: cubic-bezier(0.3766, 0.2901, 0.7074, 0.6271);
      -webkit-animation-timing-function: cubic-bezier(0.3766, 0.2901, 0.7074, 0.6271);
      -moz-animation-timing-function: cubic-bezier(0.3766, 0.2901, 0.7074, 0.6271);
    }

    33.73% {
      transform: translate3d(0px, -42.79px, 0px);
      -webkit-transform: translate3d(0px, -42.79px, 0px);
      -moz-transform: translate3d(0px, -42.79px, 0px);
    }

    34.33% {
      transform: translate3d(0px, -32.87px, 0px);
      -webkit-transform: translate3d(0px, -32.87px, 0px);
      -moz-transform: translate3d(0px, -32.87px, 0px);
    }

    34.92% {
      transform: translate3d(0px, -30px, 0px);
      -webkit-transform: translate3d(0px, -30px, 0px);
      -moz-transform: translate3d(0px, -30px, 0px);
      animation-timing-function: cubic-bezier(0.4042, 0.2134, 0.6953, 0.6677);
      -webkit-animation-timing-function: cubic-bezier(0.4042, 0.2134, 0.6953, 0.6677);
      -moz-animation-timing-function: cubic-bezier(0.4042, 0.2134, 0.6953, 0.6677);
    }

    39.92% {
      transform: translate3d(0px, -76.63px, 0px);
      -webkit-transform: translate3d(0px, -76.63px, 0px);
      -moz-transform: translate3d(0px, -76.63px, 0px);
      animation-timing-function: cubic-bezier(0.2588, 0.4197, 0.5661, 0.7574);
      -webkit-animation-timing-function: cubic-bezier(0.2588, 0.4197, 0.5661, 0.7574);
      -moz-animation-timing-function: cubic-bezier(0.2588, 0.4197, 0.5661, 0.7574);
    }

    60.75% {
      transform: translate3d(0px, -225.56px, 0px);
      -webkit-transform: translate3d(0px, -225.56px, 0px);
      -moz-transform: translate3d(0px, -225.56px, 0px);
      animation-timing-function: cubic-bezier(0.2991, 0.2826, 0.628, 0.8633);
      -webkit-animation-timing-function: cubic-bezier(0.2991, 0.2826, 0.628, 0.8633);
      -moz-animation-timing-function: cubic-bezier(0.2991, 0.2826, 0.628, 0.8633);
    }

    68.25% {
      transform: translate3d(0px, -254px, 0px);
      -webkit-transform: translate3d(0px, -254px, 0px);
      -moz-transform: translate3d(0px, -254px, 0px);
      animation-timing-function: cubic-bezier(0.4457, 0.0139, 0.8085, 0.6613);
      -webkit-animation-timing-function: cubic-bezier(0.4457, 0.0139, 0.8085, 0.6613);
      -moz-animation-timing-function: cubic-bezier(0.4457, 0.0139, 0.8085, 0.6613);
    }

    79.76% {
      transform: translate3d(0px, -169.54px, 0px);
      -webkit-transform: translate3d(0px, -169.54px, 0px);
      -moz-transform: translate3d(0px, -169.54px, 0px);
      animation-timing-function: cubic-bezier(0.3821, 0.2709, 0.7586, 0.5922);
      -webkit-animation-timing-function: cubic-bezier(0.3821, 0.2709, 0.7586, 0.5922);
      -moz-animation-timing-function: cubic-bezier(0.3821, 0.2709, 0.7586, 0.5922);
    }

    83.73% {
      transform: translate3d(0px, -89.61px, 0px);
      -webkit-transform: translate3d(0px, -89.61px, 0px);
      -moz-transform: translate3d(0px, -89.61px, 0px);
    }

    84.13% {
      transform: translate3d(0px, -69px, 0px);
      -webkit-transform: translate3d(0px, -69px, 0px);
      -moz-transform: translate3d(0px, -69px, 0px);
      animation-timing-function: cubic-bezier(0.2396, 0.6242, 0.3637, 0.83);
      -webkit-animation-timing-function: cubic-bezier(0.2396, 0.6242, 0.3637, 0.83);
      -moz-animation-timing-function: cubic-bezier(0.2396, 0.6242, 0.3637, 0.83);
    }

    97.62% {
      transform: translate3d(0px, -27.76px, 0px);
      -webkit-transform: translate3d(0px, -27.76px, 0px);
      -moz-transform: translate3d(0px, -27.76px, 0px);
    }

    100% {
      transform: translate3d(0px, -23px, 0px);
      -webkit-transform: translate3d(0px, -23px, 0px);
      -moz-transform: translate3d(0px, -23px, 0px);
    }
  }

  @-webkit-keyframes gwd-motion-path-3ytk-keys-y {
    0% {
      -webkit-transform: translate3d(0px, -147px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.2562, 0.3503, 0.5615, 0.8663);
    }

    8.06% {
      -webkit-transform: translate3d(0px, -260.63px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3709, -2.4515, 0.7415, 0.1293);
    }

    11.11% {
      -webkit-transform: translate3d(0px, -259px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.4258, 0.1533, 0.7638, 0.634);
    }

    27.18% {
      -webkit-transform: translate3d(0px, -142.67px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3766, 0.2901, 0.7074, 0.6271);
    }

    33.73% {
      -webkit-transform: translate3d(0px, -42.79px, 0px);
    }

    34.33% {
      -webkit-transform: translate3d(0px, -32.87px, 0px);
    }

    34.92% {
      -webkit-transform: translate3d(0px, -30px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.4042, 0.2134, 0.6953, 0.6677);
    }

    39.92% {
      -webkit-transform: translate3d(0px, -76.63px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.2588, 0.4197, 0.5661, 0.7574);
    }

    60.75% {
      -webkit-transform: translate3d(0px, -225.56px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.2991, 0.2826, 0.628, 0.8633);
    }

    68.25% {
      -webkit-transform: translate3d(0px, -254px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.4457, 0.0139, 0.8085, 0.6613);
    }

    79.76% {
      -webkit-transform: translate3d(0px, -169.54px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3821, 0.2709, 0.7586, 0.5922);
    }

    83.73% {
      -webkit-transform: translate3d(0px, -89.61px, 0px);
    }

    84.13% {
      -webkit-transform: translate3d(0px, -69px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.2396, 0.6242, 0.3637, 0.83);
    }

    97.62% {
      -webkit-transform: translate3d(0px, -27.76px, 0px);
    }

    100% {
      -webkit-transform: translate3d(0px, -23px, 0px);
    }
  }

  @-moz-keyframes gwd-motion-path-3ytk-keys-y {
    0% {
      -moz-transform: translate3d(0px, -147px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.2562, 0.3503, 0.5615, 0.8663);
    }

    8.06% {
      -moz-transform: translate3d(0px, -260.63px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3709, -2.4515, 0.7415, 0.1293);
    }

    11.11% {
      -moz-transform: translate3d(0px, -259px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.4258, 0.1533, 0.7638, 0.634);
    }

    27.18% {
      -moz-transform: translate3d(0px, -142.67px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3766, 0.2901, 0.7074, 0.6271);
    }

    33.73% {
      -moz-transform: translate3d(0px, -42.79px, 0px);
    }

    34.33% {
      -moz-transform: translate3d(0px, -32.87px, 0px);
    }

    34.92% {
      -moz-transform: translate3d(0px, -30px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.4042, 0.2134, 0.6953, 0.6677);
    }

    39.92% {
      -moz-transform: translate3d(0px, -76.63px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.2588, 0.4197, 0.5661, 0.7574);
    }

    60.75% {
      -moz-transform: translate3d(0px, -225.56px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.2991, 0.2826, 0.628, 0.8633);
    }

    68.25% {
      -moz-transform: translate3d(0px, -254px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.4457, 0.0139, 0.8085, 0.6613);
    }

    79.76% {
      -moz-transform: translate3d(0px, -169.54px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3821, 0.2709, 0.7586, 0.5922);
    }

    83.73% {
      -moz-transform: translate3d(0px, -89.61px, 0px);
    }

    84.13% {
      -moz-transform: translate3d(0px, -69px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.2396, 0.6242, 0.3637, 0.83);
    }

    97.62% {
      -moz-transform: translate3d(0px, -27.76px, 0px);
    }

    100% {
      -moz-transform: translate3d(0px, -23px, 0px);
    }
  }

  .htmlNoPages .gwd-motion-path-3ytk-anim-theta {
    animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-3ytk-keys-theta;
    -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-3ytk-keys-theta;
    -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-3ytk-keys-theta;
    transform: rotateZ(-40.81deg);
    -webkit-transform: rotateZ(-40.81deg);
    -moz-transform: rotateZ(-40.81deg);
  }

  @keyframes gwd-motion-path-3ytk-keys-theta {
    0% {
      transform: rotateZ(-40.81deg);
      -webkit-transform: rotateZ(-40.81deg);
      -moz-transform: rotateZ(-40.81deg);
    }

    0.28% {
      transform: rotateZ(-43.23deg);
      -webkit-transform: rotateZ(-43.23deg);
      -moz-transform: rotateZ(-43.23deg);
      animation-timing-function: cubic-bezier(0.5431, -0.171, 0.7647, 0.6788);
      -webkit-animation-timing-function: cubic-bezier(0.5431, -0.171, 0.7647, 0.6788);
      -moz-animation-timing-function: cubic-bezier(0.5431, -0.171, 0.7647, 0.6788);
    }

    11.11% {
      transform: rotateZ(20.58deg);
      -webkit-transform: rotateZ(20.58deg);
      -moz-transform: rotateZ(20.58deg);
      animation-timing-function: cubic-bezier(0.1087, 0.434, 0.4325, 1.2196);
      -webkit-animation-timing-function: cubic-bezier(0.1087, 0.434, 0.4325, 1.2196);
      -moz-animation-timing-function: cubic-bezier(0.1087, 0.434, 0.4325, 1.2196);
    }

    30.75% {
      transform: rotateZ(73.06deg);
      -webkit-transform: rotateZ(73.06deg);
      -moz-transform: rotateZ(73.06deg);
      animation-timing-function: cubic-bezier(0.709, 0.0592, 0.8193, 0.299);
      -webkit-animation-timing-function: cubic-bezier(0.709, 0.0592, 0.8193, 0.299);
      -moz-animation-timing-function: cubic-bezier(0.709, 0.0592, 0.8193, 0.299);
    }

    34.92% {
      transform: rotateZ(-9.97deg);
      -webkit-transform: rotateZ(-9.97deg);
      -moz-transform: rotateZ(-9.97deg);
      animation-timing-function: cubic-bezier(0.0887, 0.8089, 0.2767, 1.2537);
      -webkit-animation-timing-function: cubic-bezier(0.0887, 0.8089, 0.2767, 1.2537);
      -moz-animation-timing-function: cubic-bezier(0.0887, 0.8089, 0.2767, 1.2537);
    }

    57.42% {
      transform: rotateZ(-46.25deg);
      -webkit-transform: rotateZ(-46.25deg);
      -moz-transform: rotateZ(-46.25deg);
      animation-timing-function: cubic-bezier(0.6458, 0.0973, 0.8873, 0.3102);
      -webkit-animation-timing-function: cubic-bezier(0.6458, 0.0973, 0.8873, 0.3102);
      -moz-animation-timing-function: cubic-bezier(0.6458, 0.0973, 0.8873, 0.3102);
    }

    68.25% {
      transform: rotateZ(0.94deg);
      -webkit-transform: rotateZ(0.94deg);
      -moz-transform: rotateZ(0.94deg);
      animation-timing-function: cubic-bezier(0.1774, 0.3933, 0.419, 1.3709);
      -webkit-animation-timing-function: cubic-bezier(0.1774, 0.3933, 0.419, 1.3709);
      -moz-animation-timing-function: cubic-bezier(0.1774, 0.3933, 0.419, 1.3709);
    }

    82.54% {
      transform: rotateZ(62.41deg);
      -webkit-transform: rotateZ(62.41deg);
      -moz-transform: rotateZ(62.41deg);
      animation-timing-function: cubic-bezier(0.4526, 0.1679, 0.9116, 0.4775);
      -webkit-animation-timing-function: cubic-bezier(0.4526, 0.1679, 0.9116, 0.4775);
      -moz-animation-timing-function: cubic-bezier(0.4526, 0.1679, 0.9116, 0.4775);
    }

    84.13% {
      transform: rotateZ(43.75deg);
      -webkit-transform: rotateZ(43.75deg);
      -moz-transform: rotateZ(43.75deg);
      animation-timing-function: cubic-bezier(0.1657, 0.4524, 0.4938, 1.9361);
      -webkit-animation-timing-function: cubic-bezier(0.1657, 0.4524, 0.4938, 1.9361);
      -moz-animation-timing-function: cubic-bezier(0.1657, 0.4524, 0.4938, 1.9361);
    }

    100% {
      transform: rotateZ(13.43deg);
      -webkit-transform: rotateZ(13.43deg);
      -moz-transform: rotateZ(13.43deg);
    }
  }

  @-webkit-keyframes gwd-motion-path-3ytk-keys-theta {
    0% {
      -webkit-transform: rotateZ(-40.81deg);
    }

    0.28% {
      -webkit-transform: rotateZ(-43.23deg);
      -webkit-animation-timing-function: cubic-bezier(0.5431, -0.171, 0.7647, 0.6788);
    }

    11.11% {
      -webkit-transform: rotateZ(20.58deg);
      -webkit-animation-timing-function: cubic-bezier(0.1087, 0.434, 0.4325, 1.2196);
    }

    30.75% {
      -webkit-transform: rotateZ(73.06deg);
      -webkit-animation-timing-function: cubic-bezier(0.709, 0.0592, 0.8193, 0.299);
    }

    34.92% {
      -webkit-transform: rotateZ(-9.97deg);
      -webkit-animation-timing-function: cubic-bezier(0.0887, 0.8089, 0.2767, 1.2537);
    }

    57.42% {
      -webkit-transform: rotateZ(-46.25deg);
      -webkit-animation-timing-function: cubic-bezier(0.6458, 0.0973, 0.8873, 0.3102);
    }

    68.25% {
      -webkit-transform: rotateZ(0.94deg);
      -webkit-animation-timing-function: cubic-bezier(0.1774, 0.3933, 0.419, 1.3709);
    }

    82.54% {
      -webkit-transform: rotateZ(62.41deg);
      -webkit-animation-timing-function: cubic-bezier(0.4526, 0.1679, 0.9116, 0.4775);
    }

    84.13% {
      -webkit-transform: rotateZ(43.75deg);
      -webkit-animation-timing-function: cubic-bezier(0.1657, 0.4524, 0.4938, 1.9361);
    }

    100% {
      -webkit-transform: rotateZ(13.43deg);
    }
  }

  @-moz-keyframes gwd-motion-path-3ytk-keys-theta {
    0% {
      -moz-transform: rotateZ(-40.81deg);
    }

    0.28% {
      -moz-transform: rotateZ(-43.23deg);
      -moz-animation-timing-function: cubic-bezier(0.5431, -0.171, 0.7647, 0.6788);
    }

    11.11% {
      -moz-transform: rotateZ(20.58deg);
      -moz-animation-timing-function: cubic-bezier(0.1087, 0.434, 0.4325, 1.2196);
    }

    30.75% {
      -moz-transform: rotateZ(73.06deg);
      -moz-animation-timing-function: cubic-bezier(0.709, 0.0592, 0.8193, 0.299);
    }

    34.92% {
      -moz-transform: rotateZ(-9.97deg);
      -moz-animation-timing-function: cubic-bezier(0.0887, 0.8089, 0.2767, 1.2537);
    }

    57.42% {
      -moz-transform: rotateZ(-46.25deg);
      -moz-animation-timing-function: cubic-bezier(0.6458, 0.0973, 0.8873, 0.3102);
    }

    68.25% {
      -moz-transform: rotateZ(0.94deg);
      -moz-animation-timing-function: cubic-bezier(0.1774, 0.3933, 0.419, 1.3709);
    }

    82.54% {
      -moz-transform: rotateZ(62.41deg);
      -moz-animation-timing-function: cubic-bezier(0.4526, 0.1679, 0.9116, 0.4775);
    }

    84.13% {
      -moz-transform: rotateZ(43.75deg);
      -moz-animation-timing-function: cubic-bezier(0.1657, 0.4524, 0.4938, 1.9361);
    }

    100% {
      -moz-transform: rotateZ(13.43deg);
    }
  }

  .htmlNoPages .gwd-motion-path-1lsa-anim-x {
    animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1lsa-keys-x;
    -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1lsa-keys-x;
    -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1lsa-keys-x;
    transform: translate3d(-63.12px, 0px, 0px);
    -webkit-transform: translate3d(-63.12px, 0px, 0px);
    -moz-transform: translate3d(-63.12px, 0px, 0px);
  }

  @keyframes gwd-motion-path-1lsa-keys-x {
    0% {
      transform: translate3d(-63.12px, 0px, 0px);
      -webkit-transform: translate3d(-63.12px, 0px, 0px);
      -moz-transform: translate3d(-63.12px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.326, 0.3403, 0.6712, 0.6636);
      -webkit-animation-timing-function: cubic-bezier(0.326, 0.3403, 0.6712, 0.6636);
      -moz-animation-timing-function: cubic-bezier(0.326, 0.3403, 0.6712, 0.6636);
    }

    3.06% {
      transform: translate3d(9.73px, 0px, 0px);
      -webkit-transform: translate3d(9.73px, 0px, 0px);
      -moz-transform: translate3d(9.73px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.1454, 0.4805, 0.4893, 0.895);
      -webkit-animation-timing-function: cubic-bezier(0.1454, 0.4805, 0.4893, 0.895);
      -moz-animation-timing-function: cubic-bezier(0.1454, 0.4805, 0.4893, 0.895);
    }

    11.11% {
      transform: translate3d(71.22px, 0px, 0px);
      -webkit-transform: translate3d(71.22px, 0px, 0px);
      -moz-transform: translate3d(71.22px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.4293, 0.2211, 0.8951, 0.4943);
      -webkit-animation-timing-function: cubic-bezier(0.4293, 0.2211, 0.8951, 0.4943);
      -moz-animation-timing-function: cubic-bezier(0.4293, 0.2211, 0.8951, 0.4943);
    }

    19.68% {
      transform: translate3d(107.41px, 0px, 0px);
      -webkit-transform: translate3d(107.41px, 0px, 0px);
      -moz-transform: translate3d(107.41px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.4207, 0.2279, 0.7603, 0.5887);
      -webkit-animation-timing-function: cubic-bezier(0.4207, 0.2279, 0.7603, 0.5887);
      -moz-animation-timing-function: cubic-bezier(0.4207, 0.2279, 0.7603, 0.5887);
    }

    20.63% {
      transform: translate3d(136.3px, 0px, 0px);
      -webkit-transform: translate3d(136.3px, 0px, 0px);
      -moz-transform: translate3d(136.3px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.2194, 0.4376, 0.5684, 0.7717);
      -webkit-animation-timing-function: cubic-bezier(0.2194, 0.4376, 0.5684, 0.7717);
      -moz-animation-timing-function: cubic-bezier(0.2194, 0.4376, 0.5684, 0.7717);
    }

    33.97% {
      transform: translate3d(287.72px, 0px, 0px);
      -webkit-transform: translate3d(287.72px, 0px, 0px);
      -moz-transform: translate3d(287.72px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.2912, 0.3761, 0.7916, 0.5622);
      -webkit-animation-timing-function: cubic-bezier(0.2912, 0.3761, 0.7916, 0.5622);
      -moz-animation-timing-function: cubic-bezier(0.2912, 0.3761, 0.7916, 0.5622);
    }

    53.97% {
      transform: translate3d(392.18px, 0px, 0px);
      -webkit-transform: translate3d(392.18px, 0px, 0px);
      -moz-transform: translate3d(392.18px, 0px, 0px);
    }

    56.59% {
      transform: translate3d(408.59px, 0px, 0px);
      -webkit-transform: translate3d(408.59px, 0px, 0px);
      -moz-transform: translate3d(408.59px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3323, 0.3358, 0.9757, 0.4383);
      -webkit-animation-timing-function: cubic-bezier(0.3323, 0.3358, 0.9757, 0.4383);
      -moz-animation-timing-function: cubic-bezier(0.3323, 0.3358, 0.9757, 0.4383);
    }

    71.43% {
      transform: translate3d(510.93px, 0px, 0px);
      -webkit-transform: translate3d(510.93px, 0px, 0px);
      -moz-transform: translate3d(510.93px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3669, 0.2903, 0.669, 0.6688);
      -webkit-animation-timing-function: cubic-bezier(0.3669, 0.2903, 0.669, 0.6688);
      -moz-animation-timing-function: cubic-bezier(0.3669, 0.2903, 0.669, 0.6688);
    }

    91.55% {
      transform: translate3d(672.76px, 0px, 0px);
      -webkit-transform: translate3d(672.76px, 0px, 0px);
      -moz-transform: translate3d(672.76px, 0px, 0px);
    }

    92.06% {
      transform: translate3d(677.04px, 0px, 0px);
      -webkit-transform: translate3d(677.04px, 0px, 0px);
      -moz-transform: translate3d(677.04px, 0px, 0px);
    }

    100% {
      transform: translate3d(677.04px, 0px, 0px);
      -webkit-transform: translate3d(677.04px, 0px, 0px);
      -moz-transform: translate3d(677.04px, 0px, 0px);
    }
  }

  @-webkit-keyframes gwd-motion-path-1lsa-keys-x {
    0% {
      -webkit-transform: translate3d(-63.12px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.326, 0.3403, 0.6712, 0.6636);
    }

    3.06% {
      -webkit-transform: translate3d(9.73px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.1454, 0.4805, 0.4893, 0.895);
    }

    11.11% {
      -webkit-transform: translate3d(71.22px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.4293, 0.2211, 0.8951, 0.4943);
    }

    19.68% {
      -webkit-transform: translate3d(107.41px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.4207, 0.2279, 0.7603, 0.5887);
    }

    20.63% {
      -webkit-transform: translate3d(136.3px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.2194, 0.4376, 0.5684, 0.7717);
    }

    33.97% {
      -webkit-transform: translate3d(287.72px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.2912, 0.3761, 0.7916, 0.5622);
    }

    53.97% {
      -webkit-transform: translate3d(392.18px, 0px, 0px);
    }

    56.59% {
      -webkit-transform: translate3d(408.59px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3323, 0.3358, 0.9757, 0.4383);
    }

    71.43% {
      -webkit-transform: translate3d(510.93px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3669, 0.2903, 0.669, 0.6688);
    }

    91.55% {
      -webkit-transform: translate3d(672.76px, 0px, 0px);
    }

    92.06% {
      -webkit-transform: translate3d(677.04px, 0px, 0px);
    }

    100% {
      -webkit-transform: translate3d(677.04px, 0px, 0px);
    }
  }

  @-moz-keyframes gwd-motion-path-1lsa-keys-x {
    0% {
      -moz-transform: translate3d(-63.12px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.326, 0.3403, 0.6712, 0.6636);
    }

    3.06% {
      -moz-transform: translate3d(9.73px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.1454, 0.4805, 0.4893, 0.895);
    }

    11.11% {
      -moz-transform: translate3d(71.22px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.4293, 0.2211, 0.8951, 0.4943);
    }

    19.68% {
      -moz-transform: translate3d(107.41px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.4207, 0.2279, 0.7603, 0.5887);
    }

    20.63% {
      -moz-transform: translate3d(136.3px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.2194, 0.4376, 0.5684, 0.7717);
    }

    33.97% {
      -moz-transform: translate3d(287.72px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.2912, 0.3761, 0.7916, 0.5622);
    }

    53.97% {
      -moz-transform: translate3d(392.18px, 0px, 0px);
    }

    56.59% {
      -moz-transform: translate3d(408.59px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3323, 0.3358, 0.9757, 0.4383);
    }

    71.43% {
      -moz-transform: translate3d(510.93px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3669, 0.2903, 0.669, 0.6688);
    }

    91.55% {
      -moz-transform: translate3d(672.76px, 0px, 0px);
    }

    92.06% {
      -moz-transform: translate3d(677.04px, 0px, 0px);
    }

    100% {
      -moz-transform: translate3d(677.04px, 0px, 0px);
    }
  }

  .htmlNoPages .gwd-motion-path-1lsa-anim-y {
    animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1lsa-keys-y;
    -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1lsa-keys-y;
    -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1lsa-keys-y;
    transform: translate3d(0px, -209.59px, 0px);
    -webkit-transform: translate3d(0px, -209.59px, 0px);
    -moz-transform: translate3d(0px, -209.59px, 0px);
  }

  @keyframes gwd-motion-path-1lsa-keys-y {
    0% {
      transform: translate3d(0px, -209.59px, 0px);
      -webkit-transform: translate3d(0px, -209.59px, 0px);
      -moz-transform: translate3d(0px, -209.59px, 0px);
      animation-timing-function: cubic-bezier(0.209, 0.3678, 0.6181, 2.1366);
      -webkit-animation-timing-function: cubic-bezier(0.209, 0.3678, 0.6181, 2.1366);
      -moz-animation-timing-function: cubic-bezier(0.209, 0.3678, 0.6181, 2.1366);
    }

    3.61% {
      transform: translate3d(0px, -229.68px, 0px);
      -webkit-transform: translate3d(0px, -229.68px, 0px);
      -moz-transform: translate3d(0px, -229.68px, 0px);
      animation-timing-function: cubic-bezier(0.3087, 0.3368, 0.567, 0.8078);
      -webkit-animation-timing-function: cubic-bezier(0.3087, 0.3368, 0.567, 0.8078);
      -moz-animation-timing-function: cubic-bezier(0.3087, 0.3368, 0.567, 0.8078);
    }

    11.11% {
      transform: translate3d(0px, -126.07px, 0px);
      -webkit-transform: translate3d(0px, -126.07px, 0px);
      -moz-transform: translate3d(0px, -126.07px, 0px);
      animation-timing-function: cubic-bezier(0.4219, 0.2431, 0.7546, 0.5841);
      -webkit-animation-timing-function: cubic-bezier(0.4219, 0.2431, 0.7546, 0.5841);
      -moz-animation-timing-function: cubic-bezier(0.4219, 0.2431, 0.7546, 0.5841);
    }

    19.92% {
      transform: translate3d(0px, -9.56px, 0px);
      -webkit-transform: translate3d(0px, -9.56px, 0px);
      -moz-transform: translate3d(0px, -9.56px, 0px);
    }

    20.16% {
      transform: translate3d(0px, -5.37px, 0px);
      -webkit-transform: translate3d(0px, -5.37px, 0px);
      -moz-transform: translate3d(0px, -5.37px, 0px);
    }

    20.4% {
      transform: translate3d(0px, -2.57px, 0px);
      -webkit-transform: translate3d(0px, -2.57px, 0px);
      -moz-transform: translate3d(0px, -2.57px, 0px);
    }

    20.63% {
      transform: translate3d(0px, -2px, 0px);
      -webkit-transform: translate3d(0px, -2px, 0px);
      -moz-transform: translate3d(0px, -2px, 0px);
      animation-timing-function: cubic-bezier(0.4052, 0.1461, 0.707, 0.6934);
      -webkit-animation-timing-function: cubic-bezier(0.4052, 0.1461, 0.707, 0.6934);
      -moz-animation-timing-function: cubic-bezier(0.4052, 0.1461, 0.707, 0.6934);
    }

    26.47% {
      transform: translate3d(0px, -55.08px, 0px);
      -webkit-transform: translate3d(0px, -55.08px, 0px);
      -moz-transform: translate3d(0px, -55.08px, 0px);
      animation-timing-function: cubic-bezier(0.2561, 0.4244, 0.5713, 0.749);
      -webkit-animation-timing-function: cubic-bezier(0.2561, 0.4244, 0.5713, 0.749);
      -moz-animation-timing-function: cubic-bezier(0.2561, 0.4244, 0.5713, 0.749);
    }

    47.3% {
      transform: translate3d(0px, -199.8px, 0px);
      -webkit-transform: translate3d(0px, -199.8px, 0px);
      -moz-transform: translate3d(0px, -199.8px, 0px);
      animation-timing-function: cubic-bezier(0.3017, 0.2808, 0.6257, 0.865);
      -webkit-animation-timing-function: cubic-bezier(0.3017, 0.2808, 0.6257, 0.865);
      -moz-animation-timing-function: cubic-bezier(0.3017, 0.2808, 0.6257, 0.865);
    }

    53.97% {
      transform: translate3d(0px, -226px, 0px);
      -webkit-transform: translate3d(0px, -226px, 0px);
      -moz-transform: translate3d(0px, -226px, 0px);
      animation-timing-function: cubic-bezier(0.4378, 0.0201, 0.8048, 0.6673);
      -webkit-animation-timing-function: cubic-bezier(0.4378, 0.0201, 0.8048, 0.6673);
      -moz-animation-timing-function: cubic-bezier(0.4378, 0.0201, 0.8048, 0.6673);
    }

    66.19% {
      transform: translate3d(0px, -146.49px, 0px);
      -webkit-transform: translate3d(0px, -146.49px, 0px);
      -moz-transform: translate3d(0px, -146.49px, 0px);
      animation-timing-function: cubic-bezier(0.3843, 0.2671, 0.7649, 0.5879);
      -webkit-animation-timing-function: cubic-bezier(0.3843, 0.2671, 0.7649, 0.5879);
      -moz-animation-timing-function: cubic-bezier(0.3843, 0.2671, 0.7649, 0.5879);
    }

    70.99% {
      transform: translate3d(0px, -61.76px, 0px);
      -webkit-transform: translate3d(0px, -61.76px, 0px);
      -moz-transform: translate3d(0px, -61.76px, 0px);
    }

    71.43% {
      transform: translate3d(0px, -41px, 0px);
      -webkit-transform: translate3d(0px, -41px, 0px);
      -moz-transform: translate3d(0px, -41px, 0px);
      animation-timing-function: cubic-bezier(0.2433, 0.6171, 0.365, 0.8307);
      -webkit-animation-timing-function: cubic-bezier(0.2433, 0.6171, 0.365, 0.8307);
      -moz-animation-timing-function: cubic-bezier(0.2433, 0.6171, 0.365, 0.8307);
    }

    88.97% {
      transform: translate3d(0px, 0.22px, 0px);
      -webkit-transform: translate3d(0px, 0.22px, 0px);
      -moz-transform: translate3d(0px, 0.22px, 0px);
    }

    92.06% {
      transform: translate3d(0px, 5px, 0px);
      -webkit-transform: translate3d(0px, 5px, 0px);
      -moz-transform: translate3d(0px, 5px, 0px);
    }

    100% {
      transform: translate3d(0px, 5px, 0px);
      -webkit-transform: translate3d(0px, 5px, 0px);
      -moz-transform: translate3d(0px, 5px, 0px);
    }
  }

  @-webkit-keyframes gwd-motion-path-1lsa-keys-y {
    0% {
      -webkit-transform: translate3d(0px, -209.59px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.209, 0.3678, 0.6181, 2.1366);
    }

    3.61% {
      -webkit-transform: translate3d(0px, -229.68px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3087, 0.3368, 0.567, 0.8078);
    }

    11.11% {
      -webkit-transform: translate3d(0px, -126.07px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.4219, 0.2431, 0.7546, 0.5841);
    }

    19.92% {
      -webkit-transform: translate3d(0px, -9.56px, 0px);
    }

    20.16% {
      -webkit-transform: translate3d(0px, -5.37px, 0px);
    }

    20.4% {
      -webkit-transform: translate3d(0px, -2.57px, 0px);
    }

    20.63% {
      -webkit-transform: translate3d(0px, -2px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.4052, 0.1461, 0.707, 0.6934);
    }

    26.47% {
      -webkit-transform: translate3d(0px, -55.08px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.2561, 0.4244, 0.5713, 0.749);
    }

    47.3% {
      -webkit-transform: translate3d(0px, -199.8px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3017, 0.2808, 0.6257, 0.865);
    }

    53.97% {
      -webkit-transform: translate3d(0px, -226px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.4378, 0.0201, 0.8048, 0.6673);
    }

    66.19% {
      -webkit-transform: translate3d(0px, -146.49px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3843, 0.2671, 0.7649, 0.5879);
    }

    70.99% {
      -webkit-transform: translate3d(0px, -61.76px, 0px);
    }

    71.43% {
      -webkit-transform: translate3d(0px, -41px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.2433, 0.6171, 0.365, 0.8307);
    }

    88.97% {
      -webkit-transform: translate3d(0px, 0.22px, 0px);
    }

    92.06% {
      -webkit-transform: translate3d(0px, 5px, 0px);
    }

    100% {
      -webkit-transform: translate3d(0px, 5px, 0px);
    }
  }

  @-moz-keyframes gwd-motion-path-1lsa-keys-y {
    0% {
      -moz-transform: translate3d(0px, -209.59px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.209, 0.3678, 0.6181, 2.1366);
    }

    3.61% {
      -moz-transform: translate3d(0px, -229.68px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3087, 0.3368, 0.567, 0.8078);
    }

    11.11% {
      -moz-transform: translate3d(0px, -126.07px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.4219, 0.2431, 0.7546, 0.5841);
    }

    19.92% {
      -moz-transform: translate3d(0px, -9.56px, 0px);
    }

    20.16% {
      -moz-transform: translate3d(0px, -5.37px, 0px);
    }

    20.4% {
      -moz-transform: translate3d(0px, -2.57px, 0px);
    }

    20.63% {
      -moz-transform: translate3d(0px, -2px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.4052, 0.1461, 0.707, 0.6934);
    }

    26.47% {
      -moz-transform: translate3d(0px, -55.08px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.2561, 0.4244, 0.5713, 0.749);
    }

    47.3% {
      -moz-transform: translate3d(0px, -199.8px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3017, 0.2808, 0.6257, 0.865);
    }

    53.97% {
      -moz-transform: translate3d(0px, -226px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.4378, 0.0201, 0.8048, 0.6673);
    }

    66.19% {
      -moz-transform: translate3d(0px, -146.49px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3843, 0.2671, 0.7649, 0.5879);
    }

    70.99% {
      -moz-transform: translate3d(0px, -61.76px, 0px);
    }

    71.43% {
      -moz-transform: translate3d(0px, -41px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.2433, 0.6171, 0.365, 0.8307);
    }

    88.97% {
      -moz-transform: translate3d(0px, 0.22px, 0px);
    }

    92.06% {
      -moz-transform: translate3d(0px, 5px, 0px);
    }

    100% {
      -moz-transform: translate3d(0px, 5px, 0px);
    }
  }

  .htmlNoPages .gwd-motion-path-1lsa-anim-theta {
    animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1lsa-keys-theta;
    -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1lsa-keys-theta;
    -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1lsa-keys-theta;
    transform: rotateZ(-26.67deg);
    -webkit-transform: rotateZ(-26.67deg);
    -moz-transform: rotateZ(-26.67deg);
  }

  @keyframes gwd-motion-path-1lsa-keys-theta {
    0% {
      transform: rotateZ(-26.67deg);
      -webkit-transform: rotateZ(-26.67deg);
      -moz-transform: rotateZ(-26.67deg);
      animation-timing-function: cubic-bezier(0.5628, -0.4094, 0.855, 0.6022);
      -webkit-animation-timing-function: cubic-bezier(0.5628, -0.4094, 0.855, 0.6022);
      -moz-animation-timing-function: cubic-bezier(0.5628, -0.4094, 0.855, 0.6022);
    }

    3.06% {
      transform: rotateZ(17.95deg);
      -webkit-transform: rotateZ(17.95deg);
      -moz-transform: rotateZ(17.95deg);
      animation-timing-function: cubic-bezier(0.1131, 0.7353, 0.3128, 0.9508);
      -webkit-animation-timing-function: cubic-bezier(0.1131, 0.7353, 0.3128, 0.9508);
      -moz-animation-timing-function: cubic-bezier(0.1131, 0.7353, 0.3128, 0.9508);
    }

    11.11% {
      transform: rotateZ(74.86deg);
      -webkit-transform: rotateZ(74.86deg);
      -moz-transform: rotateZ(74.86deg);
      animation-timing-function: cubic-bezier(0.7677, -0.3043, 0.8892, -0.0243);
      -webkit-animation-timing-function: cubic-bezier(0.7677, -0.3043, 0.8892, -0.0243);
      -moz-animation-timing-function: cubic-bezier(0.7677, -0.3043, 0.8892, -0.0243);
    }

    18.97% {
      transform: rotateZ(65.83deg);
      -webkit-transform: rotateZ(65.83deg);
      -moz-transform: rotateZ(65.83deg);
      animation-timing-function: cubic-bezier(0.5527, 0.1286, 0.7193, 0.5665);
      -webkit-animation-timing-function: cubic-bezier(0.5527, 0.1286, 0.7193, 0.5665);
      -moz-animation-timing-function: cubic-bezier(0.5527, 0.1286, 0.7193, 0.5665);
    }

    20.63% {
      transform: rotateZ(-4.34deg);
      -webkit-transform: rotateZ(-4.34deg);
      -moz-transform: rotateZ(-4.34deg);
      animation-timing-function: cubic-bezier(0.1018, 0.7927, 0.267, 1.1111);
      -webkit-animation-timing-function: cubic-bezier(0.1018, 0.7927, 0.267, 1.1111);
      -moz-animation-timing-function: cubic-bezier(0.1018, 0.7927, 0.267, 1.1111);
    }

    40.63% {
      transform: rotateZ(-50.69deg);
      -webkit-transform: rotateZ(-50.69deg);
      -moz-transform: rotateZ(-50.69deg);
      animation-timing-function: cubic-bezier(0.6287, 0.0955, 0.9044, 0.3203);
      -webkit-animation-timing-function: cubic-bezier(0.6287, 0.0955, 0.9044, 0.3203);
      -moz-animation-timing-function: cubic-bezier(0.6287, 0.0955, 0.9044, 0.3203);
    }

    53.13% {
      transform: rotateZ(-16.64deg);
      -webkit-transform: rotateZ(-16.64deg);
      -moz-transform: rotateZ(-16.64deg);
    }

    53.97% {
      transform: rotateZ(1deg);
      -webkit-transform: rotateZ(1deg);
      -moz-transform: rotateZ(1deg);
      animation-timing-function: cubic-bezier(0.1662, 0.4195, 0.3964, 1.3479);
      -webkit-animation-timing-function: cubic-bezier(0.1662, 0.4195, 0.3964, 1.3479);
      -moz-animation-timing-function: cubic-bezier(0.1662, 0.4195, 0.3964, 1.3479);
    }

    69.68% {
      transform: rotateZ(63.97deg);
      -webkit-transform: rotateZ(63.97deg);
      -moz-transform: rotateZ(63.97deg);
      animation-timing-function: cubic-bezier(0.456, 0.1637, 0.9177, 0.4716);
      -webkit-animation-timing-function: cubic-bezier(0.456, 0.1637, 0.9177, 0.4716);
      -moz-animation-timing-function: cubic-bezier(0.456, 0.1637, 0.9177, 0.4716);
    }

    71.43% {
      transform: rotateZ(45.69deg);
      -webkit-transform: rotateZ(45.69deg);
      -moz-transform: rotateZ(45.69deg);
      animation-timing-function: cubic-bezier(0.175, 0.403, 0.4957, 1.8247);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.403, 0.4957, 1.8247);
      -moz-animation-timing-function: cubic-bezier(0.175, 0.403, 0.4957, 1.8247);
    }

    91.55% {
      transform: rotateZ(12.84deg);
      -webkit-transform: rotateZ(12.84deg);
      -moz-transform: rotateZ(12.84deg);
    }

    92.06% {
      transform: rotateZ(0deg);
      -webkit-transform: rotateZ(0deg);
      -moz-transform: rotateZ(0deg);
    }

    100% {
      transform: rotateZ(0deg);
      -webkit-transform: rotateZ(0deg);
      -moz-transform: rotateZ(0deg);
    }
  }

  @-webkit-keyframes gwd-motion-path-1lsa-keys-theta {
    0% {
      -webkit-transform: rotateZ(-26.67deg);
      -webkit-animation-timing-function: cubic-bezier(0.5628, -0.4094, 0.855, 0.6022);
    }

    3.06% {
      -webkit-transform: rotateZ(17.95deg);
      -webkit-animation-timing-function: cubic-bezier(0.1131, 0.7353, 0.3128, 0.9508);
    }

    11.11% {
      -webkit-transform: rotateZ(74.86deg);
      -webkit-animation-timing-function: cubic-bezier(0.7677, -0.3043, 0.8892, -0.0243);
    }

    18.97% {
      -webkit-transform: rotateZ(65.83deg);
      -webkit-animation-timing-function: cubic-bezier(0.5527, 0.1286, 0.7193, 0.5665);
    }

    20.63% {
      -webkit-transform: rotateZ(-4.34deg);
      -webkit-animation-timing-function: cubic-bezier(0.1018, 0.7927, 0.267, 1.1111);
    }

    40.63% {
      -webkit-transform: rotateZ(-50.69deg);
      -webkit-animation-timing-function: cubic-bezier(0.6287, 0.0955, 0.9044, 0.3203);
    }

    53.13% {
      -webkit-transform: rotateZ(-16.64deg);
    }

    53.97% {
      -webkit-transform: rotateZ(1deg);
      -webkit-animation-timing-function: cubic-bezier(0.1662, 0.4195, 0.3964, 1.3479);
    }

    69.68% {
      -webkit-transform: rotateZ(63.97deg);
      -webkit-animation-timing-function: cubic-bezier(0.456, 0.1637, 0.9177, 0.4716);
    }

    71.43% {
      -webkit-transform: rotateZ(45.69deg);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.403, 0.4957, 1.8247);
    }

    91.55% {
      -webkit-transform: rotateZ(12.84deg);
    }

    92.06% {
      -webkit-transform: rotateZ(0deg);
    }

    100% {
      -webkit-transform: rotateZ(0deg);
    }
  }

  @-moz-keyframes gwd-motion-path-1lsa-keys-theta {
    0% {
      -moz-transform: rotateZ(-26.67deg);
      -moz-animation-timing-function: cubic-bezier(0.5628, -0.4094, 0.855, 0.6022);
    }

    3.06% {
      -moz-transform: rotateZ(17.95deg);
      -moz-animation-timing-function: cubic-bezier(0.1131, 0.7353, 0.3128, 0.9508);
    }

    11.11% {
      -moz-transform: rotateZ(74.86deg);
      -moz-animation-timing-function: cubic-bezier(0.7677, -0.3043, 0.8892, -0.0243);
    }

    18.97% {
      -moz-transform: rotateZ(65.83deg);
      -moz-animation-timing-function: cubic-bezier(0.5527, 0.1286, 0.7193, 0.5665);
    }

    20.63% {
      -moz-transform: rotateZ(-4.34deg);
      -moz-animation-timing-function: cubic-bezier(0.1018, 0.7927, 0.267, 1.1111);
    }

    40.63% {
      -moz-transform: rotateZ(-50.69deg);
      -moz-animation-timing-function: cubic-bezier(0.6287, 0.0955, 0.9044, 0.3203);
    }

    53.13% {
      -moz-transform: rotateZ(-16.64deg);
    }

    53.97% {
      -moz-transform: rotateZ(1deg);
      -moz-animation-timing-function: cubic-bezier(0.1662, 0.4195, 0.3964, 1.3479);
    }

    69.68% {
      -moz-transform: rotateZ(63.97deg);
      -moz-animation-timing-function: cubic-bezier(0.456, 0.1637, 0.9177, 0.4716);
    }

    71.43% {
      -moz-transform: rotateZ(45.69deg);
      -moz-animation-timing-function: cubic-bezier(0.175, 0.403, 0.4957, 1.8247);
    }

    91.55% {
      -moz-transform: rotateZ(12.84deg);
    }

    92.06% {
      -moz-transform: rotateZ(0deg);
    }

    100% {
      -moz-transform: rotateZ(0deg);
    }
  }

  .htmlNoPages .gwd-motion-path-1bqy-anim-x {
    animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1bqy-keys-x;
    -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1bqy-keys-x;
    -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1bqy-keys-x;
    transform: translate3d(-154.6px, 0px, 0px);
    -webkit-transform: translate3d(-154.6px, 0px, 0px);
    -moz-transform: translate3d(-154.6px, 0px, 0px);
  }

  @keyframes gwd-motion-path-1bqy-keys-x {
    0% {
      transform: translate3d(-154.6px, 0px, 0px);
      -webkit-transform: translate3d(-154.6px, 0px, 0px);
      -moz-transform: translate3d(-154.6px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3534, 0.3141, 0.6519, 0.6844);
      -webkit-animation-timing-function: cubic-bezier(0.3534, 0.3141, 0.6519, 0.6844);
      -moz-animation-timing-function: cubic-bezier(0.3534, 0.3141, 0.6519, 0.6844);
    }

    7.5% {
      transform: translate3d(-15.82px, 0px, 0px);
      -webkit-transform: translate3d(-15.82px, 0px, 0px);
      -moz-transform: translate3d(-15.82px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.2276, 0.4171, 0.5187, 0.8579);
      -webkit-animation-timing-function: cubic-bezier(0.2276, 0.4171, 0.5187, 0.8579);
      -moz-animation-timing-function: cubic-bezier(0.2276, 0.4171, 0.5187, 0.8579);
    }

    11.11% {
      transform: translate3d(14.63px, 0px, 0px);
      -webkit-transform: translate3d(14.63px, 0px, 0px);
      -moz-transform: translate3d(14.63px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3616, 0.2957, 0.9009, 0.4878);
      -webkit-animation-timing-function: cubic-bezier(0.3616, 0.2957, 0.9009, 0.4878);
      -moz-animation-timing-function: cubic-bezier(0.3616, 0.2957, 0.9009, 0.4878);
    }

    29.21% {
      transform: translate3d(84.82px, 0px, 0px);
      -webkit-transform: translate3d(84.82px, 0px, 0px);
      -moz-transform: translate3d(84.82px, 0px, 0px);
    }

    29.68% {
      transform: translate3d(95.01px, 0px, 0px);
      -webkit-transform: translate3d(95.01px, 0px, 0px);
      -moz-transform: translate3d(95.01px, 0px, 0px);
    }

    30.16% {
      transform: translate3d(111.19px, 0px, 0px);
      -webkit-transform: translate3d(111.19px, 0px, 0px);
      -moz-transform: translate3d(111.19px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.195, 0.4616, 0.5487, 0.7917);
      -webkit-animation-timing-function: cubic-bezier(0.195, 0.4616, 0.5487, 0.7917);
      -moz-animation-timing-function: cubic-bezier(0.195, 0.4616, 0.5487, 0.7917);
    }

    50.16% {
      transform: translate3d(303.51px, 0px, 0px);
      -webkit-transform: translate3d(303.51px, 0px, 0px);
      -moz-transform: translate3d(303.51px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3665, 0.3051, 0.7852, 0.5569);
      -webkit-animation-timing-function: cubic-bezier(0.3665, 0.3051, 0.7852, 0.5569);
      -moz-animation-timing-function: cubic-bezier(0.3665, 0.3051, 0.7852, 0.5569);
    }

    63.49% {
      transform: translate3d(378px, 0px, 0px);
      -webkit-transform: translate3d(378px, 0px, 0px);
      -moz-transform: translate3d(378px, 0px, 0px);
    }

    66.11% {
      transform: translate3d(394.71px, 0px, 0px);
      -webkit-transform: translate3d(394.71px, 0px, 0px);
      -moz-transform: translate3d(394.71px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3326, 0.3325, 0.9749, 0.4414);
      -webkit-animation-timing-function: cubic-bezier(0.3326, 0.3325, 0.9749, 0.4414);
      -moz-animation-timing-function: cubic-bezier(0.3326, 0.3325, 0.9749, 0.4414);
    }

    80.95% {
      transform: translate3d(501.83px, 0px, 0px);
      -webkit-transform: translate3d(501.83px, 0px, 0px);
      -moz-transform: translate3d(501.83px, 0px, 0px);
      animation-timing-function: cubic-bezier(0.3648, 0.2932, 0.6687, 0.6686);
      -webkit-animation-timing-function: cubic-bezier(0.3648, 0.2932, 0.6687, 0.6686);
      -moz-animation-timing-function: cubic-bezier(0.3648, 0.2932, 0.6687, 0.6686);
    }

    99.52% {
      transform: translate3d(670.59px, 0px, 0px);
      -webkit-transform: translate3d(670.59px, 0px, 0px);
      -moz-transform: translate3d(670.59px, 0px, 0px);
    }

    100% {
      transform: translate3d(675.04px, 0px, 0px);
      -webkit-transform: translate3d(675.04px, 0px, 0px);
      -moz-transform: translate3d(675.04px, 0px, 0px);
    }
  }

  @-webkit-keyframes gwd-motion-path-1bqy-keys-x {
    0% {
      -webkit-transform: translate3d(-154.6px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3534, 0.3141, 0.6519, 0.6844);
    }

    7.5% {
      -webkit-transform: translate3d(-15.82px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.2276, 0.4171, 0.5187, 0.8579);
    }

    11.11% {
      -webkit-transform: translate3d(14.63px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3616, 0.2957, 0.9009, 0.4878);
    }

    29.21% {
      -webkit-transform: translate3d(84.82px, 0px, 0px);
    }

    29.68% {
      -webkit-transform: translate3d(95.01px, 0px, 0px);
    }

    30.16% {
      -webkit-transform: translate3d(111.19px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.195, 0.4616, 0.5487, 0.7917);
    }

    50.16% {
      -webkit-transform: translate3d(303.51px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3665, 0.3051, 0.7852, 0.5569);
    }

    63.49% {
      -webkit-transform: translate3d(378px, 0px, 0px);
    }

    66.11% {
      -webkit-transform: translate3d(394.71px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3326, 0.3325, 0.9749, 0.4414);
    }

    80.95% {
      -webkit-transform: translate3d(501.83px, 0px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3648, 0.2932, 0.6687, 0.6686);
    }

    99.52% {
      -webkit-transform: translate3d(670.59px, 0px, 0px);
    }

    100% {
      -webkit-transform: translate3d(675.04px, 0px, 0px);
    }
  }

  @-moz-keyframes gwd-motion-path-1bqy-keys-x {
    0% {
      -moz-transform: translate3d(-154.6px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3534, 0.3141, 0.6519, 0.6844);
    }

    7.5% {
      -moz-transform: translate3d(-15.82px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.2276, 0.4171, 0.5187, 0.8579);
    }

    11.11% {
      -moz-transform: translate3d(14.63px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3616, 0.2957, 0.9009, 0.4878);
    }

    29.21% {
      -moz-transform: translate3d(84.82px, 0px, 0px);
    }

    29.68% {
      -moz-transform: translate3d(95.01px, 0px, 0px);
    }

    30.16% {
      -moz-transform: translate3d(111.19px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.195, 0.4616, 0.5487, 0.7917);
    }

    50.16% {
      -moz-transform: translate3d(303.51px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3665, 0.3051, 0.7852, 0.5569);
    }

    63.49% {
      -moz-transform: translate3d(378px, 0px, 0px);
    }

    66.11% {
      -moz-transform: translate3d(394.71px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3326, 0.3325, 0.9749, 0.4414);
    }

    80.95% {
      -moz-transform: translate3d(501.83px, 0px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3648, 0.2932, 0.6687, 0.6686);
    }

    99.52% {
      -moz-transform: translate3d(670.59px, 0px, 0px);
    }

    100% {
      -moz-transform: translate3d(675.04px, 0px, 0px);
    }
  }

  .htmlNoPages .gwd-motion-path-1bqy-anim-y {
    animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1bqy-keys-y;
    -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1bqy-keys-y;
    -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1bqy-keys-y;
    transform: translate3d(0px, -168.91px, 0px);
    -webkit-transform: translate3d(0px, -168.91px, 0px);
    -moz-transform: translate3d(0px, -168.91px, 0px);
  }

  @keyframes gwd-motion-path-1bqy-keys-y {
    0% {
      transform: translate3d(0px, -168.91px, 0px);
      -webkit-transform: translate3d(0px, -168.91px, 0px);
      -moz-transform: translate3d(0px, -168.91px, 0px);
      animation-timing-function: cubic-bezier(0.1335, 0.3041, 0.5498, 1.4147);
      -webkit-animation-timing-function: cubic-bezier(0.1335, 0.3041, 0.5498, 1.4147);
      -moz-animation-timing-function: cubic-bezier(0.1335, 0.3041, 0.5498, 1.4147);
    }

    8.33% {
      transform: translate3d(0px, -247.89px, 0px);
      -webkit-transform: translate3d(0px, -247.89px, 0px);
      -moz-transform: translate3d(0px, -247.89px, 0px);
      animation-timing-function: cubic-bezier(0.3334, 0.33, 0.6073, 0.7354);
      -webkit-animation-timing-function: cubic-bezier(0.3334, 0.33, 0.6073, 0.7354);
      -moz-animation-timing-function: cubic-bezier(0.3334, 0.33, 0.6073, 0.7354);
    }

    11.11% {
      transform: translate3d(0px, -227px, 0px);
      -webkit-transform: translate3d(0px, -227px, 0px);
      -moz-transform: translate3d(0px, -227px, 0px);
      animation-timing-function: cubic-bezier(0.4272, 0.223, 0.7803, 0.5724);
      -webkit-animation-timing-function: cubic-bezier(0.4272, 0.223, 0.7803, 0.5724);
      -moz-animation-timing-function: cubic-bezier(0.4272, 0.223, 0.7803, 0.5724);
    }

    29.21% {
      transform: translate3d(0px, -32.4px, 0px);
      -webkit-transform: translate3d(0px, -32.4px, 0px);
      -moz-transform: translate3d(0px, -32.4px, 0px);
    }

    29.68% {
      transform: translate3d(0px, -24.21px, 0px);
      -webkit-transform: translate3d(0px, -24.21px, 0px);
      -moz-transform: translate3d(0px, -24.21px, 0px);
    }

    30.16% {
      transform: translate3d(0px, -22px, 0px);
      -webkit-transform: translate3d(0px, -22px, 0px);
      -moz-transform: translate3d(0px, -22px, 0px);
      animation-timing-function: cubic-bezier(0.4017, 0.2205, 0.6924, 0.6675);
      -webkit-animation-timing-function: cubic-bezier(0.4017, 0.2205, 0.6924, 0.6675);
      -moz-animation-timing-function: cubic-bezier(0.4017, 0.2205, 0.6924, 0.6675);
    }

    35.16% {
      transform: translate3d(0px, -69.25px, 0px);
      -webkit-transform: translate3d(0px, -69.25px, 0px);
      -moz-transform: translate3d(0px, -69.25px, 0px);
      animation-timing-function: cubic-bezier(0.258, 0.4203, 0.5663, 0.7573);
      -webkit-animation-timing-function: cubic-bezier(0.258, 0.4203, 0.5663, 0.7573);
      -moz-animation-timing-function: cubic-bezier(0.258, 0.4203, 0.5663, 0.7573);
    }

    55.99% {
      transform: translate3d(0px, -217.52px, 0px);
      -webkit-transform: translate3d(0px, -217.52px, 0px);
      -moz-transform: translate3d(0px, -217.52px, 0px);
      animation-timing-function: cubic-bezier(0.3005, 0.2826, 0.6285, 0.8609);
      -webkit-animation-timing-function: cubic-bezier(0.3005, 0.2826, 0.6285, 0.8609);
      -moz-animation-timing-function: cubic-bezier(0.3005, 0.2826, 0.6285, 0.8609);
    }

    63.49% {
      transform: translate3d(0px, -246px, 0px);
      -webkit-transform: translate3d(0px, -246px, 0px);
      -moz-transform: translate3d(0px, -246px, 0px);
      animation-timing-function: cubic-bezier(0.4437, 0.0158, 0.8052, 0.664);
      -webkit-animation-timing-function: cubic-bezier(0.4437, 0.0158, 0.8052, 0.664);
      -moz-animation-timing-function: cubic-bezier(0.4437, 0.0158, 0.8052, 0.664);
    }

    75.71% {
      transform: translate3d(0px, -166.81px, 0px);
      -webkit-transform: translate3d(0px, -166.81px, 0px);
      -moz-transform: translate3d(0px, -166.81px, 0px);
      animation-timing-function: cubic-bezier(0.384, 0.2676, 0.7638, 0.5887);
      -webkit-animation-timing-function: cubic-bezier(0.384, 0.2676, 0.7638, 0.5887);
      -moz-animation-timing-function: cubic-bezier(0.384, 0.2676, 0.7638, 0.5887);
    }

    80.52% {
      transform: translate3d(0px, -81.67px, 0px);
      -webkit-transform: translate3d(0px, -81.67px, 0px);
      -moz-transform: translate3d(0px, -81.67px, 0px);
    }

    80.95% {
      transform: translate3d(0px, -61px, 0px);
      -webkit-transform: translate3d(0px, -61px, 0px);
      -moz-transform: translate3d(0px, -61px, 0px);
      animation-timing-function: cubic-bezier(0.241, 0.6216, 0.3642, 0.8303);
      -webkit-animation-timing-function: cubic-bezier(0.241, 0.6216, 0.3642, 0.8303);
      -moz-animation-timing-function: cubic-bezier(0.241, 0.6216, 0.3642, 0.8303);
    }

    97.14% {
      transform: translate3d(0px, -19.77px, 0px);
      -webkit-transform: translate3d(0px, -19.77px, 0px);
      -moz-transform: translate3d(0px, -19.77px, 0px);
    }

    100% {
      transform: translate3d(0px, -15px, 0px);
      -webkit-transform: translate3d(0px, -15px, 0px);
      -moz-transform: translate3d(0px, -15px, 0px);
    }
  }

  @-webkit-keyframes gwd-motion-path-1bqy-keys-y {
    0% {
      -webkit-transform: translate3d(0px, -168.91px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.1335, 0.3041, 0.5498, 1.4147);
    }

    8.33% {
      -webkit-transform: translate3d(0px, -247.89px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3334, 0.33, 0.6073, 0.7354);
    }

    11.11% {
      -webkit-transform: translate3d(0px, -227px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.4272, 0.223, 0.7803, 0.5724);
    }

    29.21% {
      -webkit-transform: translate3d(0px, -32.4px, 0px);
    }

    29.68% {
      -webkit-transform: translate3d(0px, -24.21px, 0px);
    }

    30.16% {
      -webkit-transform: translate3d(0px, -22px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.4017, 0.2205, 0.6924, 0.6675);
    }

    35.16% {
      -webkit-transform: translate3d(0px, -69.25px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.258, 0.4203, 0.5663, 0.7573);
    }

    55.99% {
      -webkit-transform: translate3d(0px, -217.52px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.3005, 0.2826, 0.6285, 0.8609);
    }

    63.49% {
      -webkit-transform: translate3d(0px, -246px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.4437, 0.0158, 0.8052, 0.664);
    }

    75.71% {
      -webkit-transform: translate3d(0px, -166.81px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.384, 0.2676, 0.7638, 0.5887);
    }

    80.52% {
      -webkit-transform: translate3d(0px, -81.67px, 0px);
    }

    80.95% {
      -webkit-transform: translate3d(0px, -61px, 0px);
      -webkit-animation-timing-function: cubic-bezier(0.241, 0.6216, 0.3642, 0.8303);
    }

    97.14% {
      -webkit-transform: translate3d(0px, -19.77px, 0px);
    }

    100% {
      -webkit-transform: translate3d(0px, -15px, 0px);
    }
  }

  @-moz-keyframes gwd-motion-path-1bqy-keys-y {
    0% {
      -moz-transform: translate3d(0px, -168.91px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.1335, 0.3041, 0.5498, 1.4147);
    }

    8.33% {
      -moz-transform: translate3d(0px, -247.89px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3334, 0.33, 0.6073, 0.7354);
    }

    11.11% {
      -moz-transform: translate3d(0px, -227px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.4272, 0.223, 0.7803, 0.5724);
    }

    29.21% {
      -moz-transform: translate3d(0px, -32.4px, 0px);
    }

    29.68% {
      -moz-transform: translate3d(0px, -24.21px, 0px);
    }

    30.16% {
      -moz-transform: translate3d(0px, -22px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.4017, 0.2205, 0.6924, 0.6675);
    }

    35.16% {
      -moz-transform: translate3d(0px, -69.25px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.258, 0.4203, 0.5663, 0.7573);
    }

    55.99% {
      -moz-transform: translate3d(0px, -217.52px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.3005, 0.2826, 0.6285, 0.8609);
    }

    63.49% {
      -moz-transform: translate3d(0px, -246px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.4437, 0.0158, 0.8052, 0.664);
    }

    75.71% {
      -moz-transform: translate3d(0px, -166.81px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.384, 0.2676, 0.7638, 0.5887);
    }

    80.52% {
      -moz-transform: translate3d(0px, -81.67px, 0px);
    }

    80.95% {
      -moz-transform: translate3d(0px, -61px, 0px);
      -moz-animation-timing-function: cubic-bezier(0.241, 0.6216, 0.3642, 0.8303);
    }

    97.14% {
      -moz-transform: translate3d(0px, -19.77px, 0px);
    }

    100% {
      -moz-transform: translate3d(0px, -15px, 0px);
    }
  }

  .htmlNoPages .gwd-motion-path-1bqy-anim-theta {
    animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1bqy-keys-theta;
    -webkit-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1bqy-keys-theta;
    -moz-animation: 6.3s linear 0s infinite normal forwards gwd-motion-path-1bqy-keys-theta;
    transform: rotateZ(-54.37deg);
    -webkit-transform: rotateZ(-54.37deg);
    -moz-transform: rotateZ(-54.37deg);
  }

  @keyframes gwd-motion-path-1bqy-keys-theta {
    0% {
      transform: rotateZ(-54.37deg);
      -webkit-transform: rotateZ(-54.37deg);
      -moz-transform: rotateZ(-54.37deg);
      animation-timing-function: cubic-bezier(0.52, 0.2098, 0.7413, 0.5215);
      -webkit-animation-timing-function: cubic-bezier(0.52, 0.2098, 0.7413, 0.5215);
      -moz-animation-timing-function: cubic-bezier(0.52, 0.2098, 0.7413, 0.5215);
    }

    8.61% {
      transform: rotateZ(36.22deg);
      -webkit-transform: rotateZ(36.22deg);
      -moz-transform: rotateZ(36.22deg);
      animation-timing-function: cubic-bezier(0.2542, 0.395, 0.5628, 0.7976);
      -webkit-animation-timing-function: cubic-bezier(0.2542, 0.395, 0.5628, 0.7976);
      -moz-animation-timing-function: cubic-bezier(0.2542, 0.395, 0.5628, 0.7976);
    }

    11.11% {
      transform: rotateZ(62.57deg);
      -webkit-transform: rotateZ(62.57deg);
      -moz-transform: rotateZ(62.57deg);
      animation-timing-function: cubic-bezier(0.2893, -2.7177, 0.9711, -4.9326);
      -webkit-animation-timing-function: cubic-bezier(0.2893, -2.7177, 0.9711, -4.9326);
      -moz-animation-timing-function: cubic-bezier(0.2893, -2.7177, 0.9711, -4.9326);
    }

    28.73% {
      transform: rotateZ(58.37deg);
      -webkit-transform: rotateZ(58.37deg);
      -moz-transform: rotateZ(58.37deg);
    }

    29.21% {
      transform: rotateZ(48.32deg);
      -webkit-transform: rotateZ(48.32deg);
      -moz-transform: rotateZ(48.32deg);
    }

    29.68% {
      transform: rotateZ(27.05deg);
      -webkit-transform: rotateZ(27.05deg);
      -moz-transform: rotateZ(27.05deg);
    }

    30.16% {
      transform: rotateZ(-10.82deg);
      -webkit-transform: rotateZ(-10.82deg);
      -moz-transform: rotateZ(-10.82deg);
      animation-timing-function: cubic-bezier(0.0734, 0.8748, 0.3035, 1.3348);
      -webkit-animation-timing-function: cubic-bezier(0.0734, 0.8748, 0.3035, 1.3348);
      -moz-animation-timing-function: cubic-bezier(0.0734, 0.8748, 0.3035, 1.3348);
    }

    54.33% {
      transform: rotateZ(-45.58deg);
      -webkit-transform: rotateZ(-45.58deg);
      -moz-transform: rotateZ(-45.58deg);
      animation-timing-function: cubic-bezier(0.6285, 0.1033, 0.8769, 0.3413);
      -webkit-animation-timing-function: cubic-bezier(0.6285, 0.1033, 0.8769, 0.3413);
      -moz-animation-timing-function: cubic-bezier(0.6285, 0.1033, 0.8769, 0.3413);
    }

    63.49% {
      transform: rotateZ(0.96deg);
      -webkit-transform: rotateZ(0.96deg);
      -moz-transform: rotateZ(0.96deg);
      animation-timing-function: cubic-bezier(0.1714, 0.3995, 0.4112, 1.3633);
      -webkit-animation-timing-function: cubic-bezier(0.1714, 0.3995, 0.4112, 1.3633);
      -moz-animation-timing-function: cubic-bezier(0.1714, 0.3995, 0.4112, 1.3633);
    }

    79.21% {
      transform: rotateZ(63.01deg);
      -webkit-transform: rotateZ(63.01deg);
      -moz-transform: rotateZ(63.01deg);
      animation-timing-function: cubic-bezier(0.454, 0.1663, 0.9137, 0.4753);
      -webkit-animation-timing-function: cubic-bezier(0.454, 0.1663, 0.9137, 0.4753);
      -moz-animation-timing-function: cubic-bezier(0.454, 0.1663, 0.9137, 0.4753);
    }

    80.95% {
      transform: rotateZ(44.49deg);
      -webkit-transform: rotateZ(44.49deg);
      -moz-transform: rotateZ(44.49deg);
      animation-timing-function: cubic-bezier(0.1698, 0.4492, 0.4955, 1.9451);
      -webkit-animation-timing-function: cubic-bezier(0.1698, 0.4492, 0.4955, 1.9451);
      -moz-animation-timing-function: cubic-bezier(0.1698, 0.4492, 0.4955, 1.9451);
    }

    100% {
      transform: rotateZ(13.77deg);
      -webkit-transform: rotateZ(13.77deg);
      -moz-transform: rotateZ(13.77deg);
    }
  }

  @-webkit-keyframes gwd-motion-path-1bqy-keys-theta {
    0% {
      -webkit-transform: rotateZ(-54.37deg);
      -webkit-animation-timing-function: cubic-bezier(0.52, 0.2098, 0.7413, 0.5215);
    }

    8.61% {
      -webkit-transform: rotateZ(36.22deg);
      -webkit-animation-timing-function: cubic-bezier(0.2542, 0.395, 0.5628, 0.7976);
    }

    11.11% {
      -webkit-transform: rotateZ(62.57deg);
      -webkit-animation-timing-function: cubic-bezier(0.2893, -2.7177, 0.9711, -4.9326);
    }

    28.73% {
      -webkit-transform: rotateZ(58.37deg);
    }

    29.21% {
      -webkit-transform: rotateZ(48.32deg);
    }

    29.68% {
      -webkit-transform: rotateZ(27.05deg);
    }

    30.16% {
      -webkit-transform: rotateZ(-10.82deg);
      -webkit-animation-timing-function: cubic-bezier(0.0734, 0.8748, 0.3035, 1.3348);
    }

    54.33% {
      -webkit-transform: rotateZ(-45.58deg);
      -webkit-animation-timing-function: cubic-bezier(0.6285, 0.1033, 0.8769, 0.3413);
    }

    63.49% {
      -webkit-transform: rotateZ(0.96deg);
      -webkit-animation-timing-function: cubic-bezier(0.1714, 0.3995, 0.4112, 1.3633);
    }

    79.21% {
      -webkit-transform: rotateZ(63.01deg);
      -webkit-animation-timing-function: cubic-bezier(0.454, 0.1663, 0.9137, 0.4753);
    }

    80.95% {
      -webkit-transform: rotateZ(44.49deg);
      -webkit-animation-timing-function: cubic-bezier(0.1698, 0.4492, 0.4955, 1.9451);
    }

    100% {
      -webkit-transform: rotateZ(13.77deg);
    }
  }

  @-moz-keyframes gwd-motion-path-1bqy-keys-theta {
    0% {
      -moz-transform: rotateZ(-54.37deg);
      -moz-animation-timing-function: cubic-bezier(0.52, 0.2098, 0.7413, 0.5215);
    }

    8.61% {
      -moz-transform: rotateZ(36.22deg);
      -moz-animation-timing-function: cubic-bezier(0.2542, 0.395, 0.5628, 0.7976);
    }

    11.11% {
      -moz-transform: rotateZ(62.57deg);
      -moz-animation-timing-function: cubic-bezier(0.2893, -2.7177, 0.9711, -4.9326);
    }

    28.73% {
      -moz-transform: rotateZ(58.37deg);
    }

    29.21% {
      -moz-transform: rotateZ(48.32deg);
    }

    29.68% {
      -moz-transform: rotateZ(27.05deg);
    }

    30.16% {
      -moz-transform: rotateZ(-10.82deg);
      -moz-animation-timing-function: cubic-bezier(0.0734, 0.8748, 0.3035, 1.3348);
    }

    54.33% {
      -moz-transform: rotateZ(-45.58deg);
      -moz-animation-timing-function: cubic-bezier(0.6285, 0.1033, 0.8769, 0.3413);
    }

    63.49% {
      -moz-transform: rotateZ(0.96deg);
      -moz-animation-timing-function: cubic-bezier(0.1714, 0.3995, 0.4112, 1.3633);
    }

    79.21% {
      -moz-transform: rotateZ(63.01deg);
      -moz-animation-timing-function: cubic-bezier(0.454, 0.1663, 0.9137, 0.4753);
    }

    80.95% {
      -moz-transform: rotateZ(44.49deg);
      -moz-animation-timing-function: cubic-bezier(0.1698, 0.4492, 0.4955, 1.9451);
    }

    100% {
      -moz-transform: rotateZ(13.77deg);
    }
  }
}

#pagedeck {
  overflow: hidden !important;
}
</style>