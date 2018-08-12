import * as _ from 'lodash'
import * as fb from './firebase'
import axios from 'axios'
import config from './config'
import { connect } from 'react-redux'
import { createLogic } from 'redux-logic'
import { createSelectorCreator, createStructuredSelector, defaultMemoize } from 'reselect'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Unsplash, { toJson } from 'unsplash-js'

const createDeepEqualSelector = createSelectorCreator(defaultMemoize, _.isEqual)
const unsplash = new Unsplash({ applicationId: config.value('unsplash.applicationId'), secret: config.value('unsplash.key') })

export default {
  axios,
  connect,
  createLogic,
  createSelector: createDeepEqualSelector,
  createStructuredSelector,
  fb,
  PropTypes,
  styled,
  toJson,
  unsplash,
  _
}
