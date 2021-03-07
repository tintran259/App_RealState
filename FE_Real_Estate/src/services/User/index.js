import api from '../services'


export const ChangeInfor = {
   FormAvatar: ({ username, password }) => {
      return (
         api
            .call()
            .post('/login', {
               "username": username,
               "password": password
            })
      )
   },
   FormPassword: ({ username, password, fullname, image }) => {
      return (
         api
            .call()
            .post('/register', {
               "username": username,
               "password": password,
               "fullname": fullname,
               "img": image
            })
      )
   },
   EditUser: ({ id, fullname, image, password, account }) => {
      return (
         api
            .call()
            .post('/myAccount/changeInfo', {
               "id": id,
               "username": account,
               "password": password,
               "fullname": fullname
            })
      )
   },
   ChangeAvatar: ({ id, image }) => {
      return (
         api
            .call()
            .post('./myAccount/changeAvatar', {
               "id": id,
               "img": image
            })
      )
   }
}