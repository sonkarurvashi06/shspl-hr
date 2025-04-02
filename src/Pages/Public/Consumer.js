import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Container,
} from "@mui/material";
import img1 from "../../assest/home/consumer1.jpg";
import img2 from "../../assest/home/consumer2.png";
import img3 from "../../assest/home/consumer3.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddHomeIcon from "@mui/icons-material/AddHome";
import AddCallIcon from "@mui/icons-material/AddCall";

const consultingData = [
  {
    img: img1,
    title: "Business Strategy",
    cod: "We are a full-service business development group.",
    icon: <AccessTimeIcon fontSize="large" fontWeight="bold" />,
  },
  {
    img: img2,
    title: "Financial Consulting",
    cod: "We provide expert financial advice to help your business grow sustainably.",
    icon: <AddCallIcon fontSize="large" fontWeight="bold" />,
  },
  {
    img: img3,
    title: "Marketing Solutions",
    cod: "We create innovative marketing solutions to increase brand visibility and sales.",
    icon: <AddHomeIcon fontSize="large" fontWeight="bold" />,
  },
];

function Consumer() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <Box sx={{ py: 4, px: { xs: 2, sm: 3, md: 12 } }}>
      <Grid container justifyContent={"space-between"} spacing={3}>
        {consultingData.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 12, lg: 4 }} key={index}>
            <Card
              sx={{
                width: { md: "100%", lg: "100%", xs: "100%" },
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {/* Background Image */}
              <CardMedia
                component="img"
                height="250"
                width="100%"
                image={item.img}
                alt={item.title}
              />

              {/* Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: hoverIndex === index ? "100%" : "30%",
                  background: "rgba(19, 59, 100, 0.9)",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: hoverIndex === index ? "center" : "flex-end",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 2,
                  transition: "height 0.3s ease-in-out",
                }}
              >
                {/* Icon & Title (Always Visible) */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: hoverIndex === index ? 2 : 0,
                  }}
                >
                  <Box sx={{ color: "#FDE428" }}>{item.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                </Box>

                {/* Card Content (Only Visible on Hover) */}
                <Typography
                  variant="body2"
                  sx={{
                    opacity: hoverIndex === index ? 1 : 0,
                    maxHeight: hoverIndex === index ? "100%" : "0",
                    overflow: "hidden",
                    transition:
                      "opacity 0.3s ease-in-out, max-height 0.3s ease-in-out",
                  }}
                >
                  {item.cod}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Consumer;
