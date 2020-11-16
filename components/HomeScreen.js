import React, { useState } from "react";
import { Button, Keyboard } from "react-native";
import styled from "styled-components/native";
import homeBackground from "../assets/background.jpg";

const Separator = styled.View`
  margin: 16px 0;
`;

const Group = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const HomeContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px;
`;

const HeaderText = styled.Text`
  font-size: 26px;
  color: #fff;
  text-align: center;
`;

const BodyText = styled.Text`
  width: 80%;
  max-width: 400px;
  background: rgba(0, 0, 0, 0.5);
  font-size: 15px;
  color: #fff;
  margin-bottom: 5px;
`;

const BookInput = styled.TextInput`
  height: 40px;
  width: 80%;
  max-width: 400px;
  background: #fff;
  padding: 0 5px;
`;

export const HomeScreen = ({ navigation }) => {
  const [inputValue, setInputValue] = useState("");

  const navigateToBook = () => {
    Keyboard.dismiss();
    setInputValue("");
    navigation.navigate("ShowBook", {
      data: inputValue,
    });
  };

  const handleKeypress = (e) => {
    // triggers by pressing the enter key on keyboead
    if (e.keyCode === 13 || e.nativeEvent.key === "Enter") {
      navigateToBook();
    }
  };

  const _onSubmit = () => {
    // triggers by submit on phone
    navigateToBook();
  };

  return (
    <HomeContainer source={homeBackground}>
      <HeaderText>What will I read today?</HeaderText>
      <Separator />
      <BodyText>
        Type in something that interests you and the book finder will recommend
        you a book.
      </BodyText>
      <Separator />
      <Group>
        <BookInput
          value={inputValue}
          placeholder="Type a keyword, e.g. fiction or dogs"
          onChangeText={(text) => setInputValue(text)}
          onKeyPress={handleKeypress}
          onSubmitEditing={_onSubmit}
        />
        <Button color="#43464B" title="Find" onPress={navigateToBook}></Button>
      </Group>
    </HomeContainer>
  );
};
