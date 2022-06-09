import React from "react";
import {useForm, Controller} from "react-hook-form";
import {GreyButton} from "./styled";
import {DefaultComponent, DefaultFormComponent} from "../../styled";

// 외부 Controlled component (React-Select, AntD, Material-UI) 와 작업할 때 쓰임.
import {Input} from "@material-ui/core";

interface IFormInput {
    firstName: string;
    lastName: string;
    iceCreamType: { label: string; value: string };
}

export const UseController = () => {
    const {control, handleSubmit} = useForm<IFormInput>();

    const onSubmit = (data: IFormInput) => {
        alert(JSON.stringify(data));
    };

    return (
        <DefaultComponent>
            <h2>UseController</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DefaultFormComponent>
                    <label>First Name</label>
                    <Controller
                        render={({field}) => <Input {...field} className="materialUIInput"/>}
                        name="firstName"
                        control={control}
                        defaultValue=""
                    />
                    <GreyButton type="submit">Submit</GreyButton>
                </DefaultFormComponent>
            </form>
        </DefaultComponent>
    );
};
