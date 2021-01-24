import PropTypes, { object } from "prop-types";

const Headline = (props)=>{
    
    if(!props.header){
        return null
    }
    return(       
            <div data-test="headlineComponent">
                <h1 data-test='header'>{props.header}</h1>
                <p data-test='decs'>{props.desc}</p>
            </div>


    )
 }
 Headline.prototype = {
    header:PropTypes.string,
    desc:PropTypes.string,
    tempArr:PropTypes.arrayOf(PropTypes.shape({
        firstName:PropTypes.string,
        lastName:PropTypes.string,
        age:PropTypes.number,
    }))
 }
 export default Headline;