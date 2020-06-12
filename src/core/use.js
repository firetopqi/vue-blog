import Vue from 'vue'
// 全局变量 typescript 需要在 ./shims-option.d.ts 添加类型
import {
  goToRedirect,
} from "@/util/util";
Vue.prototype.$goToRedirect = goToRedirect