<template>
    <input v-model="myName" placeholder="name"/>
    <p>I'm {{ myName }}</p>
    <hr/>

    <textarea v-model="myText"></textarea>
    <p>Text : {{ myText }}</p>
    <p>Text.length : {{ myText.length }}</p>
    <hr/>

    <input type="checkbox" v-model="myCheck" />
    <p>checkbox value : {{ myCheck }}</p>
    <hr/>

    <input type="checkbox" value="red" v-model="myChecks" />
    <input type="checkbox" value="blue" v-model="myChecks" />
    <input type="checkbox" value="green" v-model="myChecks" />
    <p>checkboxes value : {{ myChecks }}</p>
    <hr/>

    <input type="checkbox" v-model="myAgree" />
    <button :disabled="!myAgree">송신</button>
    <hr/>

    <input type="radio" value="red" v-model="myRadio" />red
    <input type="radio" value="blue" v-model="myRadio" />blue
    <input type="radio" id="green" value="green" v-model="myRadio" />green
    <p>radio value :  {{ myRadio }}</p>
    <hr/>

    <label><input type="radio" value="dog1.png" v-model="myImg"/>이미지1</label><br/>
    <input type="radio" value="dog2.png" v-model="myImg"/>이미지2<br/>
    <label><img class="my-img" v-bind:src="require(`@/assets/${myImg}`)"/>이미지</label>
    <hr/>

    <select v-model="myColor">
        <option disabled value="">pick your color</option>
        <option>red</option>
        <option>blue</option>
        <option>green</option>
        <option>orange</option>
    </select>
    <p :style="{color: myColor}">picked color is {{ myColor }}</p>
    <hr/>

    <select multiple v-model="myColors">
        <option disabled value="">pick your colors</option>
        <option>red</option>
        <option>blue</option>
        <option>green</option>
        <option>orange</option>
    </select>
    <p>picked colors are {{ myColors }}</p>
    <hr/>

    <input v-model.lazy="myLazyText"/>
    <p>appear after input : {{ myLazyText }}</p>
    <hr/>

    <input v-model.number="myNumber" /><span>+ 100 is {{ myNumber + 100 }}</span>
    <hr />

    <input v-model="myTrimText" />
    <p>trim text : {{ myTrimText }}</p>
    <hr/>

    <h1>prac</h1>

    name:<input type="text" v-model="pracName"/><br/>
    color:<br/>
    <label><input type="radio" v-model="pracColor" value="red"/>red</label>
    <label><input type="radio" v-model="pracColor" value="blue"/>blue</label>
    <label><input type="radio" v-model="pracColor" value="green"/>green</label>
    <label><input type="radio" v-model="pracColor" value="orange"/>orange</label>
    <label><input type="radio" v-model="pracColor" value="black"/>black</label><br/>
    <p :class="isDone ? 'show' : 'hide'">I'm {{ pracName }} & my favorite color is <span :style="{color: pracColor}">{{ pracColor }}</span></p>

</template>

<script>

export default {
    name: 'FormData',
    props: {
        myPropImg: String,
    },
    data() {
        return {
            myName: '',
            myText: '',
            myCheck: true,
            myChecks: [],
            myAgree:false,
            myRadio: '',
            myImg: 'dog1.png',
            myColor: '',
            myColors: [],
            myLazyText: '',
            myNumber: '',
            myTrimText: '',
            pracName: '',
            pracColor: '',
            isDone: false
        }
    },
    setup(props) {
        props.myPropImg = 'hi.png';
        // this.myImg = props.myPropImg;
    }
}

</script>

<style>
.my-img {
    width: 200px;
    height: 200px;
}

.hide {
    visibility: hidden;
}
.show {
    visibility: visible;
}


</style>