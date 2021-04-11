import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const Container = styled.ScrollView`
  background-color: black;
  flex: 1;
`;

const ArtImage = styled.Image`
  width: 100%;
  height: ${(props) => (props.height / props.width) * props.windowWidth};
`;

const TextContainer = styled.View`
  padding: 10px;
`;

const TitleText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: white;
  padding: 10px 0;
`;

const MakerText = styled.Text`
  font-size: 18px;
  color: white;
  padding: 0 0 5px 0;
`;

const TypeText = styled.Text`
  font-size: 15px;
  color: white;
  padding: 0 0 5px 0;
`;

const DescriptionText = styled.Text`
  font-size: 17px;
  color: white
  padding: 20px 20px 20px 0;
`;

const windowWidth = Dimensions.get("window").width;

const ArtDetails = ({ route }) => {
  const DETAIL_URL = `https://www.rijksmuseum.nl/api/en/collection/${route.params.objectNumber}?key=b5cLQ2UN`;
  const [details, setDetails] = useState();

  useEffect(() => {
    fetch(DETAIL_URL)
      .then((response) => response.json())
      .then((json) => setDetails(json.artObject));
  }, []);

  return (
    <>
      {details && (
        <Container>
          <ArtImage
            width={details.webImage.width}
            height={details.webImage.height}
            windowWidth={windowWidth}
            resizeMode="contain"
            source={{
              uri: details.webImage.url,
            }}
          />
          <TextContainer>
            <TitleText>{details.title} ({details.dating.presentingDate})</TitleText>

            {details.scLabelLine.split(", ").map((item, index) => {
              if (index === 0) {
                return <MakerText key={index}>{item}</MakerText>;
              }
              if (index === 1) {
                return <TypeText key={index}>{item}</TypeText>;
              }
              return null;
            })}

            <DescriptionText>{details.label.description}</DescriptionText>
          </TextContainer>
        </Container>
      )}
    </>
  );
};

export default ArtDetails;
