import React, { useState } from "react";
import Form from 'react-bootstrap/Form'


const Input = props => {

    const [labelColor, setlabelColor] = useState("");
    const [clicked, setClicked] = useState(0);
    const [clicked2, setClicked2] = useState(0);
    const [name, setName] = useState("")

   /*  function colorType() {
        console.log("inside", clicked)
        if (props.value.length > 0) {
            return "labelUpColor"
        } else if (clicked2 === 1)
       { console.log("clicked", name)
            return "labelUpColor"}
        else if (clicked === 1)
            return "labelUpColor"
        else return ""
    }
 */
    return (
        props.labelUp ?
            <Form className="form">
                <Form.Label className={"labelUp " +labelColor} >{props.labelName}</Form.Label>
                <Form.Group className="form-group">
                    <Form.Control
                        id={props.name}
                        type="text"
                        required={props.value ? false : true}
                        className="labelInput"
                        value={props.value}
                        onChange={e => props.onChange(e)}
                        onMouseEnter={() => {setlabelColor("labelUpColor"); setClicked(1) }}
                        onMouseLeave={() => {setlabelColor(""); setClicked(0) }}
                        /* onInput={ (e) => {console.log(e) ; setlabelColor("labelUpColor")}}*/
                        /* onClick={(e) => {setlabelColor("labelUpColor"); setClicked2(1); setName(props.name) }} */
                        
                    />
                    <Form.Label className={"labelDown " + labelColor}>{props.labelDownText}</Form.Label>
                </Form.Group>
            </Form>
            :
            <Form className="form">
                <Form.Group className="form-group">
                    <Form.Control
                        type="text"
                        required={props.value ? false : true}
                        className="labelInput"
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={e => props.onChange(e)} />
                </Form.Group>
            </Form>

    );

};

export default Input;