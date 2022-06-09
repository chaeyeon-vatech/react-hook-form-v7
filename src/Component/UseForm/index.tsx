import React from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
    ErrorComponent,
    CustomInput,
    GreyButton
} from './styled';


let renderCount = 0

export function UseForm() {
    renderCount++;

    // form validation rules
    const validationSchema = Yup.object().shape({
        registerSample: Yup.string()
            .required('Register Sample is required'),
        watchSample: Yup.string()
            .required('Watch Sample is required'),
        // title: Yup.string()
        //     .required('Title is required'),
        // dob: Yup.string()
        //     .required('Date of Birth is required')
        //     .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
        // email: Yup.string()
        //     .required('Email is required')
        //     .email('Email is invalid'),
        // password: Yup.string()
        //     .min(6, 'Password must be at least 6 characters')
        //     .required('Password is required'),
        // confirmPassword: Yup.string()
        //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
        //     .required('Confirm Password is required'),
        // acceptTerms: Yup.bool()
        //     .oneOf([true], 'Accept Ts & Cs is required')
    });
    const formOptions = {resolver: yupResolver(validationSchema), defaultValue: {registerSample: ''}};

    // useForm의 return 값인 methods로 form 데이터를 관리할 수 있다.
    const {
        register,
        getValues,
        watch,
        handleSubmit,
        reset,
        formState,
        setValue
    } = useForm(formOptions);


    // formState
    const {isDirty, dirtyFields, touchedFields, errors} = formState;

    function onSubmit(data: any) {
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }

    function getKeyByValue(object: any) {
        return Object.keys(object).filter((key: string) => object[key] === true);
    }

    return (<>
            <div style={{margin: 20}}>
                <h2>Render Count:{renderCount}</h2>
                <h3>FormState 안 Return </h3>
                <h3>📝 [isDirty] 수정한 기록? : {isDirty ? "Yes" : "No"}</h3>
                <h3>📝 [dirtyFields] 수정된 기록이 있는 Fields? : {getKeyByValue(dirtyFields).join(", ")}</h3>
                <h3>📝 [touchedFields]User InterAction이 있는 Fields? : {getKeyByValue(touchedFields).join(", ")}</h3>
            </div>
            <div style={{
                boxSizing: "border-box",
                borderRadius: 5,
                backgroundColor: "white",
                margin: 30,
                padding: 30,
                width: "90%"
            }}>
                <h3>React Hook Form Version 7</h3>
                <div>
                    {/* handleSubmit : Form Validation 검사가 성공하면 Form Data를 수신*/}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div style={{
                            // border: "1px solid black",
                            borderRadius: 50,
                            padding: 80,
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                        }}>
                            <div>

                                <label>1. Register / getValues : 입력 또는 선택 요소를 등록하고 유효성 검사 규칙을 React-hook-form에 적용
                                    가능</label>
                                {/* 1. Register 방법 : function 자체에서 value name 호출*/}
                                <CustomInput {...register('registerSample')}/>

                                <ErrorComponent>{errors.registerSample?.message}</ErrorComponent>

                                <GreyButton onClick={() => setValue('registerSample', 'Value')}>Set Value to
                                    "Value"</GreyButton>

                                <h4>Get Register Value : {getValues('registerSample')}</h4>
                            </div>
                            <div>

                                <label>2. Watch : 지정된 Input Field 감시 및 해당 값 반환</label>
                                <CustomInput type="text" {...register('watchSample')}
                                />
                                <ErrorComponent>{errors.watchSample?.message}</ErrorComponent>

                                <h4>Get Watch Value : {watch('watchSample')}</h4>
                            </div>
                            <div>

                                <ErrorComponent>{errors.watchSample?.message}</ErrorComponent>

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
                </div>
            </div>
        </>
    )
}
