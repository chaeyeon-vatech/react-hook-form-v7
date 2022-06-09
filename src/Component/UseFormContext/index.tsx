import React from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {DefaultComponent, DefaultFormComponent} from '../../styled';
import {CustomInput, GreyButton} from './styled';
import Test from './Test';


export function UseFormContext() {
    const methods = useForm();
    const {register, handleSubmit} = methods;
    return (
        <DefaultComponent>
            <h2>UseFormContext : 여러 컴포넌트에 props 넘겨주지 않아도 값 공유 가능</h2>

            {/*FormProvider 를 이용해서 모든 useForm return 값을 넘긴다.*/}
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 4)))}>
                    <DefaultFormComponent>
                        <label>Test</label>
                        <CustomInput {...register("test", {required: true})} />
                        <label>Nested Input</label>
                        <Test/>
                        <GreyButton type="submit">Submit</GreyButton>
                    </DefaultFormComponent>
                </form>

            </FormProvider>
        </DefaultComponent>
    );
}
