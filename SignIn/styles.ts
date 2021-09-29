import { StyleSheet, Platform} from 'react-native'


const styles = StyleSheet.create({
    headerTitle: {
      paddingTop: 5
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 3,
    },
    logo: {
      color: 'black',
      padding: 10,
      fontSize: 16,
      fontWeight: 'bold'
    },
    logoimg: {
      width: 50,
      height: 50,
      resizeMode: 'contain'
    },
    visitorContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'pink',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ff8ea2'
    },
    visitorText: {
      color: 'black',
      padding: 5
    },
    eyeIcon: {
      padding: 3,
      backgroundColor: 'pink',
      borderRadius: 5,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: Platform.OS === 'android' ? 30 : 0
    },
    headerScreenStyle: {
  
    },
    shopping :{
      width: 50,
      padding: 10,
      alignItems: 'center',
      marginRight: 20
  },
  shop: {
  
  },
  badge:{
      position: 'absolute',
      right: 0,
      top: 0,
      color: 'black',
      zIndex: 999999,
      fontSize: 14,
      padding: 1,
  },
  buttonContainer: {
    paddingTop: 15,
  }
  });

export default styles;