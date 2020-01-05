import React from 'react'

import { Marker } from 'react-native-maps';
import PLACES from '../data/dummy-data'

export default FavPlaces = () => {
  return (
    PLACES.map(place => (
      <Marker
        key={place.id}
        coordinate={place.position}
        title={place.title}
        description={place.description}
        pinColor={'#413c69'}
      />

    ))

  )
}