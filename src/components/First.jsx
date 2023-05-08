import Second from "./Second";
function Element() {
    return (
        <>
            <div>Первый компонент</div>
            <Second
                lastname='Юрьевич'
                surname='Савеленко'
                count={false}
            />
        </>
    )
}
export default Element;