


import React, { useReducer } from 'react';
 import {render, screen,cleanup} from '@testing-library/react'
import { Reducer } from './Reducer';
import { act } from 'react-dom/test-utils';
import { Products } from './Products';
import { describe, test, vitest } from 'vitest';

// window.fetch=jest.fn(()=>Promise.resolve({
//     json:()=>Promise.resolve({
//         title:"Nokia",
//         // price:34,
//     })
// }))

//  describe("Products",()=>{

//   const [state,dispatch]=useReducer(Reducer,{products:[],showDetails:[],addedProducts:[],});

//     test("loads the products dummy api",async()=>{
//     await act(()=>render(<Products state={state} dispatch={dispatch}/>))  
//      expect(screen.getByText("Nokia")).toMatchSnapshot();
//     })
//  })

// global.fetch=vitest.fn(()=>Promise.resolve({
//     json:()=>Promise.resolve({
//         title:"iPhone 9",
//         // price:34,
//     })
// }))

describe("Accordion test2", () => {
    


    test("Should show title", async() => {

        await act(()=>render(<Products state={{
            products:[]
            ,showDetails:[]
            ,addedProducts:[]
        }} dispatch={{type:"some",payload:{}}}/>))  
            //  expect(screen.getByText("iPhone 9")).toBe("iPhone 9");
            })
})
