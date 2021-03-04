import { StatusBar } from 'expo-status-bar'
import React from 'react'
import AppLoading from 'expo-app-loading'

import { Rubik_300Light, Rubik_400Regular, Rubik_500Medium, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik'

import Routes from './src/routes'

export default function App() {
  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <Routes />
        <StatusBar style='dark' />
      </>
    )
  }
}
