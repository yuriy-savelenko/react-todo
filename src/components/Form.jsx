// import Second from "./Second";
import { useState } from "react";

function Form() {
    const [inputValue, setInputValue] = useState('');
    function getValue(event) {
        setInputValue(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(inputValue);
        return (
            <div>{inputValue}</div>
        )

    }

    return (
        <>
            <form onSubmit={handleSubmit} type='submit'>
                <input value={inputValue}
                    onChange={getValue} type="text" />
                <button>нажми</button>
            </form>
        </>
    )
}
export default Form;