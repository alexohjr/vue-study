<template>

    <input v-model.number="price" type="number" />원
    <p>소비세 포함 금액 {{ taxIncluded }}원</p>
    <hr/>

    <input v-model.number="price" type="number"/>원
    X <input v-model.number="count" type="number"/>개
    <p>합계 {{ sum }}</p>
    <p>세급 포함 {{ taxIncluded }}</p>
    <hr />

    <p>140글자 이내로 입력</p>
    <textarea v-model="myText"></textarea>
    <p v-bind:style="{color: computedColor}">남은 글자는 {{ remaining }}</p>
    <hr />

    <input v-model="findWord" />
    <ul>
        <li v-for="item in findItems">{{ item }}</li>
    </ul>
    <hr />

    <p v-bind:style="{backgroundColor: mixColor}">{{ mixColor }}</p>
    <input type="range" v-model="R" min="0" max="255"/><br/>
    <input type="range" v-model="G" min="0" max="255"/><br/>
    <input type="range" v-model="B" min="0" max="255"/><br/>
    <hr />

    <p>금지문자 :: {{ forbiddenText }}</p>
    <textarea v-model="inputText"></textarea>
    <hr />

    <h4>타이머</h4>
    <p>{{ restSec }} 초</p>
    <button v-on:click="startTimer">START</button>




</template>

<script>

export default {
    name: 'DataWatcher',
    data() {
        return {
            price: 100,
            tax: 1.08,
            count: 1,
            myText: '',
            findWord: '',
            items: ['설악산', '한라산', '북한산', '백두산', '지리산'],
            R:0,
            G:0,
            B:0,
            forbiddenText: '123',
            inputText: '',
            restSec: 10,
            timerObj: null

        }
    },
    methods: {
        startTimer() {
            this.restSec = 10;
            this.timerObj = setInterval(() => {
                this.restSec--
            }, 1000);
        }
    },
    computed: {
        sum() {
            return this.price * this.count;
        },
        taxIncluded() {
            return this.sum * this.tax;
        },
        remaining() {
            return 140 - this.myText.length;
        },
        computedColor() {
            let col = 'green';
            if(this.remaining < 100) {
                col = 'orange';
            }
            if(this.remaining < 90) {
                col = 'red';
            }
            return col;
        },
        // this.findWord가 변하면 그 문자가 포함된 리스트를 계산한다.
        findItems() {
            if(this.findWord) {
                return this.items.filter((val) => {
                    return (val.indexOf(this.findWord) > -1);
                }, this);
            } else {
                // this.findWord가 공백일 땐 리스트를 그대로 반환한다.
                return this.items;
            }
        },
        mixColor() {
            var ans = "RGB("+ this.R+","+this.G+","+this.B+")";
            return ans;
        },
    },
    watch: {
        inputText() {
            var pos = this.inputText.indexOf(this.forbiddenText);
            if(pos >= 0) {
                alert('금지어 입력 감지');
                this.inputText = this.inputText.substr(0, pos);
            }
        },
        restSec() {
            // 0초 이하가 되면 얼럿을 띄우고 타이머를 멈춘다.
            if(this.restSec <= 0) {
                alert('타이머');
                clearInterval(this.timerObj);
            }
        }
    }
}

</script>