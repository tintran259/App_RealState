import { StyleSheet } from 'react-native'


const StyleModalSuccessed = StyleSheet.create({
   dialog: {
      width: "70%",
      height: 150,
      backgroundColor: "#fff",
      borderRadius: 10,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around"
   },
   titleHeader: {
      fontSize: 19,
      letterSpacing: 1,
      color: "#95a5a6"
   },
   viewWrongPass: {
      width: "80%",
      height: 200,
      backgroundColor: "#fff",
      borderRadius: 10,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
   },
   btn_try: {
      width: 100,
      height: 35,
      backgroundColor: "#fff",
      borderRadius: 10,
      borderWidth: 1.5,
      borderColor: "#e74c3c",
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,

      elevation: 10,
   },
   IMAGE: {
      width: 50,
      height: 50
   },
   textWrong: {
      fontSize: 25,
      color: "#636e72"
   },
   textTry: {
      color: "#636e72",
      fontSize: 12,
      fontWeight: "bold"
   },
   textMay: {
      fontSize: 11,
      color: "#636e72",
      marginBottom: 20
   }
})

export default StyleModalSuccessed