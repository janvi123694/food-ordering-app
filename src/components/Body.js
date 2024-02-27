import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/useContext";

const  Body = () => {
    //console.log("rendering body");
    const onlineStatus = useOnlineStatus(); 
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); 
    const [searchText, setSearchText] = useState();
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    useEffect(() => {
        //console.log("use Effect called");
        fetchData(); 
    }, []);

    const {loggedInUser, setUserInfo} = useContext(UserContext);
    //console.log("Body.js", setUserInfo);

    const fetchData = async () => {
        const data = 
        await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0677225&lng=80.1723265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        const jsonData = await data.json(); 
        const restaurantData=
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        setListOfRestaurants(restaurantData); //orig list
        console.log("IN JS Func" , restaurantData.length);
        setFilteredRestaurants(restaurantData); 
    }

    const getTopRatedRestaurants = () => {
        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating >= 4.2);
        setFilteredRestaurants(filteredList);
    }


    const searchItems = () => {
        // console.log("Search text", searchText);
        // console.log("res text", listOfRestaurants);


        if(searchText.length== 0){
            setFilteredRestaurants(listOfRestaurants); 
        }

        const filteredList = listOfRestaurants.filter((res) => {
            return res.info.name.trim().toLowerCase().includes(searchText.toLowerCase());
        })
        
        console.log("FILTERED", filteredList.length);
        setFilteredRestaurants(filteredList);
        setSearchText('')
    }
    
    if(onlineStatus == false) return <h1> youre offline</h1>
    return listOfRestaurants?.length == 0? <Shimmer/> : (
        <div className="body">
            <div className="filter flex items-center">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" 
                        value={searchText}
                        data-testid="searchInput"
                        onChange={(e)=>{setSearchText(e.target.value)}}
                     />
                    <button className="px-4 py-2 m-2 bg-green-100" onClick={searchItems}  data-testid="searchBtn">
                        Search
                    </button>
                </div>
                <button className="px-4 py-2 bg-gray-100" onClick={getTopRatedRestaurants} data-testid="topRatedRestaurantsBtn">
                    Top Rated Restaurants
                </button>
                <div className="flex items-center mx-2">
                    <label htmlFor="" className="text-sm"> User name</label>
                    <input 
                    className="border border-black py-1 px-3 mx-1 rounded-sm"
                    value={loggedInUser}
                    onChange={(e) => setUserInfo(e.target.value)}
                    />
                </div>
                
            </div>
            <div className="res-container flex flex-wrap" data-testid="resturant-list">
                {
                    filteredRestaurants.map((resData, index) =>{
                        return (
                            <Link to={`/restaurants/${resData.info.id}`} key={index} data-testid="res-card">
                                {
                                    index%2==0? <RestaurantCardPromoted  resData={resData} key={index} /> : 
                                    <RestaurantCard key={index} resData={resData} />
                                }
                                
                            </Link>
                        )
                    })
                    
                    
                }
                
            </div>
        </div>
    )
}

export default Body; 