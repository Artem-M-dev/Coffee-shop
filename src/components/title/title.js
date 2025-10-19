import coffeeBeans3 from '../../icons/coffee-beans-3.svg'

const Title = (props) => {
    const lineStyles = {
        width: '60px',
        height: '2px',
        backgroundColor: 'black'
    };
    
    const beansStyles = {
        display: 'flex',
        alignItems: 'center',
        columnGap: '25px',
        width: 'fit-content',
        margin: '20px auto 40px auto',
    };

    return (
        <>
            <h2 className="description-screen-first__h2" style={props.style}>{props.title}</h2>
            <div style={beansStyles}>
                <div style={lineStyles}></div>
                <img src={coffeeBeans3} alt='coffee beans'></img>
                <div style={lineStyles}></div>
            </div>
        </>
    )
}

export default Title