<script setup>
import { onUpdated, ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';


  const search  = ref("");
  const category = ref("DEFAULT");
  const router = useRouter()
  const route = useRoute()
  const queryParams = new URLSearchParams(location.search);
  const categoryparam = queryParams.get('category');
  const textparam = queryParams.get('val');
    



  
  onUpdated(()=>{
    
    if (route.path =='/search') {
      search.value = textparam
      category.value =categoryparam
    }
  })


  const searchevent = (e)=>{
    
    if (category !== "DEFAULT" && search.value !== "") {
      router.push(`/search?category=${category.value}&val=${search.value}`);
      
   
  }
  }



</script>
<template>
    <div class="navbar bg-base-100 justify-between">
      <div >
        <RouterLink to="/" class="btn btn-ghost normal-case text-xl">
          A-Project-Vue
        </RouterLink>
      </div>
      <div class="flex-none gap-2">
        <div class="flex">
          <select
            v-model="category"
            class="select select-bordered rounded-tr-none rounded-br-none focus:outline-none w-full border-r-0 max-w-xs"
          >
            <option disabled value="DEFAULT">
              Search Category?
            </option>
            <option value="movie">Movie</option>
            <option value="tv">Series</option>
            <option value="person">Actor</option>
          </select>
          <div class="form-control">
            <input
              v-model="search"
              type="text"
              
              placeholder="Search"
              class="focus:outline-none  input input-bordered w-24 md:w-auto  border-r-0 rounded-none  border-l-0"
            />
          </div>
        <button @click='searchevent' class="btn btn-outline dark:border-gray-700 border-gray-300 rounded-bl-none rounded-tl-none border-l-0">Search</button>
        </div>
        
      </div>
      <div></div>
      
    </div>
</template>