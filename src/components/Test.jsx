import { useState } from "react";


function Test(props) {
    const [arrItem, setArrItem] = useState([{
        id: 1,
        name: 'Yruiy',
        surname: 'Savelenko'
    }])
    function appendElement() {
        return (arrItem.map((el) => 
            <Test el={el} />
        ))

    }
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.surname}</h2>
            <button onClick={appendElement}>Нажми</button>
        </div>
    )
}
export default Test;