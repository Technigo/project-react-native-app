import React from "react";
import { ImageContainer, Image } from "../styles/Style";

export default function CatImage({ uri }) {
  return (
    <ImageContainer>
      <Image resizeMode="contain" source={{ uri }} />
    </ImageContainer>
  );
}
