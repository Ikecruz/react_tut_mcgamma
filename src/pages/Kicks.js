import { Grid } from "@mantine/core"
import { useEffect, useState } from "react"
import Error from "../components/Error"
import Kickcard from "../components/Kickcard"
import Loading from "../components/Loading"
import Navbar from "../components/Navbar"
import kicksImg from "../images/kicks.png"

const Kicks = () => {

    const colors = ["#d3fbd8", "#ff9669", "#f4ff72", "#f6edfe", "#ffe3be", "#70feff", "#ffcca5", "#2e2e2e", "#8ffeaf"]

    const getColor = () => {
        return colors[Math.floor(Math.random() * colors.length)]
    }

    const [isPending, setIsPending] = useState(true)

    const [isError, setIsError] = useState(false)

    const [stocks, setStocks] = useState()

    useEffect(() => {

        fetch('https://my-json-server.typicode.com/Ikecruz/react_tut_mcgamma/stocks')
        .then((res) => res.json())
        .then((data) => setStocks(data))
        .catch((err) => {
            setIsError(true)
            console.log(err)
        })
        .finally(setIsPending(false))

    }, [])

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
                            {
                                isPending &&
                                <Loading />
                            }
                            
                            {
                                (!isPending && !isError) &&
                                <Grid gutter="lg">

                                    {
                                        stocks?.map((stock) => (
                                            <Grid.Col span={6} md={4} key={stock.id}>
                                                <Kickcard id={stock.id} image={stock.image} name={stock.name} price={stock.price} background={getColor()} />
                                            </Grid.Col>
                                        ))
                                    }

                                </Grid>
                            }
                            
                            {
                                isError &&
                                <Error />
                            }
                        </div>
                    </Grid.Col>
                </Grid>
            </div>
        </div>
    
    </>
}

export default Kicks