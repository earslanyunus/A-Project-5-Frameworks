<script setup>
import { onMounted, onUpdated, ref, watch } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';


  const search  = ref("");
  const category = ref("DEFAULT");
  const router = useRouter()
  const route = useRoute()
  
    



  watch(route,()=>{
    const queryParams = new URLSearchParams(location.search);
  const categoryparam = queryParams.get('category');
  const textparam = queryParams.get('val');
    if (route.path =='/search') {

      search.value = textparam
      category.value =categoryparam
      
    }else{
      search.value = ""
      category.value = "DEFAULT"
    }
  })
  


  const searchevent = (e)=>{
    
    if (category !== "DEFAULT" && search.value !== "") {
      router.push(`/search?category=${category.value}&val=${search.value}`);
      
   
  }
  }



</script>
<template>
    <div class="container mx-auto navbar bg-base-100 justify-between pt-6 pl-5 pr-5 flex-col md:flex-row">
      <div >
        <RouterLink to="/" class="btn btn-ghost normal-case text-xl">
          A-Project-Vue
        </RouterLink>
      </div>
      <div class="flex-none gap-2 mt-6 md:mt-0">
        <div class="flex flex-col md:flex-row gap-2 md:gap-0">
          <select
            v-model="category"
            class="select select-bordered md:rounded-tr-none md:rounded-br-none focus:outline-none w-full md:border-r-0 max-w-xs"
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
              class="focus:outline-none  input input-bordered md:w-24  md:border-r-0 md:rounded-none  md:border-l-0"
            />
          </div>
        <button @click='searchevent' class="btn btn-outline dark:border-gray-700 border-gray-300 md:rounded-bl-none md:rounded-tl-none md:border-l-0">Search</button>
        </div>
        
      </div>
      <div></div>
      
    </div>
</template>