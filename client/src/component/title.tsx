import { Box, Typography } from "@mui/material";
import React from "react";





interface ITitleProps {
    headText: string,
    text: string
}




export default function Title({ headText, text }: ITitleProps) {


    return <>

        <Box>

            <Box marginTop={2} marginBottom={2} borderLeft={20} borderColor={"red"} borderRadius={0.1} paddingLeft={2}>
                <Typography variant="subtitle1">{headText}</Typography>
            </Box>
            <Box marginBottom={4}>
                <Typography variant="h4">{text}</Typography>

            </Box>

        </Box>

    </>
}