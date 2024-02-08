import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { filter } from "domutils";

const  Body = () => {
    console.log("rendering body");
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData(); 
    }, []);

    const fetchData = async () => {
        const data = 
        await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0677225&lng=80.1723265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        const jsonData = await data.json(); 
        const restaurantData=
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        let filteredList = restaurantData; 

        if(searchText.length > 0){
             filteredList = restaurantData.filter((res) => {
                const trimmedName = res.info.name.trim();
                return trimmedName.toLowerCase().includes(searchText.toLowerCase());
            })
        }
        setListOfRestaurants(filteredList);
    }

    const getTopRatedRestaurants = () => {
        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating >= 4.2);
        setListOfRestaurants(filteredList);
    }


   
    return listOfRestaurants.length == 0? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                    <button onClick={fetchData}>Search</button>
                </div>
                <button className="filter-btn" onClick={getTopRatedRestaurants}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((resData, index) => <RestaurantCard key={index} resData={resData}/>)
                    
                }
                
            </div>
        </div>
    )
}

export default Body; 