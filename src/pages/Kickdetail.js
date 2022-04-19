import { Grid } from "@mantine/core"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Error from "../components/Error"
import Loading from "../components/Loading"
import Navbar from "../components/Navbar"
import { addCart, checkCart, countCart, removeCart } from "../lib/cart"
import { addWatchList, checkWatchList, countWatchList, removeWatchList } from "../lib/watchlist"

const Kickdetail = () => {

    const {id} = useParams()

    const [isPending, setIsPending] = useState(true)

    const [isError, setIsError] = useState(false)

    const [kick, setKick] = useState(null)

    const [cartNum, setCartNum] = useState(countCart())

    const [inCart, setInCart] = useState(checkCart(id))

    const [watchListNum, setWatchListNum] = useState(countWatchList())

    const [inWatchList, setInWatchList] = useState(checkWatchList(id))

    useEffect(() => {

        fetch(`https://my-json-server.typicode.com/Ikecruz/react_tut_mcgamma/stocks/${id}`)
        .then((res) => res.json())
        .then((data) => setKick(data))
        .catch((err) => {
            setIsError(true)
            console.log(err)
        })
        .finally(setIsPending(false))

    }, [id])

    const handleCart = () => {
        if ( inCart ) removeCart(id)
        else addCart(kick)

        setInCart(!inCart)
        setCartNum(countCart())
    }

    const handleWatchList = () => {
        if ( inWatchList ) removeWatchList(id)
        else addWatchList(kick)

        setInWatchList(!inWatchList)
        setWatchListNum(countWatchList())
    }

    return <>
    
        <Navbar cartNum={cartNum} watchListNum={watchListNum} />
        <div className="kick_detail">

            {
                isPending &&
                <Loading />
            }

            {
                (!isPending && !isError && kick) &&
                <div className="kick_container">
                    <Grid gutter="none" style={{height: "100%"}}>

                        <Grid.Col span={12} md={6}>
                            <div className="kick_name_container">
                                <p className="kick_name">{kick.name}</p>
                                <p className="description">Our shoes fuse together an insole that cushions every move, laces that you will never need to tie again, and an odor-fighting copper thread lining.</p>
                                <p className="kick_price">$ {kick.price}</p>

                                <div className="btn_contain">
                                    <button className="cart_btn" onClick={handleCart}>
                                        { inCart && <p><i className="fal fa-times"></i> &nbsp; Remove from Cart</p>  }
                                        { !inCart && <p><i className="fal fa-shopping-bag"></i> &nbsp; Add to cart</p> } 
                                    </button>
                                    <button className="love_btn" onClick={handleWatchList}>
                                        { inWatchList && <i className="fas fa-heart"></i> }
                                        { !inWatchList && <i className="fal fa-heart"></i> }
                                    </button>
                                </div>
                            </div>
                        </Grid.Col>

                        <Grid.Col span={12} md={6}>

                            <div className="kick_size_container">
                                <p className="size">{kick.size}</p>
                            </div>

                        </Grid.Col>

                    </Grid>

                    <div className="kick_img">
                        <img src={kick.image} alt="" />
                    </div>
                </div>
            }

            {
                isError &&
                <Error />
            }
            
        </div>
    
    </>
}

export default Kickdetail