import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import styled from 'styled-components/native';

export const PackList = () => {
  return (
    <Container>
      <Emojis> 🌲 🌲 🌲 </Emojis>
      <InnerContainer>
        <Text>
          <Title>Packlist</Title>
          {'\n'}
          <Title2>-For one day in hte Trails</Title2>
        </Text>

        <Unorderedlist>
          <Text>
            Tunn skaljacka med en varm tröja under, snarare än en tjock jacka.
          </Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text>
            Strumpor och underställ i syntet/ull. Ull är varmare, men syntet
            torkar snabbare.
          </Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text>Regnkläder. De skyddar även mot vind.</Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text>
            Väl ingångna vandringsskor eller trailskor, valda efter årstid och
            terräng.
          </Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text>
            Lätta, luftiga långbyxor istället för shorts. De skyddar mot mygg,
            rispor och skrapsår.
          </Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text>Vantar och mössa för kalla kvällar.</Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text>
            Extra underställ och strumpor. Men ta med så lite som möjligt och
            tvätta.
          </Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text>
            Solkräm, solstift, solglasögon, keps/hatt. Solen tar även vid
            molnigt väder.
          </Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text>Myggmedel.</Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text>Matvaror och dryck. Gärna termos, kåsa och spork.</Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text>Plastpåse för skräp.</Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text>Karta och kompass.</Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text>
            Toalettpapper + liten trädgårdsspade för att gräva en grop.
          </Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text>Sitt- eller liggunderlag.</Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text>Fickkniv, tändstickor/tändstål.</Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text>Reseapotek med första förband, inklusive skavsårsplåster.</Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text>Ficklampa och visselpipa.</Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text>Eventuellt kikare och kamera.</Text>
        </Unorderedlist>
      </InnerContainer>
    </Container>
  );
};

const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  color: #1e5f18;
`;

const Title2 = styled.Text`
  font-size: 15px;
  text-align: center;
  margin-bottom: 10px;

  color: palevioletred;
`;

const Container = styled.View`
  flex: 1;
  background-color: #d5e9d3;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const InnerContainer = styled.View`
  border: 3px dotted palevioletred;
  padding: 30px;
`;

const Emojis = styled.Text`
  text-align: center;
  font-size: 30px;
`;
