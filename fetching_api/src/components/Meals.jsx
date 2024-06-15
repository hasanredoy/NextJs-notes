'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

const Meals = () => {
  const [search , setSearch]=useState('a')
  console.log(search);
  const [meal , setMeal]=useState([])
  const handleSearch =async()=>{
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    const data = await res.json()
    setMeal(data.meals)
    console.log(data);
  }
console.log("meal===>",meal);  
useEffect(()=>{
  handleSearch()
},[search])
  return (
    <div>
      <input className=" border p-2 bg-slate-100 outline-none text-black" type="text" placeholder="Search"  onChange={(e)=>setSearch(e.target.value)}/>
      <button onClick={handleSearch} className=" bg-green-600 text-white font-bold p-2">Search</button>
      <div className=" mt-10">
      <div className=" grid gap-3 grid-cols-3 ">
        {meal?.map(meal=><div key={meal.id} className="border border-yellow-400 p-6 rounded-md shadow-md ">
   {/* <img src={meal?.strMealThumb} className=" w-full px-5" alt="" /> */}
   <Image width={200} height={200} src={meal?.strMealThumb} alt={meal?.strMeal}></Image>
	<div className="mt-6 mb-2">
		<h2 className="text-xl font-semibold tracking-wide">{meal.strMeal}</h2>
	</div>
	<p className="">{meal?.strInstructions.slice(0,100)}</p>
</div>)}
      </div>
      </div>
    </div>
  );
};

export default Meals;