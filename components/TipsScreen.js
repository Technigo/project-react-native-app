import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

import backgroundImage from '../assets/sharon-mccutcheon-62vi3TG5EDg-unsplash.jpg';

// Styling components
import {
  RoundedButton,
  ActiveRoundedButton,
  ButtonText,
  ActiveButtonText,
  Card,
  TipsText,
} from '../styling-components/Global';
import Loading from './Loading';
import ShareButton from './ShareButton';

const TipsWrapper = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

const Separator = styled.Text`
  text-align: center;
  font-size: 20px;
  margin: 20px;
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
    <TipsWrapper source={backgroundImage}>
      <Card>
        {loading && <Loading />}
        {!loading && <TipsText>"{tips}"</TipsText>}
      </Card>

      <ActiveRoundedButton
        title="More tips, please"
        onPress={() => fetchTips()}
      >
        <ActiveButtonText>More advice, please</ActiveButtonText>
      </ActiveRoundedButton>

      <ShareButton SharableMessage={tips} />

      <Separator>– – –</Separator>

      <RoundedButton title="Go back" onPress={() => navigation.goBack()}>
        <ButtonText>Go back</ButtonText>
      </RoundedButton>
    </TipsWrapper>
  );
};

export default Recept;
