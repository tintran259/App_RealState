import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from './routes/splashBegin'
import AuthLogin from './routes/authLogin/authLogin'
import NavScreens from './routes/navScreens/root_NavScreens'
import { useSelector } from 'react-redux'
import AnimatedLoader from "react-native-animated-loader";
import { StyleSheet } from 'react-native'
const Stack = createStackNavigator()

export default function AppRoutes() {
   const isLoading = useSelector(state => state.App.isLoading)
   const styles = StyleSheet.create({
      loading: {
         width: 100,
         height: 100,
      }
   })
   const inforUserLogin = useSelector(state => state.Auth.inforUserLogin)
   const isSplash = useSelector(state => state.App.isSplash)
   return (
      <>
         <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
               {
                  isSplash ? <Stack.Screen name="SplashScreen" component={SplashScreen} />
                     : inforUserLogin ? <Stack.Screen name="NavScreens" component={NavScreens} />
                        : <Stack.Screen name="AuthLogin" component={AuthLogin} />
               }
            </Stack.Navigator>
         </NavigationContainer>
         <AnimatedLoader
            visible={isLoading}
            overlayColor="rgba(255,255,255,0.4)"
            source={require("./assets/animation/aEnd.json")}
            animationStyle={styles.loading}
            speed={1}
         />
      </>
   )
}