import React, { useState ,useRef, useEffect} from 'react'
import { ShowProducts } from './ShowProducts';

const isEmpty=(value:string):any=>
{
    value.trim()==="";
};
export const AddNew=(props:{state:{products:[],showDetails:[],addedProducts:[

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
    let [price,setPrice]=useState("");
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

//     let titleRef=React.useRef<HTMLInputElement>(null);
//     let descRef=React.useRef<HTMLInputElement>(null);
//     let priceRef=React.useRef<HTMLInputElement>(null);
//     let linkRef=React.useRef<HTMLInputElement>(null);


//  useEffect(() => {
//     if (titleRef.current) {
//         titleRef.current.value;
//     }
//     if (descRef.current) {
//         descRef.current.value;
//     }
//     if (priceRef.current) {
//         priceRef.current.value;
//     }
//     if (linkRef.current) {
//         linkRef.current.value;
//     }
//   }, []);
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
const productPriceisValid:boolean=!isEmpty(price);
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
 setPrice("");
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
       {!addNew && <button className='show-details' onClick={addNewHandler}>Add New Product</button>}
        {addNew && <form onSubmit={confirmHandler}>
            <h2> Add New Product</h2>
            <div className='input-value'>
                <label htmlFor="title">Product Title</label>
            <input type="text" id="title" value={title} onChange={TitleInput}></input>
{!formValid.title && <p className='error-value'> *Please enter a valid name</p>}
            </div>
            <div className='input-value'>
                <label htmlFor="description">Product Description</label>
            <input type="text" id="description" value={description} onChange={DescriptionInput}></input>
            {!formValid.description && <p className='error-value'> *Please enter a valid description</p>}

            </div>
            <div className='input-value'>
                <label htmlFor="price">Product Price</label>
            <input type="text" id="price" value={price} onChange={PriceInput}></input>
            {!formValid.price && <p className='error-value'> *Please enter a valid price</p>}

            </div>
            <div className='input-value'>
                <label htmlFor="link">Product Image Link</label>
            <input type="text" id="link" value={link} onChange={LinkInput}></input>
            {!formValid.link && <p className='error-value'> *Please enter a valid link</p>}

            </div>

            
       
                <button className="show-details"
                onClick={showProductsHandler}
          
            > Add Product</button>
          
        
       
    
        </form>}
    </div>
  )
}
