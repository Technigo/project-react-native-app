import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Text, Button, ScrollView, Image, View } from "react-native";

export const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?maxResults=40&q=tree&key=AIzaSyBDrU2j2bUKpCMfnXn6yYvADzhH0-84xQA"
    )
      .then(res => res.json())
      .then(json => {
        setBooks(json.items);
      });
  }, []);
  return (
    <Container>
      {books.map(book => {
        return (
          <Container key={book.id} >
            <TextContainer >
              <Image
                source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
                style={{ width: 70, height: 100, marginVertical: 30 }}
              ></Image>
              <Container center paddingLeft widthSmaller>
                <Title title marginBottom >
                  "{book.volumeInfo.title}"
                </Title>
                <Title >{book.volumeInfo.authors}</Title>
                <Title>{book.volumeInfo.categories}</Title>
              </Container>
            </TextContainer>
          </Container>
        );
      })}
    </Container>
  );
};

const Container = styled.ScrollView`
  flex-direction: ${props => (props.row ? "row" : "column")};
  background-color: #000;
  height: ${props => (props.full ? "100%" : "auto")};
  align-self: ${props => (props.center ? "center" : "flex-start")};
  padding-left: ${props => (props.paddingLeft ? 20 : 5)};
  width: ${props => (props.widthSmaller ? "80%" : "100%")};
`;



const TextContainer = styled.View`
  flex-direction: row;
`;

const Title = styled.Text`
  font-size: ${props => (props.title ? "15px" : "12px")};
  color: #fff;
  flex: 2;
  
  margin-bottom: ${props => (props.marginBottom ? 8 : 2)};
`;

export default BooksList;
