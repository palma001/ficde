import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main'
import Users from './views/Users'
import About from './views/About'
import Login from './views/Login'
import AddDynamic from './views/AddDynamic'
import { Store } from './store/'
import Subjects from './views/SubjectsView.vue'
import Students from './views/StudentsView'
import Courses from './views/CoursesView'
import Headquarters from './views/HeadquartersView'
import Turn from './views/TurnView'
import Notes from './views/NotesView'
import Classrooms from './views/ClassroomsView'
import Modalities from './views/ModalitiesView'
import Semester from './views/SemesterView'
import Assists from './views/AssistsView'
import AssigCoursesClassrooms from './views/AssigCoursesClassroomsView'
import Inscription from './views/InscriptionView'
import ScheduleTeacher from './views/ScheduleTeacher'
import { ACTIONS } from './store/module-login/name'
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
          path: 'schedule',
          name: 'schedule',
          component: ScheduleTeacher
        },
        {
          path: 'inscription',
          name: 'inscription',
          component: Inscription
        },
        {
          path: 'coursesclassrooms',
          name: 'coursesclassrooms',
          component: AssigCoursesClassrooms
        },
        {
          path: 'users',
          name: 'users',
          component: Users
        },
        {
          path: 'classrooms',
          name: 'classrooms',
          component: Classrooms
        },
        {
          path: 'assists',
          name: 'assists',
          component: Assists
        },
        {
          path: 'semesters',
          name: 'semesters',
          component: Semester
        },
        {
          path: 'modalities',
          name: 'modalities',
          component: Modalities
        },
        {
          path: 'notes',
          name: 'notes',
          component: Notes
        },
        {
          path: 'students',
          name: 'students',
          component: Students
        },
        {
          path: 'headquarters',
          name: 'headquarters',
          component: Headquarters
        },
        {
          path: 'courses',
          name: 'courses',
          component: Courses
        },
        {
          path: 'turn',
          name: 'turn',
          component: Turn
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

router.beforeEach(async (to, from, next) => {
  let autorization = to.matched.some(record => record.meta.authenticate)
  let usuario = await Store.dispatch(ACTIONS.VALID_SESSION)
  console.log(usuario)
  if (autorization && !usuario) {
    next('login')
  } else if (!autorization && usuario) {
    next('dashboard')
  } else {
    next()
  }
})

export default router
