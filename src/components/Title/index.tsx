import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import styles from './styles'

function Title() {
  return (
    <View style={styles.container} >
      <Text style={styles.title} >Favoritos</Text>
    </View>
  )
}

export default Title
