import { createRouter, createWebHistory } from 'vue-router'
import EditView from "../views/EditView.vue"
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todo-list',
      component: HomeView
    },
    {
      path: "/todo/:id/edit",
      name: "edit-todo",
      component: EditView
    }
  ]
})

export default router
