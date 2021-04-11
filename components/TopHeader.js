import React from 'react'
import { TouchableOpacity, ScrollView } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 0.1;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 20px;
`

const Category = styled.Text`
  font-size: 15px;
  margin: 0 10px;
  color: #000;
  padding-bottom: 10px;
`

const TopHeader = ({onCategoryChange}) => {

    return (
      
        <Container>
          
          <ScrollView horizontal={true}
          showsHorizontalScrollIndicator = {false}>
            <TouchableOpacity onPress={() => onCategoryChange("General")}>
              <Category >
                General
              </Category>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onCategoryChange("Business")}>
              <Category >
                Business
              </Category>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onCategoryChange("Entertainment")}>
              <Category>
                Entertainment
              </Category>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onCategoryChange("Health")}>
              <Category>
                Health
              </Category>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onCategoryChange("Science")}>  
              <Category>
                Science
              </Category>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onCategoryChange("Sports")}>
              <Category>
                Sports
              </Category>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onCategoryChange("Technology")}>
              <Category>
                Technology
              </Category>
            </TouchableOpacity>
             </ScrollView>
        </Container>
    )
}

export default TopHeader

