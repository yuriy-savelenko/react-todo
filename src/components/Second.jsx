import { useState } from "react";

function Second() {
    const [index, setIndex] = useState(0);
    function handleClickPlus() {
        setIndex(index + 1);
    }
    function handleClickMinus() {
        setIndex(index - 1);
    }
    return (
        <>
            <button onClick={handleClickMinus}>Минус</button>
            <button onClick={handleClickPlus}>Плюс</button>

            <div>{index}</div>
        </>
    )
}
export default Second;