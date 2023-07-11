import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { useEffect, useState } from "react";
import { getPopularMovies, getPopularPeople, getPopularSeries } from "./utils/tmdb";
import { SwiperPart } from "./components/SwiperPart";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularPeoples, setPopularPeoples] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  useEffect(() => {
    getPopularMovies().then((data) => {
      setPopularMovies(data);
    });
    getPopularPeople().then((data) => {
      setPopularPeoples(data);
    });
    getPopularSeries().then(data=>{
      setPopularSeries(data)
    })
  }, []);

  return (
    <div className=" min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col mt-8">
        <SwiperPart head={"Popular Movies"} movies={popularMovies} />
        <SwiperPart head={"Popular Actors"} movies={popularPeoples} />
        <SwiperPart head={"Popular Series"} movies={popularSeries} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
