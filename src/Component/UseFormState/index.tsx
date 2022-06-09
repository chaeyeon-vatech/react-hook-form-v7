import * as React from "react";
import { useForm, useFormState } from "react-hook-form";
import "./styles.css";

let renderCount = 0;

export default function UseFormState() {
    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            firstName: "firstName"
        }
    });
    const { dirtyFields } = useFormState({
        control
    });
    const onSubmit = (data:any) => console.log(data);
    renderCount++;

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName")} placeholder="First Name" />
                {dirtyFields.firstName && <p>Field is dirty.</p>}
                <input type="submit" />
            </form>
        </div>
    );
}
