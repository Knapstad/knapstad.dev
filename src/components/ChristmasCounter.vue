<template>
  <div v-if="date === 'day'" class="counter">
    <div v-if="today == '12/23/2020'">
      <p>Nå er det lille julaften! Husk å se Gevinnen og hovmesteren</p>
    </div>
    <div v-else-if="(returnDateJson('12/24/2020').days / 1) >> 0 < 0">
      <p>Nå er det jul!</p>
    </div>
    <div v-else-if="(returnDateJson('12/24/2020').days / 1) >> 0 < 50">
      <p>Oj oj oj nå er det ikke lenge igjen til jul!</p>
      <p>
        Det er bare <strong>{{ days }}</strong> dager igjen!
      </p>
    </div>
    <div v-else onload="$emit('dateObject',day)">
      <p>
        Det er <strong>{{ days }}</strong> dager igjen til jul.
      </p>
    </div>
  </div>
  <div v-else-if="date === 'week'" class="counter">
    <div v-if="(returnDateJson('12/24/2020').days / 1) >> 0 < 0">
      <p>Nå er det jul!</p>
    </div>
    <div v-else-if="(returnDateJson('12/24/2020').days / 1) >> 0 < 7">
      <p>Oj oj oj nå er det ikke lenge igjen til jul!</p>
      <p>
        Vi er inne i juleuka!
      </p>
    </div>
    <div v-else-if="(returnDateJson('12/24/2020').days / 1) >> 0 < 7">
      <p>Oj oj oj nå er det ikke lenge igjen til jul!</p>
      <p>
        Vi er inne i juleuka!
      </p>
    </div>
    <div v-else-if="(returnDateJson('12/24/2020').days / 1) >> 0 < 50">
      <p>Oj oj oj nå er det ikke lenge igjen til jul!</p>
      <p>
        Det er bare <strong>{{ weeks }}</strong> uker igjen!
      </p>
    </div>
    <div v-else>
      <p>
        Det er <strong>{{ weeks }}</strong> uker igjen til jul.
      </p>
    </div>
  </div>
  <div v-else>Nope</div>
</template>

<script>
export default {
  data() {
    return {
      thisYear: new Date().getFullYear(),
      days: (this.returnDateJson(`12/24/` + this.thisYear).days / 1) >> 0,
      weeks: (this.returnDateJson('12/24/' + this.thisYear).weeks / 1) >> 0,
      today: new Date().toLocaleDateString(),
    };
  },
  mounted: function() {
    console.log('joda');
    this.$nextTick(function() {
      this.$emit('dateObject', { days: this.days, weeks: this.weeks });
    });
  },
  methods: {
    returnDateJson: function(date) {
      let today = new Date();
      let calcDate = new Date(date);
      let difference = calcDate.getTime() - today.getTime();
      if (difference < 0) {
        return -1;
      }
      let dateObject = {
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
  /* -webkit-margin-after: 1rem; */
  padding: 0.5rem;
}
</style>
