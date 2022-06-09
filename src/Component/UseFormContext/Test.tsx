import * as React from "react";
import {useFormContext} from "react-hook-form";
import {CustomInput} from "./styled";

export default function Test() {
    // useFormContext를 이용해서 methods를 받는다.
    const methods = useFormContext();
    return <CustomInput {...methods.register("bill")} />;
}
