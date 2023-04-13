import { useState } from "react";

export default function InputNumeric(params) {

    const [ inputValue, setInputValue ] = useState (params.value);

    function handleInputChange(event) {
        setInputValue(event.target.value);
        params.handleChange(event.target.name, event.target.value);
    }

    function handleButtonClick(event) {
        let value = Number(inputValue);
        event.preventDefault();
        if (event.target.name === 'decrease') {
            if (value > 0) {
                console.log('Decrease');
                setInputValue(value - 1);
                params.handleChange(params.name, value - 1);
            }
        } else {
            console.log('Increase');
            setInputValue(value + 1);
            params.handleChange(params.name, value + 1);
        }
    }

    return (
        <>
            <button name="decrease" onClick={handleButtonClick}>-</button>
            <input
                type={params.type} 
                min={params.min}
                id={params.id}
                name={params.name}
                onChange={handleInputChange}
                value={inputValue}
            ></input>
            <button name="increase" onClick={handleButtonClick}>+</button>
        </>
    );
}