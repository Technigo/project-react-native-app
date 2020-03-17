import React from "react"
import styled from "styled-components/native"


const TodosItem = ({ item, pressHandler }) => {
    return (
        <Button
            onPress={() => pressHandler(item.id)}>
            <Texto>{item.name}</Texto>
        </Button>

    )
}

const Button = styled.TouchableOpacity`
background-color= transparent;

`
const Texto = styled.Text`
padding: 16px;
margin-top: 16px;
border-color: #bbb;
border-width: 1px;
border-style: dashed;
border-radius: 10px;
`

export default TodosItem