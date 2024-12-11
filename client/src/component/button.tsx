import { Button, Grid2 } from "@mui/material";
import React from "react";
import { Tag } from "styled-components/dist/sheet/types";




interface PropsButton {
    text: string,
    styleProps?: object,
    variant1?: "contained"| "outlined"
    type?:"submit" | "button",
    icon?:React.ReactNode
}

export default function Buttons({ text, variant1, styleProps,type ,icon}: PropsButton) {

    // console.log(typeof variant)
    return <>
        <Button sx={{ ...styleProps }} endIcon={icon} variant={variant1} type={type}>{text}  </Button>
        

    </>
}