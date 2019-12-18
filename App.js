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
  TouchableOpacity,
} from 'react-native';

//Array of objects (category + incomes)
//Array of objects (category + cost)
//Input category incomes (add to array incomes)
//Input income (add to array incomes)
//Input category costs (add to array costs)
//Input cost (add to array costs)
//Component to map the objects in the array listIncomes and listCosts
//Sum component that calculates the incomes-costs to see what we have left
//Shake phone to reset?

const App = () => {
  const [categoryIncome, setCategoryIncome] = useState('');
  const [categoryCost, setCategoryCost] = useState('');
  const [income, setIncome] = useState('0');
  const [cost, setCost] = useState('0');

  const [listIncomes, setListIncomes] = useState([]);
  const addedIncomes = { category: categoryIncome, income: income };

  const [listCosts, setListCosts] = useState([]);
  const addedCosts = { category: categoryCost, cost: cost };

  // FUNCTIONS FOR ADDING INCOMES AND COSTS
  //Using concat() bc map() won't work otherwise..?
  const handleAddIncome = () => {
    // setListIncomes({ listIncomes: [...listIncomes, addedIncomes] });
    setListIncomes(listIncomes => listIncomes.concat(addedIncomes));
  };
  const handleAddCost = () => {
    //setListCosts(listCosts => [...listCosts, addedCosts]);
    setListCosts(listCosts => listCosts.concat(addedCosts));
  };

  //NEED HELP WITH A FUNCTION TO CALCULATE THE INCOMES AND COSTS IN THE ARRAYS

  return (
    <View style={styles.container}>
      <StatusBar hidden static backgroundColor="palevioletred" />
      <Text style={styles.textHeading}>CHECK YOUR BUDGET!</Text>

      {/* ADD INCOMES */}
      <View style={styles.viewSection}>
        <Text style={styles.text}>Category income:</Text>
        <Picker
          style={styles.picker}
          type="dropdown"
          selectedValue={categoryIncome}
          onValueChange={value => setCategoryIncome(value)}>
          <Picker.Item label="Pick category" value="-" />
          <Picker.Item label="Salary" value="Salary" />
          <Picker.Item label="Other" value="Other" />
        </Picker>

        <Text style={styles.text}>Income:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setIncome(text)}
          value={income}
        />

        {/*<Button
          title="💰  Add income  💰"
          color="#525252"
          accessibilityLabel="add button"
          onPress={handleAddIncome}
        />*/}

        <TouchableOpacity style={styles.button} onPress={handleAddIncome}>
          <Text style={styles.buttonText}>💰 ADD INCOME 💰</Text>
        </TouchableOpacity>
      </View>

      {/* ADD COSTS */}
      <View style={styles.viewSection}>
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

        {/*<Button
          title="💸  ADD COST  💸"
          fontSize="24"
          color="#525252"
          onPress={handleAddCost}
        />*/}

        <TouchableOpacity style={styles.button} onPress={handleAddCost}>
          <Text style={styles.buttonText}>💸  ADD COST  💸</Text>
        </TouchableOpacity>
      </View>

      {/* SUMMARY */}
      <View style={styles.viewSummary}>
        {listIncomes.map((items, index) => (
          <Text style={styles.textSummaryIncome} key={index}>
            <Text>{items.category}:</Text>
            <Text>{items.income} SEK</Text>
          </Text>
        ))}

        {listCosts.map((items, index) => (
          <Text style={styles.textSummaryCost} key={index}>
            <Text>{items.category}:</Text>
            <Text>-{items.cost} SEK</Text>
          </Text>
        ))}

        <Text style={styles.textTotal}>Left to spend: XX SEK</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'papayawhip',
    justifyContent: 'center',
    alignItems: 'center',
  },

  viewSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  textHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#393D3F',
    marginTop: 10,
    marginBottom: 30,
  },

  text: {
    fontSize: 20,
    color: 'palevioletred',
    marginBottom: 5,
  },

  picker: {
    height: 40,
    width: 200,
    backgroundColor: '#fff',
    marginBottom: 5,
  },

  textInput: {
    fontSize: 20,
    height: 30,
    width: 200,
    backgroundColor: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },

  button: {
    height: 40,
    width: 150,
    borderRadius: 10,
    backgroundColor: '#525252',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

  viewSummary: {
    marginTop: 30,
    border: 2,
  },

  textSummaryIncome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 18,
    color: '#798B00',
  },

  textSummaryCost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 18,
    color: '#FC542E',
  },

  textTotal: {
    borderTopWidth: 2,
    borderColor: 'palevioletred',
    fontSize: 24,
    color: 'palevioletred',
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

export default App;
