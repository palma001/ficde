/**
 * Translates the tags in Entities
 * @param {String} message tag to translate
 * @param {String} Entity to translate
 */
export const translateEntity = function (entity, message) {
  return this.$i18n.t(`template.${entity}.${message}.label`)
}
/**
 * translate text
 * @param  {String} value text translate
 * @return {String}       text translated
 */
export const translateLabel = function (value) {
  return this.$i18n.t(`template.${value}.label`)
}
export const methods = {
  translateEntity,
  translateLabel
}
