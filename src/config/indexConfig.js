import { usersConfig, tabsCofig } from './../config/usersConfig.js'
import { aboutConfig, aboutTabsCofig } from '../config/aboutConfig'

export const configData = [
  {
    entity: 'users',
    microservices: 'condominiums',
    primaryKey: ['documents'],
    config: usersConfig,
    tabsCofig: tabsCofig
  },
  {
    entity: 'about',
    microservices: 'condominiums',
    primaryKey: ['title'],
    config: aboutConfig,
    tabsCofig: aboutTabsCofig
  }
]
