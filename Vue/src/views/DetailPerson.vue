<script setup>

    import { useRouter } from "vue-router";
import {
        getPersonDetails,
        getPersonMovies,
        getPersonSeries,
    } from "../utils/tmdb.js";
import { onMounted, ref, watch } from "vue";
import SwiperPart from "../components/SwiperPart.vue";
    const imagePath = "https://image.tmdb.org/t/p/original";

    const personDetail = ref([]);
    const personMovies = ref([]);
    const personSeries = ref([]);
    const route = useRouter()
    const id = location.pathname.split('/')[location.pathname.split('/').length-1]

    watch(route, async()=>{
        const persondetaildata = await getPersonDetails(route.params.id);
        personDetail.value = persondetaildata;

        let personmoviedata = await getPersonMovies(route.params.id);
        personmoviedata = personmoviedata.cast.reduce(
            (accumulator, current) => {
                let exists = accumulator.find((item) => {
                    return item.id === current.id;
                });
                if (!exists) {
                    accumulator = accumulator.concat(current);
                }
                return accumulator;
            },
            []
        );
        personmoviedata.sort((a, b) => {
            if (a.popularity > b.popularity) {
                return -1;
            }
            if (a.popularity < b.popularity) {
                return 1;
            }
            return 0;
        });
        personMovies.value = personmoviedata;

        let personseriesdata = await getPersonSeries(route.params.id);
        personseriesdata = personseriesdata.cast.reduce(
            (accumulator, current) => {
                let exists = accumulator.find((item) => {
                    return item.id === current.id;
                });
                if (!exists) {
                    accumulator = accumulator.concat(current);
                }
                return accumulator;
            },
            []
        );
        personseriesdata.sort((a, b) => {
            if (a.popularity > b.popularity) {
                return -1;
            }
            if (a.popularity < b.popularity) {
                return 1;
            }
            return 0;
        });
        personSeries.value = personseriesdata;
    })
    onMounted(async () => {
        const persondetaildata = await getPersonDetails(id);
        personDetail.value = persondetaildata;

        let personmoviedata = await getPersonMovies(id);
        personmoviedata = personmoviedata.cast.reduce(
            (accumulator, current) => {
                let exists = accumulator.find((item) => {
                    return item.id === current.id;
                });
                if (!exists) {
                    accumulator = accumulator.concat(current);
                }
                return accumulator;
            },
            []
        );
        personmoviedata.sort((a, b) => {
            if (a.popularity > b.popularity) {
                return -1;
            }
            if (a.popularity < b.popularity) {
                return 1;
            }
            return 0;
        });
        personMovies.value = personmoviedata;

        let personseriesdata = await getPersonSeries(id);
        personseriesdata = personseriesdata.cast.reduce(
            (accumulator, current) => {
                let exists = accumulator.find((item) => {
                    return item.id === current.id;
                });
                if (!exists) {
                    accumulator = accumulator.concat(current);
                }
                return accumulator;
            },
            []
        );
        personseriesdata.sort((a, b) => {
            if (a.popularity > b.popularity) {
                return -1;
            }
            if (a.popularity < b.popularity) {
                return 1;
            }
            return 0;
        });
        personSeries.value = personseriesdata;
    });
</script>

<template>
<main class="container mt-8">
    <div class="flex flex-col lg:flex-row mt-4 mb-4">
        <img
            class="w-full max-w-xs  lg:w-1/3  rounded self-center   "
            :src="imagePath + personDetail.profile_path"
            alt=""
        />
        <div class="w-full lg:ms-12">
            <p class="text-5xl upp">{{personDetail?.name}}</p>
            <div class="badge badge-outline badge-sm">
                Born on {{new Date(personDetail.birthday).toLocaleDateString( "tr" ) }}
            </div>
            <p class="mt-4 mb-4">{{personDetail?.biography}}</p>
        </div>
    </div>
        <SwiperPart v-if="personMovies.length>0"  head="Movies" :movies=personMovies />
        <SwiperPart v-if="personSeries.length>0"  head="Series" :movies=personSeries />
</main>
</template>