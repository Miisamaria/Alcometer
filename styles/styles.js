import { StyleSheet } from 'react-native';
import {useFonts} from 'expo-font';


export default styles = StyleSheet.create({

//Header styling
header: {
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: 'orange',
    alignItems: 'center',
    },

//Footer styling
footer: {
    backgroundColor: 'orange',
    padding: 10,
    bottom: 0,
    alignItems: 'center',
    },

//Alkometer styling
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },

//Heading styling
heading: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'SomeTypoMono',
    },

//Label styling
label: {
    color: '#daa7fc',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'SomeTypoMono',
    marginTop: 12,
    },

//Bottles, hours text styling
labelBh: {
    color: '#daa7fc',
    fontSize: 16,
    marginLeft: 12,
    marginTop: 6,
    fontFamily: 'SomeTypoMono',
    },

//TextInput styling
textInput: {
    height: 40,
    width: 'flex',
    margin: 12,
    borderColor: 'orange',
    borderWidth: 1,
    backgroundColor: '#daa7fc',
    textAlign: 'center',
    textColor: 'black',
    },
//'Calculate' button styling
calculateButton: {
    width: 150,
    height: 40,
    margin: 12,
    marginLeft: 115,
    bottom: -10,
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 10,
    backgroundColor: '#daa7fc', 
    textAlign: 'center',
    fontFamily: 'SomeTypoMono',
    padding: 12,
    },

buttonTitle: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'SomeTypoMono',
    },

//NumericInput styling
numericInput: {
    borderColor: 'orange',
    iconStyle: { color: 'oramge' },
    margin: 12,
    },
numericInputBackground: '#daa7fc',
numericInputTextColor: 'orange',
numericIconStyle: { color: 'orange' },
    
//RadioButton styling
radioBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    },
checkedCircleBtn: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#daa7fc',
    },

//Tumma tila
darkModeStyles: {
    backgroundColor: 'white',
    },

//Vaalea tila
lightModeStyles: {
    backgroundColor: 'black',
    },

});


