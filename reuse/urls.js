export const LIST_URL = `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&departmentId=11&q=""`;
export const ARTWORK_URL = (id) =>
  `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
