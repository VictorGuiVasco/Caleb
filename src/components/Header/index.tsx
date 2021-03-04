import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'

import logo from '../../assets/images/caleb-logo.png'

import styles from './styles'

function Header() {
  return (
    <View style={styles.container} >
      <BorderlessButton >
        <MaterialIcons name='keyboard-backspace' size={24} />
      </BorderlessButton>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.title} >Caleb</Text>
      </View>
    </View>
  )
}

export default Header
