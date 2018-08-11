import * as _ from 'lodash'
import * as fb from './firebase'
import axios from 'axios'
import { connect } from 'react-redux'
import { createLogic } from 'redux-logic'
import { createSelectorCreator, createStructuredSelector, defaultMemoize } from 'reselect'
import PropTypes from 'prop-types'

const createDeepEqualSelector = createSelectorCreator(defaultMemoize, _.isEqual)

export default {
  axios,
  connect,
  createLogic,
  createSelector: createDeepEqualSelector,
  createStructuredSelector,
  fb,
  PropTypes,
  _
}
