const fetchFromApi = () => {
  return fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          species: character.species,
          gender: character.gender,
          origin: character.origin.name,
          location: character.location.name,
          image: character.image,
          episode: character.episode,
          status: character.status,
        };
      });
    });
};

export default fetchFromApi;
