import axios from "axios";

export const fetchDataFromHarshApi = async (url, params) => {
  try {
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
