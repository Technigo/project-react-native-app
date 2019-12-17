import React, { useState } from "react"
// import styled from "styled-components/native"
import { StyleSheet, View, TextInput, Picker, Text, Button } from "react-native"

//Add income component 
//Add cost component
//List component to show a list of added incomes and costs
//Sum component that calculates the incomes-costs to see what we have left

const App = () => {
  const [categoryValue, setCategoryValue] = useState("-")
  const [income, setIncome] = useState("0")
  const [cost, setCost] = useState("0")
  // const [addIncome, setAddIncome] = ()

  return (
    <View style={styles.view}>

      <Text style={styles.text}>BUDGET APP BY NYBLAD</Text>

      <Text style={styles.text}>Category:</Text>
      <Picker style={styles.picker} type="dropdown" selectedValue={categoryValue} onValueChange={() => setCategoryValue(categoryValue)}>
        <Picker.Item label="- Pick category -" value="-" />
        <Picker.Item label="Salary" value="Salary" />
        <Picker.Item label="Other" value="Other" />
      </Picker>

      <Text style={styles.text}>Income:</Text>
      <TextInput style={styles.textInput} onChangeText={text => setIncome(text)} value={income} />
      <Text style={styles.text}>Cost:</Text>
      <TextInput style={styles.textInput} onChangeText={text => setCost(text)} value={cost} />

      {/* <Button style={styles.button} title="Add" onPress={() => setAddIncome(income)} /> */}

      <Text style={styles.text}>Category: {categoryValue}</Text>
      <Text style={styles.text}>Left to spend: {income - cost} SEK</Text>
    </View >
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "papayawhip",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 24,
    color: "palevioletred",
    marginBottom: 10,
  },

  picker: {
    height: 50,
    width: 150,
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 10,
  },

  textInput: {
    fontSize: 20,
    height: 30,
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    textAlign: "center",
  },

  button: {
    fontSize: 20,
    height: 30,
    width: 150,
    backgroundColor: "darkgray",
    color: "white",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  }


})

// const Container = styled.View`
//   flex: 1;
//   background-color: papayawhip;
//   justify-content: center;
//   align-items: center;
// `

// const Title = styled.Text`
//   font-size: 24px;
//   color: palevioletred;
// `
// const TextInput = styled.TextInput`
//   font-size: 20px;
//   height: 30px;
//   width: 100px;
//   background: #fff;
//   border-radius: 10px;
//   margin: 5px 0;
//   text-align: center;
// `
// const Text = styled.Text`
//   font-size: 20px;
//   padding: 10px;
// `

// const Button = styled.Button`
//   font-size: 20px;
//   height: 30px;
//   width: 100px;
//   padding: 10px;
//   background: #000;
//   color: #fff;
//   border-radius: 10px;
//   margin: 5px 0;
// `




export default App
