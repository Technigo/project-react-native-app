import React, { useEffect, useState } from 'react';
import { Switch, View, Text } from 'react-native';


const Diet = ({ label, dietQuery, setDietQuery }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    if (isEnabled) {
      setDietQuery({ ...dietQuery, [label]: true })
    } else {
      setDietQuery({ ...dietQuery, [label]: false })
    }
  }, [isEnabled])

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