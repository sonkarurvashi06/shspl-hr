import { Box, Button, Typography, Grid, Breadcrumbs } from "@mui/material";
import React from "react";
import C1 from "../../assest/career/career.jpg";
import { Link } from "react-router-dom";

const Career = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 12 }, py: 5 }}>
      {/* <Box sx={{ px: { xs: 2, sm: 3, md: 12 }, py: 5 }}> */}
      {/* Breadcrumb Navigation */}
      <Breadcrumbs separator=">" aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Typography
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "inherit", fontWeight: "bold" }}
        >
          Home
        </Typography>
        <Typography color="text.primary" fontWeight="bold">
          Career
        </Typography>
      </Breadcrumbs>
      <Typography variant="h2" gutterBottom>
        Career
      </Typography>
      <Grid container spacing={4} direction="row">
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={C1}
            alt="RPO Services"
            sx={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              borderRadius: 2,
              boxShadow: 3,
              my: 2,
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h3" gutterBottom>
            Benefits and Rewards
          </Typography>
          <Typography variant="body2" paragraph>
            The Spirale HR Solutions Pvt. Ltd. came up with combined
            cutting-edge technology with real-world practicality. Everyone knew
            that the systems had to be updated, the real challenge was updating
            them without disrupting the whole organization in a negative way.
            The solution was to introduce proper workload management done
            through computers while providing mobile platforms to the
            stakeholders.
          </Typography>
          <Typography variant="body1" paragraph>
            This allowed the workers to be involved in the job instead of
            feeling like they had been made redundant by technology.
          </Typography>
          <Button variant="contained" color="primary">
            Apply Now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Career;
