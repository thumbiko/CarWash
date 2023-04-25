import React, {useEffect,useState} from "react";

import MainNav from "../components/Nav/MainNav";
//import ServiceCards from "../components/Services/ServiceCards";
import SearchMap from "../components/locations/searchMap";


function Locations(){
    return(
        <div>
                <MainNav />
               <SearchMap />
                
            </div>
    
    )
    
}

export default Locations;