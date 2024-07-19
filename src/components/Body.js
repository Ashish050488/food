import resList from "../utils/MockData"
import RestaurentCard from "./RestaurentCard";
import { useState } from "react";

const Body = ()=>{

    const [ListOfRestaurnt, setListOfRestaurent] = useState(resList)

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