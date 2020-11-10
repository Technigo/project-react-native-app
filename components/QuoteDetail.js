import React from 'react';
import { Text, View } from 'react-native';


export const QuoteDetail = ({route, navigation}) => {

    const { quote, author } = route.params;

    return (
        <View>
            <Text>{quote}</Text>
            <Text>{author}</Text>
        </View>
    );
};

export default QuotesDetail;