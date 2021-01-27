import { shallow } from "enzyme";
import { findByTestAtrr } from "../../../Utils";
import  Headline  from "./index";
import checkPropTypes from "check-prop-types";

const setUp = (props={})=>{
    const component = shallow(<Headline {...props} />); 
    return component;
}

describe('Headline Component',()=>{

    describe('Checking PropTypes',()=>{
        it('Should not throw a warning',()=>{
            const expectedProps = {
                header:' Test header',
                desc:'Test Desc',
                tempArr:[{
                    firstName:'Test firstName',
                    lastName:'Test lastName',
                    age:23,
                    onlineStatus:false
                }]
            }
            const propsErr=checkPropTypes(Headline.prototype,expectedProps,'props',Headline.name)
            expect(propsErr).toBeUndefined
        })
    })
    describe('Have props',()=>{
        let wrapper;
        beforeEach(()=>{
            
            const props = {
                header:'Test header',
                desc:'Test Desc',
            };
            wrapper = setUp(props)
        });
        it('Should render without errors',()=>{
            const component = findByTestAtrr(wrapper,'headlineComponent');
            expect(component.length).toBe(1)
        })
        it('Should render a H1',()=>{
            const h1 = findByTestAtrr(wrapper,'header');
            expect(h1.length).toBe(1)
        })
        it('Should render a desc',()=>{
            const desc = findByTestAtrr(wrapper,'decs');
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