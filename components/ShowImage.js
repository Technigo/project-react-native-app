import React, { useState, useEffect } from 'react';

export const ShowImage = () => {
  const { photoId } = useParams();
  const apiKey = `563492ad6f917000010000017bc0c5e618504697b6e8169eb6815175`;
  const url = `https://api.pexels.com/v1/${photoId}curated?per_page=15&page=1`;

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(url, { headers: { Authorization: apiKey } })
      .then(res => res.json())
      .then(json => {
        setPhotos(json.photos);
        console.log(json);
      });
  }, [photoId]);

  return (
    <Container>
      <Image>{photos[0].src[0]}</Image>
    </Container>
  );
};

export default ShowImage;
