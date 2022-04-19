const getWatchList = () => {
    let watchlist = []

    if (localStorage.getItem("watchlist")) {
        try{
            watchlist = JSON.parse(localStorage.getItem("watchlist"))
        } catch(e) {
            localStorage.removeItem("watchlist")
        }
    }

    return watchlist
}

const addWatchList = (item) => {
    let watchlist = getWatchList()
    watchlist.push(item)

    try{
        let parsed = JSON.stringify(watchlist)
        localStorage.setItem("watchlist", parsed)
        return true
    } catch (err) {
        return false
    }
}

const checkWatchList = (id) => {
    let watchlist = getWatchList()
    
    return watchlist.filter(item => item.id === Number(id)).length > 0
}

const removeWatchList = (id) => {
    let watchlist = getWatchList()

    watchlist = watchlist.filter(item => item.id !== Number(id))

    try{
        let parsed = JSON.stringify(watchlist)
        localStorage.setItem("watchlist", parsed)
        return true
    } catch (err) {
        return false
    }
}

const countWatchList = () => {
    return getWatchList().length
}

export { addWatchList, getWatchList, checkWatchList, removeWatchList, countWatchList }