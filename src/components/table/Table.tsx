import { Box, Typography } from "@mui/material";
import React from "react";

const Table = () => {
  return (
    <>
      <Box
        sx={{
          height: "396px",
          width: "540px",
          border: "1px solid #E6E9F4",
          borderRadius: "6px",
          padding: "10px 20px 10px 20px",
        }}
      >
        <Typography fontWeight="700" fontSize="16px">
          Header
        </Typography>
        <Box display="flex" height="44px" borderBottom="2px solid #E6E9F4" px={2}>
          <Box width="120px" display="flex" alignItems="center">
            <Typography color="#5A607F" fontSize="14px" fontWeight="400">
              Name
            </Typography>
          </Box>
          <Box width="120px" display="flex" alignItems="center">
            <Typography color="#5A607F" fontSize="14px" fontWeight="400">
              Date
            </Typography>
          </Box>
          <Box width="120px" display="flex" alignItems="center">
            <Typography color="#5A607F" fontSize="14px" fontWeight="400">
              Amount
            </Typography>
          </Box>
          <Box width="120px" display="flex" alignItems="center">
            <Typography color="#5A607F" fontSize="14px" fontWeight="400">
              Status
            </Typography>
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </>
  );
};

export default Table;
