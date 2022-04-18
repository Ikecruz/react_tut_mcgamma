import { Grid, RangeSlider, Chips, Chip } from "@mantine/core"
import { useEffect, useState } from "react"
import Error from "../components/Error"
import Filtererr from "../components/Filter"
import Kickcard from "../components/Kickcard"
import Loading from "../components/Loading"
import Navbar from "../components/Navbar"
import kicksImg from "../images/kicks.png"

const Kicks = () => {

    const [isPending, setIsPending] = useState(true)

    const [isError, setIsError] = useState(false)

    const [stocks, setStocks] = useState()

    const [priceRange, setPriceRange] = useState([10, 120])

    const [priceSort, setPriceSort] = useState([10, 120])

    const [nameSort, setNameSort] = useState("")

    const [sizeSort, setSizeSort] = useState([])

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

    const filterByName = (kicks) => {
        return kicks.filter(kick => {
            return kick.name.includes(nameSort)
        })
    }

    const filterByPrice = (kicks) => {
        return kicks.filter(kick => {
            return (kick.price >= priceSort[0]) && (kick.price <= priceSort[1])
        })
    }

    const filterBySize = (kicks) => {
        if (sizeSort.length === 0) return kicks

        return kicks.filter(kick => {
            return sizeSort.map(Number).includes(kick.size)
        })
    }

    const filter = (kicks) => {
        return filterBySize(filterByPrice(filterByName(kicks)))
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

                            <div className="filter_contain">
                                <label>Name</label>
                                <input type="text" className="name" value={nameSort} onChange={(e) => setNameSort(e.target.value)} />
                            </div>

                            <div className="filter_contain">
                                <label>Price Range</label>
                                <div className="slider_value_contain">
                                    <div>
                                        $ { priceRange[0] }
                                    </div>
                                    <div>
                                        $ { priceRange[1] }
                                    </div>
                                </div>
                                <RangeSlider
                                    label={null}
                                    color="dark"
                                    value={priceRange}
                                    onChange={setPriceRange}
                                    onChangeEnd={setPriceSort}
                                    step={10}
                                    min={10}
                                    max={120}
                                />

                            </div>

                            <div className="filter_contain">
                                <label>Size</label>
                                <Chips 
                                    color="dark" 
                                    variant="filled" 
                                    multiple={true} 
                                    spacing={5} 
                                    size="xs" 
                                    radius="xs"
                                    value={sizeSort}
                                    onChange={setSizeSort}
                                >
                                    <Chip value="4">4</Chip>
                                    <Chip value="5">5</Chip>
                                    <Chip value="6">6</Chip>
                                    <Chip value="7">7</Chip>
                                    <Chip value="8">8</Chip>
                                    <Chip value="9">9</Chip>
                                </Chips>
                            </div>
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
                                (!isPending && !isError && stocks ) &&
                                <Grid gutter="lg">

                                    {
                                        filter(stocks)?.map((stock) => (
                                            <Grid.Col span={6} md={4} key={stock.id}>
                                                <Kickcard id={stock.id} image={stock.image} name={stock.name} price={stock.price} />
                                            </Grid.Col>
                                        ))
                                    }

                                </Grid>
                            }
                            
                            {
                                isError &&
                                <Error />
                            }

                            {
                                (!isPending && !isError && stocks) &&
                                filter(stocks).length < 1 &&
                                <Filtererr />
                            }
                        </div>
                    </Grid.Col>
                </Grid>
            </div>
        </div>
    
    </>
}

export default Kicks