import React from 'react'
import { create } from 'dva-core'
import { Provider, connect } from 'react-redux'

export { connect }

export default function(options) {
  const app = create(options)
  // HMR workaround
  if (!global.registered) options.models.forEach(model => app.model(model))
  global.registered = true

  console.log('1111***');
  app.start()
  console.log('2222***');
  // eslint-disable-next-line no-underscore-dangle
  const store = app._store
  console.log('3333****');
  app.start = container => () => <Provider store={store}>{container}</Provider>
  console.log('4444***');
  app.getStore = () => store
  console.log('5555***');
  return app
}
