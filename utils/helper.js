import AsyncStorage from "@react-native-async-storage/async-storage";

const initStorage = async (key = "globalState") => {
  try {
    const stringData = await getStorage();
    if (!stringData) {
      await setStorage([]);
    }
  } catch (error) {
    throw new Error(`Cannot init storage data: ${String(error)}`);
  }
};

const setStorage = async (data, key = "globalState") => {
  try {
    const stringData = JSON.stringify(data);
    await AsyncStorage.setItem(key, stringData);
  } catch (error) {
    throw new Error(`Cannot save storage data: ${String(error)}`);
  }
};

const getStorage = async (key = "globalState") => {
  try {
    const stringData = await AsyncStorage.getItem(key, stringData);
    return JSON.parse(stringData);
  } catch (error) {
    throw new Error(`Cannot save storage data: ${String(error)}`);
  }
};

const findQuoteById = (quotesList, quoteId) => {
  const foundQuote = quotesList.find((quote) => quote._id === quoteId);
  return foundQuote;
};

export { initStorage, setStorage, getStorage, findQuoteById };
