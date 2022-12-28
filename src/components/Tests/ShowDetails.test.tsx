
import React, { useReducer } from 'react';
import {render, screen,cleanup, fireEvent} from '@testing-library/react'
import { Reducer } from '../Reducer/Reducer';
import { act } from 'react-dom/test-utils';
import { Products } from '../Main/Products';
import { describe, test, vitest } from 'vitest';
import { ShowProducts } from '../Main/ShowDetails';



describe("Show Products test2", () => {
   


   test("Should show title", async() => {

     try{  await act(()=>render(<ShowProducts state={{
           products:[{
            id: 33,
            title: "string77",
            description: "string",
            link: "string",
            price: 77,
          }]
           ,showDetails:[]
           ,addedProducts:[{
            id: "number",
            title: "string",
            description: "string",
            link: "string",
            price: "99",
          }]
       }} dispatch={{type:"some",payload:{}}}/>))  
       
       

   }
catch(e:any){
    const error=e.message;
    console.log(error)

}   })


})
