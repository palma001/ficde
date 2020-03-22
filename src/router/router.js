import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main'
import Users from '../views/Users'
import About from '../views/About'
import Login from '../views/Login'
import AddDynamic from '../views/AddDynamic'
import Subjects from '../views/SubjectsView.vue'
import Students from '../views/StudentsView'
import Courses from '../views/CoursesView'
import Headquarters from '../views/HeadquartersView'
import Turn from '../views/TurnView'
import Notes from '../views/NotesView'
import Classrooms from '../views/ClassroomsView'
import Modalities from '../views/ModalitiesView'
import Semester from '../views/SemesterView'
import Assists from '../views/AssistsView'
import AssigCoursesClassrooms from '../views/AssigCoursesClassroomsView'
import Inscription from '../views/InscriptionView'
import ScheduleTeacher from '../views/ScheduleTeacher'
import { validationSession, validationNotSession } from './router-permissions'
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
      component: Login,
      beforeEnter: validationNotSession
    },
    {
      path: '/dashboard',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'schedule',
          name: 'schedule',
          component: ScheduleTeacher,
          beforeEnter: validationSession
        },
        {
          path: 'inscription',
          name: 'inscription',
          component: Inscription,
          beforeEnter: validationSession
        },
        {
          path: 'coursesclassrooms',
          name: 'coursesclassrooms',
          component: AssigCoursesClassrooms,
          beforeEnter: validationSession
        },
        {
          path: 'users',
          name: 'users',
          component: Users,
          beforeEnter: validationSession
        },
        {
          path: 'classrooms',
          name: 'classrooms',
          component: Classrooms,
          beforeEnter: validationSession
        },
        {
          path: 'assists',
          name: 'assists',
          component: Assists,
          beforeEnter: validationSession
        },
        {
          path: 'semesters',
          name: 'semesters',
          component: Semester,
          beforeEnter: validationSession
        },
        {
          path: 'modalities',
          name: 'modalities',
          component: Modalities,
          beforeEnter: validationSession
        },
        {
          path: 'notes',
          name: 'notes',
          component: Notes,
          beforeEnter: validationSession
        },
        {
          path: 'students',
          name: 'students',
          component: Students,
          beforeEnter: validationSession
        },
        {
          path: 'headquarters',
          name: 'headquarters',
          component: Headquarters,
          beforeEnter: validationSession
        },
        {
          path: 'courses',
          name: 'courses',
          component: Courses,
          beforeEnter: validationSession
        },
        {
          path: 'turn',
          name: 'turn',
          component: Turn,
          beforeEnter: validationSession
        },
        {
          path: 'subjects',
          name: 'subjects',
          component: Subjects,
          beforeEnter: validationSession
        },
        {
          path: 'about',
          name: 'about',
          component: About,
          beforeEnter: validationSession
        },
        {
          path: 'add/:entity',
          name: 'addDynamic',
          component: AddDynamic,
          beforeEnter: validationSession
        }
      ]
    }
  ]
})

export default router
