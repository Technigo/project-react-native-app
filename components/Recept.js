import React, { useEffect, useState } from 'react';
// import { Button, View, Text } from 'react-native';
import styled from 'styled-components/native';

// Styling components
import {
  RoundedButton,
  ActiveRoundedButton,
  ButtonText,
  ActiveButtonText,
} from '../styling-components/Global';
import Loading from './Loading';

const TipsWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

const TipsCard = styled.View`
  background: #fff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  width: 90%;
  border-radius: 20px;
`;
const TipsText = styled.Text`
  font-size: 32px;
  text-align: center;
  margin: 50px;
`;

// ----------------------------------------------------------------

const Recept = ({ navigation }) => {
  const [tips, setTips] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchTips = () => {
    setLoading(true);
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((json) => {
        setTips(json.slip.advice);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTips();
  }, []);

  return (
    <TipsWrapper>
      <TipsCard>
        {loading && <Loading />}
        {!loading && <TipsText>"{tips}"</TipsText>}
      </TipsCard>
      <ActiveRoundedButton
        title="More tips, please"
        onPress={() => fetchTips()}
      >
        <ActiveButtonText>Fetch more tips</ActiveButtonText>
      </ActiveRoundedButton>
      <RoundedButton title="Go back" onPress={() => navigation.goBack()}>
        <ButtonText>Go back</ButtonText>
      </RoundedButton>

      {/* <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
    </TipsWrapper>
  );
};

export default Recept;
