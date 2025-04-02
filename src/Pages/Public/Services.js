import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import bg1 from "../../assest/services/services.jpg";
import { ServiceData } from "../../assest/data/servicesData";
const Services = () => {
  const theme = useTheme();
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: { xs: "40vh", sm: "35vh", md: "30vh" },
          background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bg1}) center/cover no-repeat`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: theme.palette.primary.contrastText,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Services
        </Typography>
      </Box>

      {/* Services Layout */}
      <Box sx={{ py: 5, px: { xs: 2, sm: 3, md: 12 } }}>
        <Grid container spacing={3}>
          {/* Left: Service Cards (takes 9 columns on desktop, full width on mobile) */}
          <Grid size={{ xs: 12, sm: 6, md: 9 }}>
            <Grid container spacing={2}>
              {ServiceData.map((service, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: 3,
                      transition: "transform 0.3s",
                      "&:hover": {
                        transform: "scale(1.03)",
                      },
                    }}
                  >
                    <CardMedia
                      sx={{ height: 160 }}
                      image={service.imgpath}
                      title={service.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h6" fontWeight="bold">
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {service.desc}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Read More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right: "How Can We Help?" Card (takes 3 columns on desktop, full width on mobile) */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Card
              sx={{
                //    height: '250px' ,
                // position: 'sticky',
                top: 20,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                p: 2,
                mb: 5,
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  textAlign={"center"}
                >
                  How can we help you?
                </Typography>
                <Typography variant="body1" paragraph textAlign={"center"}>
                  Contact us at the SHSPL office nearest to you or submit a
                  business inquiry online.
                </Typography>
                <Box sx={{ textAlign: "center" }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      py: 1.5,
                      mt: 2,
                      "&:hover": { backgroundColor: "primary.dark" },
                    }}
                  >
                    Contact
                  </Button>
                </Box>
              </CardContent>
            </Card>

            <Card
              sx={{
                //    height: '250px' ,
                // position: 'sticky',
                top: 20,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                p: 2,
                mb: 3,
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  backgroundColor="#002b5b"
                  borderRadius={2}
                  color="white"
                  textAlign={"center"}
                >
                  Company Presentation
                </Typography>
                <Typography variant="body1" paragraph textAlign={"center"}>
                  SHSPL really helped us achieve our financial goals. The slick
                  presentation along with fantastic readability ensures that our
                  financial standing is stable.
                </Typography>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    // variant="contained"
                    // fullWidth
                    sx={{
                      py: 1.5,
                      mt: 2,
                      // '&:hover': { backgroundColor: 'primary.dark' }
                    }}
                  >
                    <Typography variant="h4">Amanda</Typography>
                    Sales & MarketingSales & Marketing, Alien Ltd.
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            <Card
              sx={{
                //    height: '250px' ,
                // position: 'sticky',
                top: 20,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                p: 2,
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  gutterBottom
                  textAlign={"center"}
                >
                  Recent news
                </Typography>

                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    component="a"
                    href="#"
                    sx={{
                      textDecoration: "none",
                      color: "blue",
                      "&:hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                    }}
                  >
                    A digital prescription for the pharma industry
                  </Typography>
                  <Typography>⌚September 3, 2021</Typography>

                  <Typography
                    component="a"
                    href="#"
                    sx={{
                      textDecoration: "none",
                      color: "blue",
                      "&:hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                    }}
                  >
                    Harvest great ideas from your company’s best assets
                  </Typography>
                  <Typography>⌚August 25, 2021</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
