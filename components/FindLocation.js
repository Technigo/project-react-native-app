import { LOCATION_API } from 'react-native-dotenv'


const FindLocation = async (search) => {

  // const uri = `https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=${GOOGLE_API}`
  const uri = `https://eu1.locationiq.com/v1/search.php?key=${LOCATION_API}&q=${search}&format=json`

  const res = await fetch(uri)
  const json = await res.json()
  return json
}