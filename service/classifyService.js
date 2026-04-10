import axios from "axios";

const GENDERIZE_API = "https://api.genderize.io";

export const sendName = async (name) => {
  try {
    const response = await axios.get(GENDERIZE_API, {
      params: { name },
    });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
