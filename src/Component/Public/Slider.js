import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Import your logo images
import logo1 from "../../assest/image/cubesoftware.jpg";
import logo2 from "../../assest/image/gurulogo.png";
import logo3 from "../../assest/image/puzzalanalogo.png";
import logo4 from "../../assest/image/rmglogo.png";
import logo5 from "../../assest/image/cubesoftware.jpg";
import logo6 from "../../assest/image/gurulogo.png";

const Slider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Client logos data with unique IDs
  const clients = [
    { id: 1, name: "Client 1", logo: logo1 },
    { id: 2, name: "Client 2", logo: logo2 },
    { id: 3, name: "Client 3", logo: logo3 },
    { id: 4, name: "Client 4", logo: logo4 },
    { id: 5, name: "Client 5", logo: logo5 },
    { id: 6, name: "Client 6", logo: logo6 },
  ];

  return (
    <Box
      py={5}
      sx={{
        background: "linear-gradient(to bottom, #f9f9f9, #ffffff)",
        position: "relative",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: { xs: "6px", sm: "4px" },
          
          background: theme.palette.primary.main,
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        },
      }}
    >
      <Typography
        variant="h3"
        textAlign="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          position: "relative",
          display: "block", // Ensures full-width centering
          fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem", lg: "3rem" }, // Responsive font sizes
          "&:after": {
            content: '""',
            position: "absolute",
            bottom: -10,
            left: "50%", // Centers underline
            transform: "translateX(-50%)",
            width: { xs: "100px", sm: "120px", md: "150px" }, // Responsive underline width
            height: "4px",
            background: theme.palette.secondary.main,
            borderRadius: "2px",
          },
        }}
      >
        Our Valued Clients
      </Typography>

      <Box
        sx={{
          position: "relative",
          maxWidth: "1400px",
          mx: "auto",
          py: 2,
          "&:before, &:after": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            width: "100px",
            zIndex: 2,
            [theme.breakpoints.down("sm")]: {
              width: "50px",
            },
          },
          "&:before": {
            left: 0,
            background:
              "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
          },
          "&:after": {
            right: 0,
            background:
              "linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            overflow: "hidden",
            position: "relative",
            width: "100%",
            "&:hover": {
              "& .client-logo": {
                animationPlayState: "paused",
              },
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              animation: "scroll 20s linear infinite",
              "@keyframes scroll": {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-50%)" },
              },
            }}
            className="client-logo"
          >
            {/* First set */}
            {[...clients, ...clients].map((client, index) => (
              <Box
                key={`${client.id}-${index}`}
                sx={{
                  flexShrink: 0,
                  px: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: isMobile ? 120 : 180,
                  height: isMobile ? 80 : 120,
                  transition: "all 0.3s ease",
                  "& img": {
                    maxWidth: "80%",
                    maxHeight: "80%",
                    opacity: 0.8,
                    transition: "all 0.3s ease",
                    objectFit: "contain",
                  },
                  "&:hover": {
                    transform: "translateY(-5px)",
                    "& img": {
                      filter: "grayscale(0%)",
                      opacity: 1,
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <img src={client.logo} alt={client.name} loading="lazy" />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Slider;
