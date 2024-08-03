
import CircularColor from "./CircularColor";
import { useParams} from "react-router-dom";
import useRestaurantMenu from'../utils/useRestaurantMenu'


const RestaurantMenu = ()=>{
    const {resId} = useParams();
    const ResInfo = useRestaurantMenu(resId);

    if (ResInfo === null) return (<CircularColor/>);
    
    // console.log( ResInfo?.cards[2]?.card?.card?.info)
    const { name, cuisines,costForTwoMessage } = ResInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    
    return  (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}-{costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name}-Rs{item.card.info.price/100}</li>)}
            </ul>
        </div>
    );
};

export default RestaurantMenu;