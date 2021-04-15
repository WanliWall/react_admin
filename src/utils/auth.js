/*
 * @Author: xuejian 
 * @Date: 2021-04-13 15:05:06 
 * @Last Modified by: xuejian
 * @Last Modified time: 2021-04-15 10:39:02
 */
import Cookies from 'js-cookie'

const TokenKey = 'access_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
