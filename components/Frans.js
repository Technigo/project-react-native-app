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
import { FRANS_URL } from "../utils/urls";
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
      <FadeBox>
        <BioText>
          Frans Hals ca. 1582-1666, joined Haarlem’s artist guild in 1610. This
          enabled him to set up his own studio, and take on pupils and
          assistants, among them Judith Leyster. His younger brother Dirck Hals
          was probably also an apprentice. Hals was famous for his loose manner
          of painting, referred to by his contemporaries as 'the rough style'.
          This style has been both admired and reviled down the centuries. Hals
          tended to concentrate on portraits, and painted some superb civic
          guard pieces. He died in 1666 and was buried at St Bavo's, Haarlem’s
          principal church.
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
          <ArtisButton onPress={getFrans}>
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

export default Frans;
