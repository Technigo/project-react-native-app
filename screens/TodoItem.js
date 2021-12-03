import React from 'react';
import { Text, TouchableOpacity, Button, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styled from 'styled-components/native';

const Item = styled.Text`
  padding: 16px;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 10px;
  padding-left: 10px;
`;

export const TodoItem = ({ item, pressHandler }) => {
  return (
    <View>
      {item ? (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
          <Item>
            <MaterialCommunityIcons
              name='delete-forever'
              size={24}
              color='black'
            />
            {item.text}
          </Item>
        </TouchableOpacity>
      ) : (
        ''
      )}
    </View>
  );
};
