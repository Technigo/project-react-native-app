import styled from 'styled-components/native';

/*** CONTAINERS ***/

export const HomeMainContainer = styled.ImageBackground`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding-top: 100px;
  text-align: center;
`;

export const DetailMainContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const DetailBackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const DetailContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const LottieContainer = styled.View`
  flex: 1;
  background-color: darkred;
  justify-content: center;
  align-items: center;
`;

/*** BUTTONS ***/

export const ButtonMovie = styled.TouchableOpacity`
padding: 20px
width: 90%;
border-radius: 10px;
border: 2px solid darkred;
background-color: darkred;
text-align: center;
`;

export const ButtonMovieText = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
`;

export const ButtonShare = styled.TouchableOpacity`
  width: 50%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  background: #fff;
  align-self: flex-end;
`;

export const ButtonShareText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #000;
`;
/*** TEXT ***/

export const MovieTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
`;

export const MovieTagline = styled(MovieTitle)`
  font-size: 20px;
  font-weight: normal;
  font-style: italic;
`;

export const MovieText = styled(MovieTitle)`
  font-weight: normal;
  font-size: 16px;
`;
