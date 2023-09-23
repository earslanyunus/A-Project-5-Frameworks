import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { useEffect, useState } from "react";
import { getPopularMovies, getPopularPeople, getPopularSeries } from "./utils/tmdb";
import { SwiperPart } from "./components/SwiperPart";
import { InfoCard } from "./components/InfoCard";
import { useDispatch, useSelector } from "react-redux"
import { onSearch } from "./store/searchstore";

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
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
      
          <div className="flex flex-col mt-8">
            <SwiperPart head={"Popular Movies"} cards={popularMovies} type={'movie'}/>
            <SwiperPart head={"Popular Actors"} cards={popularPeoples} type={'person'}/>
            <SwiperPart head={"Popular Series"} cards={popularSeries} type={'series'}/>
          </div>
      
        <Footer />
      </div>
    </>
  );
};

export default App;
