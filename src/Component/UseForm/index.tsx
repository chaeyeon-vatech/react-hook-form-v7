import React from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
    DefaultComponent, DefaultFormComponent, ErrorComponent,
    CustomInput,
    GreyButton
} from '../../styled';

export function UseForm() {

    // form validation rules
    const validationSchema = Yup.object().shape({
        registerSample: Yup.string()
            .required('Register Sample is required'),
        watchSample: Yup.string()
            .required('Watch Sample is required'),
        //     .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
        //     .email('Email is invalid'),
    });

    // useForm의 return 값인 methods로 form 데이터를 관리할 수 있다.
    const {
        register,
        getValues,
        watch,
        handleSubmit,
        reset,
        formState,
        setValue
    } = useForm({resolver: yupResolver(validationSchema)});

    // formState
    // const {isDirty, dirtyFields, touchedFields, errors} = formState;
    const {errors} = formState;

    console.log("Uncontrolled :", getValues("registerSample"))
    console.log("Controlled :", getValues("watchSample"))

    function onSubmit(data: any) {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }

    return (<>
            <div style={{margin: 20}}>
                <h2>UseForm</h2>
                <h3>FormState 안 Return </h3>
                {/*<h3>📝 [isDirty] 수정한 기록? : {isDirty ? "Yes" : "No"}</h3>*/}
                {/*<h3>📝 [dirtyFields] 수정된 기록이 있는 Fields? : {getKeyByValue(dirtyFields).join(", ")}</h3>*/}
                {/*<h3>📝 [touchedFields]User InterAction이 있는 Fields? : {getKeyByValue(touchedFields).join(", ")}</h3>*/}
            </div>
            <DefaultComponent>
                <h3>React Hook Form Version 7</h3>
                <DefaultFormComponent>
                    <form onSubmit={handleSubmit(onSubmit, (errors) => console.error(errors))}>
                        <div style={{
                            // border: "1px solid black",
                            borderRadius: 50,
                            padding: 80,
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                        }}>
                            <div>

                                <label>1. Register / getValues : UNCONTROLLED</label>
                                {/* 1. Register 방법 : function 자체에서 value name 호출*/}
                                {/*onChange나 value 같은 상태 값을 prop 으로 넘겨줄 필요 X*/}
                                <CustomInput {...register('registerSample')}/>

                                <ErrorComponent>{errors.registerSample?.message}</ErrorComponent>

                                <GreyButton onClick={() => setValue('registerSample', 'Value')}>Set Value to
                                    "Value"</GreyButton>

                                {/* GetValues rendering 시 값 업데이트*/}
                                <h4>Get Register Value : {getValues('registerSample')}</h4>
                            </div>
                            <div>

                                <label>2. Watch : CONTROLLED</label>
                                <CustomInput type="text" {...register('watchSample')}
                                />
                                <ErrorComponent>{errors.watchSample?.message}</ErrorComponent>

                                <h4>Get Watch Value : {watch('watchSample')}</h4>
                            </div>
                            <div>
                            </div>
                            <div>
                                <GreyButton type="submit">Register</GreyButton>

                                {/* Reset : 전체 양식 상태, 필드 참조 및 구독을 재설정*/}
                                <GreyButton type="button"
                                            onClick={() => reset()}>
                                    Reset
                                </GreyButton>
                            </div>
                        </div>
                    </form>
                </DefaultFormComponent>
            </DefaultComponent>
        </>
    )
}
