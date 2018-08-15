export const FECTH_USERS = 'fetch_users'
export const fetchUsers = () => async (dispatch, getState, axiosInstance) => {
  const res = await axiosInstance.get('/users')

  dispatch({
    type: FECTH_USERS,
    payload: res
  })
}

export const FETCH_CURRENT_USER = 'fetch_current_user'
export const fetchCurrentUser = () => async (dispatch, getState, axiosInstance) => {
  const res = await axiosInstance.get('/current_user')

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  })
}