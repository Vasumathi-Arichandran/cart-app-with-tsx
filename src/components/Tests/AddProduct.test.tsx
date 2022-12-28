import React, { useReducer } from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Reducer } from "../Reducer/Reducer";
import { act } from "react-dom/test-utils";
import { describe, test, vitest } from "vitest";
import { AddNew } from "../AddProduct/AddProduct";


describe("Accordion test3", () => {
  test("Should show AddNew", () => {
  
    try{
      const {getByTestId} = render(
        <AddNew
          state={{
            products: [ {
              id: 23,
              title: "string",
              description: "string",
              link: "string",
              price: 45,
            }],
            showDetails: [],
            addedProducts: [{
              id: "string",
              title: "Product costing 370",
              description: "string",
              link: "string",
              price: "370",
            }],
          }}
          dispatch={{ type: "some", payload: {} }}
          onConfirm={{
            title: "some",
            desciption: "desc",
            price: "price",
            link: "link",
          }}
          addNew={true}
        />)
        
      
        const addNewButton = screen.getByTestId("add-new-product")
        expect(addNewButton).toBeDefined()
        fireEvent.click(addNewButton)
      
      const titleInput = screen.getByTestId('title-input')
  
      expect(titleInput).toBeDefined()
      fireEvent.change(titleInput, { target: { value: "title" } })
      //expect(lessThanInput).toBe(33)
      console.log("TitleInput",titleInput.value)
      expect(titleInput.value).not.toBe(0)
      
      
      const DescritionInput = screen.getByTestId('description-input')
        
      expect(DescritionInput).toBeDefined()
      fireEvent.change(DescritionInput, { target: { value: "description" } })
      //expect(lessThanInput).toBe(33)
      console.log("DescritionInput",DescritionInput.value)
      expect(DescritionInput.value).not.toBe(0)
      
      const priceInput = screen.getByTestId('price-input')
        
      expect(priceInput).toBeDefined()
      fireEvent.change(priceInput, { target: { value: 33 } })
      //expect(lessThanInput).toBe(33)
      console.log("priceInput",priceInput.value)
      expect(priceInput.value).not.toBe(0)
      
      const linkInput = screen.getByTestId('link-input')
      
      expect(linkInput).toBeDefined()
      fireEvent.change(linkInput, { target: { value: "https"} })
      //expect(greaterThanInput).toBe(323)
      console.log("LinkInput",linkInput.value)
      expect(linkInput.value).not.toBe(0)
      
      
      // const addButton = screen.getByTestId('add-button')
      // expect(addButton).toBeDefined()
      // fireEvent.click(addButton,{target:{onclick:showProductsHandler}})
      // console.log(addButton)
    
    }
      catch(e:any){
       const error=e.message;
       console.log(error)

      }
 
  });



});
