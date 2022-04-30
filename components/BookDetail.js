import React from 'react'
import {  Linking, Button } from 'react-native'
import {Container, ScreenWrapper, ButtonWrapper, ButtonImg}from './Styles'

const BookDetail = ({ isbn }) => {

    //I have another version of this app using openlibrary API. The only limit is that they only have English books!
    //To make the scanning smooth, I remove the api for now
    // const [book, setBook] = useState(null);
    // const getBook = () => {
    //     fetch(
    //         `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=details&format=json`
    //     )
    //         .then((data) => data.json())
    //         .then((response) => {
    //             const isbnKey = Object.keys(response);

    //             const responseDetails = response[isbnKey].details;

    //             const newBook = {
    //                 title: responseDetails.title,
    //                 authors: responseDetails.authors.map((author) => author.name),
    //                 thumbnail: response[isbnKey].thumbnail_url
    //             };

    //             setBook(newBook);
    //         })
    // } 

    // useEffect(() => {
    //     getBook();
    // }, []);

    // return (
    //     <>
    //         {
    //             book ?
    //                 (
    //                     <>
    //                         <Text>{book.title}</Text>
    //                         <Text>{book.authors}</Text>
    //                         <Text style={{ color: 'blue' }}
    //                             onPress={() => Linking.openURL(`https://www.bookdepository.com/search/advanced/${isbn}`)}>
    //                             Buy this book
    //                         </Text>
    //                     </>
    //                 )
    //                 : null
    //         }


    //     </>
    // );
    return (
        <Container>
  <ScreenWrapper>
  <ButtonWrapper>
  <ButtonImg source={require('../assets/images/add-books.jpg')} />
  <Button 
   title="TAB HERE TO VIEW DETAILS"
   color="black"
   onPress={() => Linking.openURL(`https://www.bookdepository.com/search/advanced/${isbn}`)}
   accessibilityLabel="view details button"
   />
  </ButtonWrapper>
  </ScreenWrapper>
</Container>
    )

}
export default BookDetail
