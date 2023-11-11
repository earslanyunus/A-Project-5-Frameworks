<script>
// @ts-nocheck

    import {
        getPersonDetails,
        getPersonMovies,
        getPersonSeries,
    } from "../utils/tmdb.js";
    import SwiperPart from "../components/SwiperPart.svelte";
    import { onMount } from "svelte";
    import Navbar from "../components/common/Navbar.svelte";
    import Footer from "../components/common/Footer.svelte";
    const imagePath = "https://image.tmdb.org/t/p/original";


    let id
    let personDetail = [];
    let personMovies = [];
    let personSeries = [];
    
    export let params = {};

    const getdata = async (id) => {
        
        const persondetaildata = await getPersonDetails(id);
        personDetail = persondetaildata;

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
        personMovies = personmoviedata;

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
        personSeries = personseriesdata;
    };
    onMount(async () => {
        id= params.id
        
       getdata(params.id)
     
    });
    $: if (params.id) {
        
        if (id!== undefined&&id !== params.id) {
            
            getdata(params.id);
            window.scrollTo(0, 0);
        }
        
    }
</script>

<Navbar />
<main class="container mt-8">
    <div class="flex flex-col lg:flex-row mt-4 mb-4">
        <img
            class={"w-full max-w-xs  lg:w-1/3  rounded self-center   "}
            src={imagePath + personDetail.profile_path}
            alt=""
        />
        <div class="lg:ms-12 w-full">
            <p class="text-5xl upp">{personDetail?.name}</p>
            <div class="badge badge-outline badge-sm">
                Born on {new Date(personDetail.birthday).toLocaleDateString(
                    "tr"
                )}
            </div>
            <p class="mt-4 mb-4">{personDetail?.biography}</p>
        </div>
    </div>
    {#if personMovies.length > 0}
        <SwiperPart head={"Movies"} movies={personMovies} />
    {/if}
    {#if personSeries.length > 0}
        <SwiperPart head={"Series"} movies={personSeries} />
    {/if}
</main>
<Footer />
