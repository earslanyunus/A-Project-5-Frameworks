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

    const id =location.pathname.split("/")[location.pathname.split("/").length - 1];
    let personDetail = [];
    let personMovies = [];
    let personSeries = [];

    onMount(async () => {
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
    });
</script>

<Navbar />
<main class="container">
    <div class="flex mt-4 mb-4">
        <img
            class={"w-1/5 rounded "}
            src={imagePath + personDetail.profile_path}
            alt=""
        />
        <div class="ms-12">
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
