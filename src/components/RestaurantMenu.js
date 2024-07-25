
import { useState,useEffect } from "react";
import CircularColor from "./CircularColor";


const RestaurantMenu = ()=>{
    const [ResInfo,setResInfo]=useState(null);
    
    useEffect(()=>{
        fetchMenu();
    },[]);
    
    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=574868&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        // console.log(ResInfo.cards[2].card.card.info.name);
        setResInfo(json.data)
        console.log(json);
    };
    
    
    
    // console.log( ResInfo?.cards[2]?.card?.card?.info)
    const { name, cuisines,costForTwoMessage } = ResInfo?.cards[2]?.card?.card?.info || {};
    
    
    return ResInfo === null?(<CircularColor/>): (
        <div className="menu">
            <h1>{ name}</h1>
            <p>{cuisines.join(", ")}-{costForTwoMessage}</p>
            <ul>
                <li>Briyani</li>
                <li>Burgers</li>
                <li>coldring</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;