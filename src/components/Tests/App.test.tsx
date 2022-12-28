import React from "react";
import {render, screen,cleanup} from '@testing-library/react'
// import { FetchMock } from "vitest-fetch-mock/types";
import { describe, it, vi } from "vitest";
import App from "../../App";
import { Products } from "../Main/Products";
  import { fetch } from 'cross-fetch';
import { createRenderer } from "react-dom/test-utils";

  const tojson = (compo:any) => {
    const result = JSON.stringify([{
   
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
    }])
    const result2=JSON.stringify(fetch("https://products-c44ed-default-rtdb.firebaseio.com/products.json"))
 
    console.log("result after App rendering:",result2)
    // expect(result).toBeDefined()
    // expect(result).not.toBeInstanceOf(Array)
}

  describe("App",()=>{
  

    it("loading Products data single title",async()=>{
      try{
        // const {container}= await render(<App />)
        const compo = render(<App/>)
        console.log("App container:",compo)
    const result2=JSON.stringify(fetch("https://products-c44ed-default-rtdb.firebaseio.com/products.json"))
    // expect(result2).toMatchSnapshot()

        //let tree = tojson(compo)
        // console.log("tree",tree);
        //expect(tree).toMatchSnapshot()


      }
       catch(e:any){
        const error=e.message;
        console.log(error)

       }

    })

 
  
  // beforeEach(() => {
  //   fetch.mockClear();
  // });
  
  // it("finds exchange", async () => {
  //   global.fetch = vi.fn(() =>
  //   Promise.resolve({
  //     json: () => Promise.resolve(),
  //   })
  // );
  //   expect(fetch).toBeDefined;
  //   console.log("fetch")
  // });

  })

 