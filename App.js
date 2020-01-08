import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { StatusBar, Vibration } from 'react-native';

const App = () => {
  const [formValues, setFormValues] = useState({
    categoryIncome: '',
    categoryCost: '',
    income: '',
    cost: '',
  });

  //SET VIBE DURATION FOR BUTTONS
  const vibeDuration = 300;

  //ARRAYS FOR INCOMES AND COSTS
  const [listIncomes, setListIncomes] = useState([]);
  const addedIncomes = {
    category: formValues.categoryIncome,
    income: formValues.income,
  };

  const [listCosts, setListCosts] = useState([]);
  const addedCosts = {
    category: formValues.categoryCost,
    cost: formValues.cost,
  };

  //FUNCTION TO ENABLE BUTTONS
  const enabledIncome = formValues.income > 0;
  const enabledCost = formValues.cost > 0;

  // FUNCTIONS FOR ADDING INCOMES AND COSTS
  const handleAddIncome = () => {
    setListIncomes([...listIncomes, addedIncomes]);
    Vibration.vibrate(vibeDuration);
  };

  const handleAddCost = () => {
    setListCosts([...listCosts, addedCosts]);
    Vibration.vibrate(vibeDuration);
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

  //FUNCTION TO CLEAR ALL INPUTS
  const scroll = React.createRef();
  const clearInput = () => {
    setFormValues({
      categoryIncome: '',
      categoryCost: '',
      income: '',
      cost: '',
    });
    setListIncomes([]);
    setListCosts([]);
    scroll.current.scrollTo({ x: 0, y: 0 });
    Vibration.vibrate(vibeDuration);
  };

  return (
    <Container ref={scroll}>
      <StatusBar hidden />
      <TextHeading>SILLY BUDGET APP</TextHeading>

      <StyledView>
        <Text>Where did you get the money?</Text>
        <Picker
          selectedValue={formValues.categoryIncome}
          onValueChange={value =>
            setFormValues({
              ...formValues,
              categoryIncome: value,
            })
          }>
          <Picker.Item label="Pick a category" value="" />
          <Picker.Item label="Salary" value="Salary" />
          <Picker.Item label="Stole it" value="Stolen money" />
          <Picker.Item label="Borrowed" value="Borrowed" />
          <Picker.Item label="Other" value="Other" />
        </Picker>

        <Text>How much?</Text>
        <TextInput
          onChangeText={text => setFormValues({ ...formValues, income: text })}
          onFocus={text => setFormValues({ ...formValues, income: '' })}
          value={formValues.income}
          placeholder="0"
          allowFontScaling
          keyboardType="numeric"
          clearTextOnFocus
        />

        <StyledButton
          onPress={handleAddIncome}
          activeOpacity={enabledIncome ? 0.3 : 1}
          disabled={!enabledIncome}>
          <Text>💰 ADD INCOME 💰</Text>
        </StyledButton>
      </StyledView>

      <StyledView>
        <Text>What do you spend money on?</Text>
        <TextInput
          onChangeText={text =>
            setFormValues({ ...formValues, categoryCost: text })
          }
          onFocus={text => setFormValues({ ...formValues, categoryCost: '' })}
          value={formValues.categoryCost}
          placeholder="Food, car, diapers.."
          allowFontScaling
          clearTextOnFocus
          autoCapitalize="sentences"
        />

        <Text>How much?</Text>
        <TextInput
          onChangeText={text => setFormValues({ ...formValues, cost: text })}
          onFocus={text => setFormValues({ ...formValues, cost: '' })}
          value={formValues.cost}
          placeholder="0"
          keyboardType="numeric"
          allowFontScaling
          clearTextOnFocus
        />

        <StyledButton
          onPress={handleAddCost}
          activeOpacity={enabledCost ? 0.3 : 1}
          disabled={!enabledCost}>
          <Text>💸 ADD COST 💸</Text>
        </StyledButton>
      </StyledView>

      {(listIncomes.length > 0 || listCosts.length > 0) && (
        <ViewSummary>
          <TextSummary>YOUR BALANCE</TextSummary>

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
            <ViewBalance>
              <TextSummary>LEFT TO SPEND:</TextSummary>
              <TextSummary>{leftToSpend} SEK</TextSummary>
            </ViewBalance>
          )}
          <StyledButton onPress={clearInput} activeOpacity={0.3}>
            <Text>✌️ TRY AGAIN? ✌️</Text>
          </StyledButton>
        </ViewSummary>
      )}
    </Container>
  );
};

// STYLED-COMPONENTS
const Container = styled.ScrollView`
  flex-grow: 1;
  background: #222A2B;
  margin: 0;
`;
const StyledView = styled.View`
  margin: 15px 0;
  padding: 15px;
`;
const Text = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-bottom: 5;
  text-align: center;
`;
const TextHeading = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #FFF;
  margin: 20px;
  padding: 30px 15px 25px 15px;
  text-align: center;
  background: transparent;
  border: 7px solid #fff;
`;
const Picker = styled.Picker`
  minHeight: 40px;
  background: #fff;
  margin-bottom: 5px;
  padding: 10px;
`;
const TextInput = styled.TextInput`
  font-size: 20px;
  height: 40px;
  background: #fff;
  margin-bottom: 10px;
  text-align: center;
  padding: 10px;
`;
const StyledButton = styled.TouchableOpacity`
  height: 45px;
  padding: 10px;
  margin-top: 8px;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
  background: #964A07;
`;
const ViewSummary = styled.View`
  background: #CED2D2;
  padding: 15px;
`;
const ViewBalance = styled.View`
  flex-direction: row;
  justify-content: space-between;
  font-size: 18px;
`;
const TextSumIncomes = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #2F4419;
`;
const TextSumCosts = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #3B0D11;
`;
const TextSummary = styled.Text`
  margin: 10px 0;
  color: #000;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export default App;
