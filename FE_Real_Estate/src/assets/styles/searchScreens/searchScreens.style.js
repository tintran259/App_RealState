import { StyleSheet } from 'react-native'


const StylesSearchScreens = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#ffff",
      paddingHorizontal: 10
   },
   header: {
      width: "100%",
      height: 60,
      backgroundColor: "#fff",
      flexDirection: "row",
      marginTop: "5%",
      alignItems: "center"
   },
   titleHeader: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#2d3436",
   },
   titleListItems: {
      fontSize: 15,
      fontWeight: "bold",
      marginTop: 20,
      color: "#2d3436"
   },
   dropDown: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-around"
   },
   slider: {
      width: "100%",
      height: 30,
      flexDirection: "row",
      alignItems: "center",
      marginTop: 10
   },
   textSlider: {
      marginRight: 20,
      marginLeft: "5%",
      color: "#636e72"
   },
   sliderCount: {
      width: "60%"
   },
   thumb: {
      width: 15,
      height: 15
   },
   track: {
      height: 2
   },
   textPrices: {
      marginLeft: 20,
      color: "#636e72"
   }
})

export default StylesSearchScreens