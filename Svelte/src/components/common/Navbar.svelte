<script>
  import { Link } from "svelte-routing";
// @ts-nocheck
let searchvalue
let category = "DEFAULT"
const onselecthandle = (e) => {
    category = e.target.value
    // dispatch(onCategory(e.target.value));
  };
const searchevent = (e)=>{
   
    if (category !== "DEFAULT" && searchvalue !== "") {
      // navigate(`/search/${category}/${searchinput.current.value}`);
   
  }
  }
</script>

<div class="navbar bg-base-100 justify-between">
  <div >
    <Link to={"/"} class="btn btn-ghost normal-case text-xl">
      A-Project-Svelte
    </Link>
  </div>
  <div class="flex-none gap-2">
    <div class="flex">
      <select
        value={category}
        on:change={onselecthandle}
        class="select select-bordered rounded-tr-none rounded-br-none focus:outline-none w-full border-r-0 max-w-xs"
      >
        <option disabled value={"DEFAULT"}>
          Search Category?
        </option>
        <option value={"movie"}>Movie</option>
        <option value={"tv"}>Series</option>
        <option value={"person"}>Actor</option>
      </select>
      <div class="form-control">
        <input
          bind:value={searchvalue}
          type="text"
          placeholder="Search"
          class="focus:outline-none  input input-bordered w-24 md:w-auto  border-r-0 rounded-none  border-l-0"
        />
      </div>
    <button on:click={searchevent} class="btn btn-outline border-gray-300 rounded-bl-none rounded-tl-none border-l-0">Search</button>
    </div>
    
  </div>
  <div></div>
  
</div>