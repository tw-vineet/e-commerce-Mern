
import React, { useState } from "react";

import Login from "./Screen/Login/LoginPage";
import { Routes,Route, Router } from "react-router-dom";
import Signup from "./Screen/Signup/Signup";
import Navbar from "./Layout/navbar/Navbar";





export  default function App(){




  
  return<>
  {/* <Login/> */}
 <Navbar/>
 {/* <Login/> */}
 
<Routes>
  <Route path="/Login" element={<Login/>}></Route>
  <Route path="/Signup" element={<Signup/>}></Route>
</Routes> 


</>
}