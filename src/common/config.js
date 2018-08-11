import { indexOf } from 'lodash'
import config from '../config.json'

function value(key) {
  if (indexOf(key, '.') > -1) {
    let prop = config
    let props = key.split('.')

    for (let i = 0; i < props.length; i++) {
      if (prop[props[i]]) {
        prop = prop[props[i]]
      }
    }

    return prop
  } else {
    return config[key]
  }
}

function values() {
  return config
}

export default {
  value,
  values
}
