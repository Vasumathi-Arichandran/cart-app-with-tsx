import React, { useEffect, useState } from 'react'     


export function useProducts(dat:{url:string},applyData:any) :any
{
    //const [showProducts,setShowProducts]=useState([])

    const sendRequest=async()=>{
       
         const data= await fetch("https://products-c44ed-default-rtdb.firebaseio.com/products.json");
        // const data= await fetch(dat.url);
        const response=await data.json();
       console.log(response);
      applyData(response);
    //    const loadedProducts:any=[];
    //    for(const key in response){
    //        loadedProducts.push({
    //            id:key,
    //            title:response[key].title,
    //            description:response[key].description,
    //            price:response[key].price,
    //            link:response[key].link,
      
    //        })
    //    }
  
       // setShowProducts(loadedProducts);
     
     }
    //  useEffect(()=>{
    //     showProductsHandler();
    //   },[])
     
    //   return showProducts;
    return {sendRequest:sendRequest};
      
}
