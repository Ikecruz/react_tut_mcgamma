import { Link } from "react-router-dom"

const Kickcard = ({ id, image, name, price }) => {

    
    // const colors = ["#d3fbd8", "#ff9669", "#f4ff72", "#f6edfe", "#ffe3be", "#70feff", "#ffcca5", "#2e2e2e", "#8ffeaf"]

    return <>
    
        <Link to={'/kick/'+id} className="kick_card">
            <div className="kick_img">
                <img src={image} alt="" />
            </div>
            <p className="kick_name">{name}</p>
            <p className="kick_price">$ {price}</p>
        </Link>

    </>
}

export default Kickcard