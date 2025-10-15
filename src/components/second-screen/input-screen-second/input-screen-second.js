import './input-screen-second.css'

const InputScreenSecond = () => {
    return (
        <div className="input-screen-second">
            <div className="input-screen-second__search">
                <div>Lookiing for</div>
                <input className="input-screen-second__input" type="text" placeholder="start typing here..."/>
            </div>

            <div className="input-screen-second__buttons">
                <div style={{marginRight: 30}}>Or filter</div>
                <button className="input-screen-second__btn" style={{borderRadius: '4px 0 0 4px'}}>Brazil</button>
                <button className="input-screen-second__btn">Kenya</button>
                <button className="input-screen-second__btn" style={{borderRadius: '0 4px 4px 0'}}>Columbia</button>
            </div>
        </div>
    )
}

export default InputScreenSecond