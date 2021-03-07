import { StyleSheet } from 'react-native'

const StylesPostDetails = StyleSheet.create({
   container: {
      width: "100%",
      height: 400,
      zIndex: 100
   },
   btnBack: {
      width: 50,
      height: 40,
      justifyContent: "center",
      alignItems: "center"
   },
   iconBack: {
      fontSize: 24,
      color: "#fff"
   },
   header: {
      width: "100%",
      height: 40,
      position: "absolute",
      zIndex: 200,
      marginTop: 20
   },
   slideContainer: {
      flex: 1,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10
   },
   imageSlide: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10
   },
   contentDetail: {
      marginTop: 10
   },
   body: {
      width: "100%",
      paddingHorizontal: 10,
      marginTop: 10
   },
   titleDetail: {
      fontSize: 15,
      marginRight: 10,
      color: "#2d3436",
      marginBottom: 5,
      fontWeight: "bold"
   },
   textDetail: {
      color: "#2d3436",
      width: "100%"
   },
   title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#3498db"
   },
   address: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginTop: 10
   },
   iconLocation: {
      fontSize: 19
   },
   textAddress: {
      width: "90%",
      fontSize: 16,
      fontStyle: "italic",
      marginLeft: 10,
      textDecorationLine: "underline"
   },
   phone: {
      width: 50,
      height: 50,
      position: "absolute",
      zIndex: 2000,
      right: "2%",
      bottom: "2%"
   },
   btnCall: {
      width: "100%",
      height: "100%",
      backgroundColor: "#3498db",
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
   },
   iconCALL: {
      color: "#fff",
      fontSize: 20
   },
   viewRoom: {
      width: "100%",
      height: 300
   },
   Custom: {
      width: "100%",
      height: 80,
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "space-around"
   },
   textCustom: {
      textAlign: "center",
      fontWeight: "bold"
   },
   itemCustom: {
      alignItems: "center"
   }
})

export default StylesPostDetails