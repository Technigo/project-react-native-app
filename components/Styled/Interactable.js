import { TouchableHighlight, View } from 'react-native';
import { Surface, FAB, TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

const Interact = styled(View)``;

Interact.FAB = styled(FAB)`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 15px;
`;

Interact.TextInput = styled(TextInput)`
  background-color: ${(props) => props.background};
  elevation: 2;
  color: black;
`;

Interact.SwitchWrapper = styled(Surface)`
  elevation: 2;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 10px;
  padding-vertical: 20px;
  background-color: ${(props) => props.background};
`;

Interact.TouchArea = styled(TouchableHighlight)`
  margin-top: 20px;
`;

export default Interact;
