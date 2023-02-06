<template>
    <div width="500px">
        <p><a v-bind:href="myUrl">네이버로 연결</a></p>
        <!-- <p><img v-bind:src="myImg"></img></p> -->
        <p><img v-bind:src="require(`@/assets/${myImg}`)"/>이미지</p>
        <p v-bind:align="myLeft">텍스트를 왼쪽 정렬</p>
        <p v-bind:align="myRight">텍스트를 오른쪽 정렬</p>
        <p v-bind:align="myCenter">텍스트를 가운데 정렬</p>
        <p v-bind:style="{color : myRed}">인라인 스타일로 글자색을 빨간색으로</p>
        <p :style="{fontSize : myFontSize, color : myRed}">인라인 스타일로 글자크기를 150% 크게 빨간색으로</p>
        <p :style="{fontSize: myFontSize, color: myRed, backgroundColor: myBackgroundColor}">인라인 스타일로 글자크기를 150% 크게 빨간색으로 노란색 배경</p>
        <p :class="myClass">blue-underline class 지정</p>
        <p :class="[myClass, myClass2]">blue-underline, strike-through class 지정</p>
        <p :class="isOn ? onClass : offClass">데이터 true 일 경우 클래스</p>
        <p :class="isOff ? onClass : 'off' ">데이터 false 일 경우 클래스</p>


    </div>

</template>


<script>

    export default {
        name: 'dataBind',
        data() {
            return {
                myUrl: 'https://www.naver.com',
                myImg: 'logo.png',
                myLeft: 'left',
                myRight: 'right',
                myCenter: 'center',
                myRed: 'red',
                myFontSize: '150%',
                myBackgroundColor: 'yellow',
                myClass: 'blue-underline',
                myClass2: 'strike-through',
                isOn: true,
                isOff: false,
                onClass: 'on',
                offClass: 'off'
            }
        }
    }

</script>

<style>
.strike-through {
    text-decoration: line-through;
    color: lightgray;
}

.blue-underline {
    text-decoration: underline;
    text-decoration-color: blue;
}

.on {
    color: green;
}

.off {
    color: red;
}

</style>
