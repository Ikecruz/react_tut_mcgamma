import { Link } from "react-router-dom"

const Navbar = ({ cartNum, watchListNum }) => {

    return <>
    
        <div className="navbar">
            <nav>
                <div className="brand">
                    <Link to="/">Kicks</Link>
                </div>
                <div className="icon_contain">
                    <p className="nav_btn">
                        <i className="fal fa-shopping-bag"></i>
                        {
                            cartNum > 0 &&
                            <span>{ cartNum }</span>
                        }
                    </p>
                    <p className="nav_btn">
                        <i className="fal fa-heart"></i>
                        {
                            watchListNum > 0 &&
                            <span>{ watchListNum }</span>
                        }
                    </p>
                </div>
            </nav>
        </div>
    
    </>

}

export default Navbar