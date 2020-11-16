import React from "react";
import styled from "styled-components/native";
import { Icon } from "react-native-elements";

const RatingStars = styled.Text`
  margin: 20px 0 5px 0;
  font-size: 20px;
  text-align: center;
`;

const RatingText = styled.Text`
  font-size: 14px;
  color: #d5a848;
  text-align: center;
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
    starArray = [
      "emptyStar",
      "emptyStar",
      "emptyStar",
      "emptyStar",
      "emptyStar",
    ];
  }
  return starArray;
};

export const StarRating = ({ averageRating, ratingsCount }) => {
  const ratingArray = createStarArray(averageRating);

  return (
    <>
      <RatingStars>
        {ratingArray.map((star, index) =>
          star === "fullStar" ? (
            <Icon
              name="star"
              solid
              type="font-awesome-5"
              color="#d5a848"
              key={index}
            ></Icon>
          ) : star === "halfStar" ? (
            <Icon
              name="star-half-alt"
              type="font-awesome-5"
              color="#d5a848"
              key={index}
            ></Icon>
          ) : (
            <Icon
              name="star"
              regular
              type="font-awesome-5"
              color="#d5a848"
              key={index}
            ></Icon>
          )
        )}
      </RatingStars>
      {averageRating ? (
        <RatingText>
          {averageRating} avg rating - {ratingsCount} reviews
        </RatingText>
      ) : (
        <RatingText>Not rated</RatingText>
      )}
    </>
  );
};
