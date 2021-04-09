import { View } from 'react-native';
import { Headline, Subheading, Caption } from 'react-native-paper';
import styled from 'styled-components/native';

const Main = styled(View)`
  flex: 1;
  background-color: ${(props) => props.color};
  justify-content: ${(props) => props.verticalAlign};
`;

Main.Section = styled(View)`
  align-items: center;
`;

Main.Header = styled(Headline)`
  text-align: center;
  margin: 20px 0;
`;
Main.Subheader = styled(Subheading)`
  text-align: center;
  text-transform: uppercase;
`;

Main.Caption = styled(Caption)`
  margin-bottom: 10px;
`;

export default Main;