import  React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, ScrollView, View, Switch } from 'react-native';
import styles from './styles/styles';
import {darkMode, lightMode} from './styles/styles';
import { RadioButton, TextInput } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input';
import {radioBtn, textInput, calculateButton, numericInput, switchBtn} from './styles/styles';
import Header from './components/header';
import Footer from './components/footer';

//Alkometrin teko
export default function App() {

  const [value, setValue] = React.useState('first');

  const [isOn, setIsOn] = useState(false);

  const [valueB, setValueB] = useState(0);

  const [valueH, setValueH] = useState(0);

  const [Weight, setWeight] = useState(0);
  const [bacResult, setBacResult] = useState(0);

  const calculateBAC = () => {
  const Litres = valueB * 0.33;
  const Grams = Litres * 8 * 4.5;
  const Burning = Weight / 10;
  const Left = Grams - (Burning * valueH);
  const ResultMale = Grams / (Weight * 0.7);
  const ResultFemale = Grams / (Weight * 0.6);
  
  if (value === 'first'){
    let bacResult = ResultMale;
    return bacResult;
  }
  else {
    let bacResult = ResultFemale;
    return bacResult;
  }

  };

//Laskeminen
  function calculate() {
    console.log("Calculate pressed");
  } 

  
//Pullojen määrän asettaminen
  function setBottles() {
    console.log("Bottles set");
  }
  
//Tuntien asettaminen
  function setTime() {
    console.log("Time set");
  }
//Tumma- ja vaaleatila
let isDark = false;
let myStyle = isDark ? styles.darkMode : styles.lightMode;
 
  function toggleSwitch() {
    console.log("Switch pressed");
    isDark = !isDark;
    myStyle = isDark ? styles.darkMode : styles.lightMode;
  }


  return( 
    <>
    <Header style={styles.header} title='Alkometer' />
    <ScrollView>
      <Switch style={styles.switch} value={isOn} onValueChange={newValue => setIsOn(newValue)} 
      thumbColor= 'black'
      trackColor={{false: 'grey', true: 'orange'}}/>
      <Text style={styles.text}>Weight</Text>
        <TextInput style={styles.textInput} onChangeText={text => setWeight(text)} placeholder='Set your weight here' keyboardType='numeric'/>
      <Text style={styles.text}>Bottles</Text>
        <NumericInput style={styles.numericInput} onChange={v => setValueB(v)}/>
      <Text style={styles.text}>Hours</Text>
        <NumericInput style={styles.numericInput} onChange={v => setValueH(v)}/>
          <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
            <Text style={styles.text}>Male</Text>
              <RadioButton style={styles.radioBtn} value="first" />     
            <Text style={styles.text}>Female</Text>
              <RadioButton style={styles.radioBtn} value="second" />
          </RadioButton.Group>
      <Text>Blood alcohol level is : {bacResult}</Text>
        <Button style={styles.calculateButton} title='Calculate' onPress={calculateBAC} />
    </ScrollView>
    <Footer />
    </> 
 )
};