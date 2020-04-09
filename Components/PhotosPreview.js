import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'

export const PhotosPreview = (props) => {
    const { photos, sizing, shuffled } = props
    const [preview, setPreview] = useState([])
    useEffect(() => {
        setPreview(photos)
    }, [photos])
    return (
        preview.map((item, index) => {
            return index % 2 === 0 ? <Image source={{ uri: item }} style={{ width: sizing, height: sizing, margin: 7 }} />
                : <Image source={{ uri: item }} style={{
                    width: shuffled ? sizing : 0, height:
                        shuffled ? sizing : 0
                }}></Image>
        })
    )
}