import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../layout/Signup";
import { Billing, Cart, Home, Pagenotfound } from "../screen";
import { Login } from "../layout/Login";





export function Routing() {
    return <>
        <Routes>
            <Route path="*" element={<Pagenotfound />} />
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Billing" element={<Billing />} />


        </Routes >
    </>
}
