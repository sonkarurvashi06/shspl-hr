import * as React from "react";
import background from "../../assest/home/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Stack,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";

const drawerWidth = 240;
const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "RPO/ITES", path: "/rpo-ites" },
  { label: "Career", path: "/career" },
  { label: "Employer", path: "/employer" },
  { label: "Contact", path: "/contact" },
];

const ContactBar = ({ isVisible }) => (
  <Box
    sx={{
      background: "#002E5B",
      py: 0.5,
      px: { xs: 2, sm: 3, md: 12, lg: 12 },
      display: isVisible ? "flex" : "none",
      alignItems: "center",
      justifyContent: "space-between",
      transition: "0.3s ease-in-out",
      position: "fixed",
      top: 0,
      width: "100%",
      height: "8%",
      zIndex: 1200,
    }}
  >
    <Stack direction="row" spacing={1} color="#fff" alignItems="center">
      <CallIcon />
      <Typography variant="body2" fontWeight="bold" color="#fff">
        +91 9696974038
      </Typography>
    </Stack>
    <Stack direction="row" spacing={2} color="#fff">
      {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon].map(
        (Icon, index) => (
          <Icon key={index} style={{ cursor: "pointer" }} />
        )
      )}
    </Stack>
  </Box>
);

function HomeAppBar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isContactVisible, setIsContactVisible] = React.useState(true);

  const handleClick = () => {
    navigate("/");
  };
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollThreshold = scrollHeight * 0.5;
      setIsContactVisible(window.scrollY < scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", p: 2 }}>
      <Box
        onClick={handleClick}
        sx={{ display: "flex", justifyContent: "center", mb: 2 }}
      >
        <img
          src={background}
          alt="Logo"
          style={{ width: "100px", height: "auto" }}
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                textAlign: "center",
                "&:hover": { backgroundColor: "#f4f4f4" },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      <ContactBar isVisible={isContactVisible} />

      <AppBar
        component="nav"
        sx={{
          py: 1,
          px: { xs: 2, sm: 3, md: 12, lg: 12 },
          background: "white",
          position: "fixed",
          top: 0,
          zIndex: 1100,
          height: { xs: "80px", sm: "100px", md: "75px", lg: "90px" },
          display: "flex",
          justifyContent: "center",
          mt: isContactVisible ? { xs: "50px", lg: "50px" } : 0,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            pl: "0px !important",
            pr: "0px !important",
          }}
        >
          <Box
            onClick={handleClick}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={background}
              alt="Logo"
              style={{ width: "120px", height: "auto" }}
            />
          </Box>

          <Box
            sx={{ display: { xs: "flex", sm: "none", md: "flex", lg: "none" } }}
          >
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ color: "#000" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            sx={{ display: { xs: "none", lg: "flex", sm: "none", md: "none" } }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  color: "black",
                  mx: "5px",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: "-5px",
                    width: location.pathname === item.path ? "90%" : "0%",
                    height: "2px",
                    backgroundColor: "#FFD700",
                    transition: "width 0.3s ease-in-out",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none", md: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default HomeAppBar;
