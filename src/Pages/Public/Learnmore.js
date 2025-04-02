import React from "react";
import {
  Box,
  Typography,
  useTheme,
  Stack,
  Button,
  Grid,
  CardContent,
  Card,
} from "@mui/material";
import empolyee from "../../assest/employe/img1.jpg";
import img from "../../assest/employe/img2.jpg";
import { useNavigate } from "react-router-dom";

import Partical from "../../Component/Public/Partical";

const empdata = [
  {
    heading: "Market Analytics",
    cods: `Regardless of whether you have a requirement, we will keep in regular contact to share market insights and updates so we can better partner with you and support your company’s goals. We conduct numerous market studies and surveys, invest in labour market research, and build proprietary tools our recruitment consultants can use to share local labour trends with our customers.`,
  },
  {
    heading: "Client Knowledge",
    cods: `We take the time to understand your business, industry, talent management needs and the requirements of each specific job brief. We do this formally through our regular client and candidate research program, and informally through our meetings and direct discussions with you. Client knowledge is also balanced with the time we invest to understand the candidates skills, goals and interests, so we can secure the right people for your organisation.`,
  },

  {
    heading: "Sourcing Strategy",
    cods: `Through our Voice of the Customer (VOC) survey, we know that the ability to attract and retain quality talent is one of the most highly valued outcomes clients want from their recruitment partner. Sourcing great talent is no accident. It’s made possible through strong relationships and networks, so we maintain on-going relationships with candidates throughout their career. This allows us to build networks of engaged and pre-qualified candidates ready to meet your business needs.`,
  },
  {
    heading: "Screening & Selection",
    cods: `We ensure that all candidates are thoroughly pre-screened before they meet you. Our method is to test first, present second. Your time and business are valuable, so we only want to introduce you to the people who are the right cultural and technical fit.

`,
  },
  {
    heading: "Sourcing Strategy",
    cods: `Through our Voice of the Customer (VOC) survey, we know that the ability to attract and retain quality talent is one of the most highly valued outcomes clients want from their recruitment partner. Sourcing great talent is no accident. It made possible through strong relationships and networks, so we maintain on-going relationships with candidates throughout their career. This allows us to build networks of engaged and pre-qualified candidates ready to meet your business needs.`,
  },
  {
    heading: "Sourcing Strategy",
    cods: `Through our Voice of the Customer (VOC) survey, we know that the ability to attract and retain quality talent is one of the most highly valued outcomes clients want from their recruitment partner. Sourcing great talent is no accident. It’s made possible through strong relationships and networks, so we maintain on-going relationships with candidates throughout their career. This allows us to build networks of engaged and pre-qualified candidates ready to meet your business needs.`,
  },
];

const Employer = ({ isContactVisible }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "250px", sm: "350px", md: "430px" }, // Responsive height
          backgroundImage: `url(${empolyee})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: 2,
          px: { xs: 2, sm: 3, md: 12, lg: 12 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // Centers text horizontally
          textAlign: "center", // Centers text content inside the Box
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)", // Dark overlay
            zIndex: 1, // Ensures it covers the background but not the text
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: theme.palette.white.main, // Text should contrast with dark overlay
            fontSize: {
              xs: "1rem",
              sm: "3rem",
              md: "2rem",
              lg: "3rem",
            }, // Adjusts for all screens
            fontWeight: "bold",
          }}
        >
          YOU NEED THE RIGHT PEOPLE TO SUCCEED
        </Typography>
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          py: 5,
          px: { xs: 2, sm: 3, md: 12, lg: 12 },
        }}
      >
        {/* Centered Heading */}
        <Typography variant="h4" fontWeight="bold" py={2}>
          Workforce Solutions
        </Typography>

        {/* Paragraph */}
        <Typography variant="h5" py={0.5}>
          Twenty-first century business demands agility. Spirale HR Solutions
          Pvt. Ltd. flexible partnership model allows us to be responsive to
          your unique needs – supporting short-term contract requirements,
          providing contract-to-hire talent for project-based support with the
          option to hire the contractors as permanent employees, or finding the
          permanent top talent your company needs today. By listening to our
          clients’ business needs, we have gained a unique perspective into how
          we can help.
        </Typography>
      
      </Box>

    

    



  

      <Box
        sx={{
          py: 3,
          px: { xs: 2, sm: 3, md: 12, lg: 12 },
          backgroundColor: theme.palette.white.main, // Background color
          textAlign: "center", // Centers all text
        }}
      >
        {/* Centered Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          py={2}
          sx={{
            fontSize: {
              xs: "1.8rem",
              sm: "2.2rem",
              md: "2.5rem",
              color: theme.palette.black.dark,
            }, // Responsive text size
          }}
        >
          Tell us how we can help - and we will.
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
          color="primary"
          onClick={() => navigate("/contact")}
        >
           Get a Quote
        </Button>
      </Box>

      <Partical />
    </>
  );
};

export default Employer;
