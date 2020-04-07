
import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Image, View, Title } from "react-native";



export const GiphyCard = ({ selectedValue, giphy, setGiphy }) => {



  const animalURL = `https://api.giphy.com/v1/gifs/random?api_key=lByN5BPEwk9MR74phtPh0JpBBBBWyuVH&tag=${selectedValue}&rating=G`


  useEffect(() => {
    fetch(animalURL)
      .then((res) => res.json())
      .then((json) => setGiphy(json.data));
  }, []);

  console.log(giphy)

  return (<Title>{giphy.id}</Title>)

}