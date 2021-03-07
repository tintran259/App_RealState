import { StyleSheet } from 'react-native'


const stylesHome = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#FFF",
      flexDirection: "column",
   },
   sectionHeader: {
      width: "100%",
      height: "80%",
      position: "relative",

   },
   statusbar: {
      opacity: 0.1
   },
   logoHeader: {
      width: 30,
      height: 30
   },
   dialogHeader: {
      width: "100%",
      height: "100%",
      backgroundColor: "#636e72",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      opacity: 0.5
   },
   imgHeader: {
      width: "100%",
      height: "100%"
   },
   headerControl: {
      position: "absolute",
      width: "100%",
      height: 40,
      top: "3%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1
   },
   fontText: {
      fontSize: 19,
      fontWeight: "bold",
      color: "#fff",
      letterSpacing: 1,
      fontFamily: "Nerko One",

      marginTop: 5,
      marginLeft: 10
   },
   header: {
      backgroundColor: "#fff",
      flexDirection: "row",
      width: "100%",
      height: "8%",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderBottomColor: "#94949457",
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderTopWidth: 0
   },
   titleHeader: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      color: "#197041",
      marginLeft: 10,
      position: "absolute"
   },

   imgSlide: {
      width: 340,
      height: 170,
      borderRadius: 10,
   },
   mode: {
      width: "100%",
      height: 120,
      padding: 10,
      marginTop: 10
   },
   mode_con: {
      width: "100%",
      height: "100%",
      borderRadius: 10,
      borderColor: "#e6e6e6",
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
   },
   lane1: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 10
   },
   //Mode POST =======================
   post: {
      width: 70,
      height: 70,
      justifyContent: "space-around",
      alignItems: "center",
   },
   postText: {
      textAlign: "center",
      fontWeight: "bold",
      letterSpacing: 1,
      fontSize: 12,
      color: "#7F8C8D"
   },
   //Mode Buy ==========================
   buy: {
      width: 70,
      height: 80,
      justifyContent: "space-around",
      alignItems: "center",
   },
   buyText: {
      fontWeight: "bold",
      letterSpacing: 1,
      fontSize: 12, marginTop: 5,
      color: "#7F8C8D",
   },
   //Mode Rent ===========================
   rent: {
      width: 70,
      height: 80,
      justifyContent: "center",
      alignItems: "center"
   },
   rentText: {
      fontWeight: "bold",
      letterSpacing: 1,
      fontSize: 12,
      marginTop: 10,
      color: "#7F8C8D",
   },
   //Lane 2=======================
   lane2: {
   },
   searchText: {
      textAlign: "left",
      fontWeight: "bold",
      letterSpacing: 1,
      fontSize: 12,
      color: "#7F8C8D",
      textAlign: "center",
   },
   //Slide Body =============================
   sliderSize: {
      flexDirection: "row",
      marginTop: 20
   },
   SliderBody: {
      padding: 10,
      width: "100%",
      height: 320,
   },
   titleSlider: {
      fontSize: 15,
      fontWeight: "bold",
      color: "#2d3436"
   },
   imgBG: {
      width: 150,
      height: 250,
      position: "absolute",
      top: 0,
      left: 0,
      backgroundColor: "#95a5a6",
      opacity: 0.6,
      borderRadius: 20,
      zIndex: 1
   },
   textBG: {
      width: 135,
      height: 60,
      position: "absolute",
      top: 180,
      left: 10,
      color: "#fff",
      fontSize: 16,
      zIndex: 2
   },
   cardSlider: {
      width: 150,
      height: 250,
      borderRadius: 20,
   },
   bodyList: {
      padding: 10,
      width: "100%",
      height: "100%"
   },
   cardList: {
      width: "100%",
      height: "100%",
      borderRadius: 10,
   },
   titleBodyHome: {
      marginBottom: 20,
      fontSize: 15,
      fontWeight: "bold",

      color: "#2d3436"
   },
   imgList: {
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
   listPostCart: {
      width: "100%",
      height: 250,
      marginBottom: 30,
      backgroundColor: "#fff",
      borderRadius: 10,
      position: "relative",
      borderWidth: 1,
      borderColor: "#dfe6e9"
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
   contactCart: {
      flexDirection: "row",
      height: "28%",
      justifyContent: "space-around"
   },
   textAddress: {
      width: 180,
      height: 30,
      fontSize: 17,
      fontWeight: "bold",
      marginLeft: 5,
      marginTop: 10,
      color: "#2d3436"
   },
   prices: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "35%",
      height: "100%",
   },
   textPrices: {
      fontSize: 14,
      color: "#3498db",
      fontWeight: "bold"
   },
   valueHome: {
      flexDirection: "row",
      marginLeft: 15,
      justifyContent: "space-around",
   },
   textBed: {
      marginRight: 20,
      fontSize: 15,
      color: "#2d3436"
   },
   numbertext: {
      fontWeight: "bold",
      fontSize: 16
   },
   slider: {
      width: 370,
      height: 200,
      marginLeft: 20,
      marginTop: 20,
   },
   sliderImage: {
      borderRadius: 15,
      width: 370,
      height: 200,
      resizeMode: "cover",
   },
   contactLeft: {
      width: "65%",
      height: "100%",
   },
   unitPost: {
      position: "absolute",
      top: 0,
      left: 20,
      zIndex: 2,
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
   imgArrow: {
      width: 20,
      height: 40
   }
})

export default stylesHome