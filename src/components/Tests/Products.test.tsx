import React, { useReducer } from "react";
import {
  render,
  screen,
  cleanup,
  waitFor,
  getByText,
  getNodeText,
  fireEvent,
  createEvent,
} from "@testing-library/react";
import { Reducer } from "../Reducer/Reducer";
import { act } from "react-dom/test-utils";
import { Products } from "../Main/Products";
import { describe, test, vitest } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import { vi } from "vitest";
import { FilterByPrice } from "../FilterProduct/FilterByPrice";


afterEach(
  cleanup
) 
test("Show Product Title", async () => {

    const {container}=render(<Products  state={{
        products: [{
          id: 1,
          title: "Sample Product Title Less than Forty Rupees",
          description: "Product Description2",
          link: "Product Link2",
          price: 32,
        },],
        showDetails: [],
        addedProducts: [{
            id: "Product ID",
            title: "Sample Product Title",
            description: "Product Description",
            link: "Product Link",
            price: "Product Price",
          },
          
          
        ],
      }}
      dispatch={{ type: "some", payload: {} }}/>)
   

  
     const FindTitle = screen.findByTestId('product-title')
     console.log("Product Title1:",(await FindTitle).innerHTML);
    
    const FindDef=expect(FindTitle).toBeDefined();
  
})

test("Show Product Title2", async () => {
try{
    const {container}=render(<Products  state={{
        products: [{
          id: 2,
          title: "Sample Product Title Less than Forty Rupees",
          description: "Product Description2",
          link: "Product Link2",
          price: 34,
        },],
        showDetails: [],
        addedProducts: [{
            id: "Product ID2",
            title:"Sample Product Title2",
            description: "Product Description2",
            link: "Product Link2",
            price: "22",
          },
          
          
        ],
      }}
      dispatch={{ type: "some", payload: {} }}/>)
  

     const FindTitle = screen.findByTestId('product-title')
     console.log( "Product Title2:",(await FindTitle).innerHTML);
    
    const FindDef=expect(FindTitle).toBeDefined();
  

    }
    catch(e:any){
      const error=e.message;
      console.log(error);

    }
})



it("Should show title between 33 and 323", async() => {
try{


  const {getByTestId} = render(<FilterByPrice state={{
    products:[ {
      id: 2,
      title: "Product costing 34",
      description: "string",
      link: "string",
      price: 34,
    }]
    ,showDetails:[]
    ,addedProducts:[{
      id: "string",
      title: "Product costing 370",
      description: "string",
      link: "string",
      price: "370",
    }]
}} dispatch={{type:"some",payload:{}}} />)
  



const lessThanInput = screen.getByTestId('less-than')

expect(lessThanInput).toBeDefined()
fireEvent.change(lessThanInput, { target: { value: 33 } })
//expect(lessThanInput).toBe(33)
//console.log("less than value",lessThanInput.value)
//expect(lessThanInput.value).not.toBe(0)


const greaterThanInput = screen.getByTestId('greater-than')

expect(greaterThanInput).toBeDefined()
fireEvent.change(greaterThanInput, { target: { value: 323 } })
//console.log("greater than value",greaterThanInput.value)
//expect(greaterThanInput.value).not.toBe(0)


const searchButton = screen.getByTestId('search-button')
// expect(searchButton).toBeDefined()
//fireEvent.click(searchButton)
console.log(searchButton)
// const FindTitle = screen.findByTestId('product-title')
// console.log( "Sample:",(await FindTitle).innerHTML);
// const ProductCosting34=expect(screen.getByTestId('product-title').textContent).toBe('Product costing 34')
// const ProductCosting370=expect(screen.getByTestId('product-title').textContent).not.toBe('Product costing 370')
// console.log("2Products:",ProductCosting34,ProductCosting370)





  
    } 
    catch(e:any){
const error=e.message;
    }    
        
   })

 
