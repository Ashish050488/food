import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import CircularColor from "./CircularColor";
import { Swiggy_API } from "../utils/constant";
import { Link } from "react-router-dom";
import useListofRestaurants from "../utils/useListofRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = ()=>{

    const ListOfRestaurnt= filteredRestaurants = useListofRestaurants();
    // const filteredRestaurants= useListofRestaurants();
    

    const [searchText,setsearchText] = useState("")
    const OnlineStatus = useOnlineStatus();
    

    
    
    if(OnlineStatus===false) return (<h1>Looks like you are offline Check you online Status</h1>)
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
                <Link className="card-link" key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurentCard resData={restaurant} /></Link>
            ))}
        </div>
        
    </div>
    )
};

export default Body;