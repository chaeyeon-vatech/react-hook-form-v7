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
        control,
        name: "firstName", // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
        defaultValue: "default" // default value before the render
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
