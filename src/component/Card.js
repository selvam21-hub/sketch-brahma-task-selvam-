import React from 'react';

const Card = (getFood) =>{
return(
            <>
            <div className="window">
                       <img src={getFood.data.strMealThumb} alt="resipe-img"/>
                       <div className ="sec-window">
                       <h2>Resipe Nam:  {getFood.data.strMeal}</h2>
                       <p>Area Venu:  {getFood.data.strArea}</p>
                        <p className='des'>{getFood.data.strCategory}</p>

                       </div>
                       
           </div>  

           </>
       
         )

}

export default Card;  

