import { Redirect, Route, Switch } from 'react-router-dom'

import storageUtils from '../../utils/storeageUtils'
const user = storageUtils.get('user_key')
const Admin = () => {
  if(!user || !user.id) {
    return <Redirect to="/login" />
  }
  return <div>admin</div>
}

export default Admin
