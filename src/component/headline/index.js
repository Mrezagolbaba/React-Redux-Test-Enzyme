import PropTypes, { object } from "prop-types";
import "./styles.scss";
const Headline = (props)=>{
    
    if(!props.header){
        return null
    }
    return(       
            <div className="headline" data-test="headlineComponent">
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
        onlineStatus:PropTypes.bool
    }))
 }
 export default Headline;