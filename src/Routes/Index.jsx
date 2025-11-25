import { BrowserRouter, Routes, Route } from "react-router";
import App from '../App'
import Market from "../Pages/Market/Index";
import Admin from "../Pages/Admin/Index";


function RouterPath() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
                <Route path="/market" element={<Market/>} />
                <Route path="/admin" element={<Admin/>} />
            </Routes>
        </BrowserRouter>

    )
}

export default RouterPath