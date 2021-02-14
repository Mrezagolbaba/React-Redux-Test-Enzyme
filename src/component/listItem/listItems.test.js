import { shallow } from "enzyme";
import { findByTestAtrr,checkProps } from "../../../utils";
import ListItem from "./index";

describe('ListItem Component',()=> {

    describe('Checking PropsTypes ',() => {

        it('Should NOT throw a warning',()=> {
            const expectedProps = {
                title: 'Example Title',
                desc:"some text",
             }

             const propsError = checkProps(ListItem,expectedProps)
        })

    })

});