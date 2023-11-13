<script>
    import { onMount } from "svelte";
// @ts-nocheck
let searchvalue
let category = "DEFAULT"
onMount(()=>{
  if(window.location.pathname==='/search'){
    const queryParams = new URLSearchParams(window.location.search);
    const categoryparams = queryParams.get('category');
    const searchvaluepara = queryParams.get('val');
    category = categoryparams
    searchvalue = searchvaluepara
  }
})
const searchevent = (e)=>{
   
    if (category !== "DEFAULT" && searchvalue !== "") {
      navigate(`/search?category=${category}&val=${searchvalue}`)
      location.reload();

  }
  }

</script>

<div class="container mx-auto navbar bg-base-100 justify-between pt-6 pl-5 pr-5 flex-col md:flex-row">
  <div >
    <a href={"/"} class="btn btn-ghost normal-case text-xl">
      A-Project-Svelte
    </a>
  </div>
  <div class="flex-none gap-2 mt-6 md:mt-0">
    <div class="flex flex-col md:flex-row gap-2 md:gap-0">
      <select
      bind:value={category}
        class="select select-bordered md:rounded-tr-none md:rounded-br-none focus:outline-none w-full md:border-r-0 max-w-xs"
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
          class="focus:outline-none  input input-bordered md:w-24  md:border-r-0 md:rounded-none  md:border-l-0"
        />
      </div>
    <button on:click={searchevent} class="btn btn-outline dark:border-gray-700 border-gray-300 md:rounded-bl-none md:rounded-tl-none md:border-l-0">Search</button>
    </div>
    
  </div>
  <div></div>
  
</div>