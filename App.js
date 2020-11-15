import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import {
  StyleSheet,
  Button,
  Text,
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
  //state for camera permission
  const [hasPermission, setHasPermission] = useState(null);
  //state for determining if camera has scanned barcode
  const [scanned, setScanned] = useState(false);
  //storing the barcode information
  const [data, setData] = useState(0);
  //storing the fetch data
  const [food, setFood] = useState({});
  //section in app
  const [section, setSection] = useState(0);
  //storing number of scans made. Workaround for getting the "rescan" to work. When trying this 
  //with just setting scanned to false after each fetch I got infinite loop
  const [scans, setScans] = useState(0)

  //function that comes with the barcodescanner to get the data from the scanner
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  //event handler for barcodescanner
  const handleBarCodeScanned = ({ data }) => {
    setData(0);
    setScanned(true);
    setScans(scans + 1)
    setData(data);
  };

  //fetching data from openfoodfacts. If no matching data to barcode - ask user to rescan
  useEffect(() => {
    if (data !== 0) {
      setFood({})
      fetch(`https://world.openfoodfacts.org/api/v0/product/${data}`)
        .then((res) => res.json())
        .then((nutrient) => {
          if(nutrient.product) setFood(nutrient.product);
          else alert('Product Not Found!')
        });
    }
  }, [scans]);

  useEffect(() => {
    if (food.product_name) setSection(2);
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
        </Container>
      )}
    </>
  );
};

export default App;
