import React, { useState, useEffect } from "react"
import { Linking, ImageBackground, ActivityIndicator } from "react-native"
import styled from "styled-components/native"


//Function to convert time from minutes

const timeConverter = (n) => {
  let num = n
  let hours = (num / 60)
  let rhours = Math.floor(hours)
  let minutes = (hours - rhours) * 60
  let rminutes = Math.round(minutes)

  if (rhours === 0 && rminutes === 0) {
    return ""
  } else if (rhours === 0) {
    return `⏲ ${rminutes} min`
  } else if (rminutes === 0) {
    return `⏲ ${rhours} h`
  } else {
    return `⏲ ${rhours} h ${rminutes} min`
  }
}


//STYLING

const Container = styled.ScrollView`
flex-grow:1;
flex-direction: column;
`

const Heading = styled.Text`
color: white;
font-weight: bold;
font-size: 40;
background-color: firebrick;
padding: 25px 8px 8px 8px;
`

const Subheading = styled.Text`
font-size: 28;
padding:30px;
color:white;
font-weight: bold;
text-shadow-color: black;
text-shadow-radius: 50;
`

//Searchfield and pickers

const TextSearch = styled.TextInput`
background-color:white;
padding:8px;
width:300;
`

const Pickers = styled.View`
flex-grow:1;
flex-direction:row;
justify-content:center;
width:300;
`

const IngredientsPicker = styled.View`
flex-grow:1;
background: darksalmon;
width:145;
height:63;
margin-top:8px;
padding:1px 3px;
`

const NoOfIngrPicker = styled.Picker`
background-color:white;
height:25;
width:38;
margin-left:5px;

`

const MaxTime = styled.View`
flex-grow:1;
background: darksalmon;
width:140;
height:63;
margin:8px 0px 0px 8px;
padding:1px 3px;
`

const MaxTimePicker = styled.Picker`
background-color:white;
height:25;
width:94;
margin-left:5px;
`
const PickerText = styled.Text`
color: black;
font-family: serif;
font-size: 12;
padding: 5px 0px 5px 5px;
width:200;
`

//No recipes found
const NoRecipesText = styled.Text`
font-size: 12;
width:300;
height:40;
padding:10px;
color:black;
background-color: #ededed;
`

//Search button

const SearchButton = styled.TouchableOpacity`
background-color:firebrick;
border: 1px solid white;
border-radius: 20;
padding: 8px 14px;
flex-grow:1;
justify-content:center;
align-items:center;
width: 85;
margin:20px;
`
const SearchButtonText = styled.Text`
font-size:15;
color:white;
font-family:sans-serif-medium;
`

//Found recipes
const FoundRecipesBox = styled.View`
`

const RecipesSection = styled.View`
flex:1;
flex-direction:column;
justify-content:center;
margin-bottom:350px;
`

const RecipeCard = styled.View`
width: 350;
height:105;
padding:8px;
background-color: #ededed;
margin:5px 0px;
flex:1;
flex-direction:row;
align-items:flex-start;
`

const RecipeTextBox = styled.View`
flex:1;
flex-direction:column;
`

const Image = styled.Image`
width:130;
height:130;
margin:5px;
`

const Text = styled.Text`
color: black;
font-family: serif;
font-size: 15;
font-weight:bold;
padding: 0px 2px;
width:200;
`

const TimeText = styled.Text`
color: black;
font-family: serif;
font-size: 10;
padding: 5px 0px 5px 5px;
width:200;
`

const Tags = styled.View`
flex:1;
flex-direction:row;
width:200;
flex-wrap:wrap;
align-self:flex-end;
padding:8px;
margin-bottom:5px;
`

const TagsText = styled.Text`
color:white;
font-size:9;
background-color:darksalmon;
margin:1px;
padding:0px 3px;
`

const Footer = styled.Text`
color: white;
font-weight: bold;
font-size: 12;
background-color: firebrick;
padding: 8px 8px 8px 30px;
margin-top:165px;
width:100%;
`


