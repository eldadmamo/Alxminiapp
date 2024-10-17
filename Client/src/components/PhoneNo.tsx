import React, {useState} from "react";
import {Input} from "antd";

function PhoneNumberValidation(){

    const [PhoneNumber, setPhoneNumber] = useState('')
    const [valid, setValid] = useState(true);

    const handleChange = (event) => {
        const input = event.target.value;
        setPhoneNumber(input);
        setValid(validatePhoneNumber(input))
    }

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\d{10}$/;
        return phoneNumberPattern.test(phoneNumber);
    }


    return (
        <div>
            <label>
                Phone Number:
                <Input
                type="text"
                value={PhoneNumber}
                onChange={handleChange}
                />
            </label>
            {valid && <p>Please enter a valid 10-digit phone number</p>}
        </div>
    )
}

export const PhoneNumberValidation;