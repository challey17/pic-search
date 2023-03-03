import axios from "axios";

const getImages = async (term) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?page=1&query=${term}`,
    {
      headers: {
        Authorization: "Client-ID iM920idyzwecWwPOC388nqogo9HMnChEz9cO_ri4No8",
      },
    }
  );

  return response.data.results;
};

export default getImages;
