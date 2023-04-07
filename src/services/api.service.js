import axios from "axios";

const commonConfig = {
  header: {
    "Content-Type": "application/jon",
    Accept: "application/json",
  },
};

export default (baseURL) => {
  return axios.create({
    baseURL,
    ...commonConfig,
  });
};
