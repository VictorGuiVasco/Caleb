import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import styles from './styles'

function NavBar() {
  return (
    <View style={styles.container} >
      <View style={styles.button} >
        <Ionicons name='home-outline' size={24} color="#7E889B" />
        <Text style={styles.text} >Início</Text>
      </View>

      <View style={styles.button} >
        <Ionicons name='menu-outline' size={24} color="#7E889B" />
        <Text style={styles.text} >Categorias</Text>
      </View>

      <View style={styles.button} >
        <Ionicons name='heart-outline' size={24} color="#FC6A6D" />
        <Text style={styles.textActived} >Favoritos</Text>
      </View>

      <View style={styles.buttonCart} >
        <View style={styles.cartItens} >
          <Text style={styles.textCart} >3</Text>
        </View>
        <Ionicons name='cart-outline' size={24} color="#7E889B" />
        <Text style={styles.text} >Início</Text>
      </View>
    </View>
  )
}

export default NavBar;
