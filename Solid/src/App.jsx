import { createEffect, createResource, createSignal } from 'solid-js'
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
        <SwiperPart head={"Popular Movies"} movies={popularMovies} />
        <SwiperPart head={"Popular Actors"} movies={popularPeoples} />
        <SwiperPart head={"Popular Series"} movies={popularSeries} />
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
