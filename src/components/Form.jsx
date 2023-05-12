// import Second from "./Second";
import { useState } from "react";

function Form() {
    const [inputValue, setInputValue] = useState('');
    const [submittedValues, setSubmittedValues] = useState([]);

    function getValue(event) {
        setInputValue(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSubmittedValues([...submittedValues, inputValue]);
        setSubmittedValues([...submittedValues, inputValue]);

        console.log(setSubmittedValues)

    }
    function handleDelete(index) {
        setSubmittedValues(submittedValues.filter((_, i) => i !== index));
    }
    return (
        <>
            <form onSubmit={handleSubmit} type='submit'>
                <input value={inputValue}
                    onChange={getValue} type="text" />
                <button>нажми</button>
                {submittedValues.map((value, index) => (
                    <div key={index}>{value}
                        <button onClick={() => handleDelete(index)}>Delete</button></div>
                ))}
            </form>
        </>
    )
}
export default Form;

// 1: Создаем переменную с состоянием InputValue
// 2: Создаем переменную с пустым массивом, с методом сохрнающим в массив новое стостояние.
// 3: создаем функцию которая запускает функцию изменяющую состояние значения инпута.
// 4: Создаем функцию сбрасывающую дефолтное поведение браузера + запускает функцию сизменяющую состояние массива