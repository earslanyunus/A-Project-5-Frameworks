import { A, useLocation, useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";
const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [search, setSearch] = createSignal("");
  const [category, setCategory] = createSignal("DEFAULT");
  const onselecthandle = (e) => {
    setCategory(e.target.value);
  };
  const onType = (e) => {
    setSearch(e.target.value);


  };
  const searchevent = (e) => {

    if (category() !== "DEFAULT" && search() !== "") {
      console.log(location.pathname);
      navigate(`/search?category=${category()}&val=${search()}`);

    }
  }
  return (
    <div className="navbar bg-base-100 justify-between">
      <div >
        <A href={"/"} className="btn btn-ghost normal-case text-xl">
          A-Project-Solid
        </A>
      </div>
      <div className="flex-none gap-2">
        <div className="flex">
          <select
            value={category()}
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
              type="text"
              value={search()}
              onChange={onType}
              placeholder="Search"
              className="focus:outline-none  input input-bordered w-24 md:w-auto  border-r-0 rounded-none  border-l-0"
            />
          </div>
          <button onClick={()=>searchevent()} className="btn btn-outline dark:border-gray-700 border-gray-300 rounded-bl-none rounded-tl-none border-l-0">Search</button>
        </div>

      </div>
      <div>
        
      </div>

    </div>
  )
}

export default Navbar;