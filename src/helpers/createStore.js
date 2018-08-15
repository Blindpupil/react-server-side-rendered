import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import reducers from '../client/reducers'

export default (req) => {
  const axiosInstance = axios.create({
    // there's no proxy acting here, we need the full url
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' }
  })

  return createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  )
}