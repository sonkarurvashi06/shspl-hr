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
        <Stack
          direction="column"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            position: "relative",
            zIndex: 2, // Ensures the text is above the overlay
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
            Innovative Talent Acquisition Solution
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.white.main,
              fontSize: {
                xs: "1rem",
                sm: "1.3rem",
                md: "1rem",
                lg: "2.1rem",
              },
              fontWeight: "500",
              mt: 1, // Spacing for better readability
            }}
          >
            Helping your company recruit the best candidates.
          </Typography>
        </Stack>
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
          Recruitment Solution
        </Typography>

        {/* Paragraph */}
        <Typography variant="h5" py={0.5}>
          Spirale HR Solutions Pvt. Ltd. is an executive search firm that
          specializes in partnering with engineering and technology companies to
          build world-class management teams. We provide expert advice based on
          years of sector specialism to help transform companies.
        </Typography>
        <Typography variant="h5" py={0.5}>
          We partner with our customers to create executive search processes
          that help them to identify, qualify, and attract the best talent from
          across India. We are an active part of the technology community and
          believe in building long-term relationships with both companies and
          candidates based on trust and transparency.
        </Typography>
        <Typography variant="h5" py={0.5}>
          Spirale HR Solutions Pvt. Ltd. is an executive search firm with a
          difference—one where our customers receive hands-on, practical advice
          from search professionals with deep experience in the technology
          sector. We work with engineering, software technology, and more across
          India.
        </Typography>
      </Box>

      <Box
        sx={{
          py: 2,
          px: { xs: 2, sm: 3, md: 12, lg: 12 },
          backgroundColor: theme.palette.yellow.light, // Background color
          textAlign: "center", // Centers all text
        }}
      >
        {/* Centered Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          py={2}
          sx={{
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" }, // Responsive text size
          }}
        >
          WHY CHOOSE SHSPL ?
        </Typography>
      </Box>

      <Box
        sx={{
          py: 2,
          px: { xs: 2, sm: 3, md: 12, lg: 12 },
          
        }}
      >
        
        <Grid container spacing={5} alignItems="center" justifyContent="center">
          {/* Image Section */}
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            display="flex"
            justifyContent="center"
          >
            <img
              src={img}
              alt="employee"
              style={{
                width: "100%",
                maxWidth: "400px",
              
              }}
            />
          </Grid>

          {/* Text List Section */}
          <Grid item xs={12} sm={6} md={6}>
            <ul style={{ paddingLeft: "2rem" }}>
              {[
                "We're Recruitment experts with Global service delivery capability.",
                "Building meaningful careers for Jobseekers with organizations we help succeed.",
                "Serving MNCs, Large corporates, Medium and Small enterprises.",
                "Unmatched Speed, flexibility, transparency and excellent service.",
                "Access to resume database of over 2 Million high potential candidates.",
                "Using cutting edge E Recruitment technologies.",
                "Single Search To High Volume Sourcing.",
              ].map((text, index) => (
                <li key={index}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: {
                        xs: "1.2rem",
                        sm: "1rem",
                        md: "1rem",
                        lg: "1.2rem",
                      },
                      fontWeight: { xs: 500, sm: 400, md: 500, lg: 500 },
                      lineHeight: 1.5,
                    }}
                  >
                    {text}
                  </Typography>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          py: 2,
          px: { xs: 2, sm: 3, md: 12, lg: 12 },
          backgroundColor: theme.palette.blue, // Background color
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
              color: theme.palette.white.main,
            }, // Responsive text size
          }}
        >
          HOW WE WORK
        </Typography>
      </Box>

      <Box
        sx={{
          py: 2,
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
              xs: "1rem",
              sm: "1rem",
              md: "1.8rem",
            },
            color: theme.palette.info.dark,
          }}
        >
          Our entire business revolves around a simple belief: Our People Are
          Everything. If you’re looking to find great talent for your business,
          here’s how we work together.
        </Typography>
      </Box>

      <Box
        sx={{
          py: 2,
          px: { xs: 2, sm: 3, md: 12, lg: 12 },
        }}
      >
        <Grid container spacing={2}>
          {empdata.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {item.heading}
                  </Typography>
                  <Typography variant="body2">{item.cods}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
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
          Contact us
        </Button>
      </Box>

      <Partical />
    </>
  );
};

export default Employer;
