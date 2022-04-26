import React from "react";
import styled from "styled-components/native";

const BookList = styled.View`
    display: flex;
    padding: 20px;
`

const Container = styled.View`
    width: 150px;

`

const BookCover = styled.Image`
    height: 270px;
    width: 200px;
    object-fit: fill;
    border-radius: 10px;
    margin-bottom: 20px;
`

const BookTitle = styled.Text`
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 7px;
    overflow-wrap: break-word;
    width: 200px;
`

const BookAuthor = styled.Text`
    font-size: 12px;
    font-weight: 500;
    color: #666;
`



const Book = ( {book} ) => (
 
    <BookList>
         <BookCover source={{
            uri: book.book_image
        }}
        />
        <Container>
            <BookTitle>{book.title}</BookTitle>
            <BookAuthor>{book.author}</BookAuthor>
        </Container>
    </BookList> 


)

export default Book