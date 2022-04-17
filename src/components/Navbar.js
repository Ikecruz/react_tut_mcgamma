import { Link } from "react-router-dom"

const Navbar = () => {

    return <>
    
        <div className="navbar">
            <nav>
                <div className="brand">
                    <Link to="/">Kicks</Link>
                </div>
                <div className="icon_contain">
                    <p className="nav_btn">
                        <i className="fal fa-shopping-bag"></i>
                        <span>21</span>
                    </p>
                    <p className="nav_btn">
                        <i className="fal fa-heart"></i>
                        {/* <span>0</span> */}
                    </p>
                </div>
            </nav>
        </div>
    
    </>

}

export default Navbar