import React from 'react'
import { View, Image, Text } from 'react-native'

import { RectButton } from 'react-native-gesture-handler'

import heartIcon from '../../assets/images/icons/Heart.png'
import shareIcon from '../../assets/images/icons/Share.png'
import tagIcon from '../../assets/images/icons/Tag.png'

import item from '../../assets/images/copimax.png'

import styles from './styles'

export interface ItemData {
  id: number
  name: string
  category: string
  image: any
  price: number
  hasDiscont: boolean
  discont?: number
}

interface ItemProps {
  product: ItemData
}

const Item: React.FC<ItemProps> = ({ product, children }) => {
  var newPrice
  
  if(product.hasDiscont) {
    newPrice = product.price - (product.price * product.discont)
    newPrice = parseFloat(newPrice.toFixed(2))
  }

  return (
    <View style={styles.container} >
      <View style={styles.header} >
        {product.hasDiscont ? (
          <View style={styles.tagContainer} >
            <Image source={tagIcon} />
            <Text style={styles.tagText} >{product.discont * 100}% off</Text>
          </View>
        ) : <View style={{ width: '45%' }} />}

        <Image source={shareIcon} />
        <Image source={heartIcon} />
      </View>

      <Image source={product.image} style={styles.image} />

      <Text style={styles.name} >{product.category}</Text>
      <Text style={styles.description} >{product.name}</Text>

      <View style={styles.priceContainer} >
        {product.hasDiscont ? (
          <>
            <Text style={styles.fullPrice} >RS {newPrice}</Text>
            <Text style={styles.withoutDiscont} >RS {product.price}</Text>
          </>
        ) : <Text style={styles.fullPrice} >RS {product.price}</Text>}
      </View>

      <RectButton style={styles.button} >
        <Text style={styles.textButton} >Compre agora</Text>
      </RectButton>
    </View>
  )
}

export default Item
