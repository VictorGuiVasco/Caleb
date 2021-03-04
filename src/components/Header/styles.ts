import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 128,
    paddingLeft: 25,
    marginBottom: 10,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#F6F9FC'
  },

  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 56,
    height: 59,

    marginLeft: -54
  },

  title: {
    fontSize: 26,
    marginLeft: 7
  }
})

export default styles
