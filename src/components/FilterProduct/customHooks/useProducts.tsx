import React, { useEffect, useState } from 'react'     


export function useProducts(dat:{url:string},applyData:({})=>any) :any
{

    const sendRequest=async()=>{
       
         const data= await fetch("https://products-c44ed-default-rtdb.firebaseio.com/products.json");
        // const data= await fetch(dat.url);
        const response=await data.json();
       console.log(response);
      applyData(response);
 
     
     }
  
    return {sendRequest:sendRequest};
      
}

