import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { useSelector, useDispatch } from "react-redux";
import paintings from "../reducers/paintings";

import * as MailComposer from "expo-mail-composer";
import { Accelerometer } from "expo-sensors";
import { useFonts, Lora_400Regular } from "@expo-google-fonts/lora";

import { LIST_URL, ARTWORK_URL } from "../reuse/urls";

// Styled components
const Container = styled.View`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  height: 30px;
  font-size: 24px;
  color: black;
  margin: 5px auto;
`;

const Painting = styled.Image`
  width: 375px;
  height: 450px;
  margin: 0 auto;
`;

const Information = styled.Text`
  color: black;
`;

const Loader = styled.ActivityIndicator`
  margin: auto auto;
`;

const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  width: 120px;
  height: 30px;
  background-color: #1a3aaa;
  text-align: center;
  border-radius: 10px;
  padding: 5px 0;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: white;
  margin: 0 auto;
`;

const ShakeInfo = styled.Text`
  margin-top: 15px;
`;

const Home = () => {
  //   loading state properties
  const [loading, setLoading] = useState(false);
  const [fontsLoaded] = useFonts({ Lora_400Regular }); //waits for the font loaded

  //state properties for the Accelerometer
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  // REDUX
  const dispatch = useDispatch();
  const store = useSelector((store) => store.paintings);

  //   we fetch for the list of painting when component loads and add a subscription for listening to sensor
  useEffect(() => {
    getPaintingList();
    Accelerometer.setUpdateInterval(1000);
    subscribe();
    return () => unsubscribe();
  }, []);

  // checks if the shake is strong enough
  useEffect(() => {
    if (isShakingEnough(data)) {
      // in artList is a array with id's of all the paintings we select random and provide the id to fetch function
      fetchPainting(
        store.artList.objectIDs[Math.floor(Math.random() * store.artList.total)]
      );
    }
  }, [data]);

  //   function fetches the list and then invokes another fetch using the id
  const getPaintingList = () => {
    setLoading(true);
    fetch(LIST_URL)
      .then((res) => res.json())
      .then((data) => {
        dispatch(paintings.actions.storeList(data));
        const objectNr = data.objectIDs[Math.floor(Math.random() * data.total)];
        return fetchPainting(objectNr);
      })
      .finally(() => setLoading(false));
  };

  //   function that fetches a single piece of art
  const fetchPainting = (id) => {
    setLoading(true);
    fetch(ARTWORK_URL(id))
      .then((data) => data.json())
      .then((json) => {
        dispatch(paintings.actions.storeSingleItem(json));
      })
      .finally(() => setLoading(false));
  };

  //   function that is invoked on the button click and offers to send the info as e-mail as options it takes object
  const directMail = () => {
    MailComposer.composeAsync({
      subject: `${store.singleArt.title}`,
      body: `Here is something to see: ${store.singleArt.primaryImage}`,
    });
  };

  //   subscribes to info from sensor
  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData);
      })
    );
  };

  //   unsubscribes to info from sensor
  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };

  //   -------- WE START TO RENDER THE APP ----
  if (loading || !fontsLoaded) {
    return <Loader size="large" color="#000" />;
  }

  return (
    <Container>
      <Title style={{ fontFamily: "Lora_400Regular" }}>
        One beauty at a the time
      </Title>

      <Painting
        source={{
          uri: `${store.singleArt.primaryImageSmall}`,
        }}
        resizeMode="center"
      />
      <Information>Title: {store.singleArt.title}</Information>
      <Information>Author: {store.singleArt.artistDisplayName}</Information>
      <Button onPress={() => directMail()}>
        <ButtonText>Send</ButtonText>
      </Button>
      <ShakeInfo>Shake your phone to change the picture</ShakeInfo>
    </Container>
  );
};

export default Home;
