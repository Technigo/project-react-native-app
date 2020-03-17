import React, { useState } from "react"
import styled from "styled-components/native"


const AddTodos = ({ submitHandler }) => {
    const [name, setName] = useState('')
    const changeHandler = (val) => {
        setName(val)
    }
    const doSubmit = () => {
        submitHandler(name)
        textInput.clear()
    }

    return (
        <AddTodosContainer>
            <Input
                placeholder="Add a new todo..."
                onChangeText={changeHandler}
                ref={input => { textInput = input }}
            />
            <Button
                onPress={() => doSubmit()}
                disabled={name.length < 3 || name.length > 50 ? true : false}
            ><Texto>add todo</Texto></Button>
        </AddTodosContainer>
    )
}

const AddTodosContainer = styled.View`
flex:1;
margin-top:30px;
`
const Input = styled.TextInput`
margin-bottom: 10px;
padding-horizontal: 8px;
padding-vertical: 6px;
border-bottom-width: 1px;
border-bottom-color: #ddd;
`
const Button = styled.TouchableOpacity`
height: 40px;
background-color: ${props => (props.disabled ? "#ffadad" : "coral")}
border: none;
font-size: 14px;
border-radius: 20px;
padding: 10px;
text-align: center;
`
const Texto = styled.Text`
color:white;
align-self: center;
text-transform: uppercase;
`


export default AddTodos