import { Box, Stack, Typography, useTheme } from "@mui/material";
import bg from "../../assest/home/global.jpg";
import React from "react";

function Global() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: { xs: "60vh", sm: "40vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white", // Ensures text visibility
        px: { xs: 2, sm: 3, md: 12, lg: 12 }, // ✅ Padding for content inside
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark overlay effect
          zIndex: 1,
        },
      }}
    >
      {/* Overlay Content */}
      <Stack spacing={2} sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          sx={{ color: theme.palette.white.main }}
          variant="h4"
          fontWeight="bold"
        >
          We Are a Global Leader in Recruiting & Staffing
        </Typography>
        <Typography sx={{ color: theme.palette.white.main }} variant="h6">
          We believe in people and their amazing potential.
        </Typography>
        <Typography sx={{ color: theme.palette.white.main }} variant="h6">
          Whether you're looking for a job, seeking hires, or thinking about
          working with us, you've come to the right place.
        </Typography>
      </Stack>
    </Box>
  );
}

export default Global;
