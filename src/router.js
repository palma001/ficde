import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main'
import Users from './views/Users'
import About from './views/About'
import Login from './views/Login'
import AddDynamic from './views/AddDynamic'
import store from './store'
import Subjects from './views/SubjectsView.vue'
import Students from './views/StudentsView'
import Courses from './views/CoursesView'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/dashboard'
    },
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Main',
      component: Main,
      meta: {
        authenticate: true
      },
      children: [
        {
          path: 'users',
          name: 'users',
          component: Users
        },
        {
          path: 'students',
          name: 'students',
          component: Students
        },
        {
          path: 'courses',
          name: 'courses',
          component: Courses
        },
        {
          path: 'subjects',
          name: 'subjects',
          component: Subjects
        },
        {
          path: 'about',
          name: 'about',
          component: About
        },
        {
          path: 'add/:entity',
          name: 'addDynamic',
          component: AddDynamic
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  let autorization = to.matched.some(record => record.meta.authenticate)
  let usuario = store.state.token
  if (autorization && !usuario) {
    next('login')
  } else if (!autorization && usuario) {
    next('dashboard')
  } else {
    next()
  }
})

export default router
