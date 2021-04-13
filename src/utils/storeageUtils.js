/*
 * @Author: xuejian 
 * @Date: 2021-04-13 15:05:06 
 * @Last Modified by: xuejian
 * @Last Modified time: 2021-04-13 15:08:14
 */
export default {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },

  get(key) {
    return JSON.parse(localStorage.getItem(key) || '{}')
  },

  remove(key) {
    localStorage.removeItem(key)
  }
}
