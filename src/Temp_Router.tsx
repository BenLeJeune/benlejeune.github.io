import React from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import TempRedirect from "./Views/Temp_Redirect/TempRedirect";
import Viewport from "./Viewport";

export default function TempRouter() {

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<TempRedirect/>}/>
        </Routes>
    </BrowserRouter>

}