import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from "../../supabase/client.js";
import { useState, useEffect, useRef } from "react";
import { onCategory, onInput } from "../../store/searchstore.js";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("DEFAULT");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchText = useSelector((state)=>state.searchstore.searchText)
  const searchinput = useRef()
  const onselecthandle = (e) => {
    setCategory(e.target.value);
    dispatch(onCategory(e.target.value));
  };

  const onType = async (e) => {
    dispatch(onInput(e.target.value));
    setSearch(e.target.value);

    
  };

  const onSignOut = () => {
    supabase.auth.signOut();
  };

  const searchevent = (e)=>{
    console.log('search event calisti');
    console.log(searchinput);
    if (category !== "DEFAULT" && searchinput.current.value !== "") {
      navigate(`/search/${category}/${searchinput.current.value}`);
   
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
              onChange={onType}
              placeholder="Search"
              className="focus:outline-none  input input-bordered w-24 md:w-auto  border-r-0 rounded-none  border-l-0"
            />
          </div>
        <button onClick={()=>searchevent()} className="btn btn-outline border-gray-300 rounded-bl-none rounded-tl-none border-l-0">Search</button>
        </div>
        
      </div>
      <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className=" mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={onSignOut}>Logout</a>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Navbar;
