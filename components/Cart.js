import React from 'react'
import { useSelector } from 'react-redux'
import { cart } from '../reducers/cart'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'



const Cart = () => {
    const coins = useSelector((store) => store.cart.items)

    const totalPrice = useSelector((store) =>
        store.cart.items.reduce((total, item) => (total + (Math.round(item.price * 100) / 100 * item.quantity)), 0)
    )
    return (
        <View className="cart">
            <View className="total">
                <AmountText className="amount">$ {Math.round(totalPrice * 100) / 100}</AmountText>
            </View>
        </View>
    )

}

export default Cart

const AmountText = styled.Text`
    font-size: 25px;
    font-weight: bold;
`