import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native-web';
import { TouchableOpacity} from 'react-native-web';

export default function App() {

  const buttons = ['AC', "DEL", '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '3', '2', '1', '+', '0', '.', '+/-', '=']

  const [currentNumber, setCurrentNumber] = useState("")
  const [lastNumber, setLastNumber] = useState("")



  return (
    <View>
      <View style = {styles.result}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => 
        <TouchableOpacity key={button} style={styles.button}><Text style = {styles.textButton}>{button}</Text></TouchableOpacity>)}
      </View>
    </View>
  )
}

function handleInput(buttonPressed){
  console.log(buttonPressed)
  if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "*" | buttonPressed === "/" ){
    setCurrentNumber(currentNumber + " " + buttonPressed + " ")
    return
  }
  switch(buttonPressed){
    case 'DEL':
      setCurrentNumber(currentNumber.substring(0, (currentNumber.length -1)))
      return
    case 'AC':
      setLastNumber("")
      setCurrentNumber("")
      return
    case '=':
      setLastNumber(currentNumber + " = ")
      calculator()
      return
    case '+/-':
      return
  }
  setCurrentNumber(currentNumber + buttonPressed)
  
}

function calculator(){
  const splitNumbers = currentNumber.split(" ")
  const operator = splitNumbers[1]
  console.log(splitNumbers)
  if(operator === "*"){
    setCurrentNumber((parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[2])).toString())
  }
  if(operator === "/"){
    setCurrentNumber((parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[2])).toString())
  }
  if(operator === "+"){
    setCurrentNumber((parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[2])).toString())
  }
  if(operator === "-"){
    setCurrentNumber((parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[2])).toString())
  }
}

const styles = StyleSheet.create({
  result:{
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    height: 300,
    backgroundColor: '#f5f5f5'
  },
  buttons:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    minHeight: 80,
    minWidth: 80
  },
  textButton: {
    color: "#5b5b5b",
    fontSize: 25,
  },
  resultText: {
    fontWeight: '100',
    fontSize: 80,
    margin: 10,
    alignSelf: 'flex-end'
  },
  historyText: {
    fontSize: 22,
    marginBottom: 0,
    marginRigth: 10,
    alignSelf: 'flex-end',
  }
});