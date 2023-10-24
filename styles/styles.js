import { StyleSheet } from 'react-native';

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
    marginTop: 10,
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
//Text styling
text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
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
    width: 100,
    height: 50,
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#daa7fc',   
    bottom: 30,
    },

buttonTitle: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    },

//NumericInput styling
numericInput: {
    totalWidth: 200,
    borderColor: 'orange',
    textColor: 'black',
    buttonBackgroundColor: '#daa7fc',
    borderRadius: 10,
    },
//RadioButton styling
radioBtn: {
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    },
});
//Tumma tila
const darkMode = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    }
});

//Vaalea tila
const lightMode = StyleSheet.create({
    container: {
    ...darkMode.container,
    backgroundColor: 'white',
    }
});
