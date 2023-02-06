import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import HelloWorld from '../components/HelloWorld'
import CountUp from '../components/CountUp'
import Data from '../components/Data'
import DataBind from '../components/DataBind'
import FormData from '../components/FormData'
import Method from '../components/Method'
import IfElseArray from '../components/IfElseArray'
import GoogleChart from '../components/GoogleChart'
import DataWatcher from '../components/DataWatcher'

// 라우터 세팅
const routes = [
    { path: '/home', component: Home},
    { path: '/helloworld', component: HelloWorld},
    { path: '/countUp', component: CountUp},
    { path: '/data', component: Data},
    { path: '/dataBind', component: DataBind},
    { path: '/formData', component: FormData},
    { path: '/method', component: Method},
    { path: '/ifElseArray', component: IfElseArray},
    { path: '/googleChart', component: GoogleChart},
    { path: '/dataWatcher', component: DataWatcher},
]

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출(main.js에서 import)
export { router }