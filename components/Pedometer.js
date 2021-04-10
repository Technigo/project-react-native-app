import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';
import styled from 'styled-components/native';

const Container = styled.View`
    position: absolute;
    bottom: 100px;
`;

const BaseText = styled.Text`
    color: white;
    font-family: 'Courier New';
`;

const Steps = styled(BaseText)`
    color: white;
    font-size: 20px;
    background-color: #000;
`;

export default class App extends React.Component {
    state = {
        isPedometerAvailable: 'checking',
        pastStepCount: 0,
        currentStepCount: 0,
    };

    componentDidMount() {
        this._subscribe();
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps,
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result),
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: 'Could not get isPedometerAvailable: ' + error,
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then (
        result => {
            this.setState({ pastStepCount: result.steps });
        },
        error => {
            this.setState({
                pastStepCount: 'Could not get stepCount: ' + error,
            });
        });
    };

    _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subscription = null;
    };

    render() {

        

        return (
            <Container>
                {/* <BaseText>Pedometer.isAvailableAsync(): {this.state.isPedometerAvailable}</BaseText>
                <BaseText>Steps taken in the last 24 hours: {this.state.pastStepCount}</BaseText>
                <BaseText>Walk! And watch this go up: {this.state.currentStepCount}</BaseText> */}
            </Container>
        );
    }
}