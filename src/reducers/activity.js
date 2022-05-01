import { createSlice } from "@reduxjs/toolkit";


const activity = createSlice({
    name: 'activity',
    initialState: {
        items: null,
    },
    reducers: {
        setActivity: (store, action) => {
            store.items = action.payload;
            console.log(store.items)
        }
    }
})

export default activity

export const fetchActivity = () => {
    return (dispatch, getState) => {
        fetch('https://open-api.myhelsinki.fi/v1/places/')
		.then(res => res.json())
		.then(data => dispatch.activity.actions.setActivity(data))
    }
}