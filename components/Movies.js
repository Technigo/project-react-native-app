const List = ({ movies }) => {
  return (
    <View>
      {movies.map((movie) => (
     <>
        <QuoteText>Quote: {quote.title}</QuoteText>
		    	<BurgerImage source={{uri: `${quote.image}` }} />
			      <Text>{quote.description}</Text>
      </>
      ))}
  </View>
  )
}