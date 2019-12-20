import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { StyledButton } from './components/Button';
import { TextInput } from './components/TextInput';
import { StatusBar, Dimensions } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

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
  // const screenWidth = Dimensions.get('window').width;

  // const chartData = leftToSpend / incomesTotal;
  // console.log('chartData', chartData);

  // const chartConfig = {
  //   backgroundGradientFromOpacity: 0,
  //   backgroundGradientToOpacity: 0,
  //   color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  //   strokeWidth: 3,
  //   barPercentage: 1,
  // };

  return (
    <Container>
      <StatusBar hidden backgroundColor="palevioletred" />
      <TextHeading>SILLY BUDGET APP</TextHeading>

      {/* ADD INCOMES - HOW TO HIDE THE NUMBERPAD AFTER INPUT, CAN'T SCROLL TO            NEXT? NOT WORKING IN iOS */}
      <StyledView>
        <Text>Where did you get the money?</Text>
        <Picker
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
          onChangeText={text => setIncome(text)}
          value={income}
          allowFontScaling
          keyboardType="numeric"
          autoCapitalize
          clearTextOnFocus
        />

        <StyledButton onPress={handleAddIncome}>💰 ADD INCOME 💰</StyledButton>
      </StyledView>

      {/* ADD COSTS */}
      <StyledView>
        <Text>What do you spend money on?</Text>
        <TextInput
          onChangeText={text => setCategoryCost(text)}
          value={categoryCost}
          allowFontScaling
          clearTextOnFocus
          autoCapitalize
        />

        <Text>How much?</Text>
        <TextInput
          onChangeText={text => setCost(text)}
          value={cost}
          keyboardType="numeric"
          allowFontScaling
          clearTextOnFocus
        />

        <StyledButton onPress={handleAddCost}>💸 ADD COST 💸</StyledButton>
      </StyledView>

      {/* SUMMARY - WHY ISN'T SPACE-BETWEEN WORKING BETWEEN category & income?*/}
      {(listIncomes.length > 0 || listCosts.length > 0) && (
        <ViewSummary>
          <TextSummary>Your balance:</TextSummary>

          {listIncomes.map((items, index) => (
            <ViewBalance key={index}>
              <TextSumIncomes>{items.category}</TextSumIncomes>
              <TextSumIncomes> {items.income} SEK</TextSumIncomes>
            </ViewBalance>
          ))}

          {listCosts.map((items, index) => (
            <ViewBalance key={index}>
              <TextSumCosts>{items.category}</TextSumCosts>
              <TextSumCosts> -{items.cost} SEK</TextSumCosts>
            </ViewBalance>
          ))}

          {(listIncomes.length > 0 || listCosts.length > 0) && (
            <TextSummary>Left to spend: {leftToSpend} SEK</TextSummary>
          )}
        </ViewSummary>
      )}
    </Container>
  );
};

// STYLED-COMPONENTS
const Container = styled.View`
  font-family: Calibri;
  flex-grow: 1;
  background-color: #232A2A;
  padding: 0px;
`;
const StyledView = styled.View`
  margin-bottom: 20px;
  padding: 15px;
`;
const Text = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-bottom: 5;
  text-align: center;
`;
const TextHeading = styled.Text`
  background-color: #FFA69E;
  font-size: 24px;
  font-weight: bold;
  color: #393D3F;
  padding: 20px 15px;
  text-align: center;
`;
const Picker = styled.Picker`
  minHeight: 40px;
  background-color: #fff;
  margin-bottom: 5px;
  border-radius: 20px;
  padding: 10px;
`;
const ViewSummary = styled.View`
  background-color: #CED2D2;
  padding: 15px;
`;
const ViewBalance = styled.View`
  flex-direction: row;
  justify-content: space-between;
  font-size: 18px;
`;
const TextSumIncomes = styled.Text`
  font-size: 20px;
  color: #647200;
`;
const TextSumCosts = styled.Text`
  font-size: 20px;
  color: #B83E22;
`;
const TextSummary = styled(Text)`
  margin-top: 10px;
  color: #232A2A;
  font-weight: bold;
`;

export default App;