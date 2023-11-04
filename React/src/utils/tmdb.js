const baseUrl = 'https://aproject-api.onrender.com'
export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${baseUrl}/movies/popular`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getPopularPeople = async () => {
  try {
    const response = await fetch(`${baseUrl}/person/popular`);
    return response
  } catch (error) {
    throw error;
  }
};

export const getPopularSeries = async () => {
    try {
      const response = await fetch(`${baseUrl}/series/popular`);
      return response
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
    return data
  }catch (e) {
    throw e
  }
}
export const getMovieCredits = async (movieid)=>{
  try {
    const response = await  fetch(`${baseUrl}movie/${movieid}/credits?api_key=${import.meta.env.VITE_MOVIEDB_API_KEY}`)
    const data = await response.json()
    return data
  }
  catch (e) {
    throw e
  }

}

export const getSimilarMovies = async (movieid)=>{
  try{
    const data = await fetch(`${baseUrl}movie/${movieid}/similar?api_key=${import.meta.env.VITE_MOVIEDB_API_KEY}`)
    const response = await data.json()
    return response
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
    return data
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
    return data
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
    return data
  }catch (e) {
    throw e
  }
}

export const getSeriesDetails = async (id) => {
  try{
    const response = await fetch(
        `${baseUrl}tv/${id}?api_key=${import.meta.env.VITE_MOVIEDB_API_KEY}`
    )
    const data = await response.json()
    return data
  }catch (e) {
    throw e
  }
}

export const getSeriesCredits = async (id) => {
  try{
    const response = await fetch(
        `${baseUrl}tv/${id}/credits?api_key=${import.meta.env.VITE_MOVIEDB_API_KEY}`
    )
    const data = await response.json()
    return data
  }catch (e) {
    throw e
  }
}
export const getSeriesSimilar = async (id) => {
  try{
    const response = await fetch(
        `${baseUrl}tv/${id}/similar?api_key=${import.meta.env.VITE_MOVIEDB_API_KEY}`
    )
    const data = await response.json()
    return data
  }catch (e) {
    throw e
  }
}
export const getSearchResult = async(text,category)=>{
  try{
    const response  = await fetch(`${baseUrl}search/${category}?api_key=${import.meta.env.VITE_MOVIEDB_API_KEY}&query=${text}`)
    const data = await response.json()
    return data
  }
  catch(e){
    throw e
  }
}