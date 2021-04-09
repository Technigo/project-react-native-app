import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Avatar, Title, Drawer } from 'react-native-paper';
import styled from 'styled-components/native';

const DrawerScrollView = styled(DrawerContentScrollView)`
  background-color: ${(props) => props.background};
`;

DrawerScrollView.Title = styled(Title)`
  margin-top: 20px;
  font-weight: bold;
  margin-left: 20px;
  color: white;
`;

DrawerScrollView.TitleSection = styled(Drawer.Section)`
  margin-bottom: 20px;
  background-color: ${(props) => props.color};
`;

DrawerScrollView.Avatar = styled(Avatar.Icon)`
  background-color: ${(props) => props.backgroundColor};
`;

DrawerScrollView.Wrapper = styled.View`
  flex-flow: row wrap;
  ${(props) => props.title && 'padding: 20px;'}
`;

DrawerScrollView.Item = styled(Drawer.Item)`
  width: 100%;
`;

export default DrawerScrollView;
