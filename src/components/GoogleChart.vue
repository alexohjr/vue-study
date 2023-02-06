<template>

    <h2>Google Charts로 원그래프 그리기</h2>
    <h3>선호 점심 메뉴</h3>
    <div id="chart_div" style="height: 500px;"></div>

    <ul>
        <li v-for="(item, c) in dataArray">{{ item[0] }} : {{ item[1] }}
            <span v-if="c > 0">
                <button v-on:click="addOne(c)">투표</button>
            </span>
        </li>
    </ul>
    <hr/>

    <h2>prac</h2>
    <h3>선호 점심 메뉴</h3>
    <div id="chart_div2" style="height: 500px;"></div>
    <ul>
        <li v-for="(item, c) in dataArray">{{ item[0] }} : {{ item[1] }}
            <span v-if="c > 0">
                <button v-on:click="voteEvent(c, 1)">PLUS</button>
                <button v-on:click="voteEvent(c, -1)">MINUS</button>
            </span>
        </li>
    </ul>

</template>

<script>

// 그래프 데이터
var orgData = [
    ['종류', '개수'],
    ['도시락', 3], ['갈비탕', 4], ['오므라이스', 5], ['짬뽕', 1], ['비빔밥', 3], ['메밀소바', 1]
];

google.charts.load('current', {packages: ['bar', 'corechart']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
    var data = google.visualization.arrayToDataTable(orgData);
    var options = {title: '선호하는 점심', "is3D": true};
    var chart = new google.visualization.PieChart(
        document.getElementById('chart_div'));
    chart.draw(data, options);

    var chart2 = new google.visualization.BarChart(
        document.getElementById('chart_div2'));
    chart2.draw(data, options);
}

export default {
    name: 'GoogleChart',
    data() {
        return {
            dataArray: orgData,
        }
    },
    methods: {
        addOne(index) {
            var obj = this.dataArray[index];
            obj[1]++;
            this.dataArray.splice(index, 1, obj);
            drawBasic();
        },
        voteEvent(index, num) {
            console.log('hihi');
            var obj = this.dataArray[index];

            if(!(obj[1] < 1 && num < 0)) {
                obj[1] = obj[1] + num;
            }

            this.dataArray.splice(index, 1, obj);
            drawBasic();
        }
    }
}

</script>