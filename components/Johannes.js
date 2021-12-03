import React, { useRef, useState } from "react";
import { View, ScrollView, ActivityIndicator, Animated } from "react-native";
import { JOHANNES_URL } from "../utils/urls";
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
          <ArtisButton onPress={getJohannes}>
            <ButtonText>SEE HIS WORK</ButtonText>
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
