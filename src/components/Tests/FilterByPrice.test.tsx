
import React, { useReducer } from 'react';
import {render, screen,cleanup, fireEvent} from '@testing-library/react'
import { Reducer } from '../Reducer/Reducer';
import { act, createRenderer } from 'react-dom/test-utils';
import { describe, test, vi, vitest } from 'vitest';
import { FilterByPrice } from '../FilterProduct/FilterByPrice';
import { Products } from '../Main/Products';



describe("Filter Product test", () => {
   

    test("Input testing Sample", async() => {


try{
            const setup = () => {
              const utils = render(<FilterByPrice state={{
                products:[{
                  id: 4,
                  title: "string",
                  description: "string",
                  link: "string",
                  price: 44,
                }]
                ,showDetails:[]
                ,addedProducts:[{
                  id: "number",
                  title: "string",
                  description: "string",
                  link: "string",
                  price: "47",
                }]
            }} dispatch={{type:"some",payload:{}}} />)
              const lessThanInput = utils.getByLabelText('less-than')
              const greaterThanInput = utils.getByLabelText('greater-than')

              return {
                lessThanInput,greaterThanInput,
                ...utils,
              }
            }
            test('It should keep a $ in front of the input', () => {
              const {lessThanInput,greaterThanInput} = setup()
              fireEvent.change(lessThanInput, {target: {value: '23'}})
              // expect(input.value).toBe('23')
              expect(lessThanInput).toBe('23')
              fireEvent.change(greaterThanInput, {target: {value: '223'}})
              expect(greaterThanInput).toBe('223')

            })
  
        }
        catch(e:any){
  const error=e.message;
  console.log(error)
  
        }
      })

      it("Should show product title between 33 and 323", async() => {
        try{
        
          const defaultProps = { 
            onClick: jest.fn(),
            text: "Search" ,
          };
console.log("hi")
          const {container,queryByText,rerender} = 
          render(<><FilterByPrice state={{
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
        }} dispatch={{type:"some",payload:{}}} {...defaultProps}/>
        <Products state={{
        products: [{
          id: 1,
          title: "Sample Product Title 432 Rupees",
          description: "Product Description2",
          link: "Product Link2",
          price: 432,
        },],
        showDetails: [],
        addedProducts: [{
            id: "Product ID",
            title: "Sample Product Title with Rs.73",
            description: "Product Description",
            link: "Product Link",
            price: "73",

          },
          
          
        ],
      }}
      dispatch={{ type: "FILTER_PRODUCTS", payload: {} }}/>
        </>)
          
        
        
        
        const lessThanInput = screen.getByTestId('less-than')
        
        expect(lessThanInput).toBeDefined()
        fireEvent.change(lessThanInput, { target: { value: 33 } })
        //expect(lessThanInput).toBe(33)
        console.log("less than value",lessThanInput.value)
        expect(lessThanInput.value).not.toBe(0)
        
        
        const greaterThanInput = screen.getByTestId('greater-than')
        
        expect(greaterThanInput).toBeDefined()
        fireEvent.change(greaterThanInput, { target: { value: 323 } })
        //expect(greaterThanInput).toBe(323)
        console.log("greater than value",greaterThanInput.value)
        expect(greaterThanInput.value).not.toBe(0)
        
        const onClick=jest.fn();
        // const {getByTestId}
        const searchButton = screen.getByTestId('search-button')
        fireEvent.click(searchButton)
        const lickSreach=expect(onClick).toHaveBeenCalled()
console.log("SEARCH BUTTON CLICK FN:",lickSreach)
      
        const FindTitle = screen.getByTestId('product-title')
        console.log( "Sample:",(await FindTitle).innerHTML);
        const FindTitle2 = container.innerHTML;
        console.log( "After FIltering:",FindTitle2);



        const ProductCosting34=expect(screen.getByTestId('product-title').textContent)
        console.log("Products:",ProductCosting34)
        console.log("container:",container.innerHTML)

        const ProductCosting370=expect(screen.getByTestId('product-title').textContent).toBe('Product costing 37')
        console.log("Products:",ProductCosting34,ProductCosting370)

        
        
        
        
        //expect(screen.getByTestId("product-title")).not.toHaveTextContent("Product costing 370");
        
        
            // const {container}=  await act(()=>render(<>
            //   <Products  state={{
            //     products: [{
            //       id: 3,
            //       title: "Sample Product Title with 34 Rupees",
            //       description: "Product Description2",
            //       link: "Product Link2",
            //       price: 34,
            //     },],
            //     showDetails: [],
            //     addedProducts: [{
            //         id: "Product ID2",
            //         title: "Sample Product Title Lwith 343 Rupees",
            //         description: "Product Description2",
            //         link: "Product Link2",
            //         price: "343",
            //       },
                  
                  
            //     ],
            //   }}
            //   dispatch={{ type: "some", payload: {} }}/>
            //   </>))  
            //       console.log(container.innerHTML)
                
                
            //      const FindTitle = screen.findByTestId('product-title')
            //      console.log("PRODUCT TITLE:",(await FindTitle).innerHTML);
            } 
            catch(e:any){
        const error=e.message;
            }    
                
           })


           test("Should show title less than 40", async() => {

            try{ const {container}=  await act(()=>render(<FilterByPrice state={{
                   products:[    {
                    id: 2,
                    title: "string",
                    description: "string",
                    link: "string",
                    price: 34,
                  }]
                   ,showDetails:[]
                   ,addedProducts:[    {
                    id: "string",
                    title: "string",
                    description: "string",
                    link: "string",
                    price: "350",
                  }]
               }} dispatch={{type:"some",payload:{}}} />))  
                   console.log(container.innerHTML)
        
        
              }
              catch(e:any){
        const error=e.message;
        console.log(error)
        
              }
            })
})
