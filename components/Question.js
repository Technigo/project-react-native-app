import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #d4682e;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled(Container)`
  flex: 1;
  width: 90%;
  background-color: #fff;
  border-radius: 50px;
  margin-top: 60px;
`;

const InfoContainer = styled(Container)`
  flex: 2;
  width: 90%;
  background-color: #6cb3ab;
  border-radius: 50px;
  margin-top: 20px;
  margin-bottom: 60px;
  justify-content: space-evenly;
`;

const Title = styled.Text`
  font-size: 36px;
  font-weight: 800;
  color: #86754f;
  text-transform: uppercase;
  text-align: center;
`;

const Info = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #263457;
  text-align: center;
  padding: 10px;
`;

const SmallInfo = styled(Info)`
  font-size: 16px;
`;

const Question = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>The app of answers</Title>
      </TitleContainer>
      <InfoContainer>
        <Info>Got questions? All you have to do is ask...</Info>
        <SmallInfo>
          Questions should be phrased closed-end, e.g., "Should I relax and have
          some wine tonight?" or "Should I do some training this weekend?
        </SmallInfo>
        <Info>shake your phone and get an answer!</Info>
      </InfoContainer>
    </Container>
  );
};

export default Question;
