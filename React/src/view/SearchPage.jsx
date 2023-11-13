import { useParams } from "react-router-dom"
import { InfoCard } from "../components/InfoCard"
import Footer from "../components/common/Footer"
import { memo } from 'react';
import Navbar from "../components/common/Navbar"


export const SearchPage = ()=>{
    

return(
    <>
    <Navbar/>
    <InfoCard/>
    <Footer/>
    </>
)
}