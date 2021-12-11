import {StyleSheet} from 'react-native';
import COLORS from '../consts/color';


const STYLES = StyleSheet.create({
  inputContainer: {flexDirection: 'row', marginTop: 20},
  input: {
    color: COLORS.light,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderColor: COLORS.light,
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
  },
  inputIcon: {marginTop: 15, position: 'absolute'},
  btnPrimary: {
    backgroundColor: "#317ecc",
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  btnSecondary: {
    height: 50,
    borderWidth: 1,
    borderColor: '#a5a5a5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },








  header:{
    backgroundColor: "#317ecc",
    height:125,
    width: 600,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:55
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },








  








  btnImage: {width: 20, height: 20, marginLeft: 5},

  line: {height: 1, width: 30, backgroundColor: '#a5a5a5'},
});

export default STYLES;