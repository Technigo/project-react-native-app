import React, { useState } from 'react';
//BEST PRACTISE - IMPORT COMPONENTS FROM REACT-NATIVE AND STYLE AS I DID OR IMPORT "STYLED-COMPONENTS"?
// import styled from "styled-components/native"
import {
  StyleSheet,
  StatusBar,
  View,
  TextInput,
  Picker,
  Text,
  TouchableOpacity,
} from 'react-native';

//Array of objects (category + incomes)
//Array of objects (category + cost)
//Input category incomes (add to array incomes)
//Input income (add to array incomes)
//Input category costs (add to array costs)
//Input cost (add to array costs)
//Component to map the objects in the array listIncomes and listCosts
//Sum component that calculates the incomes-costs to see what we have left - if <0 show "No money to spend!" with blinking animation?
//HOW TO SHAKE PHONE TO RESET ALL?

const App = () => {
  const [categoryIncome, setCategoryIncome] = useState();
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

  //FUNCTIONS TO CALCULATE INCOMES-COSTS - DO THIS MORE REACTY?
  const incomesTotal = listIncomes.reduce(
    (totalIncome, item) => totalIncome + parseInt(item.income, 10),
    0
  );

  //EXPLAIN REDUCE - WHY THE 10 AFTER item.cost?
  const costsTotal = listCosts.reduce(
    (totalCost, item) => totalCost + parseInt(item.cost, 10),
    0
  );

  const leftToSpend =
    incomesTotal || costsTotal ? incomesTotal - costsTotal : null;

  return (
    <View style={styles.container}>
      <StatusBar hidden backgroundColor="palevioletred" />
      <Text style={styles.textHeading}>CHECK YOUR BUDGET!</Text>

      {/* ADD INCOMES
      HOW TO HIDE THE NUMBERPAD AFTER INPUT, CAN'T SCROLL TO NEXT? NOT WORKING IN iOS 
      clearTextOnFocus NOT WORKING ON ANDROID - ANYTHING ELSE TO USE?*/}
      <View style={styles.viewSection}>
        <Text style={styles.text}>Where did you get the money?</Text>
        <Picker
          style={styles.picker}
          selectedValue={categoryIncome}
          onValueChange={value => setCategoryIncome(value)}>
          <Picker.Item label="Pick a category" value="-" />
          <Picker.Item label="Salary" value="Salary" />
          <Picker.Item label="Stole it" value="Stolen money" />
          <Picker.Item label="Borrowed" value="Borrowed" />
          <Picker.Item label="Other" value="Other" />
        </Picker>

        <Text style={styles.text}>How much?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setIncome(text)}
          value={income}
          allowFontScaling
          keyboardType="numeric"
          autoCapitalize
          clearTextOnFocus
        />

        <TouchableOpacity style={styles.button} onPress={handleAddIncome}>
          <Text style={styles.buttonText}>💰 ADD INCOME 💰</Text>
        </TouchableOpacity>
      </View>

      {/* ADD COSTS */}
      <View style={styles.viewSection}>
        <Text style={styles.text}>What do you spend money on?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setCategoryCost(text)}
          value={categoryCost}
          allowFontScaling
          clearTextOnFocus
          autoCapitalize
        />

        <Text style={styles.text}>How much?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setCost(text)}
          value={cost}
          keyboardType="numeric"
          allowFontScaling
          clearTextOnFocus
        />

        <TouchableOpacity style={styles.button} onPress={handleAddCost}>
          <Text style={styles.buttonText}>💸 ADD COST 💸</Text>
        </TouchableOpacity>
      </View>

      {/* SUMMARY - WHY ISN'T SPACE-BETWEEN WORKING BETWEEN category & income?*/}
      <View style={styles.viewSummary}>
        {(listIncomes.length > 0 || listCosts.length > 0) && (
          <Text style={styles.textBalance}>Your balance</Text>
        )}

        {listIncomes.map((items, index) => (
          <Text style={styles.textSummaryIncome} key={index}>
            <View>
              <Text>{items.category}</Text>
            </View>
            <View>
              <Text> {items.income} SEK</Text>
            </View>
          </Text>
        ))}

        {listCosts.map((items, index) => (
          <Text style={styles.textSummaryCost} key={index}>
            <Text>{items.category}</Text>
            <Text> -{items.cost} SEK</Text>
          </Text>
        ))}

        {(listIncomes.length > 0 || listCosts.length > 0) && (
          <Text style={styles.textTotal}>Left to spend: {leftToSpend} SEK</Text>
        )}
      </View>
    </View>
  );
};

// STYLING COMPONENTS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'papayawhip',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },

  viewSection: {
    justifyContent: 'center',
    alignItems: 'flex-start',
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

  textBalance: {
    fontSize: 22,
    color: 'palevioletred',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderColor: 'palevioletred',
  },

  picker: {
    width: 200,
    minHeight: 40,
    backgroundColor: '#fff',
    marginBottom: 5,
  },

  textInput: {
    fontSize: 20,
    height: 30,
    width: 200,
    backgroundColor: '#fff',
    marginBottom: 10,
    textAlign: 'left',
    padding: 5,
  },

  button: {
    height: 40,
    padding: 5,
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
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
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
    marginTop: 10,
    borderTopWidth: 2,
    borderColor: 'palevioletred',
    fontSize: 22,
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
