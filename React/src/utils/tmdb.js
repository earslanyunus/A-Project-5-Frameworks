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

export const getMovieDetails = async (id) => {
  try{
    const response = await fetch(
        `${baseUrl}movie/${id}?api_key=${import.meta.env.VITE_MOVIEDB_API_KEY}`
    )
    const data = await response.json()
    return data.results
  }catch (e) {
    throw e
  }
}
export const getMovieCredits = async (movieid)=>{
  try {
    const response = await  fetch(`${baseUrl}movie/${movieid}/credits?api_key=${import.meta.env.VITE_MOVIEDB_API_KEY}`)
    const data = await response.json()
    return data.results
  }
  catch (e) {
    throw e
  }

}

export const getSimilarMovies = async (movieid)=>{
  try{
    const data = await fetch(`${baseUrl}movie/${movieid}/similar?api_key=${import.meta.env.VITE_MOVIEDB_API_KEY}`)
    const response = await data.json()
    return response.results
  }
  catch (e) {
    throw e
  }
}

export const getPersonDetails = async (id) => {
  try{
    const response = await fetch(
        `${baseUrl}person/${id}?api_key=${import.meta.env.VITE_MOVIEDB_API_KEY}`
    )
    const data = await response.json()
    return data.results
  }catch (e) {
    throw e
  }
}

export const getPersonMovies = async (id) => {
  try{
    const response = await fetch(
        `${baseUrl}person/${id}/movie_credits?api_key=${import.meta.env.VITE_MOVIEDB_API_KEY}`
    )
    const data = await response.json()
    return data.results
  }catch (e) {
    throw e
  }
}
export const getPersonSeries = async (id) => {
  try{
    const response = await fetch(
        `${baseUrl}person/${id}/tv_credits?api_key=${import.meta.env.VITE_MOVIEDB_API_KEY}`
    )
    const data = await response.json()
    return data.results
  }catch (e) {
    throw e
  }
}