import { configData } from './indexConfig'
/**
 * Search the configuration in  indexAddConfig
 * @param {String} data route the container
 * @return {Array} confi configuration the add dinamycs
 **/
export const getConfigAdd = (data) => {
  let confi = configData.filter(element => {
    if (element.entity && data) {
      return element.entity.toUpperCase().includes(data.toUpperCase())
    }
  })
  return confi
}
