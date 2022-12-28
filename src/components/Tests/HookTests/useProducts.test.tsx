import { render } from "@testing-library/react";
import { vi } from "vitest";
import { useOriginal } from "../../FilterProduct/customHooks/useOriginal";
import { useProducts } from "../../FilterProduct/customHooks/useProducts";
type useProducts=(dat: {
    url: string;
}, applyData:({})=>any)=> any

describe("App",()=>{
    const sendRequest=vi.fn(); 
    it("loading Products title by filtering",()=>{
      try{
        const {container}=render(useProducts({url:"https://dummyjson.com/products"},sendRequest))
        console.log(container.innerHTML)
      }

       catch(e:any){
        const error=e.message;
        console.log(error)
       }

    })

  })