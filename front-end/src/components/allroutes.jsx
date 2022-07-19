import { Routes, Route } from "react-router-dom";
import { Navbar } from "./navbar";
import { HomePage } from "../pages/homepage";
import { FeedPage } from "../pages/feedpage";
import { NavMain } from "../components/nav.main";

export const AllRoutes = () => {
    return <Routes>
        <Route
            path="/"
            element={
                <>
                    <Navbar></Navbar>
                    <HomePage></HomePage>
                </>}
        ></Route>

        <Route
            path="/feed"
            element={<>
                <NavMain></NavMain>
                <FeedPage></FeedPage>
            </>}
        ></Route>

    </Routes>
}