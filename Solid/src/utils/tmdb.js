const baseUrl = 'https://api.themoviedb.org/3/'
export const getPopularMovies = async () => {
  try {
    const response = await fetch(
      `${baseUrl}movie/popular?api_key=${
        import.meta.env.VITE_MOVIEDB_API_KEY
      }`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const getPopularPeople = async () => {
  try {
    const response = await fetch(
      `${baseUrl}person/popular?api_key=${
        import.meta.env.VITE_MOVIEDB_API_KEY
      }`
    );
    const data = await response.json();
    return data.results
  } catch (error) {
    throw error;
  }
};

export const getPopularSeries = async () => {
    try {
      const response = await fetch(
        `${baseUrl}tv/top_rated?api_key=${
          import.meta.env.VITE_MOVIEDB_API_KEY
        }`
      );
      const data = await response.json();
      return data.results
    } catch (error) {
      throw error;
    }
  };
