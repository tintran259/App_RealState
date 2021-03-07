import { StyleSheet } from 'react-native'

const StyleDropdown = StyleSheet.create({
   container: {
      marginTop: 10,
   },
   dropdown: {
      width: 120,
      height: 40,
      borderWidth: 0.5,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      borderRadius: 10,
      borderColor: "#dfe6e9",
      backgroundColor: "#fff"
   },
   title: {
      marginLeft: "5%",
      color: "#2d3436"
   },
   viewText: {
      width: 120,
      position: "absolute",
      top: 40,
      backgroundColor: "#fff",
      zIndex: 2000,
      borderColor: "#95a5a6"
   },
   item: {
      width: 120,
      height: 40,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
   }
})

export {
   StyleDropdown
}