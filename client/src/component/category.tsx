import React from "react";
import { Box, Typography } from "@mui/material";






interface props {
    categoryData: any
}



export default function Category({ categoryData }: props) {


    return <>
        <Box>
            <Box border={1} padding={4} width={"100%"} borderRadius={0.8} textAlign={"center"} >
                <Box>
                    <categoryData.icon />
                </Box>
                <Box>
                    <Typography variant="subtitle1">{categoryData.name}</Typography>
                </Box>

            </Box>

        </Box>

    </>
}