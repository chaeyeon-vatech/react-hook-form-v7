import 'react-app-polyfill/ie11';
import * as React from 'react';
import {Formik, Field, Form} from 'formik';

export const LoginFormik: React.FC = () => {


    const formComponent = (formID: string) => {
        return <Field id={formID} name={formID} placeholder="값을 입력하세요." style={{width: "90%"}}/>
    }
    const list = Array.from({length: 500}, (v, i) => i);

    return (
        <div>
            <Formik
                initialValues={{}}
                onSubmit={(
                    d
                ) => {
                    console.log("Submit Success!", d)
                }}
            >
                <Form>
                    <header>
                        <h2>Formik</h2>
                    </header>
                    {list.map((item) => {
                        return (
                            formComponent(item.toString())
                        )
                    })}

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

