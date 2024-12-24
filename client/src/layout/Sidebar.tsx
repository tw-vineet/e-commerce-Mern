import React from "react";
import { Box, Typography } from "@mui/material";



export function Sidebar() {
    const category: string[] = ["Women' Fashion", "Men's Fashion ", "Electronics", "Home & Lifestyle", "Medicine", "sports & Outdoor", "Baby's & Toys", "Groceries & Pets", "Helth & Beauty"]



    return <>
        <Box marginTop={2}>
            {category.map((value: string, index: number) => {
                return <>
                    <Typography marginBottom={1} variant="subtitle1" key={index}>{value}</Typography>
                </>
            })}

        </Box>
    </>
}