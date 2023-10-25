import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
// import Home from "../pages/home";
import PublicRoute from "./publicRoute";
// import NotFound from "../pages/notFound";
import About from "../pages/about";
import Contact from "../pages/contact";
import Plants from "../pages/plants";
import Login from "../pages/login";
import Users from "../pages/users/user";
import Admins from "../pages/users/admin";
import CardInfo from "../components/card/cardInfo";
import CardInfoCreate from "../components/card/cardInfoCreate"
import CardInfoCreate2 from "../components/card/cardInfoCreate2"
import CardInfoEdit from "../components/card/cardInfoEdit"


const MyRoutes = ()=>{
    return(

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            {/* <Route path="/home" element={<PublicRoute element={<Home/>} />} /> */}
            <Route path="/home" element={<PublicRoute element={<Plants/>} />} />
            <Route path="/about" element={<PublicRoute element={<About/>} />} />
            <Route path="/contact" element={<PublicRoute element={<Contact/>} />} />
            {/* <Route path="/users" element={<PublicRoute element={<Users/>} />} /> */}
            {/* <Route path="/admins" element={<PublicRoute element={<Admins/>} />} /> */}
            {/* <Route path="/plantCreate" element={<PublicRoute element={<CardInfoCreate/>} />} /> */}
            {/* <Route path="/plantCreate/:id" element={<PublicRoute element={<CardInfoCreate2/>} />} /> */}
            <Route path="/cardInfo/:id" element={<PublicRoute element={<CardInfo/>} />} />
            {/* <Route path="/plantEdit/:id" element={<PublicRoute element={<CardInfoEdit/>} />} /> */}
            {/* <Route path="*" element={ <NotFound/>}  /> */}
        </Routes>
    </BrowserRouter>
    
    )
};

export default MyRoutes;