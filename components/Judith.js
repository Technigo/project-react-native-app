import React, { useState } from "react";
import { JUDITH_URL } from "../utils/urls";
import { View, ScrollView, ActivityIndicator } from "react-native";
import {
  ArtistBox,
  FadeBox,
  BioText,
  ArtistImg,
  TitleText,
  ArtistButton,
  ButtonText,
} from "./Theme";

const Judith = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const getJudiths = () => {
    setLoading(true);
    fetch(JUDITH_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.artObjects);
      })
      .finally(() => setLoading(false), setShowButton(false));
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#5E3B3E" />;
  }

  return (
    <ArtistBox>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          width: 350,
        }}
      >
        <FadeBox>
          <BioText>
            Judith Jans Leyster 1609-1660 was a Dutch Golden Age painter. She
            painted genre works, portraits and still lifes. Although her work
            was highly regarded by her contemporaries, Leyster and her work
            became almost forgotten after her death. Her entire oeuvre was
            attributed to Frans Hals or to her husband, Jan Miense Molenaer,
            until 1893. It wasn't until the late 19th century that she was
            recognized for her artistic abilities.
          </BioText>
        </FadeBox>
        {showButton && (
          <ArtistButton onPress={getJudiths}>
            <ButtonText>SEE HER WORK</ButtonText>
          </ArtistButton>
        )}
        {data.length > 0 &&
          data
            .filter((item) => item.hasImage === true)
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((art) => (
              <View
                key={art.id}
                style={{
                  padding: 5,
                  margin: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TitleText>{art.title}</TitleText>
                {art?.webImage?.url && (
                  <ArtistImg
                    source={{ uri: `${art?.webImage?.url}` }}
                    style={{ resizeMode: "contain" }}
                  />
                )}
              </View>
            ))}
      </ScrollView>
    </ArtistBox>
  );
};

export default Judith;
