import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer TxItVylKA4MbnBAbtor_WMiVjkrJxkD5OQSlEz3jMZSn_wJPKOgE5ZbDMHqvlM37YLo0d59Rn_tH_4uZnnNGwPhNP8L7GZVU3p7wTjAZx16fIRcGfBW4Rf5FBxOXX3Yx",
  },
});
