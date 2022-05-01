import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  currentPosition: null,
  loading: false,
}

const game = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setCurrentPosition: (store, action) => {
      store.currentPosition = action.payload
    },
    setLoading: (store, action) => {
      store.loading = action.payload
    },
    restartGame: () => {
      return initialState
    }
  }
})

export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoading(true))

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.username })
    }
    fetch(`https://labyrinth-technigo.herokuapp.com/start`, options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setCurrentPosition(data))
      })
      .finally(() => dispatch(game.actions.setLoading(false)))
  }
}

export const getNextPosition = (action, userName) => {

  return (dispatch) => {
    dispatch(game.actions.setLoading(true))
    fetch(`https://labyrinth-technigo.herokuapp.com/action`, {
      method: 'POST',
      headers: { 'content-type': 'application/JSON' },
      body: JSON.stringify({
        username: userName,
        type: "move",
        direction: action
      })
    })
      .then(response => response.json())
      .then(data => {
        dispatch(game.actions.setLoading(false))
        dispatch(game.actions.setCurrentPosition(data))
      })
  }
}

export default game
