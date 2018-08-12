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

export default {
  fromState
}
