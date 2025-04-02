import React,{useState} from "react";
import Slider from "react-slick";
import { Box, IconButton, Typography, useTheme,Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assest/home/slider1.jpg";
import img2 from "../../assest/home/slider2.jpg";
import img3 from "../../assest/home/slide3.jpg";
import { useNavigate } from "react-router-dom";


// Slide Data
const slides = [
  {
    image: img1,
    heading: "Helping Companies",
    subtext: "Negative Change",
  },
  {
    image: img3,
    heading: "Thought Leadership",
    subtext:
      "With over 10 years of experience helping businesses find solutions.",
  },
  {
    image: img2,
    heading: "Talented Consultant",
    subtext: "Helping you take your company to new heights!",
  },
];

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      left: "2%",
      transform: "translateY(-50%)",
      zIndex: 2,
      color: "white",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
    }}
  >
    <ArrowBackIos />
  </IconButton>
);

const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      right: "2%",
      transform: "translateY(-50%)",
      zIndex: 2,
      color: "white",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);

function LandingPage() {
   const [activeSlide, setActiveSlide] = useState(0);
    const navigate = useNavigate();
  const theme = useTheme();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
  };

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box key={index} sx={{ position: "relative", height: {xs:"63vh",md:"70vh"} }}>
            {/* Background Image */}
            <Box
              component="img"
              src={slide.image}
              alt={`Slide ${index + 1}`}
              sx={{
                width: "100%",
                height: "100vh",
                objectFit: "cover", // Ensures full coverage
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />

            {/* Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "105%",
                backgroundColor: "rgba(0, 0, 0, 0.2)", // Dark overlay
                zIndex: 1,
              }}
            />

            {/* Text Content */}
            <Box
              sx={{
                px: { xs: 2, sm: 3, md: 12, lg: 12 },
                position: "absolute",
                top: "50%",
                left: { md: "35%", xs: "50%" },
                transform: "translate(-50%, -50%)",

                zIndex: 2,
                width: { xs: "90%", sm: "80%", md: "70%" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "4rem" },
                  color: theme.palette.blue,
                }}
              >
                {slide.heading}
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                }}
              >
                {slide.subtext}
              </Typography>

              <Box mt={3}>
                {activeSlide === 1 && (
                  <>
                    <Button
                      variant="contained"
                      sx={{ mr: 2 }}
                      onClick={() => navigate("/company")}
                    >
                      our company
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => navigate("/contact")}
                    >
                      contact us
                    </Button>
                  </>
                )}

                {activeSlide === 2 && (
                  <Button
                    variant="contained"
                    onClick={() => navigate("/services")}
                  >
                    Our services
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default LandingPage;
