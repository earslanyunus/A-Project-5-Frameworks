<script>
    import DetailMovie from "./views/DetailMovie.svelte";
    import DetailPerson from "./views/DetailPerson.svelte";
    import DetailSeries from "./views/DetailSeries.svelte";
  import Home from "./views/Home.svelte";
      import { Router, Link, Route } from "svelte-routing";

 
 export let url = "";

</script>

<Router {url}>

    <div>
        
        <Route path="/"><Home /></Route>
        <Route path="/detail/movie/:id"><DetailMovie /></Route>
        <Route path="/detail/person/:id"><DetailPerson /></Route>
        <Route path="/detail/series/:id"><DetailSeries /></Route>
      </div>
</Router>
