import { StyleSheet } from 'react-native'

const stylesSplash = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#53b5b6"
   },
   img: {
      width: 200,
      height: 200
   },
   title: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#fff",
      letterSpacing: 2
   },
   headerTitle: {
      fontSize: 40,
      fontWeight: "bold",
      color: "#fff",
      letterSpacing: 2
   }
})

export {
   stylesSplash
}