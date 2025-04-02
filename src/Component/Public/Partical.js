import React from "react";
import { Box, Typography, Button, useTheme, Grid } from "@mui/material";
import ParticalBackground from "./ParticalBackground";

const Partical = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#FFD700",
        padding: "1rem",
        boxShadow: theme.shadows[4],
        overflow: "hidden",
        zIndex: -1,
        px: { xs: 2, sm: 3, md: 12, lg: 12 },
      }}
    >
      {/* Particles Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <ParticalBackground />
      </Box>

      {/* Content */}
      <Grid container display="flex" justifyContent="space-between">
        <Grid item xs={12} sm={6} lg={6}>
          <Box>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: {
                  xs: "1.3rem",
                  sm: "1rem",
                  lg: "1.5rem",
                  md: "1.5rem",
                },
              }}
            >
              Looking for a First-Class Career Consultant?
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <Box sx={{ float: { md: "right", xs: "start" } }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontWeight: "bold",
                boxShadow: theme.shadows[6],
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: theme.shadows[8],
                },
                transition: "all 0.3s ease",
              }}
            >
              Click Me
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Partical;
