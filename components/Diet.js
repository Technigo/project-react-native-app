import React, { useState } from 'react';
import { Switch, View, Text } from 'react-native';


const Diet = ({ label, dietQuery }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  if (isEnabled) {
    dietQuery[label] = true
    console.log(`${label} added:`, dietQuery)
  } else {
    dietQuery[label] = false
    console.log(`${label} removed`, dietQuery)
  }

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
  };

  return (
    <View>
      <Text>{label}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

export default Diet