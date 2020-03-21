import { users } from './users'
import { permissions } from './permissions'
const mockData = {
  getData (data, params) {
    switch (data) {
      case 'users': {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              response: {
                data: {
                  content: users,
                  metadata: {
                    totalElements: users.length,
                    number: params, // server data
                    size: 3 // server data
                  }
                }
              }
            })
          }, 2000)
        })
      }
      case 'permissions': {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              response: {
                data: {
                  content: permissions,
                  metadata: {
                    totalElements: permissions.length,
                    number: params, // server data
                    size: 3 // server data
                  }
                }
              }
            })
          }, 2000)
        })
      }
    }
  }
}
const install = function (Vue, options) {
  Vue.prototype.$mockData = mockData
}

export default install
