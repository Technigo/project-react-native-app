import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  background-color: black;
  color: #2b2b2b;
  flex: 1;
  justify-content: center;
`;

export const Img = styled.Image`
  top: 0;
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
  border: 1px solid pink;
`;

export const Title = styled.Text`
  color: pink;
  font-family: Newsreader;
  font-size: 25px;
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
`;

export const Text = styled.Text`
  font-family: Newsreader;
  text-align: left;
  margin-left: 10px;
  margin-bottom: 20px;
  font-size: 18px;
  color: white;
`;

 export const Question = styled.Text`
  font-size: 17px;
  font-family: Newsreader;
  text-align: center;
  color: white;
  padding: 10px;
  margin-bottom: 2px;
`;

export const AnswerText = styled.Text`
  font-size: 16px;
  text-align: center;
  font-family: Newsreader;
  color: #222;
`;

export const TitleRight = styled(Title)`
  padding: 20px 10px;
  font-size: 18px;
  color: white;
`;

export const TitleWrong = styled(Title)`
  padding: 20px 10px;
  font-size: 18px;
  color: red;
`;

export const Score = styled(Title)`
  padding-top: 10px;
  font-size: 12px;
`;

export const Button = styled.TouchableOpacity`
  background: #f4c2c2;
  border-radius: 10px;
  margin: 10px;
  padding: 10px 20px;
`;

export const ButtonText = styled.Text`
  color: #222;
  font-family: Newsreader;
  font-size: 16px;
`;

export const EndTitle = styled.Text`
  font-family: Newsreader;
  color: hotpink;
  font-size: 22px;
  text-align: center;
  margin-bottom: 10px;
  width: 300px;
`;

export const FinalImg = styled.Image`
  width: 500px;
  height: 300px;
  margin: 10px 0px;
`;

export const HighScore = styled.View`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const FinalScore = styled.Text`
  font-family: Newsreader;
  color: #de5285;
  font-size: 20px;
`;

export const NextButton = styled(Button)`
  bottom: 30;
  position: absolute;
`;