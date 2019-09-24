import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)
const routes=[
  {
    path:"/",
    component:null
  }
]
export default new VueRouter({
  routes,
  mode:"history"
})