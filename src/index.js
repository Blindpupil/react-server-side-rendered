import express from 'express'
import renderer from './client/helpers/renderer'

const app = express()
const port = process.env.PORT || 3002

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(renderer())
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
