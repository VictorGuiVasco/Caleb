import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 66,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#DAE1E7',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  button: {
    alignItems: 'center'
  },

  text: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Rubik_400Regular',
    color: '#7E889B'
  },

  textActived: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Rubik_400Regular',
    color: '#FC6A6D'
  },

  buttonCart: {
    alignItems: 'center',
    position: 'relative',
  },

  cartItens: {
    position: 'absolute',
    right: 0,
    top: -5,
    width: 20,

    backgroundColor: '#FC6A6D',
    borderRadius: 25,

    alignItems: 'center',
    zIndex: 5
  },

  textCart: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Rubik_400Regular',
    color: '#FFF'
  },
})

export default styles
