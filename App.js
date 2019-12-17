import React, { useState } from 'react';
// import styled from "styled-components/native"
import {
  StyleSheet,
  StatusBar,
  View,
  TextInput,
  Picker,
  Text,
  Button,
} from 'react-native';

//Array of objects (category + incomes)
//Array of objects (category + cost)
//Input category incomes (add to array incomes) - function handleIncomeCategory?
//Input income (add to array incomes) - function handleIncome?
//Input category costs (add to array costs) - function handleCostCategory?
//Input cost (add to array costs) - function handleCost?
//Component to map the objects in the array listIncomes and listCosts
//Sum component that calculates the incomes-costs to see what we have left
//Shake phone to reset

const App = () => {
  // const [addToArray, setAddToArray] = useState()
  const [categoryIncome, setCategoryIncome] = useState('');
  const [categoryCost, setCategoryCost] = useState('');
  const [income, setIncome] = useState('0');
  const [cost, setCost] = useState('0');

  const [listIncomes, setListIncomes] = useState([]);
  const addedIncomes = { category: categoryIncome, income: income };

  const [listCosts, setListCosts] = useState([]);
  const addedCosts = { category: categoryCost, income: cost };

  // FUNCTIONS FOR ADDING INCOMES AND COSTS - NEED HELP WITH THIS
  const handleAddIncome = () => {
    setListIncomes({ listIncomes: [...listIncomes, addedIncomes] })
  }
  const handleAddCost = () => {
    setListCosts({ listCosts: [...listCosts, addedCosts] })
  }

  console.log(listIncomes, listCosts)

  return (
    <View style={styles.view}>
      <StatusBar style={styles.statusBar} barStyle="light-content" />
      <Text style={styles.text}>BUDGET APP BY NYBLAD</Text>

      <Text style={styles.text}>Category income:</Text>
      <Picker
        style={styles.picker}
        type="dropdown"
        selectedValue={categoryIncome}
        onValueChange={value => setCategoryIncome(value)}>
        <Picker.Item label="- Pick category -" value="-" />
        <Picker.Item label="Salary" value="Salary" />
        <Picker.Item label="Other" value="Other" />
      </Picker>

      <Text style={styles.text}>Income:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setIncome(text)}
        value={income}
      />

      <Button
        color="#525252"
        title="Add income"
        onPress={handleAddIncome}
      />

      <Text style={styles.text}>Category cost:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setCategoryCost(text)}
        value={categoryCost}
      />

      <Text style={styles.text}>Cost:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setCost(text)}
        value={cost}
      />

      <Button
        color="#525252"
        title="Add cost"
        onPress={() => listCosts.push({ addedCosts })}
      />

      <View style={styles.viewSummary}>
        <Text style={styles.text}>
          Incomes: {categoryIncome} {income} SEK
        </Text>
        <Text style={styles.text}>
          Costs: {categoryCost} {cost} SEK
        </Text>

        <Text style={styles.text}>Left to spend: {income - cost} SEK</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'papayawhip',
    justifyContent: 'center',
    alignItems: 'center',
  },

  statusBar: {
    backgroundColor: 'black',
  },

  text: {
    fontSize: 24,
    color: 'palevioletred',
    marginBottom: 10,
  },

  picker: {
    height: 50,
    width: 150,
    backgroundColor: '#fff',
    marginBottom: 20,
  },

  textInput: {
    fontSize: 20,
    height: 30,
    width: 150,
    backgroundColor: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },

  viewSummary: {
    marginTop: 30,
    border: 2,
  },
});

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

export default App;
