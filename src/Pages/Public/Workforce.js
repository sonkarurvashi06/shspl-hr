import { Box, Typography, Grid, Button, useTheme } from "@mui/material";
import bg from "../../assest/home/workforce.jpg";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

function Workforce() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "auto",
        py: 6,
        px: { xs: 2, sm: 3, md: 12 },
        color: "white",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)", // Improved readability
          zIndex: 1,
        },
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{ position: "relative", zIndex: 2 }}
        justifyContent="space-between"
      >
        {/* First Section */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ maxWidth: "500px" }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: theme.palette.warning.light }}
            >
              Workforce Solution
            </Typography>
            <Typography sx={{ py: 3, fontSize: "15px" }}>
              SHSPL flexible partnership models allow us to be responsive to
              your unique needs.
            </Typography>
            <Button
              sx={{
                fontSize: "15px",
                bgcolor: "primary.main",
                "&:hover": {
                  bgcolor: theme.palette.warning.light,
                  color: "black",
                },
              }}
              variant="contained"
              endIcon={<ArrowForwardIosIcon />}
              onClick={() => navigate("/learnmore")}
            >
              See How
            </Button>
          </Box>
        </Grid>

        {/* Second Section */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ maxWidth: "500px" }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: theme.palette.warning.light }}
            >
              Workforce Solution
            </Typography>
            <Typography sx={{ py: 3, fontSize: "15px" }}>
              SHSPL flexible partnership models allow us to be responsive to
              your unique needs.
            </Typography>
            <Button
              sx={{
                fontSize: "15px",
                bgcolor: "primary.main",
                "&:hover": {
                  bgcolor: theme.palette.warning.light,
                  color: "black",
                },
              }}
              variant="contained"
              endIcon={<ArrowForwardIosIcon />}
              onClick={() => navigate("/begin")}
            >
              Begin Here
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Workforce;
