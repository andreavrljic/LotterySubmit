import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import countryList from 'react-select-country-list'
import Form from 'react-bootstrap/Form'

const Select = props => {
    const [selected] = useState("HR");
    const [labelColor, setlabelColor] = useState("");

    const countries = countryList().getValues();
    return (
        <Form className="form">
            <Form.Label className={"labelUp " + labelColor} >{props.labelName}</Form.Label>
            <Form.Group className="form-group"
                onMouseEnter={() => setlabelColor("labelUpColor")}
                onMouseLeave={() => setlabelColor("")}>
                <ReactFlagsSelect
                    className="labelInput"
                    selected={selected}
                    onSelect={props.onSelect}
                    countries={countries}
                    placeholder="Odaberi zemlju"
                />

            </Form.Group>
        </Form>
    );
};
export default Select;