import * as React from "react";
import {useForm, useWatch, Control} from "react-hook-form";
import {DefaultComponent, DefaultFormComponent} from "../../styled";
import {SubmitButton} from "../UseFormContext/styled";
import {CustomInput} from "./styled";

interface FormInputs {
    firstName: string;
}

function FirstNameWatched({control}: { control: Control<FormInputs> }) {
    const firstName = useWatch({
        //Controlled 상태의 제어된 구성 요소를 격리하여 해당 범위 내에서 다시 렌더링하고 앱/Form 수준에 대한 성능 영향을 줄임
        //Register의  controlled component 버전
        control,
        name: "firstName", // Name이 없으면  모든 field watch ['firstName', 'lastName']
        defaultValue: "default" // render 전 watch의 default value
    });

    return <p>Watch: {firstName}</p>; // only re-render at the component level, when firstName changes
}

export default function UseWatch() {
    const {register, control, handleSubmit} = useForm<FormInputs>();

    const onSubmit = (data: FormInputs) => {
        alert(JSON.stringify(data));
    };
    return (
        <DefaultComponent>
            <h2>UseWatch</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DefaultFormComponent>
                    <label>First Name:</label>
                    <CustomInput {...register("firstName")} />
                    <SubmitButton type="submit">Submit</SubmitButton>
                    <FirstNameWatched control={control}/>
                </DefaultFormComponent>

            </form>
        </DefaultComponent>
    );
}
