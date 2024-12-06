import HomePage from "../Pages/HomePage/Home.jsx"
import ChestPage from "../Pages/ChestPage/Chest"
import LoginPage from "../Pages/LoginPage/Login"
import MyWatchsPage from "../Pages/MyWatchsPage/MyWatchs"
import RankingPage from "../Pages/RankingPage/Ranking"
import SigInPage from "../Pages/SignInPage/SigIn"
import TradeCenterPage from "../Pages/TradeCenterPage/TradeCenter"
import { Route, Routes } from "react-router-dom"
import DeleteWatches from "../Pages/AdminPages/DeleteWatches/DeleteWatches.jsx"
import CreateWatches from "../Pages/AdminPages/CreateWatches/CreateWatchs.jsx"
import UpdateWatches from "../Pages/AdminPages/UpdateWatches/UpdateWatches.jsx"
import AuthRoutes from "./AuthRoutes.jsx"


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signin" element={<SigInPage />} />

             //authRoutes

            <Route path="/chest" element={<AuthRoutes element={<ChestPage />} />} />
            <Route path="/tradecenter" element={<AuthRoutes element={<TradeCenterPage />} />} />
            <Route path="/ranking" element={<AuthRoutes element={<RankingPage />} />} />
            <Route path="/mywatches" element={<AuthRoutes element={<MyWatchsPage />} />} />



           //Admin routes
            <Route path="/deletewatches" element={<DeleteWatches />} />
            <Route path="/createwatches" element={<CreateWatches />} />
            <Route path="/updatewatches" element={<UpdateWatches />} />






        </Routes>
    )
}

export default AppRoutes