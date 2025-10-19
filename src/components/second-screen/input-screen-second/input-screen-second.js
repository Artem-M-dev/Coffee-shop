import './input-screen-second.css'

const InputScreenSecond = ({filterValue}) => {

    return (
        <div className="input-screen-second">
            <div className="input-screen-second__search">
                <div>Lookiing for</div>
                <input className="input-screen-second__input" type="text" placeholder="start typing here..."/>
            </div>

            <div className="input-screen-second__buttons">
                <div style={{marginRight: 30}}>Or filter</div>
                <button className="input-screen-second__btn"
                        data-country='Brazil'
                        style={{borderRadius: '4px 0 0 4px'}}
                        onClick={filterValue}>Brazil</button>

                <button className="input-screen-second__btn"
                        data-country='Kenya'
                        onClick={filterValue}>Kenya</button>

                <button className="input-screen-second__btn"
                        data-country='Columbia'
                        style={{borderRadius: '0 4px 4px 0'}}
                        onClick={filterValue}>Columbia</button>
            </div>
        </div>
    )
}

export default InputScreenSecond