
import React, {useState} from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity, Text, ScrollView } from 'react-native'
import Task from './Task'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

 const Week = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])
 

  handleDeleteTodo = (id) => {
  setTodos( todos.filter((todo) => {
    if (todo.key !== id) return true
  })
)}

  handleChecked = (id) => {
  setTodos( todos.map((todo) => {
    if(todo.key === id) todo.checked = !todo.checked;
    return todo;
  })
)}

  handleAddTodo = () => {
  if(value.length > 0) {
    setTodos([...todos, { text: value, key: Date.now(), checked:false
    }])
    setValue('')
  }
}


  return (
 
    <Container source={{uri: 'https://images.unsplash.com/photo-1532278951723-545f655c97f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'}}>
      <WelcomeText>Awesome Week Plans</WelcomeText>
      
      <TextInputContainer>
        <TextField 
        multiline={true}
        onChangeText={(value) => setValue(value)}
        placeholder={"To-do's this week..."}
        placeholderTextColor='white'
        value={value}
        />
          <TouchableOpacity onPress={() => handleAddTodo()}>
          
            <Text style={{marginLeft: 20, fontSize: 33, marginBottom: 20, color: 'white'}}>➤
            </Text>
          </TouchableOpacity>
      </TextInputContainer>
      <ScrollView style={{width: '100%'}}>
        {todos.map((task) => (
        <Task 
          text={task.text}
          key={task.key}
          checked={task.checked}
          setChecked={() => handleChecked(task.key)}
          delete={() => handleDeleteTodo(task.key)}
        />
        ))
      }
      </ScrollView>
     
    </Container>
    
  )
}

 

const Container = styled.ImageBackground `
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    background-color: #F5FCFF
`

const WelcomeText = styled.Text`
  margin-top: 10%;
  font-size: 16px;
  color: white;
`
const TextInputContainer = styled.View `
  flex-direction: row;
  align-items: baseline;
  border-color: rgb(222, 222, 222);
  border-bottom-width: 1px;
  padding: 0px 10px 0px 5px;

`

const TextField = styled.TextInput `
  height: 20px; 
  flex: 1;
  min-height: 7%;
  margin-top: 9%;
  font-size: 25px;
  font-weight: bold;
  color: white; 
  padding-left: 10px;
`


export default Week