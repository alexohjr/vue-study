<template>
    <h2>클릭하면 카운터가 올라갑니다.</h2>
    <div>
        <p>{{count}}</p>
        <button v-on:click="countUp">UP</button>
        <button v-on:click="countDown">DOWN</button>
    </div>
</template>

<script>
export default {
  name: 'CountUp',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    countUp: function() {
      this.count++;
    },
    countDown: function() {
      this.count--;
    }
  }
};
</script>