<template>

<div>
    <h1>다양한 데이터의 출력</h1>
    <p>{{ myText }}</p>
    {{ myText }}
    <p v-html="myHtmlText"></p>
    <p>숫자 {{ myNumber }}</p>
    <p>배열 {{ myArray }}</p>
    <p>오브젝트 {{ myObject }}</p>
    {{ $data }} <!-- 전체 데이터 출력-->
</div>


</template>

<script>

export default {
    name: 'Data',
    data() {
        return {
            myText: 'Vue를 배워 봅시다. 이렇게 그냥 출력할 수도 있고',
            myHtmlText: '<h3> 태그를 넣어서 출력할 수도 있습니다.</h3>',
            myNumber: 12345,
            myBool: true,
            myArray: [1,2,3,4,5],
            myObject:[
                {name: '다즐링', price:  600},
                {name: '얼그레이', price: 500},
                {name: '실론', price: 500}
            ]
        }

    },
    methods: {

    }
}

</script>