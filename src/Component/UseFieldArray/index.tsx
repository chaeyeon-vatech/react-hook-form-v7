import * as React from "react";
import {useForm, useFieldArray} from "react-hook-form";
import {DefaultComponent, DefaultFormComponent} from "../../styled";
import {SubmitButton} from "../UseFormContext/styled";
import {CustomInput} from "./styled";

type FormValues = {
    firstName: string;
    fieldArray: { name: string }[];
};

let renderCount = 0;

export default function UseFieldArray() {
    const {register, handleSubmit, control, watch} = useForm<FormValues>();
    // React-hook-form 에 컴포넌트를 등록하기 위한 메소드를 포함
    const {fields, append} = useFieldArray({
        control,
        name: "fieldArray"
    });
    const onSubmit = (data: FormValues) => console.log(data);
    renderCount++;
    const watchFieldArray = watch("fieldArray");
    const controlledFields = fields.map((field, index) => {
        return {
            ...field,
            ...watchFieldArray[index]
        };
    });

    console.log("updated", controlledFields);

    return (
        <DefaultComponent>
            <h2>UseFieldArray</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DefaultFormComponent>
                    <CustomInput {...register("firstName")} placeholder="First Name"/>

                    {controlledFields.map((field, index) => {
                        return <CustomInput {...register(`fieldArray.${index}.name` as const)} />;
                    })}

                    <SubmitButton
                        type="button"
                        onClick={() =>
                            append({
                                name: "bill"
                            })
                        }
                    >
                        Append
                    </SubmitButton>

                    <SubmitButton type="submit">Submit</SubmitButton>
                </DefaultFormComponent>
            </form>
        </DefaultComponent>
    );
}
