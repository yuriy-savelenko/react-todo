import Second from "./Second";
function Element() {
    return (
        <>
            <div>Первый компонент</div>
            <Second
                count= {false}
                props={{
                    lastname: 'Юрьевич',
                    surname: 'Савеленко'
                }} />
        </>
    )
}
export default Element;