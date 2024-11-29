<template>
  <div v-if="date === 'day'" class="counter">
    <div v-if="days == 0">
      <p>Nå er det jul!</p>
    </div>
    <div v-else-if="days < 2">
      <p>Nå er det lille julaften! Husk å se Gevinnen og hovmesteren</p>
    </div>
    <div v-else-if="days < 50">
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
    <div v-if="days == 0">
      <p>Nå er det jul!</p>
    </div>
    <div v-else-if="days < 2">
      <p>Nå er det lille julaften! Husk å se Gevinnen og hovmesteren</p>
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
    let thisYear = new Date().getFullYear();
    return {
      thisYear: thisYear,
      today: new Date().toLocaleDateString(),
      days: (this.returnDateJson(`12/24/` + thisYear).days / 1) ,
      weeks: (this.returnDateJson('12/24/' + thisYear).weeks / 1) ,
      dates: this.returnDateJson(`12/24/` + thisYear),
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      this.$emit('dateObject', { days: this.days, weeks: this.weeks });
    });
  },
  methods: {
    returnDateJson: (date) => {
      const today = new Date();
      const calcDate = new Date(date);
      const difference = calcDate.getTime() - today.getTime();
      const dateObject = {
        today: today,
        calcDate: calcDate,
        difference: difference,
        days: Math.round(difference / (1000 * 60 * 60 * 24),0)+1,
        weeks: Math.ceil((difference / (1000 * 60 * 60 * 24))/7),
      };
      return dateObject;
    },
  },
  props: ['date'],
};
</script>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, #ff0000, #ff6347);
  color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  margin: 1rem 0;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  position: relative;
}

.counter p {
  margin: 0.5rem 0;
  font-size: 1.2em;
}

.counter strong {
  font-size: 1.5em;
  color: #ffd700;
}

.counter::before {
  content: '🎄';
  font-size: 2em;
  margin-bottom: 0.5rem;
}

.counter::after {
  content: '🎅';
  font-size: 2em;
  margin-top: 0.5rem;
}
</style>