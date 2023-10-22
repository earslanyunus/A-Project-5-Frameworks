import { createResource, } from 'solid-js'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import { SwiperPart } from './components/SwiperPart'
import { getPopularMovies, getPopularPeople, getPopularSeries } from './utils/tmdb'



function App() {

  const [popularMovies] = createResource(() => getPopularMovies())
  const [popularPeoples] = createResource(() => getPopularPeople())
  const [popularSeries] = createResource(() => getPopularSeries())
  

  return (
    <>
    <div className=" min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col mt-8">
        {popularMovies.loading && <span className="container mx-auto loading loading-spinner loading-lg"></span>}
        {popularMovies.error && <div>Error {popularMovies.error.message}</div>}
        {popularMovies() &&  <SwiperPart head={"Popular Movies"} movies={popularMovies} />}
        {popularPeoples.loading && <span className="container mx-auto loading loading-spinner loading-lg"></span>}
        {popularPeoples.error && <div>Error {popularPeoples.error.message}</div>}
        {popularPeoples() &&  <SwiperPart head={"Popular Actors"} movies={popularPeoples} />}
        {popularSeries.loading && <span className="container mx-auto loading loading-spinner loading-lg"></span>}
        {popularSeries.error && <div>Error {popularSeries.error.message}</div>}
        {popularSeries() &&  <SwiperPart head={"Popular Series"} movies={popularSeries} />}
        
        
        
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
