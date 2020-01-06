import React, { useState } from "react";
import styled from "styled-components/native";
import { Image, ActivityIndicator } from "react-native";

import { Input } from "../components/Input";
import { Header } from "../components/Header";

export const HomeScreen = ({ navigation: { navigate } }) => {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  const addText = () => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/books/v1/volumes?maxResults=40&q=${searchText}`
    )
      .then(res => res.json())
      .then(json => {
        setBooks(json.items);
        setSearchText("");
        setLoading(false);
      })
      .catch(() => {
        console.log(error.code);
      });
  };

  return (
    <ContainerNoScroll>
      <Header title="BOOKIFY" />
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
                    source={{
                      uri:
                        book.volumeInfo.imageLinks === undefined
                          ? null
                          : `${book.volumeInfo.imageLinks.thumbnail}`
                    }}
                    style={{
                      width: 70,
                      height: 100,
                      marginVertical: 30,
                      marginLeft: 5
                    }}
                  ></Image>
                  <Container center paddingLeft widthSmaller>
                    <Title title marginBottom>
                      "{book.volumeInfo.title}"
                    </Title>
                    <Title>
                      {book.volumeInfo.authors
                        ? book.volumeInfo.authors.join(", ")
                        : "Not provided"}
                    </Title>
                    <Title>{book.volumeInfo.categories}</Title>
                  </Container>
                  <ButtonArrow
                    onPress={() =>
                      navigate("MoreInfo", {
                        title: book.volumeInfo.title,
                        authors: book.volumeInfo.authors
                          ? book.volumeInfo.authors.join(", ")
                          : "Not provided",
                        categories: book.volumeInfo.categories,
                        image: {
                          uri:
                            book.volumeInfo.imageLinks === undefined
                              ? null
                              : `${book.volumeInfo.imageLinks.thumbnail}`
                        },
                        description: book.volumeInfo.description,
                        price:
                          book.saleInfo.listPrice === undefined
                            ? "Not available"
                            : `${book.saleInfo.listPrice.amount}`,
                        currency:
                          book.saleInfo.listPrice === undefined
                            ? null
                            : `${book.saleInfo.listPrice.currencyCode}`
                      })
                    }
                  >
                    <Icon source={require("../assets/arrow.png")} />
                  </ButtonArrow>
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
  background-color: #000;
  height: auto;
  align-self: ${props => (props.center ? "center" : "flex-start")};
  padding-left: ${props => (props.paddingLeft ? 20 : 0)};
  width: ${props => (props.widthSmaller ? "80%" : "100%")};
`;

const ContainerNoScroll = styled.View`
  background-color: #000;
  height: 100%;
  align-self: flex-start;
  width: 100%;
`;

const Icon = styled.Image`
  width: 40;
  height: 40;
  align-self: center;
  padding-right: 5;
`;

const ButtonArrow = styled.TouchableOpacity`
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
  margin-bottom: 2;
`;

export default HomeScreen;
