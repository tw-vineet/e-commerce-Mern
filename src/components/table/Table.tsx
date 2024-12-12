import { Box, Button, Typography } from "@mui/material";
import { TableBox } from "./style";
import React from "react";

type tableProps = {
  row: string[];
  column: {
    name: string;
    date: string;
    amount: number;
    status: string;
  }[];
};

const Table: React.FC<tableProps> = ({ row, column }) => {
  return (
    <>
      <TableBox>
        <Typography fontWeight="700" fontSize="16px">
          Header
        </Typography>
        <Box
          display="flex"
          height="44px"
          borderBottom="2px solid #E6E9F4"
          px={2}
        >
          {row.map((item) => {
            return (
              <Box width="130px" display="flex" alignItems="center">
                <Typography color="#5A607F" fontSize="14px" fontWeight="400">
                  {item}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {column.map((item) => {
          return (
            <Box
              display="flex"
              height="44px"
              borderBottom="1px solid #E6E9F4"
              px={2}
            >
              <Box width="130px" display="flex" alignItems="center">
                <Typography color="#131523" fontSize="14px" fontWeight="500">
                  {item.name}
                </Typography>
              </Box>
              <Box width="130px" display="flex" alignItems="center">
                <Typography color="#131523" fontSize="14px" fontWeight="500">
                  {item.date}
                </Typography>
              </Box>
              <Box width="130px" display="flex" alignItems="center">
                <Typography color="#131523" fontSize="14px" fontWeight="500">
                  {item.amount}
                </Typography>
              </Box>
              <Box width="130px" display="flex" alignItems="center">
               
                <Button>{item.status}</Button>
                
              </Box>
            </Box>
          );
        })}
      </TableBox>
    </>
  );
};

export default Table;
