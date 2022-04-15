import React, { useState } from "react";
import Card from "./Card";
import './style.css';



const Food = () => {
    const[Name,setName]=useState("");
    const[Foodi,setFoodi]=useState();
    const[Letter,setLetter]=useState("");
    const[Foodlist,setFoodilist]=useState();
     

    const fechapi = e =>{
        e.preventDefault();
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Name}`)
        .then(Response=>Response.json())
        .then(
            data=> setFoodi(data.meals))
    }

    const fechapih = e =>{
        e.preventDefault();
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${Letter}`)
        .then(Response=>Response.json())
        .then(
            data=> setFoodilist(data.meals))
    }


    return (
        <>
            <div className="First-page">
                <div class="block">  
               <div className="header1"><h1>FOODYY!....</h1>
                <h2 className="heading">Search for your own Recipes</h2></div> 
            
                    <div className="form">
                   <form onSubmit={fechapi} className="First-form">
                      
                    <input type="search" placeholder="Enter Your Recipe Name" className="search-bar" onChange={(e)=>setName(e.target.value)} value={Name} />
                    <input type="submit" value="Search" className="buton"/>
                    </form>
                    <form onSubmit={fechapih} className="Sec-form">
                    <input type="search" placeholder="Search by first Letter" className="search-bar2" onChange={(e)=>setLetter(e.target.value)} value={Letter} />
                    <input type="submit" value="Search" className="buton2"/>
                    </form>
                    </div>
                </div>

                <div className="section"> 
                { 
                (Foodi==null)? null : Foodi.map((Response)=>{
                           return(
                          <Card data={Response}/>)})
                          } 

{ 
                (Foodlist==null)? null : Foodlist.map((Alist)=>{
                           return(
                          <Card data={Alist}/>)})
                          } 
                </div>
            </div>
        </>
    )
}
export default Food;