
import { useState,useEffect } from "react";
import CircularColor from "./CircularColor";
import { Menu_API } from "../utils/constant";
import { useParams,Link } from "react-router-dom";


const RestaurantMenu = ()=>{
    const [ResInfo,setResInfo]=useState(null);
    const {resId} = useParams();
    useEffect(()=>{
        fetchMenu();
    },[]);
    
    const fetchMenu = async ()=>{
        const data = await fetch(Menu_API+resId);
        console.log(data);
        const json = await data.json();
        setResInfo(json.data)
    };
    
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