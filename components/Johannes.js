import React, { useState } from "react";
import { View, ScrollView, ActivityIndicator } from "react-native";
import { JOHANNES_URL } from "../utils/urls";
import {
  ArtistBox,
  FadeBox,
  BioText,
  ArtistImg,
  TitleText,
  ArtistButton,
  ButtonText,
} from "./Theme";

const Johannes = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const getJohannes = () => {
    setLoading(true);
    fetch(JOHANNES_URL)
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
          widht: 350,
        }}
      >
        <FadeBox>
          <BioText>
            Today Johannes Vermeer (1632-1675) is one of the most celebrated
            Dutch 17th century masters. Yet for centuries little importance was
            attached to his name. Works now known as Vermeers were attributed to
            other artists. It was only in the 1870s that he was rediscovered and
            35 paintings identified as his. His later paintings are meticulous
            compositions of interiors featuring one or two figures, usually
            women.
          </BioText>
        </FadeBox>
        {showButton && (
          <ArtistButton onPress={getJohannes}>
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
                  padding: 7,
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

export default Johannes;
