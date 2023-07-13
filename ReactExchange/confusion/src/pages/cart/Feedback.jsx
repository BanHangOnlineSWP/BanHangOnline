import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function Feedback() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <Stack spacing={1}>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      </Stack>
      <TextField fullWidth label="Viết feedback ..." id="fullWidth" />
      <Button
        variant="contained"
        disableElevation
        sx={{
          m: 1,
        }}
      >
        GỬI
      </Button>
    </Box>
  );
}
