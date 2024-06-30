import { Component } from "react"
import './styles.css'

export class Button extends Component{

render(){
    const {text,onClick} = this.props;
    return(
        <button disabled className="button" onClick={onClick}>
            {text}
            </button>
    )
}
}