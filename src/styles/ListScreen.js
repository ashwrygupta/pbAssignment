import { StyleSheet } from "react-native"

const styles=StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  userContainer: {
    flexDirection: 'row',
  //  alignItems: 'center',
    marginBottom: 16,
    justifyContent:'space-between'
  },
  footer:{
    backgroundColor:'#ddd',
  paddingVertical:15,
  flexDirection:'row',
  justifyContent:'space-between',
  paddingHorizontal:35,
  elevation:10
},
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
       backgroundColor: 'white',
      paddingVertical: 35,
       paddingHorizontal: 25,
       elevation:5
    },
    

})
export default styles;

