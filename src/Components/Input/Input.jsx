import "../Input/input.css"
function Input(props) {
    return (
        <>

            <label htmlFor="">{props.label}</label>
            <input  type={props.type} name="" id="inputProps" placeholder={props.placeholder} />


        </>
    )
}

export default Input

