import React, { useRef, useState, useEffect } from "react";
import { View, ScrollView, ActivityIndicator, Animated } from "react-native";
import styled from "styled-components/native";
import { BASE_URL } from "../utils/urls";

const ArtistBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const FadeBox = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      useNativeDriver: true,
      delay: 500,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={{ ...props.style, opacity: fadeAnim }}>
      {props.children}
    </Animated.View>
  );
};

const BioText = styled.Text`
  color: rgba(232, 209, 78, 1);
  padding: 20px;
  font-size: 17px;
`;

const ArtistImg = styled.Image`
  width: 200px;
  height: 200px;
`;

const TitleText = styled.Text`
  font-weight: bold;
  text-align: center;
  width: 80%;
`;

const ArtisButton = styled.TouchableOpacity`
  background: rgba(232, 209, 78, 1);
  padding: 7px;
`;

const ButtonText = styled.Text`
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
`;

const ArtistPage = () => {
  const { artistUrl } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(BASE_URL(artistUrl))
      .then((res) => res.json())
      .then((data) => {
        setData(data.artObjects);
      })
      .finally(() => setLoading(false), setShowButton(false));
  }, [artistUrl]);

  //   const getArtist = () => {
  //     setLoading(true);
  //     fetch(
  //       `https://www.rijksmuseum.nl/api/en/collection?key=qd9menfR&f.involvedMaker=${artistUrl}`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data.artObjects);
  //       })
  //       .finally(() => setLoading(false), setShowButton(false));
  //   };

  if (loading) {
    return <ActivityIndicator size="large" color="#5E3B3E" />;
  }

  return (
    <ArtistBox>
      <FadeBox>
        <BioText>{props.bio}</BioText>
      </FadeBox>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          // width: 300,
        }}
      >
        {showButton && (
          <ArtisButton onPress={getArtist}>
            <ButtonText>SEE ARTWORK</ButtonText>
          </ArtisButton>
        )}
        {data.length > 0 &&
          data.map((art) => (
            <View
              key={art.id}
              style={{
                border: 1,
                border: "solid",
                padding: 5,
                margin: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TitleText>{art.title}</TitleText>
              {art?.webImage?.url && (
                <ArtistImg source={{ uri: `${art?.webImage?.url}` }} />
              )}
            </View>
          ))}
      </ScrollView>
    </ArtistBox>
  );
};

export default ArtistPage;
