import { createSlice } from '@reduxjs/toolkit'

const quotes = createSlice({
  name: 'quotes',
  initialState: {
    quote: 'test for quote'
  },
  reducers: {
    setQuote: (store, action) => {
      store.quote = action.payload
    }
  }
})

export const generateQuote = () => {
  return (dispatch) => {
    
      fetch('https://api.quotable.io/random?author=Confucius')
        .then(res => res.json())
        .then(quote => dispatch(quotes.actions.setQuote(quote.content)))

  }
}

export default quotes
