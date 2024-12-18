<template>
  <div v-if="date === 'day'" class="counter">
    <div v-if="today == '12/23/' + thisYear">
      <p>Nå er det lille julaften! Husk å se Gevinnen og hovmesteren klokka 21</p>
    </div>
    <div v-else-if="Date(today) >= new Date('12/24/' + thisYear)">
      <p class="antall">Nå er det jul!</p>
    </div>
    <div v-else-if="days < 50">
      <p>Oj oj oj nå er det ikke lenge igjen til jul!</p>
      <p>
        Det er bare <strong class="antall">{{ days }}</strong> dager igjen!
      </p>
    </div>
    <div v-else onload="$emit('dateObject',day)">
      <p>
        Det er <strong class="antall">{{ days }}</strong> dager igjen til jul.
      </p>
    </div>
  </div>
  <div v-else-if="date === 'week'" class="counter">
    <div v-if="Date(today) <= new Date('12/24/' + thisYear)">
      <p>Nå er det jul!</p>
    </div>
    <div v-else-if="days < 7">
      <p>Oj oj oj nå er det ikke lenge igjen til jul!</p>
      <p>
        Vi er inne i juleuka!
      </p>
    </div>
    <div v-else-if="days < 50">
      <p>Oj oj oj nå er det ikke lenge igjen til jul!</p>
      <p>
        Det er bare <strong class="antall">{{ weeks }}</strong> uker igjen!
      </p>
    </div>
    <div v-else>
      <p>
        Det er <strong class="antall">{{ weeks }}</strong> uker igjen til jul.
      </p>
    </div>
  </div>
  <div v-else>Nope</div>
</template>

<script>
export default {
  data() {
    const thisYear = new Date().getFullYear();
    return {
      thisYear: thisYear,
      today: new Date().toLocaleDateString(),
      days: (this.returnDateJson(`12/24/${thisYear}`).days / 1) >> 0,
      weeks: (this.returnDateJson(`12/24/${thisYear}`).weeks / 1) >> 0,
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      this.$emit('dateObject', { days: this.days, weeks: this.weeks });
    });
  },
  methods: {
    returnDateJson: (date) => {
      console.log(date);
      const today = new Date();
      const calcDate = new Date(date);
      const difference = calcDate.getTime() - today.getTime();
      const dateObject = {
        days: difference / (1000 * 60 * 60 * 24),
        weeks: difference / (1000 * 60 * 60 * 24) / 7,
      };
      return dateObject;
    },
  },
  props: ['date'],
};
</script>

<style>
.counter {
  background: whitesmoke;
  text-align: center;
  border-radius: 1px;
  box-shadow: 2px 2px 5px #000;
  width: 100%;
  padding: 0.5rem;
}
.antall {
  position: relative;
  z-index: 500;
  -webkit-text-stroke: .2px white;
}
</style>
