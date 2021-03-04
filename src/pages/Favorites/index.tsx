import React from 'react'
import { View, FlatList, Image, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import Title from '../../components/Title'
import Item from '../../components/Item'
import NavBar from '../../components/NavBar'

import clips from '../../assets/images/clips.png'
import copimax from '../../assets/images/copimax.png'
import epson from '../../assets/images/epson.png'

import whatsaapIcon from '../../assets/images/icons/whatsapp.png'

function Favorites() {
  const data = [
    {
      id: 1,
      category: 'Papel A4, Papelaria',
      image: copimax,
      name: 'PAPEL A4 75G RESMA C/500FLS COPIMAX',
      price: 19.90,
      hasDiscont: true,
      discont: 0.2
    },
    {
      id: 2,
      category: 'Papel A4, Papelaria',
      image: clips,
      name: 'CLIPS Nº 6/0 500GR. GALV. BACCHO',
      price: 14.50,
      hasDiscont: false
    },
    {
      id: 3,
      category: 'Cartuchos, Refil de Tinta',
      image: epson,
      name: 'REFIL EPSON T544 MAGENTA',
      price: 200.00,
      hasDiscont: true,
      discont: 0.5
    },
    {
      id: 4,
      category: 'Papel A4, Papelaria',
      image: copimax,
      name: 'PAPEL A4 75G RESMA C/500FLS COPIMAX',
      price: 19.90,
      hasDiscont: true,
      discont: 0.2
    },
    {
      id: 5,
      category: 'Papel A4, Papelaria',
      image: clips,
      name: 'CLIPS Nº 6/0 500GR. GALV. BACCHO',
      price: 14.50,
      hasDiscont: false
    },
    {
      id: 6,
      category: 'Cartuchos, Refil de Tinta',
      image: epson,
      name: 'REFIL EPSON T544 MAGENTA',
      price: 200.00,
      hasDiscont: true,
      discont: 0.5
    },
    {
      id: 7,
      category: 'Papel A4, Papelaria',
      image: copimax,
      name: 'PAPEL A4 75G RESMA C/500FLS COPIMAX',
      price: 19.90,
      hasDiscont: true,
      discont: 0.2
    },
    {
      id: 8,
      category: 'Papel A4, Papelaria',
      image: clips,
      name: 'CLIPS Nº 6/0 500GR. GALV. BACCHO',
      price: 14.50,
      hasDiscont: false
    },
    {
      id: 9,
      category: 'Cartuchos, Refil de Tinta',
      image: epson,
      name: 'REFIL EPSON T544 MAGENTA',
      price: 200.00,
      hasDiscont: true,
      discont: 0.5
    },
    {
      id: 8,
      category: 'Papel A4, Papelaria',
      image: clips,
      name: 'CLIPS Nº 6/0 500GR. GALV. BACCHO',
      price: 14.50,
      hasDiscont: false
    },
  ]

  return (
    <View style={styles.container} >
      <Header />
      <Title />

      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => <Item product={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

      <Image source={whatsaapIcon} style={styles.whatsaapIcon} />
      <NavBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },

  whatsaapIcon: {
    position: 'absolute',
    right: 20,
    bottom: '10%',    
  }
})

export default Favorites
