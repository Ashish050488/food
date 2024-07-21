import { CDN_URL } from "../utils/constant";



const RestaurentCard = (props)=>{
    const { resData } = props;
    const { name, cuisines, costForTwo, avgRatingString, sla, cloudinaryImageId } = resData.info;

    return(
        <div className="res-card">
            <img className="res-logo"  alt="res-logo" src={CDN_URL+ cloudinaryImageId}/>
            <h3 className="name">{name}</h3>
            <h3>{cuisines?.join(", ")}</h3>
            <h3>{costForTwo}</h3>
            <h3>Rating{avgRatingString}⭐</h3>
            <h3>{sla?.slaString}</h3>
        </div>
    )
};

export default RestaurentCard;