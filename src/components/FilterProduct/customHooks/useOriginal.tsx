import React, { useEffect, useState } from 'react'     


export function useOriginal(dat:{url:string},applyData:any) :any
{
   

    const sendRequest=async()=>{
       
         const data= await fetch("https://dummyjson.com/products");
        // const data= await fetch(dat.url);
        const response=await data.json();
       console.log(response);
      applyData(response.products);
    
     
     }
  
    return {sendRequest:sendRequest};
      
}

