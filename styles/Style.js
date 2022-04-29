import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const IndicatorContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: pink;
  padding: 16px;
  padding-top: 32px;
`;

export const Indicator = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: blue;
`;

export const Blinking = styled.Text`
  font-size: 22px;
  color: blue;
  font-weight: bold;
`;

export const ImageContainer = styled.View`
  background-color: pink;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ShareButton = styled.TouchableOpacity`
  padding: 12px;
  border-radius: 5px;
  background-color: rgba(277, 277, 277, 0.4);
  border: 2px solid blue;
  margin-bottom: 12%;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: blue;
`;
