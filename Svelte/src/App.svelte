<script>
    import DetailMovie from "./views/DetailMovie.svelte";
  import Home from "./views/Home.svelte";
      import { Router, Link, Route } from "svelte-routing";

 
 export let url = "";

</script>

<Router {url}>

    <div>
        
        <Route path="/"><Home /></Route>
        <Route path="/detail/movie/:id"><DetailMovie /></Route>
      </div>
</Router>
