import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { ScrollView, Image, View, ActivityIndicator } from "react-native";

import { Input } from "./Input";

export const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   fetch(
  //     "https://www.googleapis.com/books/v1/volumes?maxResults=40&q=jane&key=AIzaSyBDrU2j2bUKpCMfnXn6yYvADzhH0-84xQA"
  //   )
  //     .then(res => res.json())
  //     .then(json => {
  //       setBooks(json.items);
  //     });
  // }, []);

  const addText = () => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/books/v1/volumes?maxResults=40&q=${searchText}&key=AIzaSyBDrU2j2bUKpCMfnXn6yYvADzhH0-84xQA`
    )
      .then(res => res.json())
      .then(json => {
        setBooks(json.items);
        setSearchText("");
        setLoading(false);
      });
  };

  return (
    <ContainerNoScroll>
      <Input
        addText={addText}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      {loading && (
        <ActivityIndicator size="large" color="#00bfff" animating={true} />
      )}
      {!loading && (
        <Container>
          {books.map(book => {
            return (
              <Container key={book.id}>
                <TextContainer>
                  <Image
                    source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
                    style={{ width: 70, height: 100, marginVertical: 30 }}
                  ></Image>
                  <Container center paddingLeft widthSmaller>
                    <Title title marginBottom>
                      "{book.volumeInfo.title}"
                    </Title>
                    <Title>{book.volumeInfo.authors}</Title>
                    <Title>{book.volumeInfo.categories}</Title>
                  </Container>
                  <Icon source={require("../assets/arrow.png")} />
                </TextContainer>
              </Container>
            );
          })}
        </Container>
      )}
    </ContainerNoScroll>
  );
};

const Container = styled.ScrollView`
  flex-direction: ${props => (props.row ? "row" : "column")};
  background-color: #000;
  height: ${props => (props.full ? "100%" : "auto")};
  align-self: ${props => (props.center ? "center" : "flex-start")};
  padding-left: ${props => (props.paddingLeft ? 20 : 0)};
  width: ${props => (props.widthSmaller ? "80%" : "100%")};
`;

const ContainerNoScroll = styled.View`
  flex-direction: ${props => (props.row ? "row" : "column")};
  background-color: #fff;
  height: ${props => (props.full ? "100%" : "auto")};
  align-self: ${props => (props.center ? "center" : "flex-start")};
  padding-left: ${props => (props.paddingLeft ? 20 : 0)};
  width: ${props => (props.widthSmaller ? "80%" : "100%")};
`;

const Icon = styled.Image`
  width: 40;
  height: 40;
  align-self: center;
`;

const TextContainer = styled.View`
  flex-direction: row;
`;

const Title = styled.Text`
  font-size: ${props => (props.title ? "15px" : "12px")};
  color: #fff;
  flex: 2;
  margin-right: ${props => (props.marginRight ? 5 : 0)};
  margin-bottom: ${props => (props.marginBottom ? 8 : 2)};
`;

export default BooksList;
