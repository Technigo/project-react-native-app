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
  object-fit: cover;
  width: 100%;
  justify-content: center;
`;

export const DetailContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
`;

/*** BUTTONS ***/

export const MovieButton = styled.TouchableOpacity`
padding: 20px
width: 90%;
border-radius: 10px;
border: 2px solid darkred;
background-color: darkred;
text-align: center;
`;

export const MovieButtonText = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
`;

/*** TEXT ***/

export const MovieTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
`;

export const MovieTagline = styled(MovieTitle)`
  font-size: 28px;
  font-style: italic;
`;

export const MovieText = styled(MovieTitle)`
  font-weight: normal;
  font-size: 16px;
`;
