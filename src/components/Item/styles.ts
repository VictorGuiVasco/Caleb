import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: 230,
    height: 450,
    marginTop: 10,
    marginLeft: 20,

    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DAE1E7'
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingRight: 20,
    marginTop: 18,
    width: '100%'
  },

  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#71C979',

    padding: 2
  },

  tagText: {
    fontFamily: 'Rubik_500Medium',
    fontSize: 16,
    lineHeight: 19,
    color: '#fff'
  },

  image: {
    width: 190,
    height: 190,
    alignSelf: 'center'
  },

  name: {
    marginHorizontal: 20,
    marginBottom: 5,

    fontSize: 14,
    lineHeight: 19,
    fontFamily: 'Rubik_300Light',
    color: '#7E889B'
  },

  description: {
    marginHorizontal: 20,
    marginBottom: 11,
    maxWidth: 180,

    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Rubik_400Regular'
  },

  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },

  fullPrice: {
    flex: 1,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Rubik_300Light',
    color: '#71C979'
  },

  withoutDiscont: {
    flex: 1,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Rubik_300Light',
    color: '#7E889B',
    textDecorationLine: 'line-through'
  },

  button: {
    marginTop: 45,
    marginHorizontal: 20,
    height: 49,
    borderRadius: 10,
    backgroundColor: '#FC6A6D',

    alignItems: 'center',
    justifyContent: 'center'
  },

  textButton: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Rubik_300Light',
    color: '#fff'
  }
})

export default styles
