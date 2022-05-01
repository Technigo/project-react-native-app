import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import Game from '../components/Game'

import game from '../reducers/game'

const reducer = {
    game: game.reducer
}

const store = configureStore({ reducer })

const GameScreen = () => {

    return (
        <Provider store={store}>
            <Game />
        </Provider>
    )
}

export default GameScreen