import styled from "styled-components/native";

export const InfoText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: rosybrown;
`;

export const Info = styled.View`
  z-index: 100;
  position: absolute;
  width: 100px;
  flex: 1;
  top: 100px;
`;

export const QuoteText = styled.Text`
  font-family: LondrinaSolid-Light;
  font-size: 16px;
  color: rosybrown;
  text-shadow: none;
  text-decoration: none;
  text-align: center;
`;

export const TextWrapper = styled.View`
  width: 60%;
  height: 60%;
  border: none;
  box-shadow: none;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const MainContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  background-color: whitesmoke;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Ball = styled.View`
  border-radius: 100;
  z-index: 10;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ViewPort = styled.View`
  border-radius: 100;
  width: 50%;
  height: 50%;
  border: 2px solid silver;
  display: flex;
  justify-content: center;
  align-items: center;
`;
