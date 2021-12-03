import React, { useRef, useState } from "react";
import { JUDITH_URL } from "../utils/urls";
import { View, ScrollView, ActivityIndicator, Animated } from "react-native";
import styled from "styled-components/native";

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
  width: 250px;
  height: 250px;
`;

const TitleText = styled.Text`
  color: rgba(232, 209, 78, 1);
  font-style: italic;
  font-weight: bold;
  text-align: center;
  width: 350px;
  padding: 10px;
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
          <ArtisButton onPress={getJudiths}>
            <ButtonText>SEE HER WORK</ButtonText>
          </ArtisButton>
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
