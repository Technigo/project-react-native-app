import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;

const App = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState(0);
  const [food, setFood] = useState({});
  const [section, setSection] = useState(0);
  const [scans, setScans] = useState(0)

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    console.log('barcodescanned')
    setData(0);
    setScanned(true);
    setScans(scans + 1)
    setData(data);
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  useEffect(() => {
    if (data !== 0) {
      console.log('fetch')
      setFood({})
      fetch(`https://world.openfoodfacts.org/api/v0/product/${data}`)
        .then((res) => res.json())
        .then((nutrient) => {
          if(nutrient.product) setFood(nutrient.product);
          else {alert('Product Not Found!')
          //setScanned(false)
        }
          //alert(`Food ${food.product_name} has been found!`)
          // alert(`Food ${nutrient.product.product_name} has been found!`)
          //setSection(2)
        });
    }
  }, [scans]);

  useEffect(() => {
    if (food.product_name) {
      //alert(`Food ${food.product_name} has been found!`);
      console.log('test')
      setSection(2);
    }
  }, [food]);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      {section === 0 && (
        <Container>
          <Title>Simple Barcode Scanner App</Title>
          <Button title={"Tap to scan"} onPress={() => setSection(1)} />
        </Container>
      )}
      {section === 1 && (
        <Container>
          {/* <Title>This is your cool app! With a small little update</Title> */}
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          {(scanned && !food.product) && (
            <Button
              title={"Tap to Scan Again"}
              onPress={() => setScanned(false)}
            />
          )}
        </Container>
      )}
      {section === 2 && (
        <Container>
          <Title>Food {food.product_name} has been found!</Title>
          <Button
            title={"Tap to scan again"}
            onPress={() => {
              setScanned(false);
              setSection(1);
            }}
          />
          <Title>💅💅💅</Title>
        </Container>
      )}
    </>
  );
};

export default App;
