import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'

export const DrawerContent = (props) => {

    const  [isDarkTheme, setIsDarkTheme] = useState(false)

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    return(
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View styles={styles.drawerContent}>
                <View style={styles.jesInfoSection}>
                    <View style={styles.flexView}>
                        <Avatar.Image 
                            source={{
                                uri:'https://i.ibb.co/dcjKgQy/jes.png'
                            }}
                            size={56}
                            />
                        <View style={{marginLeft: 16, flexDirection: 'column'}}>
                            <Title style={styles.title}>Jessi Nygren Walhed</Title>
                            <Caption style={styles.caption}>@hemmahosjessi</Caption>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={styles.paragraph}>1145</Paragraph>
                            <Caption>Following</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={styles.paragraph}>567</Paragraph>
                            <Caption>Followers</Caption>
                        </View>
                    </View>
                </View>

                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({color, size}) => (
                        <Ionicons
                            name="home-outline"
                            size={size}
                            color={color}
                            />
                        )}
                        label='Home'
                        onPress={() => {props.navigation.navigate('Home')}}
                    />
                 
                    <DrawerItem
                        icon={({color, size}) => (
                        <Ionicons
                            name="planet-outline"
                            size={size}
                            color={color}
                            />
                        )}
                        label='Step on'
                        onPress={() => {props.navigation.navigate('Step on')}}
                    />

                    <DrawerItem
                        icon={({color, size}) => (
                        <Ionicons
                            name="heart-half"
                            size={size}
                            color={color}
                            />
                        )}
                        label='Click for Quote'
                        onPress={() => {props.navigation.navigate('Click for Quote')}}
                    /> 

                    <DrawerItem
                        icon={({color, size}) => (
                        <Ionicons
                            name="star-outline"
                            size={size}
                            color={color}
                            />
                        )}
                        label='Shake for Quote'
                        onPress={() => {props.navigation.navigate('Shake for Quote')}}
                    /> 

                    <DrawerItem
                        icon={({color, size}) => (
                        <Ionicons
                            name="videocam-outline"
                            size={size}
                            color={color}
                            />
                        )}
                        label='Random videos'
                        onPress={() => {props.navigation.navigate('Random videos')}}
                    /> 

                    <DrawerItem
                        icon={({color, size}) => (
                        <Ionicons
                            name="chatbubbles-outline"
                            size={size}
                            color={color}
                            />
                        )}
                        label='Contact'
                        onPress={() => {props.navigation.navigate('Contact')}}
                    /> 


            </Drawer.Section>

            <Drawer.Section title='Preferences'>
                <TouchableRipple onPress={() => {toggleTheme()}}>
                    <View style={styles.preference}>
                        <Text>Dark Theme</Text>
                        <View pointerEvents='none'>
                            <Switch value={isDarkTheme}/>
                        </View>
                    </View>
                </TouchableRipple>

            </Drawer.Section>
        </View>
    </DrawerContentScrollView>

        <Drawer.Section style={styles.bottomDrawerSection}>
            
            <DrawerItem
                icon={({color, size}) => (
                    <Icon
                        name="exit-to-app"
                        size={size}
                        color={color}
                        />
            )}
            label='Sign Out'
            onPress={() => {}}
            />

        </Drawer.Section>
    </View>

    )

}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    jesInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'normal',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 24,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 24,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 16,
    },
    drawerSection: {
        marginTop: 24,
    },
    bottomDrawerSection: {
        marginBottom: 16,
        borderTopColor: '#dedede',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    flexView: {
        flexDirection: 'row',
        marginTop: 24,
    },
})

