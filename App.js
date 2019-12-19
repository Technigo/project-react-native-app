import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import {
  StyleSheet,
  StatusBar,
  View,
  TextInput,
  Picker,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

//Array of objects (category + incomes)
//Array of objects (category + cost)
//Input category incomes + income (add to array incomes)
//Input category costs + cost (add to array costs)
//Component to map the objects in the array listIncomes and listCosts
//Sum component that calculates the incomes-costs to see what we have left - if <0 show "No money to spend!" with blinking animation?
//HOW TO SHAKE PHONE TO RESET ALL?

const App = () => {
  const screenWidth = Dimensions.get('window').width;

  const [categoryIncome, setCategoryIncome] = useState();
  const [categoryCost, setCategoryCost] = useState('');
  const [income, setIncome] = useState('0');
  const [cost, setCost] = useState('0');

  const [listIncomes, setListIncomes] = useState([]);
  const addedIncomes = { category: categoryIncome, income: income };

  const [listCosts, setListCosts] = useState([]);
  const addedCosts = { category: categoryCost, cost: cost };

  // FUNCTIONS FOR ADDING INCOMES AND COSTS
  const handleAddIncome = () => {
    setListIncomes([...listIncomes, addedIncomes]);
  };
  console.log(listIncomes);
  const handleAddCost = () => {
    setListCosts([...listCosts, addedCosts]);
  };

  //FUNCTIONS TO CALCULATE INCOMES-COSTS
  const incomesTotal = listIncomes.reduce(
    (totalIncome, item) => totalIncome + parseInt(item.income),
    0
  );

  const costsTotal = listCosts.reduce(
    (totalCost, item) => totalCost + parseInt(item.cost),
    0
  );

  const leftToSpend =
    incomesTotal || costsTotal ? incomesTotal - costsTotal : null;

  //PROGRESS BAR DATA
  // const chartData = leftToSpend / incomesTotal;

  // const data = {
  //   data: [chartData],
  // };

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
  };

  return (
    <Container>
      <StatusBar hidden backgroundColor="palevioletred" />
      <Text style={styles.textHeading}>CHECK YOUR BUDGET!</Text>

      {/* ADD INCOMES - HOW TO HIDE THE NUMBERPAD AFTER INPUT, CAN'T SCROLL TO            NEXT? NOT WORKING IN iOS */}
      <View style={styles.viewSection}>
        <Text>Where did you get the money?</Text>
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

        <Text>How much?</Text>
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
        <Text>What do you spend money on?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setCategoryCost(text)}
          value={categoryCost}
          allowFontScaling
          clearTextOnFocus
          autoCapitalize
        />

        <Text>How much?</Text>
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
          <View style={styles.textSummaryIncome} key={index}>
            <Text>{items.category}</Text>
            <Text> {items.income} SEK</Text>
          </View>
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

      {/*<ProgressChart
        data="{data}"
        width="{screenWidth}"
        height="{220}"
        chartConfig="{chartConfig}"
        hideLegend="{true}"
      />*/}
    </Container>
  );
};

// STYLED-COMPONENTS

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
`

const Text = styled.Text`
  font-size: 24px;
  color: palevioletred;
  margin-bottom: 5;
`

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: 'papayawhip',
  //   justifyContent: 'center',
  //   alignItems: 'flex-start',
  //   padding: 10,
  // },

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
    backgroundColor: 'white',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  textSummaryIncome: {
    flex: 1,
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

export default App;
