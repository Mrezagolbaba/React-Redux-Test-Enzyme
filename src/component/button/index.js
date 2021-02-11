import PropTypes from "prop-types";


function SharedButton(props){

   function submitEvent(){
        if(props.emitEvent){
            props.emitEvent()
        }

    }

    const {buttonText}= props

    return(
        <button onClick={()=>submitEvent()} data-test="buttonComponent">
            {buttonText}
        </button>
    )
}

SharedButton.prototype = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
};

export default SharedButton;