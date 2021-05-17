import React from "react";
import Form from 'react-bootstrap/Form'


const Input = props => {

    return (
        props.labelUp ?
            <Form className="form">

                <Form.Group className="form-group">
                    <Form.Control
                        id={props.name}
                        type="text"
                        className="labelInput"
                        value={props.value}
                        onChange={e => { props.onChange(e) }}
                    />
                    <Form.Label className="labelUp " >{props.labelName}</Form.Label>
                    <Form.Label className="labelDown ">{props.labelDownText}</Form.Label>
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