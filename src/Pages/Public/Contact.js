import React from "react";
import {
  Box,
  Typography,
  useTheme,
  Grid,
  TextField,
  Button,
  Card,
  Avatar,
} from "@mui/material";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import img from "../../assest/cotact/img1.jpg"; // Fixed spelling

import Partical from "../../Component/Public/Partical";
import { useNavigate } from "react-router-dom";

const formFields = [
  { label: "First Name", placeholder: "Name..." },
  { label: "Email", placeholder: "Email..." },
  { label: "Subject", placeholder: "Subject..." },
];

const contactData = [
  { icon: <AddIcCallIcon />, heading: "Call Us", number: "897989898767" },
  { icon: <AddIcCallIcon />, heading: "Landing", number: "91878788978767" },
  {
    icon: <AddIcCallIcon />,
    heading: "Have any questions?",
    number: "uravshiuiji@gmail.com",
  },
  {
    icon: <AddIcCallIcon />,
    heading: "Location",
    number: "3rd Floor, Havi Complex, Sector 27, Noida",
  },
];

const Contact = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "250px", sm: "350px", md: "350px" },
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1,
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            position: "relative",
            zIndex: 2,
            color: theme.palette.common.white,
            fontSize: { xs: "1rem", sm: "3rem", md: "2rem", lg: "3rem" },
            fontWeight: "bold",
          }}
        >
          Contact Us
        </Typography>
      </Box>

      {/* Contact Info Section */}
      <Box sx={{ py: 5, px: { xs: 2, sm: 3, md: 12 } }}>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.info.main,
            mb: 2,
            fontSize: { md: "1.3rem", sm: "1rem" },
          }}
        >
          Please let us know if you have a question, want to leave a comment, or
          would like further information about SHSPL.
        </Typography>

        <Grid container spacing={1} justifyContent={"space-between"}>
          {contactData.map((item, index) => (
            <Grid size={{ xs: 12, md: 6, sm: 6, lg: 3 }} key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 1,
                }}
              >
                <Avatar
                  sx={{
                    backgroundColor: theme.palette.yellow.main,
                    color: theme.palette.primary.main,
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </Avatar>
                <Box>
                  <Typography variant="h6">{item.heading}</Typography>
                  <Typography variant="body2">{item.number}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Feedback Form */}
      <Box sx={{ py: 3, px: { xs: 2, sm: 3, md: 12 } }}>
        <Typography variant="h6" sx={{ color: theme.palette.info.main, mb: 2 }}>
          Feedback Form
        </Typography>

        {/* Message Field */}
        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          label="Your Message"
          placeholder="Type your message here..."
          sx={{
            mb: 3,
            backgroundColor: theme.palette.grey[200],
            borderRadius: 2,
          }}
          InputProps={{ sx: { fontSize: "1.2rem", padding: "12px" } }}
          InputLabelProps={{ sx: { fontSize: "1rem" } }}
        />

        {/* Form Fields (3 Columns) */}
        <Grid container spacing={3}>
          {formFields.map((field, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              {" "}
              {/* Full width on all screens */}
              <TextField
                fullWidth
                variant="outlined"
                label={field.label}
                placeholder={field.placeholder}
                sx={{
                  backgroundColor: theme.palette.grey[200],
                  borderRadius: 2,
                }}
                InputProps={{ sx: { fontSize: "1.2rem", padding: "12px" } }}
                InputLabelProps={{ sx: { fontSize: "1rem" } }}
              />
            </Grid>
          ))}
        </Grid>

        {/* Submit Button */}
        <Box>
          <Button
            variant="contained"
            onClick={() => navigate("/contact")}
            sx={{
              fontSize: "15px",
              py: 1.5,
              mt: 3,
              bgcolor: "primary.main",
              "&:hover": {
                bgcolor: theme.palette.warning.light,
                color: "black",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>

      <Partical />
    </>
  );
};

export default Contact;
