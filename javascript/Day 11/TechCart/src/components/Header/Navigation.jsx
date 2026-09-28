import "./Style/header.css"

const Navigation = () => {
    return (<>
        <div className="NavBar">
            <a href="#" className="NevItem">
                Home
            </a>
            <a href="#" className="NevItem">
                Manu
            </a>
            <a href="#" className="NevItem">
                New Deals
            </a>
            <div className="SearchBox">
                <input className="Search" placeholder="⌕Search">

                </input>
            </div>
        </div>
    </>)
}

export default Navigation;