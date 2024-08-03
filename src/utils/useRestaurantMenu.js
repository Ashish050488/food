import { useEffect,useState } from "react";
import { Menu_API } from "./constant";
const useRestaurantMenu=(resId)=>{
    //fetch Data
    const [ResInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchData()
    },[]);
    const fetchData = async ()=>{
        const data =await  fetch(Menu_API + resId);
        const json = await data.json()
        setResInfo(json.data)
    }


    return ResInfo;
};

export default useRestaurantMenu;