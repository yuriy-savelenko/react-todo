function Second({ props, count }) {
    if (count) {
        count = 'Правда'
    } else {
        count = 'Не правда'
    }
    return (
        <>
            <p> {count}</p>
            <p>{props.lastname}</p>
            <p>{props.surname}</p>
            <p>Second Component</p>
        </>
    )
}
export default Second;