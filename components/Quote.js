import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Image, ActivityIndicator } from "react-native";
import { Accelerometer } from "expo-sensors";

export const Quote = () => {
  // setting movement to 0
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [officeQuote, setOfficeQuote] = useState({}); // empty object with no quote
  const [subscription, setSubscription] = useState(null); // for the accelerator
  const [loading, setLoading] = useState(false); // sets loading to false

  useEffect(() => {
    // generates a quote
    generateQuote();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(500);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // determines if the shaking is enough to update the quote
    if (isShakingEnough(data)) {
      generateQuote();
    }
  }, [data]);

  const subscribe = () => {
    // a listener that listens for a shake
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData);
      })
    );
  };

  const unsubscribe = () => {
    // if there is no shake nothing happens
    subscription && subscription.remove();
    setSubscription(null);
  };

  const generateQuote = () => {
    // fetches the quote from the API
    setLoading(true);
    fetch("https://www.officeapi.dev/api/quotes/random/")
      .then((res) => res.json())
      .then((data) => setOfficeQuote(data.data))
      .finally(() => setLoading(false));
  };

  const isShakingEnough = (data) => {
    // does a mathematical calculation to see if the shaking is big enough
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);

    return totalForce > 2;
  };

  const { x, y, z } = data;

  // fetching the images from my assets folder and sets them to variables
  const andy = require("../assets/Andy.png");
  const angela = require("../assets/Angela.png");
  const creed = require("../assets/Creed.png");
  const erin = require("../assets/Erin.png");
  const gabe = require("../assets/Gabe.png");
  const jim = require("../assets/Jim.png");
  const kelly = require("../assets/Kelly.png");
  const kevin = require("../assets/Kevin.png");
  const meredith = require("../assets/Meredith.png");
  const michael = require("../assets/Michael.png");
  const oscar = require("../assets/Oscar.png");
  const pam = require("../assets/Pam.png");
  const phyllis = require("../assets/Phyllis.png");
  const ryan = require("../assets/Ryan.png");
  const stanley = require("../assets/Stanley.png");
  const toby = require("../assets/Toby.png");

  if (loading) {
    return <ActivityIndicator />; // if loading is true this shows
  }

  //conditional rendering that varies depending on which character is saying the quote
    if (officeQuote?.character?.firstname === "Andy") {
      return (
        <MainContainer>
          <Image style={{ width: 400, height: 400 }} source={andy} />
          <QuoteContainer>
            <QuoteText>"{officeQuote.content}"</QuoteText>
            <Character>- {officeQuote?.character?.firstname}</Character>
          </QuoteContainer>
          <Title>Shake me again!</Title>
        </MainContainer>
      );
    } else if (officeQuote?.character?.firstname === "Angela") {
      return (
        <MainContainer>
          <Image style={{ width: 400, height: 400 }} source={angela} />
          <QuoteContainer>
            <QuoteText>"{officeQuote.content}"</QuoteText>
            <Character>- {officeQuote.character.firstname + officeQuote.character.lastname}</Character>
          </QuoteContainer>
          <Title>Shake me again!</Title>
        </MainContainer>
      );
    } else if (officeQuote?.character?.firstname === "Creed") {
      return (
        <MainContainer>
          <Image style={{ width: 400, height: 400 }} source={creed} />
          <QuoteContainer>
            <QuoteText>"{officeQuote.content}"</QuoteText>
            <Character>- {officeQuote.character.firstname + " " + officeQuote.character.lastname}</Character>
          </QuoteContainer>
          <Title>Shake me again!</Title>
        </MainContainer>
      );
    } else if (officeQuote?.character?.firstname === "Erin") {
      return (
        <MainContainer>
          <Image style={{ width: 400, height: 400 }} source={erin} />
          <QuoteContainer>
            <QuoteText>"{officeQuote.content}"</QuoteText>
            <Character>- {officeQuote.character.firstname + " " + officeQuote.character.lastname}</Character>
          </QuoteContainer>
          <Title>Shake me again!</Title>
        </MainContainer>
      );
    } else if (officeQuote?.character?.firstname === "Gabe") {
      return (
        <MainContainer>
          <Image style={{ width: 400, height: 400 }} source={gabe} />
          <QuoteContainer>
            <QuoteText>"{officeQuote.content}"</QuoteText>
            <Character>- {officeQuote.character.firstname + " " + officeQuote.character.lastname}</Character>
          </QuoteContainer>
          <Title>Shake me again!</Title>
        </MainContainer>
      );
    } else if (officeQuote?.character?.firstname === "Jim") {
      return (
        <MainContainer>
          <Image style={{ width: 400, height: 400 }} source={jim} />
          <QuoteContainer>
            <QuoteText>"{officeQuote.content}"</QuoteText>
            <Character>- {officeQuote.character.firstname + " " + officeQuote.character.lastname}</Character>
          </QuoteContainer>
          <Title>Shake me again!</Title>
        </MainContainer>
      );
    } else if (officeQuote?.character?.firstname === "Kelly") {
      return (
        <MainContainer>
          <Image style={{ width: 400, height: 400 }} source={kelly} />
          <QuoteContainer>
            <QuoteText>"{officeQuote.content}"</QuoteText>
            <Character>- {officeQuote.character.firstname + " " + officeQuote.character.lastname}</Character>
          </QuoteContainer>
          <Title>Shake me again!</Title>
        </MainContainer>
      );
    } else if (officeQuote?.character?.firstname === "Kevin") {
      return (
        <MainContainer>
          <Image style={{ width: 400, height: 400 }} source={kevin} />
          <QuoteContainer>
            <QuoteText>"{officeQuote.content}"</QuoteText>
            <Character>- {officeQuote.character.firstname + " " + officeQuote.character.lastname}</Character>
          </QuoteContainer>
          <Title>Shake me again!</Title>
        </MainContainer>
      );
    } else if (officeQuote?.character?.firstname === "Meredith") {
      return (
        <MainContainer>
          <Image style={{ width: 400, height: 400 }} source={meredith} />
          <QuoteContainer>
            <QuoteText>"{officeQuote.content}"</QuoteText>
            <Character>- {officeQuote.character.firstname + " " + officeQuote.character.lastname}</Character>
          </QuoteContainer>
          <Title>Shake me again!</Title>
        </MainContainer>
      );
    } else if (officeQuote?.character?.firstname === "Michael") {
      return (
        <MainContainer>
          <Image style={{ width: 400, height: 400 }} source={michael} />
          <QuoteContainer>
            <QuoteText>"{officeQuote.content}"</QuoteText>
            <Character>- {officeQuote.character.firstname + " " + officeQuote.character.lastname}</Character>
          </QuoteContainer>
          <Title>Shake me again!</Title>
        </MainContainer>
      );
    } else if (officeQuote?.character?.firstname === "Oscar") {
      return (
        <MainContainer>
          <Image style={{ width: 400, height: 400 }} source={oscar} />
          <QuoteContainer>
            <QuoteText>"{officeQuote.content}"</QuoteText>
            <Character>- {officeQuote.character.firstname + " " + officeQuote.character.lastname}</Character>
          </QuoteContainer>
          <Title>Shake me again!</Title>
        </MainContainer>
      );
    } else if (officeQuote?.character?.firstname === "Pam") {
      return (
        <MainContainer>
          <Image style={{ width: 400, height: 400 }} source={pam} />
          <QuoteContainer>
            <QuoteText>"{officeQuote.content}"</QuoteText>
            <Character>- {officeQuote.character.firstname + " " + officeQuote.character.lastname}</Character>
          </QuoteContainer>
          <Title>Shake me again!</Title>
        </MainContainer>
      );
    } else if (officeQuote?.character?.firstname === "Phyllis") {
      return (
        <MainContainer>
          <Image style={{ width: 400, height: 400 }} source={phyllis} />
          <QuoteContainer>
            <QuoteText>"{officeQuote.content}"</QuoteText>
            <Character>- {officeQuote.character.firstname + " " + officeQuote.character.lastname}</Character>
          </QuoteContainer>
          <Title>Shake me again!</Title>
        </MainContainer>
      );
    } else if (officeQuote?.character?.firstname === "Ryan") {
      return (
        <MainContainer>
          <Image style={{ width: 400, height: 400 }} source={ryan} />
          <QuoteContainer>
            <QuoteText>"{officeQuote.content}"</QuoteText>
            <Character>- {officeQuote.character.firstname + " " + officeQuote.character.lastname}</Character>
          </QuoteContainer>
          <Title>Shake me again!</Title>
        </MainContainer>
      );
    } else if (officeQuote?.character?.firstname === "Stanley") {
      return (
        <MainContainer>
          <Image style={{ width: 400, height: 400 }} source={stanley} />
          <QuoteContainer>
            <QuoteText>"{officeQuote.content}"</QuoteText>
            <Character>- {officeQuote.character.firstname + " " + officeQuote.character.lastname}</Character>
          </QuoteContainer>
          <Title>Shake me again!</Title>
        </MainContainer>
      );
      } else if (officeQuote?.character?.firstname === "Toby") {
        return (
          <MainContainer>
            <Image style={{ width: 400, height: 400 }} source={toby} />
            <QuoteContainer>
              <QuoteText>"{officeQuote.content}"</QuoteText>
              <Character>- {officeQuote.character.firstname + " " + officeQuote.character.lastname}</Character>
            </QuoteContainer>
            <Title>Shake me again!</Title>
          </MainContainer>
        );
    } else {
      return (
        <MainContainer>
          <Image styles={{ width: 400, height: 400 }} source={michael} />
          <Title>Shake me!</Title>
        </MainContainer>
      );
    }
};

// my styled components
const MainContainer = styled.View`
  width: 100%;
`;

const Title = styled.Text`
  font-size: 24px;
  margin-top: 20px;
  text-align: center;
  font-weight: 700;
`;

const QuoteText = styled.Text`
  text-align: center;
  margin: 0 auto;
  min-height: 40px;
  margin: 10px 20px;
`;

const Character = styled.Text`
  font-size: 12px;
  font-style: italic;
`;

const QuoteContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
