import {
  Headline,
  Caption,
  Paragraph,
  useTheme,
  Button,
  Subheading,
  Divider,
  Surface,
  Title,
} from 'react-native-paper';
import styled from 'styled-components/native';

export const MainViewContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.color };
  justify-content: ${(props) => props.verticalAlign};
`;

export const MainHeader = styled(Headline)`
  text-align: center;
  margin: 20px 0;
`;
export const MainSubheader = styled(Subheading)`
  text-align: center;
  text-transform: uppercase;
`;
