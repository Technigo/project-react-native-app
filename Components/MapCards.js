import React from "react"
import { HiddenCard } from "./HiddenCard"


export const MapCards = (props) => {
    const { photos, count, setCount, firstGuess, setFirstGuess, setSelectedCard, selectedCard, moves, setMoves,
        solved, setSolved } = props
    return (
        photos.map((photo, index) => {
            return <HiddenCard key={index} photo={photo} photos={photos} count={count} setCount={setCount} firstGuess={firstGuess}
                setFirstGuess={setFirstGuess} id={index.toString()} selectedCard={selectedCard} setSelectedCard={setSelectedCard}
                solved={solved} setSolved={setSolved} moves={moves} setMoves={setMoves} />
        })
    )
}