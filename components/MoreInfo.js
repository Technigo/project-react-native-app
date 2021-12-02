import React from "react";
import { useSelector } from "react-redux";
import { View, Text, Button } from "react-native";
import * as WebBrowser from "expo-web-browser";

const MoreInfo = () => {
  const store = useSelector((store) => store.paintings.singleArt);

  const handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync(`${store.objectURL}`);
  };

  return (
    <View>
      <Text>Title: {store.title}</Text>
      <Text>Author: {store.artistDisplayName}</Text>
      <Text>Year: {store.objectEndDate}</Text>
      <Text>Authors bio: {store.artistDisplayBio}</Text>
      <Text>Medium: {store.medium}</Text>
      <Button
        title="More info from MET"
        onPress={() => handleOpenWithWebBrowser()}
      />
    </View>
  );
};

export default MoreInfo;
