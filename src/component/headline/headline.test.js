import { shallow } from "enzyme";
import { findByTestAtrr } from "../../../Utils";
import  Headline  from "./index";


const setUp = (props={})=>{
    const component = shallow(<Headline {...props} />); 
    return component;
}

describe('Headline Component',()=>{


    describe('Have props',()=>{
        beforeEach(()=>{
            let wrapper;
            const props = {
                header:'Test header',
                desc:'Test Desc',
            }
            wrapper = setUp(props)
        })
        it('Should render without errors',()=>{
            const component = findByTestAtrr(wrapper,'headlineComponent');
            expect(component.length).toBe(1)
        })
        it('Should render a H1',()=>{
            const h1 = findByTestAtrr(wrapper,'header');
            expect(h1.length).toBe(1)
        })
        it('Should render a desc',()=>{
            const desc = findByTestAtrr(wrapper,'desc');
            expect(desc.length).toBe(1)
        })
    })
    describe('Have No props',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setUp()
        })
        it('Should not render ',()=>{
            const component = findByTestAtrr(wrapper,'headlineComponent');
            expect(component.length).toBe(0)
        })

    })

   
})