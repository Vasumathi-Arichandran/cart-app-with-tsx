// Type json={ method: any, body: string, header: { "Content-Type": string, }; }
import React from 'react'

import { AddNew } from "../AddProduct/AddProduct";
import { FilterByPrice } from '../FilterProduct/FilterByPrice';


export const ShowProducts=(props:{state:{products:[ {
    id: number,
    title: string,
    description: string,
    link: string,
    price: number,
  }],showDetails:[],addedProducts:[ {
    id: string,
    title: string,
    description: string,
    link: string,
    price: string,
  }]},dispatch:any})=>{
  
    const {showDetails}=props.state;

async function submitHandler(prodData:any){
   const response=await fetch("https://products-c44ed-default-rtdb.firebaseio.com/products.json",{
        method:"POST",
        body:JSON.stringify(prodData),
        // header:{
        //     "Content-Type":"application/json"
        // }
    });
    const data=await response.json();
 
}


    return <div className="show">
        {showDetails.length>0?
            showDetails.map((prod:any)=>(
<div key={prod.id}className="show-products">
    <img  className="products-image" src={prod.thumbnail} alt={prod.title}></img>
    <p>{prod.title}</p>
    <p>{prod.description}</p>
    <p>Rs.{prod.price}</p>
</div>
            )
        ):<h5>Click on Show Details to get details about Products</h5>}

        <FilterByPrice state={props.state} dispatch={props.dispatch}/>



 <AddNew state={props.state} dispatch={props.dispatch} onConfirm={submitHandler} />

    </div>
}