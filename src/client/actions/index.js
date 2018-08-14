import axios from 'axios'

export const FECTH_USERS = 'fetch_users'
export const fetchUsers = () => async dispatch => {
  const res = await axios.get('http://react-ssr-api.herokuapp.com/users')

  dispatch({
    type: FECTH_USERS,
    payload: res
  })
}