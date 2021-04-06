const ImagesArray = [
"../assets/aldis-popcorn-1.jpg",
"../assets/aldis-popcorn-2.jpg",
"../assets/aldis-popcorn-3.jpg",
"../assets/aldis-popcorn-4.jpg",
]

// Function for shuffling images 

export const ShuffledImages = () => {
  for (var i = Images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = Images[i]
    Images[i] = Images[j]
    Images[j] = temp
  } 
  return Images
}