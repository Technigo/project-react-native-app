import React from 'react'
import { Marker } from 'react-native-maps';



export default FavMarkers = (props) => {
  // console.log(props)
  return (
    props.PLACES.map(place => (
      <Marker
        key={place.id}
        coordinate={place.position}
        title={place.title}
        description={place.description}
        pinColor={'#c70d3a'}
      />

    ))
  )
}

