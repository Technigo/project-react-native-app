import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: space-around;
  align-items: center;
  padding: 0 16px;
`;

const QuoteContainer = styled.View`
  justify-content: center;
  background-color: #ccc;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 24px;
`;

const QuoteText = styled.Text`
  font-size: 36px;
  color: #2b4f60;
  padding-bottom: 10px;
  line-height: 46px;
`;

const QuoteAuthor = styled.Text`
  font-size: 24px;
  color: #888;
`;

const InfoText = styled.Text`
  font-size: 28px;
  color: #888;
`;

export { Container, QuoteText, QuoteAuthor, QuoteContainer, InfoText };
