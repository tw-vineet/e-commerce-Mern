import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../Layout/Signup";
import Home from "../screen/Home";
import Login from "../Layout/Login";
import Pagenotfound from "../screen/pagenotfound";
import Cart from "../screen/Cart";



export function Routing() {
    return <>
        <Routes>
            <Route path="*" element={<Pagenotfound />} />
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />


        </Routes >
    </>
}