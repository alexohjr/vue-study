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
    <hr/>

    <input v-on:keyup.shift.enter="showAlert" v-model="myText"/>
    <p>{{ myText }}</p>
    <hr/>

    <h1>calc</h1>
    <input v-model.number="number1"/>
    <input v-model.number="number2" /><br/>
    <button v-on:click="plus">plus</button>
    <button v-on:click="minus">minus</button>
    <button v-on:click="multi">multi</button>
    <button v-on:click="divide">divide</button>
    <br />
    <p>Result is :: {{ result }}</p>



</template>

<script>
function goodEvent() {
    alert("good !");
}
;
export default {

    name: 'Method',
    data() {
        return {
            count: 0,
            isClick: false,
            countParam: 0,
            myText: 'Hello',
            number1: 0,
            number2: 0,
            result:0
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
        },
        showAlert: function() {
            alert(this.myText + ' Event!');
        },
        plus: function() {
            this.result = this.number1 + this.number2;
        },
        minus: function() {
            this.result = this.number1 - this.number2;
        },
        multi: function() {
            this.result = this.number1 * this.number2;
        },
        divide: function() {
            this.result = this.number1 / this.number2;
        }
    }
}

</script>

<style>

</style>