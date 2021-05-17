import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import countryList from 'react-select-country-list'
import Form from 'react-bootstrap/Form'

const Select = props => {
    const [selected, setSelected] = useState("HR");

    const countries = countryList().getValues();
    return (
        <Form className="form">

            <Form.Group className="form-group">
                <ReactFlagsSelect
                    className="labelInput"
                    selected={selected}
                    onSelect={code => { props.onSelect(code); setSelected(code) }}
                    countries={countries}
                    placeholder="Odaberi zemlju"
                />
                <Form.Label className={"labelUp"} >{props.labelName}</Form.Label>
            </Form.Group>
        </Form>
    );
};
export default Select;