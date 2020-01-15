import { usersConfig, tabsCofig } from './../config/usersConfig.js'
import { aboutConfig, aboutTabsCofig } from '../config/aboutConfig'
import { studentsConfig, tabsCofigStudents } from '../config/studentsConfig'
import { subjectsConfig, tabsSubjectsCofig, subjectsServices } from '../config/subjectsConfig'
import { courseConfig, tabsCourseCofig } from '../config/courseConfig'
import { headquartersConfig, tabsHeadquartersConfig, headquartersServices } from '../config/headquartersConfig'
import { turnConfig, tabsTurnCofig } from '../config/turnConfig'
import { notesConfig, notesTabs, notesServices } from '../config/notes'
import { classRoomsConfig, classRoomsServices, tabsClassRoomsCofig } from '../config/classrooms'
export const configData = [
  {
    entity: 'classrooms',
    entityMicroservices: 'aulas',
    microservices: 'ficde',
    primaryKey: ['nombre'],
    config: classRoomsConfig,
    tabsCofig: tabsClassRoomsCofig,
    relationalData: classRoomsServices
  },
  {
    entity: 'users',
    entityMicroservices: 'usuarios',
    microservices: 'ficde',
    primaryKey: ['dni'],
    config: usersConfig,
    tabsCofig: tabsCofig,
    relationalData: null
  },
  {
    entity: 'notes',
    entityMicroservices: 'notas',
    microservices: 'ficde',
    primaryKey: [''],
    config: notesConfig,
    tabsCofig: notesTabs,
    relationalData: notesServices
  },
  {
    entity: 'about',
    microservices: 'ficde',
    primaryKey: ['title'],
    config: aboutConfig,
    tabsCofig: aboutTabsCofig,
    relationalData: null
  },
  {
    entity: 'students',
    entityMicroservices: 'estudiantes',
    microservices: 'ficde',
    primaryKey: ['dni'],
    config: studentsConfig,
    tabsCofig: tabsCofigStudents,
    relationalData: null
  },
  {
    entity: 'subjects',
    entityMicroservices: 'materias',
    microservices: 'ficde',
    primaryKey: ['materia'],
    config: subjectsConfig,
    tabsCofig: tabsSubjectsCofig,
    relationalData: subjectsServices
  },
  {
    entity: 'courses',
    entityMicroservices: 'cursos',
    microservices: 'ficde',
    primaryKey: ['curso'],
    config: courseConfig,
    tabsCofig: tabsCourseCofig,
    relationalData: null
  },
  {
    entity: 'headquarters',
    entityMicroservices: 'sedes',
    microservices: 'ficde',
    primaryKey: ['nombre'],
    config: headquartersConfig,
    tabsCofig: tabsHeadquartersConfig,
    relationalData: headquartersServices
  },
  {
    entity: 'turn',
    entityMicroservices: 'turnos',
    microservices: 'ficde',
    primaryKey: ['nombre'],
    config: turnConfig,
    tabsCofig: tabsTurnCofig,
    relationalData: null
  }
]
