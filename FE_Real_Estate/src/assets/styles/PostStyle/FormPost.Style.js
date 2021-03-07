import { StyleSheet } from 'react-native'


const StyleFormPost = StyleSheet.create({
   formPost: {
      width: "100%",
      height: "100%",
      position: "relative",
      paddingBottom: 60,
   },
   input: {
      width: "100%",
      height: 40,
      borderRadius: 10,
      borderWidth: 0.5,
      marginTop: 10,
      borderColor: "#dfe6e9",
      paddingHorizontal: 10,
      backgroundColor: "#fff"
   },
   nameLabel: {
      fontWeight: "bold",
      color: "#2d3436"
   },
   nameBed: {
      fontWeight: "bold",
      color: "#2d3436",
      marginTop: 10,
      marginLeft: 5
   },
   itemForm: {
      marginBottom: 10,
      width: "100%"
   },
   FormHorizanto: {
      flexDirection: "row",
   },
   FormHorizantoTienIch: {
      flexDirection: "row",
      justifyContent: "space-around"
   },

   formLeft: {
      marginRight: "20%",
   },
   btn_post: {
      width: "100%",
      height: 40,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      marginTop: 20,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
   },
   formBed: {
      flexDirection: "row",
      alignItems: "center",
   },
   tienich: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 10,
      marginBottom: 10,
      width: "100%",
      height: 50
   },
   VND: {
      position: "absolute",
      bottom: "10%",
      right: "5%",
      color: "#2d3436"
   },
   PricesText: {
      flexDirection: "row",
      alignItems: "center"
   },
   btn_SelectFile: {
      width: "50%",
      height: 40,
      backgroundColor: "#fff",
      borderRadius: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
      borderColor: "#dfe6e9",
      borderWidth: 0.5
   },
   text_btn: {
      color: "#7f8c8d"
   },
   icon_btn: {
      marginLeft: 20,
      color: "#7f8c8d"
   },
   imageUpload: {
      width: 70,
      height: 70,
      resizeMode: "cover",
      borderRadius: 10,
      marginRight: 10
   },
   formImage: {
      marginTop: 10,
      width: "100%",
      height: 80
   }
})

export default StyleFormPost