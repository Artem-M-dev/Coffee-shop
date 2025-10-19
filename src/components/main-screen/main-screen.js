import Header from "../header/header"

const MainScreen = (props) => {
    return (
        <>
            <Header></Header>
            <h2 style={props.style}>{props.title}</h2>
        </>
    )
}

export default MainScreen