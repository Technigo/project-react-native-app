import React, { useContext, useState, useRef } from 'react';
import { SettingsContext } from '../context/settingsContext';
import { TouchableHighlight, View } from 'react-native';
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
  FAB,
  TextInput,
  Switch,
  TouchableRipple,
  Modal,
} from 'react-native-paper';
import styled from 'styled-components/native';
import { MainViewContainer, MainHeader } from '../components/Styled/MainViews';

const FABStyled = styled(FAB)`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 15px;
`;

const StyledTextInput = styled(TextInput)`
  background-color: ${props => props.background};
  elevation: 2;
  color: black;
  `;
  
  const SwitchContainer = styled(Surface)`
  elevation: 2;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 10px;
  padding-vertical: 20px;
  background-color: ${props => props.background};
`;

const TouchArea = styled(TouchableHighlight)`
  margin-top: 20px;
`;

export const Profile = () => {
  const { colors } = useTheme();
  const { user, toggleTheme, theme } = useContext(SettingsContext);
  const [text, setText] = useState(user.name);
  const [isEditing, setEditing] = useState(true);
  

  const onPressed = () => {
    setEditing(!isEditing);
    user.name = text;
  };
  const onSubmit = () => {
    setEditing(!isEditing);
    //show modal confirm
    //update context
    user.name = text;
  };
  
  
  return (
    <MainViewContainer verticalAlign="flex-start" color={colors.background}>
      <MainHeader>My Profile</MainHeader>
      <StyledTextInput
        label="NAME"
        value={text}
        placeholder={text}
        disabled={isEditing}
        onChangeText={(text) => setText(text)}
        onSubmitEditing={onSubmit}
        background={colors.surface}
        
      />
      <TouchArea disabled={isEditing} onPress={() => toggleTheme()}>
        <SwitchContainer background={colors.surface}>
          <Paragraph>DARK MODE</Paragraph>
          <View pointerEvents="none">
            <Switch disabled={isEditing} value={theme === 'dark'} />
          </View>
        </SwitchContainer>
      </TouchArea>
      <FABStyled visible={isEditing} medium icon="pencil" onPress={onPressed} />
      <FABStyled visible={!isEditing} medium icon="close" onPress={onPressed} />
    </MainViewContainer>
  );
};
