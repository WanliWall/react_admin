import axios from "axios";

export function userLogin(data) {
  return axios({
    url: '/api/user/login',
    method: 'post',
    data
  })
}

export function addUser(data) {
  return axios({
    url: '/api/user/add',
    method: 'post',
    data
  })
}

export function getUsers() {
  return axios({
    url: '/api/user/getUsers',
    method: 'get'
  })
}
