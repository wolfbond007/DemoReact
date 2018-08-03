import React from 'react'
import { AppRegistry } from 'react-native'
import { connect } from 'react-redux'
import RouterComponent from './src/Router'

import dva from './src/utils/dva'
import Auth from './src/models/Auth'

console.ignoredYellowBox = [
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Warning: isMounted(...) is deprecated',
]

const app = dva({
  initialState: {},
  models: [Auth],
  onError(e) {
    console.log('onError', e)
  },
})

const App = app.start(<RouterComponent />)

AppRegistry.registerComponent('DemoReact', () => App);
