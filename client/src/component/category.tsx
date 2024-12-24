import React from "react";
import { Box, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/types";






interface props {
    categoryData: {
        icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
            muiName: string,
        }
        name: string,
        id: number
    }
}



export function Category({ categoryData }: props) {


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