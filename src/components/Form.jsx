import { useState } from "react";

function Form({ setSubmittedValues }) {
    const [inputValue, setInputValue] = useState('');

    function getValue(event) {
        setInputValue(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        const task = {
            id: crypto.randomUUID(),
            done: false,
            value: inputValue
        }

        if (inputValue !== '' && inputValue !== ' ') {
            setSubmittedValues((current) => [...current, task]);
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit} type='submit'>
            <input className="input" value={inputValue}
                onChange={getValue} type="text" />
            <button className="btn">нажми</button>
        </form>
    )
}
export default Form;