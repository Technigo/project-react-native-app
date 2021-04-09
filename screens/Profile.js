import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { Paragraph, useTheme, Switch } from 'react-native-paper';

import { SettingsContext } from '../context/settingsContext';
import Main from '../components/Styled/MainViews';
import Interact from '../components/Styled/Interactable';

export const Profile = () => {
  const { colors } = useTheme();
  const { user, toggleTheme, theme } = useContext(SettingsContext);
  const [text, setText] = useState(user.name);
  const [isEditing, setEditing] = useState(true);

  const onSubmit = () => {
    setEditing(!isEditing);
    user.name = text;
  };

  return (
    <Main verticalAlign="flex-start" color={colors.background}>
      <Main.Header>My Profile</Main.Header>
      <Interact.TextInput
        label="NAME"
        value={text}
        placeholder={text}
        disabled={isEditing}
        onChangeText={(text) => setText(text)}
        onSubmitEditing={onSubmit}
        background={colors.surface}
      />
      <Interact.TouchArea disabled={isEditing} onPress={() => toggleTheme()}>
        <Interact.SwitchWrapper background={colors.surface}>
          <Paragraph>DARK MODE</Paragraph>
          <View pointerEvents="none">
            <Switch disabled={isEditing} value={theme === 'dark'} />
          </View>
        </Interact.SwitchWrapper>
      </Interact.TouchArea>
      <Interact.FAB visible={isEditing} medium icon="pencil" onPress={onSubmit} />
      <Interact.FAB visible={!isEditing} medium icon="close" onPress={onSubmit} />
    </Main>
  );
};
