import {NavigateContainer, NavigateLink} from "./styled"

export function Navigation() {
    return (<>
            <NavigateContainer>
                <NavigateLink href={"/"}>Home</NavigateLink>
                <NavigateLink href={"/useForm"}>useForm</NavigateLink>
                <NavigateLink href={"/useFormContext"}>useFormContext</NavigateLink>
                <NavigateLink href={"/useWatch"}>useWatch</NavigateLink>
                <NavigateLink href={"/useFieldArray"}>useFieldArray</NavigateLink>
                <NavigateLink href={"/useController"}>useController</NavigateLink>
            </NavigateContainer>
        </>
    )
}
