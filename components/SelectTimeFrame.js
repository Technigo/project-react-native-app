import React, { useState } from 'react';

import { View, Text, Button } from 'react-native'

export const SelectTimeFrame = ({ onTimeFrameSelected }) => {
  
   
    return  (
            <View> 
                <Text>Please select a timeframe</Text>           
                {['yesterday', 'today', 'tomorrow'].map((timeFrames) => ( 
                <Button 
                key={timeFrames} 
                title={timeFrames}
                onPress={() => onTimeFrameSelected({timeFrames})}>
                    
                </Button>  
            ))}
            </View>   
            );
    };