import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import CircularColor from "./CircularColor";
import { Swiggy_API } from "../utils/constant";

const Body = ()=>{

    const [ListOfRestaurnt, setListOfRestaurent] = useState([]);
    const [filteredRestaurants,setfilteresRestaurants] = useState([])

    const [searchText,setsearchText] = useState("")



    // whenever state variables update, react triggers a reconciliation cycle(re-render the  component);

    // console.log("body rendered");
    useEffect(()=>{
        fetchData();
        // console.log(setListOfRestaurent);
    },[]);
    
    const fetchData = async ()=>{
        const data = await fetch(Swiggy_API);
        const json = await data.json();
        // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0]);
    
        // optional chaining operator (?) is used to avoid errors if the property is not found it will return undefined instead of an error. and in UI we can use optional chaining operator to avoid errors.
        setListOfRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteresRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };



    // conditional Rendering with terniary operator
    return ListOfRestaurnt.length===0 ? (<CircularColor/>): (
        <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=> setsearchText(e.target.value)} />
                <button onClick={()=>{
                    //filter the restaurent card and update the ui
                    const filteredRestaurent = ListOfRestaurnt.filter(
                        (res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                    );

                    // There is a bug that if data is searchText is not found it goes blank and just a loader is loaded
                    setfilteresRestaurants(filteredRestaurent);
                    // console.log(filteredRestaurent);
                    
                }} >Search</button>
            </div>
            <button className="filter-btn" onClick={
                        () => {
                        const FilteredList = ListOfRestaurnt.filter((res) => Number(res.info.avgRatingString) > 4);
                        setfilteresRestaurants(FilteredList); // Update state with filtered list
                        }
                    }
                >Top rated restaurant</button>
        </div>
        <div className="res-container">
            {filteredRestaurants.map((restaurant) => (
                <RestaurentCard key={restaurant.info.id} resData={restaurant} />
            ))}
        </div>
        
    </div>
    )
};

export default Body;