//Keys

const apiKey = "4a6cecd7629754f6b06f4fb0e3247616"
const apiId = "5a64c144"


//Functions
const App = () => {
  const [value, onChangeText] = useState("")
  const [foundRecipes, setFoundRecipes] = useState(null)
  const [noOfIngr, setNoOfIngr] = useState("")
  const [maxMinutes, setMaxMinutes] = useState("")
  const [loading, setLoading] = useState()

  const fetchRecipes = async () => {
    setLoading(true)
    const res = await fetch(`https://api.edamam.com/search?q=${value}${noOfIngr}&app_id=${apiId}&app_key=${apiKey}`)
    const json = await res.json()

    // if (json.count === 0) {
    //   console.log("No recipes found")
    // }
    setLoading(false)
    setFoundRecipes(json.hits)
  }

  return (

    <ImageBackground source={require("./media/plates5.jpg")} style={{ width: "100%", height: "100%" }}>
      <Heading>Food inspo     🍽</Heading>
      <Container contentContainerStyle={{ alignItems: "center" }}>
        <Subheading>Discover some new yummie recipes</Subheading>

        <TextSearch onChangeText={text => onChangeText(text)} value={value} placeholder="🔍 Search for recipes" />
        <Pickers>

          <IngredientsPicker>
            <PickerText>Max ingredients: </PickerText>
            <NoOfIngrPicker
              selectedValue={noOfIngr}
              onValueChange={(currentNumber) => setNoOfIngr(currentNumber)}
            >
              <NoOfIngrPicker.Item label="-" value="" />
              <NoOfIngrPicker.Item label="5" value="&ingr=5" />
              <NoOfIngrPicker.Item label="10" value="&ingr=10" />
              <NoOfIngrPicker.Item label="15" value="&ingr=15" />
            </NoOfIngrPicker>
          </IngredientsPicker>

          <MaxTime>
            <PickerText>Max cooking time: </PickerText>
            <MaxTimePicker
              selectedValue={maxMinutes}
              onValueChange={(chosenMinutes) => setMaxMinutes(chosenMinutes)}
            >
              <MaxTimePicker.Item label="-" value="" />
              <MaxTimePicker.Item label="15 min" value="&time=15" />
              <MaxTimePicker.Item label="30 min" value="&time=30" />
              <MaxTimePicker.Item label="1h" value="&time=60" />
              <MaxTimePicker.Item label="1h 30min" value="&time=90" />
            </MaxTimePicker>
          </MaxTime>

        </Pickers>

        <SearchButton onPress={fetchRecipes}>
          <SearchButtonText>Search</SearchButtonText>
        </SearchButton>

        {/*If there are 1 or more recipes */}
        {loading ? <ActivityIndicator size="large" color="#ffffff" /> :
          <FoundRecipesBox>
            {foundRecipes && foundRecipes[0] && (
              <RecipesSection>
                {foundRecipes.map((recipe) => (
                  <RecipeCard key={recipe.recipe.uri}>
                    <Image source={{ uri: recipe.recipe.image }} />
                    <RecipeTextBox>
                      <Text onPress={() => Linking.openURL(recipe.recipe.url)}>{recipe.recipe.label}</Text>
                      <TimeText>{timeConverter(recipe.recipe.totalTime)}</TimeText>
                      <Tags>
                        {recipe.recipe.healthLabels.map((item) => (
                          <TagsText key={item}>{item}</TagsText>
                        ))}
                      </Tags>
                    </RecipeTextBox>
                  </RecipeCard>
                ))}
              </RecipesSection>
            )}
          </FoundRecipesBox>
        }

        {foundRecipes && !foundRecipes[0] && (
          <Container>
            <NoRecipesText>No recipes found, please try something else</NoRecipesText>
          </Container>
        )}
        <Footer>Technigo Bootcamp 2019 - Matilda Arvidsson</Footer>
      </Container>
    </ImageBackground >
  );
}

export default App

