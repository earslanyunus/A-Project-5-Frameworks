<script>
  import DetailMovie from "./views/DetailMovie.svelte";
  import DetailPerson from "./views/DetailPerson.svelte";
  import DetailSeries from "./views/DetailSeries.svelte";
  import SearchPage from "./views/SearchPage.svelte";
  import Home from "./views/Home.svelte";
  import { Router, Route } from "svelte-routing";
</script>

<Router>
  <Route path="/"><Home /></Route>
  <Route path="/detail/movie/:id"><DetailMovie /></Route>
  <Route path="/detail/person/:id"><DetailPerson /></Route>
  <Route path="/detail/tv/:id"><DetailSeries /></Route>
  <Route path="/search"><SearchPage /></Route>
</Router>
