import React, { useState } from "react";
import { View, ScrollView, ActivityIndicator } from "react-native";
import { FRANS_URL } from "../utils/urls";
import {
  ArtistBox,
  FadeBox,
  BioText,
  ArtistImg,
  TitleText,
  ArtistButton,
  ButtonText,
} from "./Theme";

const Frans = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const getFrans = () => {
    setLoading(true);
    fetch(FRANS_URL)
      .then((res) => res.json())
      .then((data) => {
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
            Frans Hals ca. 1582-1666, joined Haarlem’s artist guild in 1610.
            This enabled him to set up his own studio, and take on pupils and
            assistants, among them Judith Leyster. His younger brother Dirck
            Hals was probably also an apprentice. Hals was famous for his loose
            manner of painting, referred to by his contemporaries as 'the rough
            style'. This style has been both admired and reviled down the
            centuries. Hals tended to concentrate on portraits, and painted some
            superb civic guard pieces. He died in 1666 and was buried at St
            Bavo's, Haarlem’s principal church.
          </BioText>
        </FadeBox>
        {showButton && (
          <ArtistButton onPress={getFrans}>
            <ButtonText>SEE HIS WORK</ButtonText>
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

export default Frans;
