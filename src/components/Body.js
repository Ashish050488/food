import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";

const Body = ()=>{

    const [ListOfRestaurnt, setListOfRestaurent] = useState([]);

    useEffect(()=>{
        fetchData();
        // console.log(setListOfRestaurent);
    },[]);
    
    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0]);
    
        // optional chaining operator (?) is used to avoid errors if the property is not found it will return undefined instead of an error. and in UI we can use optional chaining operator to avoid errors.
        setListOfRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return(
        <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={
                        () => {
                        const FilteredList = ListOfRestaurnt.filter((res) => Number(res.avgRatingString) > 4);
                        setListOfRestaurent(FilteredList); // Update state with filtered list
                        }
                    }
                >Top rated restaurant</button>
        </div>
        <div className="res-container">
            {console.log(ListOfRestaurnt)}
            {ListOfRestaurnt.map((restaurant) => (
                <RestaurentCard key={restaurant.id} resData={restaurant} />
            ))}
        </div>
        <div></div>
        <div></div>
    </div>
    )
};

export default Body;