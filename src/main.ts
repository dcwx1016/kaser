import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Vant from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp(App);

app.use(Vant);
app.mount('#app');
