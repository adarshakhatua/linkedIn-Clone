import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/homepage";

export const AllRoutes = () => {
    return <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
    </Routes>
}