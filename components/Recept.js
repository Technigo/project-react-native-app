import React, { useEffect, useState } from 'react';
// import { Button, View, Text } from 'react-native';
import styled from 'styled-components/native';

// Styling components
import {
  RoundedButton,
  ActiveRoundedButton,
  ButtonText,
  ActiveButtonText,
  Card,
  Text_C32,
} from '../styling-components/Global';
import Loading from './Loading';

const TipsWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #fff;
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
      <Card>
        {loading && <Loading />}
        {!loading && <Text_C32>"{tips}"</Text_C32>}
      </Card>
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
