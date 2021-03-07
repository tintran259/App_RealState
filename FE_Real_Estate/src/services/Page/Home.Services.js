import api from '../services'
import { UNIT_VALUE, VALUE } from '../../contants'
const GetListProductServices = {
   getListProduct: () => {
      return (
         api
            .call()
            .get(`/home`)
      )
   },
   postNewsStatus: ({
      title,
      address,
      content,
      prices,
      beds,
      baths,
      images,
      description,
      valueCurrent,
      valueName,
      valueArea,
      unit,
      phoneNumber,
      idUser,
      nameUser
   }) => {
      const length = prices.length
      const lengthDis = unit === UNIT_VALUE.TY ? 9 : unit === UNIT_VALUE.TRIEU ? 6 : 3
      const pricesFormat = prices.slice(0, length - lengthDis)
      console.log("pricesFormat", pricesFormat);
      return (
         api
            .call()
            .post('/postNews',
               [
                  {
                     "txtAdress": address,
                     "txtBath": baths,
                     "txtBad": beds,
                     "txtContent": content,
                     "txtDescription": description,
                     "id_post": idUser,
                     "active": "false",
                     "txtName_user": nameUser,
                     "txtPhone": phoneNumber,
                     "txtPrice": parseInt(pricesFormat),
                     "txtTiltle": title,
                     "txtUnit": unit,
                     "txtSize": valueArea,
                     "txtKind": valueCurrent,
                     "txtName": valueName
                  },
                  {
                     "image": images
                  }
               ]
            )
      )
   },

   sendGmail: ({ price, adress, name_user, unit, phone, kind, _id }) => {
      return (
         api
            .call()
            .post('/sendMail', [
               {
                  "txtPrice": price,
                  "txtUnit": unit,
                  "txtName_user": name_user,
                  "txtPhone": phone,
                  "txtKind": kind,
                  "txtAdress": adress
               },
               {
               },
               {
                  "id": _id
               }
            ])
      )
   }
}

export default GetListProductServices