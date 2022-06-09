import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {Navigation} from "./Component/Navigation";
import {UseForm} from './Component/UseForm';
import {CompareComponent} from "./Component/Compare";

export function App() {

    return (<BrowserRouter>
            <Navigation/>
            <Routes>

                <Route path="/"
                       element={<img src="https://miro.medium.com/max/1400/1*VcL41lBE0PlrzecOngS1Iw.png"
                                     alt="React-hook-form" width="100%" height="1000"/>}/>
                <Route path="/compare" element={<CompareComponent/>}/>
                <Route path="/useForm" element={<UseForm/>}/>
                <Route path="/compare" element={<UseForm/>}/>
            </Routes>
        </BrowserRouter>
    )
}
