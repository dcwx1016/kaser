import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { Button, Field, CellGroup, List, Cell, Search, PullRefresh } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp(App);

app.use(Button);
app.use(Field);
app.use(CellGroup);
app.use(List);
app.use(Cell);
app.use(Search);
app.use(PullRefresh);
app.mount('#app');
