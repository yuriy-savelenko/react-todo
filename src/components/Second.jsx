function Second({count,lastname,surname}) {
    return (
        <>
            <p> {count ? 'правда' : 'не правда'}</p>
            <p>{lastname}</p>
            <p>{surname}</p>
            <p>Second Component</p>
        </>
    )
}
export default Second;