import React from 'react'
import { Marker } from 'react-native-maps'

export default FavMarkers = (props) => {
  return (
    props.PLACES.map(place => (
      <Marker
        key={place.id}
        coordinate={place.position}
        title={place.title}
        description={place.description + "\n" + place.location.street}
        pinColor={'#c70d3a'}
      />

    ))
  )
}

