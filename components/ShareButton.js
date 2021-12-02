import React from "react"
import Sharing from "expo-sharing"

const ShareButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{state}</Text>
      <Text style={styles.paragraph}>{fileUri}</Text>
      <Button
        title="Available?"
        onPress={() => {
          Sharing.isAvailableAsync().then((available) => {
            if (available) {
              setState("Sharing is available")
            } else {
              setState("Sharing is NOT available")
            }
          })
        }}
      />

      <Button
        title="Share"
        onPress={() => {
          const options = {
            mimeType: "text/x-vcard",
            dialogTitle: "Share vcard",
            UTI: "text/vcard",
          }

          FileSystem.writeAsStringAsync(fileUri, vcard)
            .then((data) => {
              setState("Wrote vcard file")
            })
            .catch((err) => {
              setState("Error writing vcard file")
              console.log(JSON.stringify(err))
            })

          Sharing.shareAsync(fileUri, options)
            .then((data) => {
              setState("Shared")
            })
            .catch((err) => {
              setState("Error sharing vcard")
              console.log(JSON.stringify(err))
            })
        }}
      />
    </View>
  )
}

export default ShareButton
