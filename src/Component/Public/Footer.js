import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  WhatsApp,
} from "@mui/icons-material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#002b5b",
        color: "white",
        px: { xs: 2, sm: 3, md: 12, lg: 12 },
        py: 5,
      }}
    >
      <Grid container spacing={2} justifyContent="space-between">
        {/* Company Info */}
        <Box>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Spirale HR Solutions Pvt. Ltd.
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Spirale HR Solutions Pvt. Ltd. is a leading <br />
              employment services industry since 2009,
              <br />
              offering customers vital services to meet <br />
              their Global Recruitment & Staffing needs <br />
              with a PAN India presence in Delhi NCR <br />
              (Noida) and Hyderabad. A well <br />
              established, dynamic organization on the <br />
              high road to further growth, expansion <br />
              and success.
            </Typography>
          </Grid>
        </Box>
        {/* Divisions & Links */}
        <Grid item xs={12} sm={6} md={4}>
          <Grid container spacing={2}>
            <Box mr={15}>
              <Grid item xs={6}>
                <Typography variant="h6">Our Divisions</Typography>
                {[
                  "Infrastructure",
                  "Mining & Metals",
                  "Power & Energy",
                  "Retailing",
                  "Telecommunication",
                  "Manufacturing & Processes",
                  "E-Commerce",
                  "Human Resource",
                  "Advertising & Media",
                  "Aviation & Aerospace",
                  "Information Technology",
                ].map((item, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    sx={{
                      mt: 1,
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Grid>
            </Box>
            <Grid item xs={6}>
              <Typography variant="h6">Our Links</Typography>
              {["About", "Blog", "Contacts", "Services", "Careers"].map(
                (item, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    sx={{
                      mt: 1,
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {item}
                  </Typography>
                )
              )}
            </Grid>
          </Grid>
        </Grid>

        {/* Subscribe Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">Subscribe</Typography>
          <Box sx={{ display: "flex", mt: 1 }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Enter Your E-mail"
              sx={{
                bgcolor: "white",
                borderRadius: "5px 0 0 5px",
                flex: 1,
              }}
            />

            <Button
              variant="contained"
              sx={{ bgcolor: "#ffc107", borderRadius: "0 5px 5px 0" }}
            >
              <MailOutlineIcon sx={{ color: "green" }} />
            </Button>
          </Box>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Get latest updates and offers.
          </Typography>
          <Divider
            sx={{ fontWeight: "bold", borderColor: "green", mt: "15px" }}
          ></Divider>

          {/* Social Media Icons */}
          <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
            {[
              { icon: Facebook, hoverBg: "#3b5998" }, // Facebook: Dark Blue
              { icon: Twitter, hoverBg: "#1DA1F2" }, // Twitter: Light Blue
              { icon: LinkedIn, hoverBg: "#0A66C2" }, // LinkedIn: Dark Blue
              { icon: Instagram, hoverBg: "#E4405F" }, // Instagram: Reddish Pink
              { icon: WhatsApp, hoverBg: "#25D366" }, // WhatsApp: Green
            ].map(({ icon: Icon, hoverBg }, index) => (
              <IconButton
                key={index}
                sx={{
                  color: "blue",
                  borderRadius: "50%",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.9)",
                  background: "white", // Default background color
                  width: 40,
                  height: 40,
                  transition: "0.3s",
                  "&:hover": { backgroundColor: hoverBg }, // Different hover color per icon
                }}
              >
                <Icon />
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
