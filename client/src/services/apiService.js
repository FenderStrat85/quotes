const apiService = {};

apiService.getTrumpQuote = async () => {
  return fetch(`https://api.tronalddump.io/random/quote`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

apiService.getKanyeQuote = async () => {
  return fetch(`https://api.kanye.rest`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export default apiService;
