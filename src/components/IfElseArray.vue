<template>

<label><input type="checkbox" v-model="myVisible"/>Visible</label>
<p v-if="myVisible">Checkbox ON</p>
<p v-else>Checkbox OFF</p>

<button v-if="isShow" v-on:click="good">Good</button>
<!-- v-if :: 요소 생성 및 삭제 / v-show :: 요소 상시 존재 visibility control -->
<hr/>

<h3>Array</h3>
<ul>
    <li v-for="item in myArray">{{ item }}</li>
</ul>
<hr/>

<h4>Object Array</h4>
<ul>
    <li v-for="item in myObjectArray">{{ item.name }} {{ item.price }}원</li>
</ul>
<hr />

<h4>For test</h4>
<ul>
    <li v-for="n in 10">{{ n }}x5={{ n*5 }}</li>
</ul>
<hr />

<h4>Array with index</h4>
<ul>
    <li v-for="(item, index) in myArray"><span v-if="item != 'B'">{{ index }}::{{ item }}</span></li>
</ul>

<h4>Array with table</h4>
<table>
    <thead>
    <!-- 테이블 헤더 반복 -->
    <th v-for="item in header">{{ item }}</th>
    </thead>
    <tbody>
    <!-- 1행 반복 -->
        <tr v-for="line in ranking">
            <!-- 1데이터 반복-->
            <td v-for="item in line">{{ item }}</td>
        </tr>
    </tbody>
</table>
<hr />

<h4>Array with method</h4>
<ul>
    <li v-for="item in myArray">{{ item }}</li>
</ul>
<button v-on:click="addLast">맨 뒤에 추가</button>
<button v-on:click="addObj(3)">네번째에 추가</button>
<button v-on:click="changeObj(0)">첫번째를 변경</button>
<button v-on:click="deleteObj(1)">두번째를 삭제</button>
<hr />

<h4>Array with sort</h4>
<ul>
    <li v-for="item in myArray">{{ item }}</li>
</ul>
<button v-on:click="sortData(myArray)">sort</button>
<hr/>

<h4>Array with condition</h4>
<ul>
    <template v-for="item in myArray">
        <li v-if="item % 2 == 0">{{ item }}</li>
    </template>
</ul>
<h4>Array with condition , use filter inline code</h4>
<ul>
    <li v-for="item in myArray.filter((i) => i % 2 == 0)">{{ item }}</li>
</ul>
<!-- v-for 와 v-if 동시 사용을 지양하기에 template을 활용한다 -->
<hr />

<h4>Array with filter</h4>
<ul>
    <li v-for="item in myArray">{{ item }}</li>
</ul>
<button v-on:click="eventData()">짝수만 표시</button>
<hr />

<h4>prac</h4>
<h4>숫자 배열 조작과 구구단 출력</h4>
<ul :class="'hi hello'">
    <li v-for="(item, index) in pracArray">{{ item }}
        <button v-on:click="changeEvent(index)">변경</button>
        <button v-on:click="deleteEvent2(index)">삭제</button>
    </li>
</ul>
<br/>
<button v-on:click="addEvent">추가</button>
<button v-on:click="sortEvent(pracArray)">소트</button>
<button v-on:click="pracVisible = !pracVisible">
    <span v-if="pracVisible">구구단 숨기기</span>
    <span v-else>구구단 보이기</span>
</button><br/>

<ul v-if="pracVisible">
    <li v-for="n in 9">{{ pracArray[pracArray.length-1] }} X {{ n }} = {{ pracArray[pracArray.length-1]*n }}</li>
</ul>



</template>

<script>

    export default {
        name: 'IfElseArray',
        data() {
            return {
                myVisible: false,
                isShow: true,
                // myArray: ['A', 'B', 'C'],
                myArray: [1, 2, 3, 4, 5],
                myObjectArray: [
                    {name: '짬뽕', price: 1000},
                    {name: '짜장', price: 2000},
                    {name: '탕슉', price: 3000},
                ],
                header: ["language", 2018, 2013, 2008, 2003, 1998],
                ranking: [
                    ['Java', 1, 2, 1, 1, 16],
                    ['C', 2, 1, 2, 2, 1],
                    ['C++', 3, 4, 3, 3, 2],
                    ['Python', 4, 7,6, 11, 23],
                    ['JavaScript', 7, 10, 8, 7, 20]
                ],
                pracArray: [2, 6, 7, 8, 13],
                pracVisible: false,
            }
        },
        methods: {
            good: function() {
                this.isShow = false;
            },
            addLast: function() {
                this.myArray.push("맨뒤 추가");
            },
            addObj: function(index) {
                this.myArray.splice(index, 0, '추가');
            },
            changeObj: function(index) {
                this.myArray.splice(index, 1, '변경')
            },
            deleteObj: function(index) {
                this.myArray.splice(index, 1);
            },
            sortData: function(listData) {
                listData.sort(function(a, b) {
                    return (a > b ? -1 : 1);
                });
            },
            eventData: function() {
                this.myArray = this.myArray.filter((value) => {
                    return value % 2 == 0;
                });
            },
            changeEvent: function(index) {
                this.pracArray[index]++;
            },
            deleteEvent: function(index) {
                this.pracArray.splice(index, 1);
            },

            deleteEvent2(index) {
                this.pracArray.splice(index, 1);
            },
            addEvent() {
                this.pracArray.push(1);
            },
            sortEvent(list) {
                list.sort((a,b) => {
                    console.log(this.pracArray.length);
                    return (a > b ? -1 : 1);

                })
            },
            visibleEvent() {

            },

        }

    }

</script>

<style>
    table {
        width: 100%;
        text-align: left;
    }
    table th {
        padding: 12px;
        border-bottom: 2px solid darkgray;
    }
    table td {
        padding: 12px;
    }
    table tr:nth-of-type(even) {
        background-color: rgba(0, 0, 255, 0.1);
    }
</style>