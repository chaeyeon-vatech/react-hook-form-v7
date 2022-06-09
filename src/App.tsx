import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {Navigation} from "./Component/Navigation";
import {UseForm} from './Component/UseForm';
import {UseController} from "./Component/UseController";
import {UseFormContext} from "./Component/UseFormContext";
import UseWatch from "./Component/UseWatch";
import UseFieldArray from "./Component/UseFieldArray";

export function App() {

    return (<BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="/"
                       element={<img src="https://miro.medium.com/max/1400/1*VcL41lBE0PlrzecOngS1Iw.png"
                                     alt="React-hook-form" width="100%" height="1000"/>}/>
                <Route path="/useForm" element={<UseForm/>}/>
                <Route path="/useController" element={<UseController/>}/>
                <Route path="/useFormContext" element={<UseFormContext/>}/>
                <Route path="/useWatch" element={<UseWatch/>}/>
                <Route path="/useFieldArray" element={<UseFieldArray/>}/>
            </Routes>
        </BrowserRouter>
    )
}
