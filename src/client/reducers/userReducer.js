import { FECTH_USERS } from '../actions'

export default ( state = [], action) => {
  switch (action.type) {
    case FECTH_USERS:
      return action.payload.data
    default:
      return state
  }
}