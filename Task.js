import React from 'react'
import styled from 'styled-components/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'



const Task = (props) => (
 <TaskWrapper>
 <FontAwesome5 name={props.checked ? 'check' : 'square'} onPress={props.setChecked} backgroundColor='transparent'  color='white'/>

   <InputContainer>
     {props.checked}
     <TaskInput>{props.text}</TaskInput>
   </InputContainer>

   <FontAwesome5 name='trash'
   onPress={props.delete}
   color='white'
   backgroundColor='transparent'
   />
  </TaskWrapper>
)

export default Task

const TaskWrapper = styled.View `
margin-top: 5%;
flex-direction: row;
border-color: #FFF;
border-bottom-width:2px;
width: 99%;
align-items: center;
min-height: 40px;
justify-content: space-around;
`

const InputContainer = styled.View `
width: 70%;
margin-left: 10px;
`

const VerticalLine = styled.View `
border-bottom-color: white;
border-bottom-width: 4px;
margin-left: 10px;
width: 100%;
position: absolute;
margin-top: 15px;
`

const TaskInput = styled.Text `
padding-bottom: 20px;
padding-left: 20px;
margin-top: 6px;
border-color: #F0F0F0;
border-bottom-width: 1px;
font-size: 17px;
font-weight:bold;
color: white;
width: 100%;
`