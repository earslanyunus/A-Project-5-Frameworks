<script>
  import DetailMovie from "./views/DetailMovie.svelte";
  import DetailPerson from "./views/DetailPerson.svelte";
  import DetailSeries from "./views/DetailSeries.svelte";
  import SearchPage from "./views/SearchPage.svelte";
  import Home from "./views/Home.svelte";
  import Router from 'svelte-spa-router'

  const routes = {
    
    '/': Home,
    '/detail/movie/:id': DetailMovie,
    '/detail/person/:id': DetailPerson,
    '/detail/tv/:id': DetailSeries,

    '/search/*': SearchPage
}
</script>



<body>
  <Router {routes}/>
     
</body>

