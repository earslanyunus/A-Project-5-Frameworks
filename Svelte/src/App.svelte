<script>
      import { Router, Link, Route } from "svelte-routing";

 
 export let url = "/";

</script>

<Router {url}>

    <div>
        
        <Route path="/"><Home /></Route>
      </div>
</Router>
