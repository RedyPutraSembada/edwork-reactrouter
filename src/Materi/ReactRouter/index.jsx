import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Menu from "./Component/Menu";
import NBR from "./Component/NBR";
import 'bootstrap/dist/css/bootstrap.min.css';

const ReactRouter = () => {
    return (
        <>
            <NBR />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/menu/:kategori" element={<Menu />}></Route>
                </Routes>
            </Router>
        </>
    )
}
export default ReactRouter;