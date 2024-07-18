import resList from "../utils/MockData"
import RestaurentCard from "./RestaurentCard";

const Body = ()=>(
    <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{}}>Top rated restaurant</button>
        </div>
        <div className="res-container">
        {resList.map(restaurant => (
            <RestaurentCard key={restaurant.id} resData={restaurant} />
        ))};
          
            </div>
        <div></div>
        <div></div>
    </div>
);

export default Body;