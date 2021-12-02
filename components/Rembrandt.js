import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Animated,
} from "react-native";
import { REMBRANDT_URL } from "../utils/urls";
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

const Rembrandt = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const getRembrandt = () => {
    setLoading(true);
    fetch(REMBRANDT_URL)
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
      <FadeBox>
        <BioText>
          Rembrandt Harmenszoon van Rijn 1606– 41669 usuallyknown as Rembrandt,
          was a Dutch Golden Age painter, printmaker and draughtsman. An
          innovative and prolific master in three media, he is generally
          considered one of the greatest visual artists in the history of art
          and the most important in Dutch art history. Unlike most Dutch masters
          of the 17th century, Rembrandt's works depict a wide range of style
          and subject matter, from portraits and self-portraits to landscapes,
          genre scenes, allegorical and historical scenes, and biblical and
          mythological themes as well as animal studies.
        </BioText>
      </FadeBox>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          // width: 300,
        }}
      >
        {showButton && (
          <ArtisButton onPress={getRembrandt}>
            <ButtonText>SEE HIS WORK</ButtonText>
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

export default Rembrandt;
