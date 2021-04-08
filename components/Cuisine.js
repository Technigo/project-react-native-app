import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Cuisine = ({ cuisine, cuisineQuery, setCuisineQuery }) => {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (isAdded) {
      setCuisineQuery({ ...cuisineQuery, [cuisine]: true })
    } else {
      setCuisineQuery({ ...cuisineQuery, [cuisine]: false })
    }
  }, [isAdded])


  const toggleSwitch = () => {
    setIsAdded(previousState => !previousState)
  };



  return (
    <TouchableOpacity onPress={toggleSwitch}>
      <Text>Click to add {cuisine}</Text>
    </TouchableOpacity>
  )
}

export default Cuisine