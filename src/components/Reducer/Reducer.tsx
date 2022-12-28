import React from 'react'

export const Reducer=(state:any,action:any)=>{
switch(action.type){
    case "ADD_PRODUCTS":
   console.log(action );
    return{...state, addedProducts:action.payload}; 
    
    case "ADD_ORIGINAL_PRODUCTS":
    return{...state, products:action.payload}; 
    case "SHOW_DETAILS":
        return{...state, showDetails:[{...action.payload}]};
    case "SHOW_ADDED_PRODUCTS":
            
       return{...state, addedProducts:action.payload};

       // Less than 40
    case "FILTER_PRODUCTS_40":
          return{...state, products:action.payload}; 

    case "FILTER_ADDED_PRODUCTS_40":
                    return{...state, addedProducts:action.payload}; 

      // Less than 100
      case "FILTER_PRODUCTS_100":
        return{...state, products:action.payload}; 

     case "FILTER_ADDED_PRODUCTS_100":
      return{...state, addedProducts:action.payload}; 


      // Less than 100 to 500
      case "FILTER_PRODUCTS_100-500":
        return{...state, products:action.payload}; 

     case "FILTER_ADDED_PRODUCTS_100-500":
      return{...state, addedProducts:action.payload}; 

   // Less than 500 to 1000
   case "FILTER_PRODUCTS_500-1000":
    return{...state, products:action.payload}; 

 case "FILTER_ADDED_PRODUCTS_500-1000":
  return{...state, addedProducts:action.payload}; 


    // Filter By search
    case "FILTER_PRODUCTS":
      return{...state, products:action.payload}; 
  
   case "FILTER_ADDED_PRODUCTS":
    return{...state, addedProducts:action.payload}; 


    default:
        break;
}
} 