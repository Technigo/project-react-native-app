import React from "react";
import styled from "styled-components/native";
// import { Text } from "react-native";
// import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { Icon } from 'react-native-elements'
// import fullStar from "../assets/star-solid.svg";
// import halfStar from "../assets/placeholder1.png";
// import emptyStar from "../assets/placeholder1.png";

const RatingStar = styled.Text`
  margin: 18px 0;
  font-size: 20px;
  color: #d5a848;
`;

const RatingText = styled.Text`
  margin-left: 10px;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.5);
  color: #d5a848;
`;

const createStarArray = (rating) => {
  let starArray = [];
  if (rating) {
    for (let i = 0; i < 5; i++) {
      if (rating > 0.9) starArray.push("fullStar");
      else if (rating > 0.4) starArray.push("halfStar");
      else starArray.push("emptyStar");
      rating = rating - 1;
    }
  } else {
    starArray = ["emptyStar", "emptyStar", "emptyStar", "emptyStar", "emptyStar"];
  }

  console.log("starArray: " + starArray);
  return starArray;
};

export const StarRating = ({ averageRating, ratingsCount }) => {
  const ratingArray = createStarArray(averageRating);
  // const ratingArray = ["fullStar", "fullStar", "halfStar", "emptyStar", "emptyStar"];

  return (
    <RatingStar>
      {ratingArray.map((star) =>
        star === "fullStar" ? (
          <Icon name='star' solid type="font-awesome-5" color="#d5a848"></Icon>
        ) : star === "halfStar" ? (
          <Icon name='star-half-alt' type="font-awesome-5" color="#d5a848"></Icon>
        ) : (
          <Icon name='star' regular type="font-awesome-5" color="#d5a848"></Icon>
        )
      )}

      {averageRating ? (
        <RatingText>
          {averageRating} avg rating - {ratingsCount} reviews
        </RatingText>
      ) : (
        <RatingText>Not rated</RatingText>
      )}
    </RatingStar>
  );
};
