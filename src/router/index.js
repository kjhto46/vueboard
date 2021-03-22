import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Board from '@/components/Board'
import BoardDetail from "@/components/BoardDetail"
import BoardCreate from "@/components/BoardCreate"
import Login from '@/components/Login'
import Gallery from '@/components/Gallery'
import BoardList from '@/components/BoardList'
import Calendar from '@/components/Calendar'
Vue.use(Router)

export default new Router({
  routes: [
    {
   
      path: '/',
      name: 'Board',
      component: Board,
    },
    {
      path: "/detail/:contentId",
      name: "BoardDetail",
      component: BoardDetail
    },
    {
      path: "/create/:contentId?",
      name: "BoardCreate",
      component: BoardCreate
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/gallery",
      name: "Gallery",
      component: Gallery
    },
    {
      path: "/boardlist",
      name: "BoardList",
      component: BoardList
    },
    {
      path: "/calendar",
      name: "Calendar",
      component: Calendar
    }
  ]
})
