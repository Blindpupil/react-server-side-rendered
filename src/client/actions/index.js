export const FECTH_USERS = 'fetch_users'
export const fetchUsers = () => async (dispatch, getState, axiosInstance) => {
  const res = await axiosInstance.get('/users')

  dispatch({
    type: FECTH_USERS,
    payload: res
  })
}