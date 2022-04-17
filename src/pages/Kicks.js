import { Grid } from "@mantine/core"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import kicksImg from "../images/kicks.png"

const Kicks = () => {

    const colors = ["#d3fbd8", "#ff9669", "#f4ff72", "#f6edfe", "#ffe3be", "#70feff", "#ffcca5", "#2e2e2e", "#8ffeaf"]

    const getColor = () => {
        return colors[Math.floor(Math.random() * colors.length)]
    }

    return <>
    
        <Navbar />
        <div className="kicks_page">
            <div className="kicks_contain">
                <Grid gutter="none">
                    <Grid.Col span={12} md={3}>
                        <div className="kicks_img">
                            <img src={kicksImg} alt="" />
                        </div>
                        <div className="filter_box">

                        </div>
                    </Grid.Col>
                    <Grid.Col span={12} md={9}>
                        <div className="page_des">
                            <p>lifestyle kicks</p>
                        </div>
                        <div className="cards_contain">
                            <Grid gutter="lg">
                                <Grid.Col span={6} md={4}>
                                    <Link to="/kick/1" className="kick_card">
                                        <div className="kick_img" style={{background: getColor()}}>
                                            <img src="https://images.footlocker.com/is/image/FLEU/314103886504?wid=231&hei=231&fmt=png-alpha" alt="" />
                                        </div>
                                        <p className="kick_name">Nike vandu supreme</p>
                                        <p className="kick_price">$ 300</p>
                                    </Link>
                                </Grid.Col>
                                <Grid.Col span={6} md={4}>
                                    <div className="kick_card">
                                        <div className="kick_img" style={{background: getColor()}}>
                                            <img src="https://images.footlocker.com/is/image/FLEU/314101995604?wid=231&hei=231&fmt=png-alpha" alt="" />
                                        </div>
                                        <p className="kick_name">Nike vandu supreme</p>
                                        <p className="kick_price">$ 300</p>
                                    </div>
                                </Grid.Col>
                                <Grid.Col span={6} md={4}>
                                    <div className="kick_card">
                                        <div className="kick_img" style={{background: getColor()}}>
                                            <img src="https://images.footlocker.com/is/image/FLEU/314101995604?wid=231&hei=231&fmt=png-alpha" alt="" />
                                        </div>
                                        <p className="kick_name">Nike vandu supreme</p>
                                        <p className="kick_price">$ 300</p>
                                    </div>
                                </Grid.Col>
                                <Grid.Col span={6} md={4}>
                                    <div className="kick_card">
                                        <div className="kick_img" style={{background: getColor()}}>
                                            <img src="https://images.footlocker.com/is/image/FLEU/314101995604?wid=231&hei=231&fmt=png-alpha" alt="" />
                                        </div>
                                        <p className="kick_name">Nike vandu supreme</p>
                                        <p className="kick_price">$ 300</p>
                                    </div>
                                </Grid.Col>
                            </Grid>
                        </div>
                    </Grid.Col>
                </Grid>
            </div>
        </div>
    
    </>
}

export default Kicks