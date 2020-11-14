import styled from 'styled-components/native';

/*CONTAINERS*/
export const HomeContainer = styled.ImageBackground `
  flex: 1;
  justify-content: flex-end;
`;

export const ListContainer = styled.ScrollView `
  background-color: #240738;
  flex: 1;
`;

export const ListView = styled.View `
  padding-top: 20px;
`;

export const DetailsContainer = styled.View `
  flex: 1  
  justify-content: center;
  align-items: center;
`;

export const DetailsWrapper = styled.View`
  background-color: rgba(0,0,0,0.6);
  height: 60%;
  justify-content: center;
  padding: 20px;
`;

export const LottieContainer = styled(DetailsContainer) `
	background-color: #FC98C4;
`;

/*TEXT*/
export const Title = styled.Text `
  color: #FAF8F0;
  font-size: 18px;
  font-weight: bold;
`;

export const DetailsTitle = styled(Title) `
  font-size: 28px;
  margin-bottom: 10px;
`;

export const Paragraph = styled.Text `
  color: #F8F2E7;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const ItalicParagraph = styled(Paragraph) `
  font-style: italic;
`;

export const ShareText = styled(Paragraph) `
  font-weight: bold;
  text-align: center;
  color: gold;
`;

/*BUTTONS*/
export const HomeButton = styled.TouchableOpacity `
  padding: 20px;
  margin-bottom: 37%;
  width: 90%;
  border-radius: 10px;
  align-self: center; 
  align-items: center; 
  background-color: rgba(0,0,0,0.6);
`;

export const Button = styled(HomeButton) `
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #571E59;  
`;

export const ShareButton = styled.TouchableOpacity `
  background-color: rgba(0,0,0,0.6);
  align-self: flex-end;
  width: 30%
  padding: 5px;
  border-radius: 10px;
  margin: 10px;
`;

/*IMAGE*/
export const MovieImage = styled.ImageBackground `
  flex: 1;
  width: 100%;
  justify-content: center;
`;