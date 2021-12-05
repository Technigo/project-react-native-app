import React, { useState, useEffect } from 'react'
import { Modal, StyleSheet, Text, Pressable, View, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { pokemonShake } from '../reducers/pokemonShake'
import { ListOfFavorites } from './ListOfFavorites'

export const PokemonCardModal = () => {
  const dispatch = useDispatch()
  const pokemon = useSelector((store) => store.pokemonShake.pokemon)
  const favorites = useSelector((store) => store.pokemonShake.favorites)
  const [imgUrl, setImgUrl] = useState()
  const [types, setTypes] = useState([])
  const [abilities, setAbilities] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    setImgUrl(pokemon.sprites.other['official-artwork'].front_default) // Compensating for a mistake in the backend ('-' instead of '_')
    setTypes(pokemon.types.map((type) => type.type.name))
    setAbilities(pokemon.abilities.map((ability) => ability.ability.name))
    setModalVisible(true)
  }, [])

  const handleStoreFavorite = () => {
    // console.log(pokemon)
    dispatch(pokemonShake.actions.storeFavorite(pokemon))
  }

  const pokedexPrefix = () => {
    if (pokemon.id < 10) {
      return 'Pokémon #00'
    } else if (pokemon.id > 9 && pokemon.id < 100) {
      return 'Pokémon #0'
    } else {
      return 'Pokémon #'
    }
  }

  const caps = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.nameTypeContainer}>
              <Text style={styles.name}>{caps}</Text>
              <View style={[styles.tagContainer, styles.tagJustifyEnd]}>
                {types.map((type) => (
                  <Text key={type} style={[styles.tag, styles.tagTypes]}>
                    {type}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: `${imgUrl}` }}
                style={{ width: 200, height: 200 }}
              />
            </View>
            <Text style={styles.modalText}>
              {pokedexPrefix()}
              {pokemon.id}
            </Text>
            <Text style={styles.modalText}>
              Height: {pokemon.height * 10} cm Weight: {pokemon.weight / 10} kg
            </Text>
            <View style={[styles.tagContainer, styles.tagJustifyCenter]}>
              {abilities.map((ability) => (
                <Text key={ability} style={[styles.tag, styles.tagAbilities]}>
                  {ability}
                </Text>
              ))}
            </View>
            {/* {favorites.length < 6 && (
              <Pressable
                style={[styles.button, styles.buttonFavorite]}
                onPress={handleStoreFavorite}>
                <Text style={styles.textStyle}>Add to team!</Text>
              </Pressable>
            )}
            {favorites.length === 6 && (
              <Text style={styles.textStyle}>
                You carry six Pokémon already.
              </Text>
            )} */}
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '85%',
    height: 550,
    borderColor: '#fcf095',
    borderWidth: 8,
    backgroundColor: '#f8ad4a'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 23,
    color: '#423c3c'
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  buttonFavorite: {
    backgroundColor: 'red',
    marginBottom: 5
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 3,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#423c3c'
  },
  tagContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  tagJustifyCenter: {
    justifyContent: 'center'
  },
  tagJustifyEnd: {
    justifyContent: 'flex-end'
  },
  tag: {
    padding: 8,
    margin: 5,
    borderRadius: 8,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 11
  },
  tagTypes: {
    backgroundColor: 'lightseagreen'
  },
  tagAbilities: {
    backgroundColor: '#a43637'
  },
  imageContainer: {
    width: '90%',
    backgroundColor: 'whitesmoke',
    padding: 10,
    margin: 20,
    borderColor: '#a43637',
    borderWidth: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4
  },
  nameTypeContainer: {
    width: '90%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
