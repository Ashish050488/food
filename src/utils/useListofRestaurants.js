import { useState,useEffect } from "react";
import { Swiggy_API } from "./constant";

const useListofRestaurants = ()=>{
    const [ListOfRestaurnt,setListOfRestaurent] =useState([]);
    const [filteredRestaurants,setfilteresRestaurants]=useState([]);
    //fetch data from API;
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(Swiggy_API);
        const json =await data.json();

        setListOfRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteresRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    return (ListOfRestaurnt,filteredRestaurants);
};

export default useListofRestaurants;

