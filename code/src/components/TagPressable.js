import React from "react";
import { Pressable, Text } from "react-native";

const TagPressable = ({ index, isSelected, setLoading, setSelectedId, getRecipes, tag }) => {
  return (
    <Pressable
      onPress={() => {
        setLoading(true);
        setSelectedId(index);
        getRecipes(tag.url);
      }}
      style={{
        margin: 4,
        padding: 8,
        backgroundColor: isSelected ? "rgb(6,41,97)" : "rgb(208,223,236)",
      }}
    >
      <Text
        style={{
          color: isSelected ? "white" : "rgb(6,41,97)",
          fontFamily: "Verdana",
        }}
      >
        {tag.title}
      </Text>
    </Pressable>
  );
};

export default TagPressable;
