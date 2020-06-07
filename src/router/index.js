import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/index.vue";

Vue.use(VueRouter)

export default new VueRouter({
  base: process.env.BASE_URL,
  routes:[
    {path:'/',component:Index},
    {path:'/goods-shelves',component:() => import("../views/goods-shelves.vue")},
    {path:'/wine-cabinet',component:() => import("../views/wine-cabinet.vue")},
    {path:'/rice-barrel',component:() => import("../views/rice-barrel.vue")},
    {path:'/bread',component:() => import("../views/bread.vue")},
    {path:'/column',component:() => import("../views/column.vue")},
    {path:'/design-chart',component:() => import("../views/design-chart.vue")},
    {path:'/Cashier',component:() => import("../views/Cashier.vue")},
    {path:'/Fruits',component:() => import("../views/Fruits.vue")},
    {path:'/Wall-goods',component:() => import("../views/Wall-goods.vue")},
    {path:'/Glass-goods',component:() => import("../views/Glass-goods.vue")},
    {path:'/smoke',component:() => import("../views/smoke.vue")},
  ]
})
