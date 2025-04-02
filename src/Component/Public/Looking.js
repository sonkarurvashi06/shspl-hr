import { Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

function Looking() {
    const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.yellow.main,
        py: 2,
        px: { xs: 2, sm: 3, md: 12, lg: 12 },
      }}
    >
      <Stack
        direction={"row"}
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Box>
          <Typography variant="h4">
            looking for a first class carrer consultant?
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{ backgroundColor: "#002e5b", borderRadius: "0" }}
            variant="contained"
          >
            Get a quote
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default Looking;
