import React, { useEffect, useState } from 'react'
import { useOriginal } from './customHooks/useOriginal';
import { useProducts } from './customHooks/useProducts';
export const Filter500To1000=(props:{state:{products:[
    {
        price:number
    }
],showDetails:[],addedProducts:[  {
  price:number
}
]},dispatch:any})=> {


  const [showProducts,setShowProducts]=useState([])
  const [showOrgProd,setShowOrgProd]=useState([])

  const transformTasks=(tasksObj:any)=>{
        const loadedProducts:any=[];
     for(const key in tasksObj){
         loadedProducts.push({
             id:key,
             title:tasksObj[key].title,
             description:tasksObj[key].description,
             price:tasksObj[key].price,
             link:tasksObj[key].link,
    
         })
     }

     setShowProducts(loadedProducts);
  }


  const transformOriginal=(tasksOrgObj:any)=>{
    console.log(tasksOrgObj);
    const loadedOrgProducts:any=[];
  for(const key in tasksOrgObj){
  loadedOrgProducts.push({
         id:key,
         title:tasksOrgObj[key].title,
         description:tasksOrgObj[key].description,
         price:tasksOrgObj[key].price,
         link:tasksOrgObj[key].link,
  
     })
  }
  
  setShowOrgProd(loadedOrgProducts);
  console.log(showOrgProd);
  }
console.log(showProducts);
  const{sendRequest:fetchTasks}= useProducts({url:"https://products-c44ed-default-rtdb.firebaseio.com/products.json"},transformTasks);
  const{sendRequest:fetchOriginalTasks}= useOriginal({url:"https://products-c44ed-default-rtdb.firebaseio.com/products.json"},transformOriginal);

useEffect(()=>{
fetchTasks();
fetchOriginalTasks();

},[])



    const{products, showDetails,addedProducts}=props.state;
    
     function LessHandler() {
       let filteredProducts= showOrgProd.map((pro:any)=>
       showOrgProd.filter((pro:any)=>pro.price<1000&&pro.price>499)
     
   )


   let filteredProducts2= showProducts.map((pro:any)=>
   showProducts.filter((pro:any)=>pro.price<1000&&pro.price>499)
 
)
   props.dispatch({
    type:"FILTER_PRODUCTS_500-1000",
    payload:filteredProducts[0],
   })
   props.dispatch({
    type:"FILTER_ADDED_PRODUCTS_500-1000",
    payload:filteredProducts2[0],
   })
   console.log(filteredProducts2[0]);
}
  return (
    <div>
       
        <button onClick={LessHandler}>500-1000</button>

    </div>
  )
}
