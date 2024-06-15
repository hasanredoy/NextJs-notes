import Meals from '@/components/Meals';
import React from 'react';
import './style.modules.css'
import { Headland_One } from 'next/font/google';

const headland=Headland_One({weight:['400'],subsets:['latin']})

export const metadata = {
  title:{
    absolute:'Meals'
  },
  description: " meals page",
};
const MealsPage = () => {
  return (
    <div className=' p-24'>
      <h1 className={`${headland.className} text-3xl font-bold text-green-500`}>Find Your Favorite Food? Start Searching</h1>
      <p className=' text-xl font-bold tomato'>Eating Is fun!</p>
      <Meals></Meals>
    </div>
  );
};

export default MealsPage;