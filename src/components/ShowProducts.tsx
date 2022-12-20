// Type json={ method: any, body: string, header: { "Content-Type": string, }; }
import React from 'react'

import { AddNew } from "./AddNew";
import { Filter100To500 } from './Filter(100-500)';
import { Filter500To1000 } from './Filter(500-1000)';
import { Filter100 } from './Filter<100';
import { Filter } from './Filter<40';


export const ShowProducts=(props:{state:{products:[ {
    price:number
}],showDetails:[],addedProducts:[ {
    price:number
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
    console.log(data); 
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
<Filter state={props.state} dispatch={props.dispatch}/>
<Filter100 state={props.state} dispatch={props.dispatch}/>
<Filter100To500 state={props.state} dispatch={props.dispatch}/>
<Filter500To1000 state={props.state} dispatch={props.dispatch}/>



        <AddNew state={props.state} dispatch={props.dispatch} onConfirm={submitHandler} />

    </div>
}