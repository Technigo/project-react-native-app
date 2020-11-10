import React from 'react';
import { View, Button } from 'react-native';

import Quotes from '../data/quotes.json';

const QuoteList = ({navigation}) => {
    return ( 
        <View>
            {Quotes.map((quotes) => (
                <Button 
                    key={quotes.id}                
                    title="Detail"
                    onPress={() => navigation.navigate('Detail', quotes)}
                />
            ))}
        </View>      
    );
};

export default QuoteList;