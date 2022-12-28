import React, { useState ,useRef, useEffect} from 'react'
import { ShowProducts } from '../Main/ShowDetails';

const isEmpty=(value:string):any=>
{
    value.trim()==="";
};
export const AddNew=(props:{state:{products:[{
    id: number,
    title: string,
    description: string,
    link: string,
    price: number,
  }],showDetails:[],addedProducts:[{
    id: string,
    title: string,
    description: string,
    link: string,
    price: string,
  }

]},dispatch:any,onConfirm:any})=> {
    const{addedProducts}=props.state;

   

    const [addNew,setAddNew]=useState(false);
    const [showProducts,setShowProducts]=useState([])
    const [formValid,setFormValid]=useState({
      title:true,
      description:true,
      price:true,
      link:true,  
    })
    let [title,setTitle]=useState("");
    let [description,setDescription]=useState("");
    let [price,setPrice]=useState(0);
    let [link,setLink]=useState("");

const TitleInput=(event:any)=>{
    setTitle(event.target.value);
    console.log(event.target.value)
}
const DescriptionInput=(event:any)=>{
    setDescription(event.target.value);
    console.log(event.target.value)
}
const PriceInput=(event:any)=>{
    setPrice(event.target.value);
    console.log(event.target.value)
}
const LinkInput=(event:any)=>{
    setLink(event.target.value);
    console.log(event.target.value)
}



    const addNewHandler=()=>{
setAddNew(true);
    }
    const confirmHandler=(event:any)=>{
        event.preventDefault();
        const productTitle:string=title;
        const productDesc:any=description;
        const productPrice:any=price;
         const productLink:any=link;
const productTitleisValid:boolean=!isEmpty(title);
console.log(productTitleisValid)
const productDescisValid:boolean=!isEmpty(description);
const productPriceisValid:boolean=price>0;
const productLinkisValid:boolean=!isEmpty(link);

setFormValid({
    title:productTitleisValid,
    description:productDescisValid,
    price:productPriceisValid,
    link:productLinkisValid
})

const formIsValid=productTitleisValid && productDescisValid && productPriceisValid&& productLinkisValid;

if(!formIsValid){
    return;
}
props.onConfirm({
    title:productTitle,
    description:productDesc,
    price:productPrice,
    link:productLink
})



 setTitle("");
 setDescription("");
 setPrice(0);
 setLink("");
 showProductsHandler();

      
    }


    
    const showProductsHandler=async()=>{
       
    const data= await fetch("https://products-c44ed-default-rtdb.firebaseio.com/products.json");
    const response=await data.json();
   console.log(response);
  
   const loadedProducts:any=[];
   for(const key in response){
       loadedProducts.push({
           id:key,
           title:response[key].title,
           description:response[key].description,
           price:response[key].price,
           link:response[key].link,
  
       })
   }
   props.dispatch({
    type:"ADD_PRODUCTS",
    payload:loadedProducts,
   })
console.log(loadedProducts)
    setShowProducts(loadedProducts);

   
   
  
  
  
 }
 useEffect(()=>{
    showProductsHandler();
  },[])
  return (
    <div>
       {!addNew && <button className='show-details' data-testid="add-new-product"  onClick={addNewHandler}>Add New Product</button>}
        {addNew && <form onSubmit={confirmHandler}>
            <h2> Add New Product</h2>
            <div className='input-value'>
                <label htmlFor="title">Product Title</label>
            <input type="text" id="title" value={title} data-testid="title-input" onChange={TitleInput}></input>
{!formValid.title && <p className='error-value'> *Please enter a valid name</p>}
            </div>
            <div className='input-value'>
                <label htmlFor="description">Product Description</label>
            <input type="text" id="description" value={description}  data-testid="description-input" onChange={DescriptionInput}></input>
            {!formValid.description && <p className='error-value'> *Please enter a valid description</p>}

            </div>
            <div className='input-value'>
                <label htmlFor="price">Product Price</label>
            <input type="number" id="price" value={price} data-testid="price-input" onChange={PriceInput}></input>
            {!formValid.price && <p className='error-value'> *Please enter a valid price</p>}

            </div>
            <div className='input-value'>
                <label htmlFor="link">Product Image Link</label>
            <input type="text" id="link" value={link} data-testid="link-input" onChange={LinkInput}></input>
            {!formValid.link && <p className='error-value'> *Please enter a valid link</p>}

            </div>

                <button className="show-details"
                onClick={showProductsHandler}
                data-testid="add-button" 
            > Add Product</button>
          
        
       
    
        </form>}
    </div>
  )
}
