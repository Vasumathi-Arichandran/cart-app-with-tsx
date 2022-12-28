import React, { useEffect, useState } from 'react'
import { useOriginal } from './customHooks/useOriginal';
import {useProducts} from './customHooks/useProducts';
export const FilterByPrice=(props:{state:{products:[
    {
        id: number,
        title: string,
        description: string,
        link: string,
        price: number,
      }
],showDetails:[],addedProducts:[
  
    {
        id: string,
        title: string,
        description: string,
        link: string,
        price: string,
      }

]},dispatch:any})=> {

    const [showProducts,setShowProducts]=useState([])
    const [showOrgProd,setShowOrgProd]=useState([])
    const [lessThan,setLessThan]=useState(0);
    const [greaterThan,setGreaterThan]=useState(0);  

    const PriceLessThan=(event:any)=>{
        setLessThan(event.target.value);
    
    }
    const PriceGreaterThan=(event:any)=>{
        setGreaterThan(event.target.value);
      
    }

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

}

    const{sendRequest:fetchTasks}= useProducts({url:"https://products-c44ed-default-rtdb.firebaseio.com/products.json"},transformTasks);
    const{sendRequest:fetchOriginalTasks}= useOriginal({url:"https://dummyjson.com/products"},transformOriginal);

useEffect(()=>{
  fetchTasks();
  fetchOriginalTasks();
},[])
  const{products, showDetails,addedProducts}=props.state;
  
function LessHandler() {
    console.log(showProducts);
    console.log(showOrgProd)

       let filteredProducts= showOrgProd.map((pro:any)=>
       showOrgProd.filter((pro:any)=>(pro.price>=lessThan) && (pro.price<=greaterThan))
     
   )

   let filteredProducts2= showProducts.map((pro:any)=>
   showProducts.filter((pro:any)=>(parseInt(pro.price)>=lessThan) && (parseInt(pro.price)<=greaterThan))
 
)
console.log(filteredProducts[0])
console.log(filteredProducts2[0])

   props.dispatch({
    type:"FILTER_PRODUCTS",
    payload:filteredProducts[0],
   })
   props.dispatch({
    type:"FILTER_ADDED_PRODUCTS",
    payload:filteredProducts2[0],
   })

// setLessThan(0);
// setGreaterThan(0);
}


  return (
 
    <div>
        <h2>Filter Products</h2>
        <div className='input-value'>
                <label htmlFor="title">Filter By From</label>
            <input type="number" id="title" data-testid="less-than" onChange={(e:any)=>setLessThan(e.target.value)} value={lessThan}></input>
            <label htmlFor="title">To</label>
            <input type="number" id="title" data-testid="greater-than"  value={greaterThan} onChange={PriceGreaterThan}></input>
            </div>
            <button className="show-details" data-testid="search-button" onClick={LessHandler}>Search</button>

    </div>
  )
}
