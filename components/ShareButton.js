import React from "react";
import { Share } from "react-native";

import { Button, ButtonText } from "./StyledCollection";

const onShare = async url => {
  try {
    await Share.share({
      url
    });
  } catch (error) {
    alert(error.message);
  }
};

const ShareButton = ({ image_url }) => (
  <Button onPress={() => onShare(image_url)} title="Share">
    <ButtonText>Share</ButtonText>
  </Button>
);

export default ShareButton;
