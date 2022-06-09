import {NavigateContainer, NavigateLink} from "./styled"

export function Navigation() {
    return (<>
            <NavigateContainer>
                <NavigateLink href={"/"}>Home</NavigateLink>
                <NavigateLink href={"/compare"}>Compare with Formik</NavigateLink>
                <NavigateLink href={"/useForm"}>useForm</NavigateLink>
                <NavigateLink>useController</NavigateLink>
                <NavigateLink>useFormContext</NavigateLink>
                <NavigateLink>useWatch</NavigateLink>
                <NavigateLink>useFormState</NavigateLink>
                <NavigateLink>useFieldArray</NavigateLink>
            </NavigateContainer>
        </>
    )
}
