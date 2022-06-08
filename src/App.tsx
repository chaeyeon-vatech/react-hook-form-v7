import React from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styled from '@emotion/styled';


export const CustomInput = styled("input", {
    label: "CustomInput"
})<{}>(() => {
    return {
        width: "100%",
        padding: 12,
        border: "1px solid #ccc",
        borderRadius: 4,
        resize: "vertical"
    };
});

export function App() {
    // form validation rules
    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required'),
        fullName: Yup.string()
            .required('Full Name is required'),
        lastName: Yup.string()
            .required('Last name is required'),
        dob: Yup.string()
            .required('Date of Birth is required')
            .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        acceptTerms: Yup.bool()
            .oneOf([true], 'Accept Ts & Cs is required')
    });
    const formOptions = {resolver: yupResolver(validationSchema)};

    // get functions to build form with useForm() hook
    const {register, handleSubmit, reset, formState} = useForm(formOptions);
    const {errors} = formState;

    function onSubmit(data: any) {
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }

    return (
        <div style={{
            boxSizing: "border-box",
            borderRadius: 5,
            backgroundColor: "#f2f2f2",
            margin: 30,
            padding: 50,
            width: "80%",
            // margin: 20,
            // borderRadius: 15,
            // border: "1px solid #878787",
            // padding: 20,
            // width: 300,
            // height: 400
        }}>
            <h5>React Hook Form Version 7</h5>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div>
                            <label>Register</label>
                            <CustomInput {...register('fullName')}
                            />
                            <div>{errors.fullName?.message}</div>
                        </div>
                        <div>
                            <label>Last Name</label>
                            <CustomInput type="text" {...register('lastName')}
                            />
                            <div>{errors.lastName?.message}</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Date of Birth</label>
                            <CustomInput type="date" {...register('dob')}
                            />
                            <div>{errors.dob?.message}</div>
                        </div>
                        <div>
                            <label>Email</label>
                            <CustomInput type="text" {...register('email')}
                            />
                            <div>{errors.email?.message}</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Password</label>
                            <CustomInput type="password" {...register('password')}
                            />
                            <div>{errors.password?.message}</div>
                        </div>
                        <div>
                            <label>Confirm Password</label>
                            <CustomInput type="password" {...register('confirmPassword')}
                            />
                            <div>{errors.confirmPassword?.message}</div>
                        </div>
                    </div>
                    <div>
                        <CustomInput type="checkbox" {...register('acceptTerms')} id="acceptTerms"
                        />
                        <label htmlFor="acceptTerms">Accept Terms & Conditions</label>
                        <div>{errors.acceptTerms?.message}</div>
                    </div>
                    <div>
                        <button type="submit">Register</button>
                        <button type="button" onClick={() => reset()}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
