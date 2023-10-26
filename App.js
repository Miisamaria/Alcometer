import  React, { useState } from 'react';
import { Button, Text, ScrollView, View, Switch, Alert, TouchableOpacity } from 'react-native';
import styles from './styles/styles';
import {darkMode, lightMode} from './styles/styles';
import { RadioButton, TextInput } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input';
import Header from './components/header';
import Footer from './components/footer';
import {useFonts} from 'expo-font';

//Alkometrin teko
export default function App() {

  //Fontin lataus
  const [loaded] = useFonts({
    SomeTypoMono: require('./assets/fonts/SomeTypoMono.ttf'),
    });

  const [genre, setGenre] = React.useState('Male');
  const [weight, setWeight] = useState("");
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(0);
  const [ok, setOk] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [bal, setBal] = useState(false);

//Laskeminen
function handleButtonPress() {
  if (weight === '') {
  //Jos painoa ei ole syötetty, ilmoitetaan siitä
    Alert.alert(
      'You must enter your weight!',
      'Please provide your weight before calculating.',
      [
        {
          text: 'OK',
          onPress: () => setOk(true),
        },
      ]
    );
    setBal(false);
    return;
  } else {
    //showing results of bal when the calculate button is pressed
    setBal(true);
  }

  let litres = bottles * 0.33;
  let grams = litres * 8 * 4.5;
  let burning = weight / 10;
  let gramsLeft = grams - burning * time;
  let answer = 0;
//Sukupuolen mukaan laskeminen
  if (genre === 'Male') {
    answer = gramsLeft / (weight * 0.7);
  }
  if (genre === 'Female') {
    answer = gramsLeft / (weight * 0.6);
  }
  //Jos vastaus on negatiivinen, asetetaan se nollaksi
  if (answer < 0) {
    answer = 0;
  }
  setResult(answer);}

  

//Tumma- ja vaaleatila
const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode);
}

//Jos fontti ei lataudu, ei näytetä mitään
  if (!loaded) {
    return null;
  }

  return( 
    <>
    <Header style={[styles.header, styles.heading,]} title='Alkometer' />
    <ScrollView style={isDarkMode ? styles.darkModeStyles : styles.lightModeStyles}>
      <Switch value={isDarkMode} onValueChange={toggleDarkMode} 
      thumbColor= '#daa7fc'
      trackColor={{false: 'grey', true: 'orange'}}
      />
      <Text style={styles.label}>Weight</Text>
        <TextInput style={styles.textInput} onChangeText={(value) => setWeight(value)} placeholder='Set your weight here' keyboardType='numeric'/>
      <Text style={styles.labelBh}>Bottles</Text>
        <NumericInput minValue={0} onChange={v => setBottles(v)}
          rightButtonBackgroundColor={styles.numericInputBackground}
          leftButtonBackgroundColor={styles.numericInputBackground}
          containerStyle={styles.numericInput}
          textColor={styles.numericInputTextColor}
          iconStyle={styles.numericIconStyle}
          rounded
        />
      <Text style={styles.labelBh}>Hours</Text>
        <NumericInput minValue={0} onChange={v => setTime(v)}
          rightButtonBackgroundColor={styles.numericInputBackground}
          leftButtonBackgroundColor={styles.numericInputBackground}
          containerStyle={styles.numericInput}
          textColor={styles.numericInputTextColor}
          iconStyle={styles.numericIconStyle}
          rounded
        />
          <RadioButton.Group onValueChange={newValue => setGenre(newValue)} value={genre}>
            <Text style={styles.label}>Male</Text>
              <RadioButton value="Male"
              alignSelf='center'
              />     
            <Text style={styles.label}>Female</Text>
              <RadioButton value="Female" 
              alignSelf='center'
              />
          </RadioButton.Group>
          {bal && <Text style={styles.label}>Blood alcohol level is : {result.toFixed(2)}</Text>}
        <TouchableOpacity onPress={handleButtonPress}>
          <Text style={styles.calculateButton}>Calculate</Text>
      </TouchableOpacity>
        
    </ScrollView>
    <Footer />
    </> 
 )
};