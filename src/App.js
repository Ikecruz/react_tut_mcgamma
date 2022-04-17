import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Kickdetail from "./pages/Kickdetail"
import Kicks from "./pages/Kicks"

const App = () => {

    return <>
    
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/kicks" element={<Kicks />} />
                <Route path="/kick/:id" element={<Kickdetail /> } />
            </Routes>
        </Router>

    </>
}

export default App