import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { View, Text, Button, StyleSheet } from 'react-native'

const AddBooks = ({ navigation, route }) => {
    const [hasPermission, setHasPermission] = useState(null)
    const [scanned, setScanned] = useState(false)
    const [text, setText] = useState('Not yet scanned')


    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync()
            setHasPermission(status === 'granted')
        })()
    }
    useEffect(() => {
        ; askForCameraPermission()
    }, [])

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true)
        setText(data)
        console.log(type)
    };

    if (hasPermission === null) {
        return (
            <View>
                <Text>Requesting for camera permission</Text>
            </View>
        )
    }
    if (hasPermission === false) {
        return (
            <View>
                <Text style={{ margin: 10 }}>No access to camera</Text>
                <Button
                    title={'Allow Camera'}
                    onPress={() => askForCameraPermission()}
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={styles.barcodebox}
            />
            <Text style={styles.data}>{text}</Text>
            {scanned && <Button title={'Scan again?'} onPress={()=> setScanned(false)} /> }
        </View>
    )
}

export default AddBooks

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        alignItems: 'center',
    },
    barcodebox: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
    },
    data: {
        fontSize: 20,
        marginTop: 30,
    }
})