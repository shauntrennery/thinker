import config from '../config'
import lib from '../lib'

function fromState(state, key, defaultValue) {
  if (state) {
    if (lib._.has(state, key)) {
      return lib._.get(state, key)
    } else {
      return defaultValue
    }
  } else {
    return defaultValue
  }
}

function isValidDate(dateValue) {
  const parsedValue = Date.parse(dateValue)
  return lib._.isNumber(parsedValue) && !lib._.isNaN(parsedValue)
}

function formatDate(dateValue, formatString) {
  formatString = formatString || config.value('dateTimeFormat')

  if (dateValue) {
    if (lib._.isString(dateValue)) {
      if (isValidDate(dateValue)) {
        return lib.datefn.format(new Date(dateValue), formatString)
      } else {
        return ''
      }
    } else if (lib._.isDate(dateValue) || lib._.isNumber(dateValue)) {
      return lib.datefn.format(dateValue, formatString)
    } else {
      return ''
    }
  } else {
    return ''
  }
}

export default {
  fromState,
  formatDate
}
