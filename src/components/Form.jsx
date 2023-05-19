// import Second from "./Second";
import { useState } from "react";

function Form({ setSubmittedValues }) {
    const [inputValue, setInputValue] = useState('');

    function getValue(event) {
        setInputValue(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();

        // const task = {
        //     id: { id },
        //     done: false,
        //     value: { inputValue }
        // }
        if (inputValue !== '' && inputValue !== ' ') {
            setSubmittedValues((current) => [...current, inputValue]);
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit} type='submit'>
            <input value={inputValue}
                onChange={getValue} type="text" />
            <button>нажми</button>
        </form>
    )
}
export default Form;