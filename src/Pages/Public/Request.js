import {
  Box,
  Typography,
  Grid,
  Button,
  useTheme,
  TextField,
  Stack,
} from "@mui/material";
import React from "react";

function Request() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "#222222",
        width: "100%",
        py: 6,
        px: { xs: 2, sm: 3, md: 12, lg: 12 },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={4}>
        {/* Left Content */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ maxWidth: "500px" }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: theme.palette.warning.light }}
            >
              Request a call back
            </Typography>
            <Typography sx={{ py: 3, fontSize: "15px", color: "#fff" }}>
              Would you like to speak to one of our financial advisers over the
              phone? Just submit your details and we’ll be in touch shortly. You
              can also email us if you would prefer.
            </Typography>
          </Box>
        </Grid>

        {/* Form Fields - Ensuring they are in a row */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography sx={{ color: theme.palette.white.main }} variant="h4">
            I would like to discuss:
          </Typography>
          <Stack sx={{pb:2}} maxWidth="lg" direction={"row"} spacing={2} py={1}>
            <TextField
              sx={{ backgroundColor: "#fff", my: 2, width: "300px",pb:1 }}
              label="Business Planning"
              name="planing"
              variant="outlined"
            />
            <TextField
              sx={{ backgroundColor: "#fff", my: 2, width: "300px" }}
              label="First Name"
              name="first name"
              variant="outlined"
            />
          </Stack>
          <Stack sx={{pb:2}} maxWidth="lg" direction={"row"} spacing={2} py={1}>
            <TextField
              sx={{
                backgroundColor: "#fff",
                my: 2,
                width: "300px",
                pb:1
              }}
              label="first name"
              name="name"
              variant="outlined"
            />
            <Button
              sx={{ width: "300px"}}
              variant="contained"
            >
              Contained
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Request;
