import { usersConfig, tabsCofig } from './../config/usersConfig.js'
import { aboutConfig, aboutTabsCofig } from '../config/aboutConfig'
import { studentsConfig, tabsCofigStudents, studentServices } from '../config/studentsConfig'
import { subjectsConfig, tabsSubjectsCofig, subjectsServices } from '../config/subjectsConfig'
import { courseConfig, tabsCourseCofig } from '../config/courseConfig'
import { headquartersConfig, tabsHeadquartersConfig, headquartersServices } from '../config/headquartersConfig'
import { turnConfig, tabsTurnCofig } from '../config/turnConfig'
import { notesConfig, notesTabs, notesServices } from '../config/notes'
import { classRoomsConfig, classRoomsServices, tabsClassRoomsCofig } from '../config/classrooms'
import { modalitiesConfig, modalitiesTabs } from './modalities'
import { semestersConfig, tabsSemestersCofig } from './semesters'
import { assistsConfig, tabsAssistsCofig, assistsServices } from './assists'
import { courseClassRoomsConfig, tabsourseClassRoomsCofig, courseClassRoomsServices } from './courseClassrooms'
import { inscriptionsConfig, tabInscriptionCofig, inscriptionsServices } from './inscriptions'
export const configData = [
  {
    entity: 'inscription',
    entityMicroservices: 'estudiantes_materias',
    microservices: 'ficde',
    primaryKey: [''],
    config: inscriptionsConfig,
    tabsCofig: tabInscriptionCofig,
    relationalData: inscriptionsServices
  },
  {
    entity: 'coursesclassrooms',
    entityMicroservices: 'semestres_materias',
    microservices: 'ficde',
    primaryKey: [''],
    config: courseClassRoomsConfig,
    tabsCofig: tabsourseClassRoomsCofig,
    relationalData: courseClassRoomsServices
  },
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
    entity: 'assists',
    entityMicroservices: 'asistencias',
    microservices: 'ficde',
    primaryKey: [''],
    config: assistsConfig,
    tabsCofig: tabsAssistsCofig,
    relationalData: assistsServices
  },
  {
    entity: 'semesters',
    entityMicroservices: 'semestres',
    microservices: 'ficde',
    primaryKey: ['nombre'],
    config: semestersConfig,
    tabsCofig: tabsSemestersCofig,
    relationalData: null
  },
  {
    entity: 'modalities',
    entityMicroservices: 'modalidades',
    microservices: 'ficde',
    primaryKey: ['modalidad'],
    config: modalitiesConfig,
    tabsCofig: modalitiesTabs,
    relationalData: null
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
    relationalData: studentServices
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
    primaryKey: [],
    config: turnConfig,
    tabsCofig: tabsTurnCofig,
    relationalData: null
  }
]
