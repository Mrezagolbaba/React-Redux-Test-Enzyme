import { findByTestAtrr,checkProps } from "../../../utils";
import SharedButton from "./index";


describe('SharedButton Component',()=> {

    describe('Checking PropsTypes ',() => {


        it('Should NOT throw a warning',()=> {
            
            const expectedProps = {
               buttonText:' Example Button Text',
               emitEvent:()=>{

               }
            }
            const propsErr=checkProps(SharedButton,expectedProps)

        })
    })





})