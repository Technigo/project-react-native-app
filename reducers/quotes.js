import { createSlice } from "@reduxjs/toolkit";



export const quotes = createSlice({
    name:'quotes',
    initialState: {
        items: [
        ],
    },
    reducers: {
        addQuote:(store, action) => {
            const newQuote = {
                id: action.payload[0],
                quote: action.payload[1],
                author: action.payload[2]

            }
            store.items = [newQuote, ...store.items]
        },
        deleteQuote:(store, action) =>{
            const decreasedItems = store.items.filter(item => item.id !== action.payload)
            store.items = decreasedItems
        }
    }
})
    

