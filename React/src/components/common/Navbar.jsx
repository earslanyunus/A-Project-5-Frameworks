import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("DEFAULT");
  const navigate = useNavigate();
  const location = useLocation()
  const searchinput = useRef()
  const queryParams = new URLSearchParams(location.search);
  const categoryparam = queryParams.get('category');
  const textparam = queryParams.get('val');
    

  const onselecthandle = (e) => {
    setCategory(e.target.value);
  };

  const onType =  (e) => {
    setSearch(e.target.value);

    
  };
  useEffect(()=>{
    
    if (location.pathname =='/search') {
      setSearch(textparam)
      setCategory(categoryparam)
    }
  },[])


  const searchevent = (e)=>{
    
    if (category !== "DEFAULT" && searchinput.current.value !== "") {
      navigate(`/search/${category}/${searchinput.current.value}`);
      navigate(0)
   
  }
  }

  return (
    <div className="container mx-auto navbar bg-base-100 justify-between pt-6 pl-5 pr-5 flex-col md:flex-row">
      <div >
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          A-Project-React
        </Link>
      </div>
      <div className="flex-none gap-2 mt-6 md:mt-0">
        <div className="flex flex-col md:flex-row gap-2 md:gap-0">
          <select
            value={category}
            onChange={onselecthandle}
            className="select select-bordered md:rounded-tr-none md:rounded-br-none focus:outline-none w-full md:border-r-0 max-w-xs"
          >
            <option disabled value={"DEFAULT"}>
              Search Category?
            </option>
            <option value={"movie"}>Movie</option>
            <option value={"tv"}>Series</option>
            <option value={"person"}>Actor</option>
          </select>
          <div className="form-control">
            <input
              ref={searchinput}
              type="text"
              value={search}
              onChange={onType}
              placeholder="Search"
              className="focus:outline-none  input input-bordered md:w-24  md:border-r-0 md:rounded-none  md:border-l-0"
            />
          </div>
        <button onClick={()=>searchevent()} className="btn btn-outline dark:border-gray-700 border-gray-300 md:rounded-bl-none md:rounded-tl-none md:border-l-0">Search</button>
        </div>
        
      </div>
      <div></div>
      
    </div>
  );
};

export default Navbar;
