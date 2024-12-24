import React from "react";
import { Button } from "@mui/material";






interface IPropsButton {
    text: string,
    styleProps?: object,
    variant1?: "contained" | "outlined"
    type?: "submit" | "button",
    icon?: React.ReactNode
}

export function Buttons({ text, variant1, styleProps, type, icon }: IPropsButton) {

    // console.log(typeof variant)
    return <>
        <Button sx={{ ...styleProps }} endIcon={icon} variant={variant1} type={type}>{text}  </Button>


    </>
}