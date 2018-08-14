import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express()
const port = process.env.PORT || 3002

app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore()

  matchRoutes(Routes, req.path)

  res.send(renderer(req, store))
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
