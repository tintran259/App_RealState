import api from '../services'


export const PostLogin = {
   FormLogin: ({ username, password }) => {
      return (
         api
            .call()
            .post('/login', {
               "username": username,
               "password": password
            })
      )
   },
   Register: ({ username, password, fullname, image }) => {
      console.log("data truyen len:", username, password, fullname, image);
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
   }
}