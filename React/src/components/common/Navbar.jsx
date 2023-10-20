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
      navigate(`/search?category=${category}&val=${searchinput.current.value}`);
      navigate(0)
   
  }
  }

  return (
    <div className="navbar bg-base-100 justify-between">
      <div >
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          A-Project-React
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="flex">
          <select
            value={category}
            onChange={onselecthandle}
            className="select select-bordered rounded-tr-none rounded-br-none focus:outline-none w-full border-r-0 max-w-xs"
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
              className="focus:outline-none  input input-bordered w-24 md:w-auto  border-r-0 rounded-none  border-l-0"
            />
          </div>
        <button onClick={()=>searchevent()} className="btn btn-outline border-gray-300 rounded-bl-none rounded-tl-none border-l-0">Search</button>
        </div>
        
      </div>
      <div></div>
      
    </div>
  );
};

export default Navbar;
