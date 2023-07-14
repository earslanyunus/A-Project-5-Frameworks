import { createSignal } from 'solid-js'


function App() {

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
