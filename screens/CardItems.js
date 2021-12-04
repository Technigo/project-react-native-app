import React from 'react'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { Card } from 'react-native-elements'

export const CardItemOne = () => {

  return (

    <SafeAreaView >
      <View title='Step on' borderRadius='8' style={[styles.container, styles.shadowProp]}>
          <View style={styles.headingContainer}>
          <View style={styles.icontext}>
              <Ionicons style={styles.icon}
                  name="planet-outline"
              />
              <Text style={styles.paragraph}>
                Set your steps goal for today!
              </Text>
           </View>   
              <View>
                <Ionicons style={styles.chevronicon}
                    name="chevron-forward"
                />
              </View>
          </View>
          <Text style={styles.body}>
            Did you know that for the sake of your health, you need about 15 000 steps per day? 
          </Text>
      </View>
    </SafeAreaView>

  )
}

export const CardItemTwo = () => {

  return (
    <SafeAreaView >
        <View title="Random videos"
          borderRadius='8' style={[styles.container, styles.shadowProp]}>
            <View style={styles.headingContainer}>
              <View style={styles.icontext}>
                  <Ionicons style={styles.icon}
                      name="videocam-outline"
                  />
                  <Text style={styles.paragraph}>
                    Watch some random videos!
                  </Text>
              </View>  
              <View>  
                  <Ionicons style={styles.chevronicon}
                      name="chevron-forward"
                  />
              </View>    
            </View>
            <Text style={styles.body}>
              Films are often seen primarily as a form of entertainment, but it's worth remembering cinema is also an art form.
            </Text>
        </View>
    </SafeAreaView>

  ) 
}

export const CardItemThree = () => {

  return (

      <SafeAreaView>
          <View title="Quotes"
            borderRadius='8'style={[styles.container, styles.shadowProp]}>
              <View style={styles.headingContainer}>
                <View style={styles.icontext}>
                      <Ionicons style={styles.icon}
                          name="heart-half"
                      />
                      <Text style={styles.paragraph}>
                          Who doesn't LOVE quotes?
                      </Text>
                  </View> 
                  <View>   
                      <Ionicons style={styles.chevronicon}
                          name="chevron-forward"
                      />
                  </View>    
              </View>
              <Text style={styles.body}>
                  Get som quotes, and maybe pass it on to someone who needs it?
              </Text>
          </View>
        </SafeAreaView>

  )
}

export const CardItemFour = () => {

  return (

    <SafeAreaView >
      <View title='Quotes' borderRadius='8' style={[styles.container, styles.shadowProp]}>
        <View style={styles.headingContainer}>
          <View style={styles.icontext}>
              <Ionicons style={styles.icon}
                  name="star-outline"
              />
              <Text style={styles.paragraph}>
                  More Quotes, just by shaking!
              </Text>
          </View>
          <View>
              <Ionicons style={styles.chevronicon}
                  name="chevron-forward"
              />
          </View>
        </View>
          <Text style={styles.body}>
              Get som quotes, and maybe pass it on to someone who needs it?
          </Text>
      </View>
    </SafeAreaView>

  )
}

export const CardItemFive = () => {

  return (

    <SafeAreaView >
      <View title='Contact' borderRadius='8' style={[styles.container, styles.shadowProp]}>
        <View style={styles.headingContainer}>
          <View style={styles.icontext}>
              <Ionicons style={styles.icon}
                  name="chatbubbles-outline"
              />
                <Text style={styles.paragraph}>
                    Feel free to contact me!
                </Text>
            </View>
            <View>
                <Ionicons style={styles.chevronicon}
                    name="chevron-forward"
                />
            </View>
            
        </View>
              <Text style={styles.body}>
                  You will find my contact information here. Talk to you soon!
              </Text>
      </View>
    </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    minWidth: 50,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: '300',
    color: '#333',
    textAlign: 'left',
    // minWidth: 280,
  },
  body: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#333',
    textAlign: 'left',
    marginTop: 8,
  },
  icon: {
    fontSize: 32,
    color: '#333',
    marginRight: 16,
  },
  chevronicon: {
    fontSize: 24,
    color: '#333',
    marginTop: 2,
    justifyContent: 'flex-end',
  },
  headingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
  },
  icontext: {
    flexDirection: 'row',
    alignItems: 'center',
},
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});