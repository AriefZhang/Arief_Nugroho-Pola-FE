import axios from 'axios'

export function setUser(payload) {
  return {
    type: "user/fetchSuccess",
    payload,
  };
}

export function setUserById(payload) {
  return {
    type: "user/fetchSuccessById",
    payload,
  };
}

export function fetchUserAsync() {
  return dispatch => {
    axios.get('http://localhost:3000/Users')
    .then(({data}) => {
      dispatch(setUser(data))
    })
    .catch((err) => console.log(err))
  }
}
