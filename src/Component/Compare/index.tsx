import React from "react";
import {LoginFormik} from "./LoginFormFormik";
import {LoginForm} from "./LoginFormReactHookForm";

export function CompareComponent() {
    return (
        <main>
            <h1>Re-render 효율 & 빠른 Mount 속도</h1>
            <div style={{width: "100%", height: 300}}>
                <div style={{float: "left", width: "45%"}}>
                    <LoginForm/>
                </div>
                <div style={{float: "right", width: "45%"}}>
                    <LoginFormik/>
                </div>
            </div>
        </main>
    );

}

