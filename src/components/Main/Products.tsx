
import React from 'react'

import "./Products.css"


export const Products=(props:{state:{products:[{
    id: number,
    title: string,
    description: string,
    link: string,
    price: number,
  },],showDetails:[],addedProducts:[ {
    id: string,
    title: string,
    description: string,
    link: string,
    price: string,
  },]},dispatch:any})=>{
    const{products, showDetails,addedProducts}=props.state;
  

    return <div  role="heading"className="Products">
       {
        addedProducts.map((pro:any)=>(
    <div  key={pro.id} className="selected">
        {/* PRODUCT TITLE IS DISPLAYED HERE */}
        <h4 role="heading" data-testid="product-title" className='product-title' >{pro.title}</h4>
    <button className="show-details" key={pro.id} onClick={()=>props.dispatch({
            type:"SHOW_DETAILS",
            payload:{
                id:pro.id,
                title:pro.title,
                thumbnail:pro.thumbnail,
                qty:1,
                description:pro.description,
                price:pro.price,
            }
        })}>Show Details</button>
     
       
        </div>
))}
{products.map((prod:any)=>(
    <div key={prod.id} className="selected">
        <h4>{prod.title}</h4>
     
        {showDetails.some((p:any)=>p.id===prod.id)? (<button className="show-details">Hide Details</button>):
        (<button className="show-details" onClick={()=>props.dispatch({
            type:"SHOW_DETAILS",
            payload:{
                id:prod.id,
                title:prod.title,
                thumbnail:prod.thumbnail,
                qty:1,
                description:prod.description,
                price:prod.price,
            }
        })}>Show Details</button>)
    }
       
        </div>
))}

    </div>
}