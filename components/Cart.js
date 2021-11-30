import React from 'react'
import { useSelector } from 'react-redux'
import { cart } from '../reducers/cart'
import { View, Text } from 'react-native'


const Cart = () => {
    const coins = useSelector((store) => store.cart.items)

    const totalPrice = useSelector((store) =>
        store.cart.items.reduce((total, item) => (total + (Math.round(item.price * 100) / 100 * item.quantity)), 0)
    )
    return (
        <View className="cart">
            <View className="total">
                <Text className="emoji" role="img" aria-label="cart">🛒</Text>
                <Text className="amount">Total: {Math.round(totalPrice * 100) / 100} $ </Text>
            </View>

            {/* <Text className="items">
                {coins.map((coin) => (
                    <CartItem key={coin.id} coin={coin} />
                ))}
            </Text> */}
        </View>
    )

}

export default Cart