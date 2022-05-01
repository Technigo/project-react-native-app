export const RandomCatMemeAPI = ({ memeAction, memeText, memeColor }) => {
  return `https://cataas.com/cat/${memeAction}/says/${memeText}?s=40&c=${memeColor}&json=true`
}

export const RandomCatGifAPI = 'https://api.thecatapi.com/v1/images/search?mime_types=gif'

export const RandomUglyCatAPI = () => {
  const uglyCatAPIArray = [
    'https://api.thecatapi.com/v1/images/search?breed_ids=sphy',
    'https://api.thecatapi.com/v1/images/search?breed_ids=crex',
    'https://api.thecatapi.com/v1/images/search?breed_ids=drex',
    'https://api.thecatapi.com/v1/images/search?breed_ids=orie',
    'https://api.thecatapi.com/v1/images/search?breed_ids=dons',
  ]

  return uglyCatAPIArray[Math.floor(Math.random() * (uglyCatAPIArray.length))]
}

export const RandomCuteCatAPI = () => {
  const cuteCatAPIArray = [
    'https://api.thecatapi.com/v1/images/search?breed_ids=mcoo',
    'https://api.thecatapi.com/v1/images/search?breed_ids=sibe',
    'https://api.thecatapi.com/v1/images/search?breed_ids=norw',
    'https://api.thecatapi.com/v1/images/search?breed_ids=ragd',
    'https://api.thecatapi.com/v1/images/search?breed_ids=birm',
  ]

  return cuteCatAPIArray[Math.floor(Math.random() * (cuteCatAPIArray.length))]
}
