import React, { useRef } from "react";
import { PixelRatio, Platform } from "react-native";
import * as Sharing from "expo-sharing";
import { captureRef } from "react-native-view-shot";

import { ShareButton, ButtonText } from "../styles/Style";

export default function Share({ containerRef }) {
  let openSharingDialogAsync = async () => {
    const os = Platform.OS;
    if (os !== "android" && os !== "ios") {
      alert("Sharing isn't avaiable on web");
      return;
    }

    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    try {
      const targetPixelCount = 720;
      const pixelRatio = PixelRatio.get(); // The pixel ratio of the device
      // pixels * pixelratio = targetPixelCount, so pixels = targetPixelCount / pixelRatio
      const pixels = targetPixelCount / pixelRatio;

      const uri = await captureRef(containerRef, {
        result: "tmpfile",
        height: pixels,
        width: pixels,
        quality: 1,
        format: "png",
      });
      await Sharing.shareAsync(uri);
    } catch (err) {
      console.log("------- error message -------");
      console.log(err);
    }
  };
  return (
    <ShareButton onPress={openSharingDialogAsync}>
      <ButtonText>Share</ButtonText>
    </ShareButton>
  );
}
