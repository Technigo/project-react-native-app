import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Dish = ({ dish, dishQuery, setDishQuery }) => {
  const [isAdded, setIsAdded] = useState(false);
  Dish
  useEffect(() => {
    if (isAdded) {
      setDishQuery({ ...dishQuery, [dish]: true })
    } else {
      setDishQuery({ ...dishQuery, [dish]: false })
    }
  }, [isAdded])


  const toggleSwitch = () => {
    setIsAdded(previousState => !previousState)
  };



  return (
    <TouchableOpacity onPress={toggleSwitch}>
      <Text>Click to add {dish}</Text>
    </TouchableOpacity>
  )
}

export default Dish