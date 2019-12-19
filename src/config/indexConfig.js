import { usersConfig, tabsCofig } from './../config/usersConfig.js'
import { aboutConfig, aboutTabsCofig } from '../config/aboutConfig'
import { studentsConfig, tabsCofigStudents } from '../config/studentsConfig'
import { subjectsConfig, tabsSubjectsCofig, subjectsServices } from '../config/subjectsConfig'
export const configData = [
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
  }
]
