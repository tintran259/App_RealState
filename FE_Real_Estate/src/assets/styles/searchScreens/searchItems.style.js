import { StyleSheet } from 'react-native'


const StylesSearchItems = StyleSheet.create({
   listPostCart: {
      width: "100%",
      height: 250,
      marginBottom: 20,
      backgroundColor: "#fff",
      borderRadius: 10,
   },
   unitPost: {
      position: "absolute",
      top: 0,
      left: 20,
      zIndex: 2,
   },
   cardList: {
      width: "100%",
      height: "100%",
      borderRadius: 10,
   },
   iconheart: {
      fontSize: 19,
      position: "absolute",
      top: 10,
      right: 10,
      color: "#e74c3c",
      zIndex: 2,
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 10
   },
   dialogHome: {
      width: "100%",
      height: 180,
      position: "absolute",
      top: 0,
      left: 0,
      backgroundColor: "#ecf0f175",
      zIndex: 1,
      borderRadius: 10
   },
   imgPost: {
      width: "100%",
      height: "72%",
      zIndex: -1
   },
   imgList: {
      width: "100%",
      height: "100%",
      borderRadius: 10,
   },
   Count: {
      position: "absolute",
      top: 150,
      right: "3%",
      zIndex: 2,
      flexDirection: "row"
   },
   iconCount: {
      fontSize: 20,
      color: "#e74c3c",
      marginRight: 5
   },
   contactCart: {
      flexDirection: "row",
      height: "28%",
      justifyContent: "space-around"
   },
   contactLeft: {
      width: "65%",
      height: "100%",
   },
   textAddress: {
      width: 180,
      height: 35,
      fontSize: 16,
      fontWeight: "bold",
      marginLeft: 5,
      marginTop: 10,
      color: "#7f8c8d"
   },
   valueHome: {
      flexDirection: "row",
      marginLeft: 15,
      justifyContent: "space-around"
   },
   textBed: {
      marginRight: 20,
      fontSize: 15,
      color: "#a2a4ae"
   },
   numbertext: {
      fontWeight: "bold",
      fontSize: 16
   },
   prices: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "35%",
      height: "100%",
   },
   textPrices: {
      // width: "50%",
      fontSize: 17,
      color: "#2ecc71",
      fontWeight: "bold"
   },
   imgArrow: {
      width: 20,
      height: 40
   },
   textColor: {
      width: "100%",
      transform: [{ rotate: '90deg' }],
      position: "absolute",
      top: 10,
      fontSize: 10,
      fontWeight: "bold",
      color: "#fff"
   },
})

export default StylesSearchItems