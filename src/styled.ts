import styled from "@emotion/styled";


export const RenderCountContainer = styled("div", {
    label: "RenderCountContainer"
})<{}>(() => {
    return {
        display: "inline-flex",
        flexDirection: "row",
        backgroundColor: "#e5e5e5",
        borderRadius: 30,
        cursor: "default",
        height: 50,
        outline: "none",
        fontSize: 20,
        fontColor: "#333333"

    };
});

export const ErrorComponent = styled("div", {
    label: "ErrorComponent"
})<{}>(() => {
    return {
        margin: 10,
        color: "red"
    };
});


export const CustomInput = styled("input", {
    label: "CustomInput"
})<{}>(() => {
    return {
        width: "100%",
        padding: 12,
        border: "1px solid #ccc",
        borderRadius: 4,
        resize: "vertical",
        margin: 10
    };
});


export const TooltipText = styled("span", {
    label: "TooltipText"
})<{}>(() => {
    return {
        visibility: "hidden",
        width: 120,
        backgroundColor: "black",
        color: "#fff",
        textAlign: "center",
        borderRadius: 6,
        padding: "5px 0",
        position: "absolute",
        zIndex: 1,
        bottom: "100%",
        left: "50%",
        marginLeft: -60,
        "&:hover": {
            visibility: "visible"
        }
    };
});


export const GreyButton = styled("button", {
    label: "GreyButton"
})<{}>(() => {
    return {
        padding: 5,
        background: "#516391",
        color: "white",
        letterSpacing: 0,
        textTransform: "none",
        marginRight: 20
    };
});

// padding: 5px;
// background: #516391;
// color: white;
// letter-spacing: 0px;
// text-transform: none;
// padding: 10px;
// letter-spacing: 2px;


export const FormComponent = styled("div", {
    label: "FormComponent"
})<{}>(() => {
    return {
        padding: 5,
        background: "#516391",
        color: "white",
        letterSpacing: 0,
        textTransform: "none",
        marginRight: 20
    };
});


export const DefaultComponent = styled("div", {
    label: "DefaultComponent"
})<{}>(() => {
    return {
        boxSizing: "border-box",
        borderRadius: 5,
        backgroundColor: "white",
        margin: 30,
        padding: 30,
        width: "90%"
    };
});

export const DefaultFormComponent = styled("div", {
    label: "DefaultFormComponent"
})<{}>(() => {
    return {
        borderRadius: 50,
        padding: 80,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
    };
});

export const SubmitButton = styled("button", {
    label: "CustomInput"
})<{}>(() => {
    return {
        width: "100%",
        padding: 12,
        border: "1px solid #ccc",
        borderRadius: 4,
        resize: "vertical",
        margin: 10,
        cursor: "pointer"
    };
});
