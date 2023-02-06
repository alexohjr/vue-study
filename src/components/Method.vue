<template>
    <button v-on:click="countUp()">countUp ver.1</button><br/>
    <button @click="countUp()">countUp ver.2</button><br/>
    count : {{ count }}
    <hr/>

    <button value="good" v-bind:disabled="isClick" v-on:click="oneClick">
    Good
    </button>
    <hr/>

    <button v-on:click="countUpByParam(3)">plus 3</button>
    <button v-on:click="countUpByParam(5)">plus 5</button>
    <button v-on:click="countUpByParam(10)">plus 10</button>
    <p>countParam : {{ countParam }}</p>


</template>

<script>
function goodEvent() {
    alert("good !");
}

export default {

    name: 'Method',
    data() {
        return {
            count: 0,
            isClick: false,
            countParam: 0,
        }
    },
    methods: {
        countUp: function() {
            this.count++;
        },
        oneClick: function() {
            this.isClick = true;
            goodEvent();
        },
        countUpByParam: function(param) {
            this.countParam += param;
        }
    }
}

</script>

<style>

</style>