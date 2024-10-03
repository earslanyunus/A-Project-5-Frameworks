const baseUrl = "https://aproject-api.onrender.com"
export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${baseUrl}/movies/popular`);
    const data = await response.json()
    return data
  } catch (error) {
    throw error;
  }
};

export const getPopularPeople = async () => {
  try {
    const response = await fetch(`${baseUrl}/person/popular`);
    const data = await response.json()
    return data
  } catch (error) {
    throw error;
  }
};

export const getPopularSeries = async () => {
    try {
      const response = await fetch(`${baseUrl}/series/popular`);
      const data = await response.json()
      return data
    } catch (error) {
      throw error;
    }
  };

export const getMovieDetails = async (id) => {
  try{
    const response = await fetch(
        `${baseUrl}/movies/detail?id=${id}`
    )
    const data = await response.json()
    return data
  }catch (e) {
    throw e
  }
}
export const getMovieCredits = async (movieid)=>{
  try {
    const response = await  fetch(`${baseUrl}/movies/detail/credits?id=${movieid}`)
    const data = await response.json()
    return data
  }
  catch (e) {
    throw e
  }

}

export const getSimilarMovies = async (movieid)=>{
  try{
    const data = await fetch(`${baseUrl}/movies/detail/similar?id=${movieid}`)
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
        `${baseUrl}/person/detail?id=${id}`
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
        `${baseUrl}/person/detail/movies?id=${id}`
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
        `${baseUrl}/person/detail/tv?id=${id}`
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
        `${baseUrl}/series/detail?id=${id}`
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
        `${baseUrl}/series/detail/credits?id=${id}`
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
        `${baseUrl}/series/detail/similar?id=${id}`
    )
    const data = await response.json()
    return data
  }catch (e) {
    throw e
  }
}
export const getSearchResult = async(text,category)=>{
  try{
    const response  = await fetch(`${baseUrl}/search?category=${category}&text=${text}`)
    const data = await response.json()
    return data
  }
  catch(e){
    throw e
  }
}