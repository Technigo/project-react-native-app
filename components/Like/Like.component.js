import React, { useState } from "react";
import { Button } from "react-native";

const Like = ({ isLike, onPress }) => {
  return (
    <Button
      title={isLike ? "Dislike" : "Like"}
      onPress={onPress}
      isLike={isLike}
      color={isLike ? "red" : "green"}
    />
  );
};

export default Like;
