import Navbar from "../components/Navbar"
import nikeRight from "../images/nike_right.png"
import nikeLeft from "../images/nike_left.png"
import { Link } from "react-router-dom"
import { countCart } from "../lib/cart"
import { countWatchList } from "../lib/watchlist"

const Home = () => {

    const cartNum = countCart()

    const watchListNum = countWatchList()

    return <>
    
        <Navbar cartNum={cartNum} watchListNum={watchListNum} />
        <div className="home">
            <div className="hero_section">

                <p className="company_name">KICKS</p>

                <p className="hero_text">Sup baller. <br /> Get your kicks.</p>

                <Link to="/kicks" className="browse_link">Browse kicks</Link>

                <div className="kick_contain">
                    <div className="img_contain">
                        <img className="left" src={nikeLeft} alt="" />
                    </div>
                    <div className="img_contain">
                        <img src={nikeRight} alt="" />
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Home