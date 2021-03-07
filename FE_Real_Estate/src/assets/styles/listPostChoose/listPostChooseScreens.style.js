import { StyleSheet } from 'react-native'


const StylesListPostChoose = StyleSheet.create({
   header: {
      width: "100%",
      height: 50,
      backgroundColor: "#fff",
      borderBottomWidth: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
   },
   titleHeader: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#2d3436",
      marginLeft: 10,
      marginTop: 10
   },
   iconHeader: {
      position: "absolute",
      left: 70,
      color: "#e74c3c"
   },
   container: {
      flex: 1,
      backgroundColor: "#fff"
   },
   imagesetting: {
      width: 150,
      height: 150,
   },
   Setting: {
      width: "100%",
      height: 600,
      justifyContent: "center",
      alignItems: "center"
   },
   textSetting: {
      color: "#2d3436"
   }
})

export default StylesListPostChoose