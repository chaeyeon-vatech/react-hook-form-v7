import {useForm} from 'react-hook-form';
import React from "react";

export const LoginForm: React.FC = () => {
    const {register, handleSubmit} = useForm();

    const formComponent = (formID: number) => {

        return <input type="string" {...register(`test[${formID}]`)} placeholder="값을 입력하세요." style={{width: "90%"}}/>
    }
    const list = Array.from({length: 500}, (v, i) => i);
    return (
        <form onSubmit={handleSubmit((d) => console.log("Success!", d))}>
            <header>
                <h2>React-hook-form</h2>
            </header>

            {list.map((item) => {
                return (
                    formComponent(item)
                )
            })}
            <button type="submit">Submit</button>
        </form>
    );
};
