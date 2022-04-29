export default class CatService {
  headers;
  baseURL;

  constructor(baseURL) {
    this.headers = new Headers({
      "Content-Type": "application/json",
    });
    this.baseURL = baseURL;
  }

  async getCat() {
    const requestOptions = {
      method: "GET",
      headers: this.headers,
      redirect: "follow",
    };

    try {
      const response = await fetch(this.baseURL, requestOptions);
      const data = await response.json();
      return data;
    } catch (e) {
      console.log("error caught in cat");
      throw new Error(`Error while fetch cat API, error message: ${e}`);
    }
  }
}
