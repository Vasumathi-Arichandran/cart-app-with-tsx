import { render } from "@testing-library/react";
import { vi } from "vitest";
import { useOriginal } from "../../FilterProduct/customHooks/useOriginal";
type useOriginal=(dat: {
    url: string;
}, applyData?: any)=> any
describe("App",()=>{
    const response=vi.fn();
    it("oading  Original Products title by filtering",async()=>{
      try{
        const {container}=render(useOriginal({url:"https://dummyjson.com/products"},response))
        console.log(container.innerHTML)
      }
       catch(e:any){
        const error=e.message;
        console.log(error)
       }

    })

  })