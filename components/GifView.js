import React, { useState } from "react";
import { Image, Clipboard, Dimensions } from "react-native";
import styled from "styled-components/native";

import ShareButton from "./ShareButton";

import { Button, ButtonText, ImageWrap } from "./StyledCollection";

const window = Dimensions.get("window");

const GifView = ({ image_url, tag }) => {
  const [copied, setCopied] = useState(false);

  return (
    <>
      <TagText>So, you're feeling {tag} today</TagText>
      <ImageWrap
        height={`${Math.round((1 - window.width / window.height - 0.1) * 100)}%`}
      >
        <Image
          style={{
            width: "100%",
            height: `100%`,
            resizeMode: "contain"
          }}
          source={{
            uri: image_url
          }}
        />
      </ImageWrap>
      <BottomButtons>
        <ShareButton image_url={image_url} />
        <Button
          onPress={() => {
            Clipboard.setString(image_url);
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 3000);
          }}
          active={copied}
        >
          <ButtonText>{copied ? "Copied" : "Copy"}</ButtonText>
        </Button>
      </BottomButtons>
    </>
  );
};

const TagText = styled.Text`
  color: white;
  font-size: 24px;
  padding: 20px;
  width: 100%;
  margin: 0 0 20px;
`;

const BottomButtons = styled.View`
  z-index: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  margin-top: 20px;
`;

export default GifView;
