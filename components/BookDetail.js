import React, { useEffect, useState } from 'react'
import { Text, Image } from 'react-native'

const BookDetail = ({isbn}) => {
    const [book, setBook] = useState(null);
    const getBook = () => {
        fetch(
            `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=details&format=json`
        )
            .then((data) => data.json())
            .then((response) => {
                const isbnKey = Object.keys(response);

                const responseDetails = response[isbnKey].details;

                const newBook = {
                    title: responseDetails.title,
                    authors: responseDetails.authors.map((author) => author.name),
                    thumbnail: response[isbnKey].thumbnail_url
                };

                setBook(newBook);
            });
    };

    useEffect(() => {
        getBook();
    }, []);

    return (
        <>
            {
                book ?
                    (
                     <>
                    <Text>{book.title}</Text>
                    <Text>{book.authors}</Text>
                    </>
                    )
                    : null
            }


        </>
    );
}
export default BookDetail