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
        // padding: 0,
        fontSize: 20,
        fontColor: "#333333"
        // alignItems: "flex-end",
        // bottom: 0,
        // display: "flex",
        // fontSize: 14,
        // justifyContent: "flex-end",
        // left: 0,
        // padding: "12px 20px 12px 80px",
        // position: "absolute",
        // right: 0,
        // top: 0,

    };
});
// export const NavigateContainer = styled("div", {
//     label: "NavigateContainer"
// })<{}>(() => {
//     return {
//         alignItems: "flex-end",
//         bottom: 0,
//         display: "flex",
//         fontSize: 14,
//         justifyContent: "flex-end",
//         left: 0,
//         padding: "12px 20px 12px 80px",
//         position: "absolute",
//         right: 0,
//         top: 0,
//
//     };
// });
//
//
// export const NavigateLink = styled("a", {
//     label: "NavigateLink"
// })<{}>(() => {
//     return {
//         float: "left",
//         color: "#f2f2f2",
//         textAlign: "center",
//         padding: "14px 16px",
//         textDecoration: "none",
//         fontSize: 17
//
//     };
// });


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
