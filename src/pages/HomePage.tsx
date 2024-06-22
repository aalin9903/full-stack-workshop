import React from 'react'
import RestaurantCard from "../components/RestaurantCard"
import { getRestaurants } from '../api/Restaurant';
export interface Restaurant {
    id: number;
    name: string;
    cuisine: string;
    location: string;
    image: string;
  }

function Homepage() {
  return (
    <> 
    <div>HomePage</div>
    <RestaurantCard/>
    </>
  )
}

export default Homepage
