export default function Alert(props) {


  return (

    props.alert && 
        <div class={`alert alert-${props.alert.type}`} role="alert">
            <h7 style={{fontWeight : "500"}}>{props.alert.msg}</h7>
        </div>  
)
}
