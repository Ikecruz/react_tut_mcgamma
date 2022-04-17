import { Link } from "react-router-dom"

const Kickcard = ({ id, background, image, name, price }) => {
    return <>
    
        <Link to={'/kick/'+id} className="kick_card">
            <div className="kick_img" style={{background: background}}>
                <img src={image} alt="" />
            </div>
            <p className="kick_name">{name}</p>
            <p className="kick_price">$ {price}</p>
        </Link>

    </>
}

export default Kickcard