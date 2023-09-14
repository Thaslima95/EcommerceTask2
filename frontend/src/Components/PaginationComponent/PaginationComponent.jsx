import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationComponent() {
  return (
    <Stack
      style={{
        width: "467px",
        height: "40px",
        top: "1649px",
        left: "800px",
        position: "absolute",
      }}
    >
      <Pagination count={10} showFirstButton showLastButton />
    </Stack>
  );
}
