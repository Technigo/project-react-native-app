import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native'

const ListItem = styled.Text`
  width: 100%;
  font-size: 24px;
  color: #fff;
  text-align: center;
  margin-bottom: 5px;
  padding: 10px;
  border: #383E42;
  border-radius: 10px;
`;

const IntentionsItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
        {/* {dailyIntentions.map(intention => (
        <ListItem key={intention}>{intention}</ListItem>) */}
        <View>
        <ListItem>{props.title}</ListItem>
        </View>
        </TouchableOpacity>
    );
};

export default IntentionsItem;
