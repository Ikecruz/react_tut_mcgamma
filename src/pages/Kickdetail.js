import { Grid } from "@mantine/core"
import Navbar from "../components/Navbar"

const Kickdetail = () => {
    return <>
    
        <Navbar />
        <div className="kick_detail">
            <div className="kick_container">
                <Grid gutter="none" style={{height: "100%"}}>

                    <Grid.Col span={12} md={6}>
                        <div className="kick_name_container">
                            <p className="kick_name">Nike vandu supreme</p>
                            <p className="description">Our shoes fuse together an insole that cushions every move, laces that you will never need to tie again, and an odor-fighting copper thread lining.</p>
                            <p className="kick_price">$ 200</p>

                            <div className="btn_contain">
                                <button className="cart_btn">
                                    <i className="fal fa-shopping-bag"></i> &nbsp; Add to cart 
                                </button>
                                <button className="love_btn">
                                    <i className="fal fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </Grid.Col>

                    <Grid.Col span={12} md={6}>

                        <div className="kick_size_container">
                            <p className="size">7</p>
                        </div>

                    </Grid.Col>

                </Grid>

                <div className="kick_img">
                    <img src="https://images.footlocker.com/is/image/FLEU/314104017604_01?wid=503&hei=503&fmt=png-alpha" alt="" />
                </div>
            </div>
        </div>
    
    </>
}

export default Kickdetail