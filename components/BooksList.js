import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Text, Button, ScrollView, Image } from "react-native";

export const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?maxResults=40&q=sun&key=AIzaSyBDrU2j2bUKpCMfnXn6yYvADzhH0-84xQA"
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
          <Container key={book.id}>
            <Image
              source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
              style={{ width: 170, height: 250, marginVertical: 30 }}
            ></Image>
            <Title>{book.volumeInfo.title}</Title>
            <Title>{book.volumeInfo.authors}</Title>
            <Title>{book.volumeInfo.categories}</Title>
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
  align-self: center;
`;

const Title = styled.Text`
  font-size: 14px;
  color: #fff;

  width: 100%;
  margin: 0 auto;

  height: 20;
`;

export default BooksList;
