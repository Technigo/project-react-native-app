import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'
import { View, Text } from 'react-native'

const CartItem = ({ coin }) => {
    const dispatch = useDispatch()

    const onQuantityIncrease = (coin) => {
        dispatch(cart.actions.addItem(coin))
    }

    const onQuantityDecrease = (coin) => {
        dispatch(cart.actions.removeItem(coin))
    }
    return (
        <View>
            <Text>{coin.name}</Text>
            <View className="info">
                {/* <Text className="quantity">x{coin.quantity}</Text> */}
                {/* <Text className="sum">{coin.price * coin.quantity}:-</Text> */}
            </View>

            {/* <View className="actions">
                <TouchableOpacity onPress={() => onQuantityDecrease(coin)}>-</TouchableOpacity>
                <TouchableOpacity onPress={() => onQuantityIncrease(coin)}>+</TouchableOpacity>
            </View> */}
        </View>
    )
}

export default CartItem