import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  Stack,
  Breadcrumbs,
} from "@mui/material";
import React from "react";
import rpoBg from "../../assest/Rpo/rpo1.jpg";
import Rpo1 from "../../assest/Rpo/rpo11.png";
import R1 from "../../assest/Rpo/resumescreen.jpg";
import R2 from "../../assest/Rpo/hh.jpg";
import { Link } from "react-router-dom";

const Rpo = () => {
  return (
    <Box px={{ xs: 2, sm: 3, md: 12, lg: 12 }} py={5}>
      {/* Title Section */}
      <Breadcrumbs separator=">" aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Typography
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "inherit", fontWeight: "bold" }}
        >
          Home
        </Typography>
        <Typography color="text.primary" fontWeight="bold">
          Requirements Process
        </Typography>
      </Breadcrumbs>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Requirements Process
      </Typography>

      {/* Image & Quote Card Section */}
      <Grid container spacing={2} justifyContent="center">
        <Grid
          item
          xs={12}
          md={8}
          sx={{ position: "relative", textAlign: "center" }}
        >
          {/* Responsive Image */}
          <Box
            component="img"
            src={rpoBg}
            alt="RPO Banner"
            sx={{
              width: "100%",
              height: { xs: "250px", sm: "300px", md: "370px" }, // Adjusted height for small screens
              objectFit: "cover",
              borderRadius: "8px",
              display: "block",
            }}
          />

          {/* Quote Card - Fully Responsive */}
          <Card
            sx={{
              position: "absolute",
              bottom: { xs: "5%", sm: "8%", md: "12%" }, // Dynamic bottom positioning
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(255, 255, 255, 0.9)",
              width: { xs: "90%", sm: "75%", md: "50%" }, // Dynamic width for different screens
              maxWidth: "400px",
              minHeight: { xs: "90px", sm: "110px", md: "130px" }, // Proper min height
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: 4,
              borderRadius: 3,
              p: { xs: 2, sm: 3 },
              textAlign: "center",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="#002b5b"
                sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }} // Better text scaling
              >
                "We have the capabilities and experience to deliver the answers
                you need to move forward."
              </Typography>
              <Typography
                variant="body2"
                fontWeight="bold"
                sx={{ mt: 1, fontSize: { xs: "12px", sm: "14px" } }} // Improved text visibility
              >
                - Deepak Kumar
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Section Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        sx={{ mt: 6, mb: 4 }}
      >
        Recruitment Process Outsourcing
      </Typography>

      {/* Image & Description Section */}
      <Grid container spacing={2} sx={{ mt: 2 }} alignItems="center">
        {/* Left Side - Image */}
        <Grid size={{ xs: 12, sm: 5, md: 5 }} sx={{ textAlign: "center" }}>
          <img
            src={Rpo1}
            alt="RPO Process"
            style={{
              width: "100%",

              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 7, md: 7 }}>
          <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
            Recruitment Process Outsourcing (RPO) an IT Enables Service (ITES)
            is a form of business process outsourcing (BPO) where an employer
            transfers all or part of its recruitment processes to Spirale HR
            Solutions Pvt. Ltd. (Formerly Spirale India Solutions). We extend
            RPO services for permanent as well as contractual staffing. We
            manage the entire recruiting/hiring process from job profiling
            through the onboarding of the new hire, including staff, technology,
            method, and reporting. We may, if need be, adopt the client
            company's technology, methodologies, and reporting.
            <br />
            <br />
            Spirale HR Solutions Pvt. Ltd. (Formerly Spirale India Solutions)
            RPO solution differs greatly from all our other recruitment services
            in that RPO assumes ownership of the design, management, and control
            of the recruitment process and the responsibility of results. We
            offer a range of RPO services for permanent as well as contractual
            staffing. RPO makes the talent acquisition process simpler, more
            efficient, and cost-effective. For our clients, which may be
            international placement agencies or direct employers, we are geared
            to provide 24x7 RPO services.
            <br />
            <br />
            We assume ownership for the entire design, execution, and control of
            the recruitment process and the responsibility of results. We may,
            if need be, adopt the client company's process, technology,
            methodologies, and reporting. Our recruiters are equipped with
            access to all major proprietary and external resume databases, job
            portals, social media networks, and powerful e-recruitment methods
            and technology to identify both active and passive job seekers.
            <br />
            <br />
            We can also use your subscriptions to job portals to source
            candidates for your requirements.
          </Typography>
        </Grid>
      </Grid>

      {/* SHSPL RPO Advantage */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" fontWeight="bold">
          SHSPL RPO Advantage
        </Typography>
        <List variant="body2" sx={{ mt: 2, fontSize: "18px" }}>
          {[
            "Saving costs, reducing cycle time, and providing verifiable metrics.",
            "Providing greater flexibility, avoiding under-utilization or forcing costly layoffs of recruitment staff when activity is low.",
            "Whether you adopt one or all, we give your process scalability, higher quality and flexibility assuring specific performance targets.",
            "Our recruiters have access to a gamut of easily searchable resume databases, Job sites and powerful E-Recruitment tools enabling them to locate active and passive jobseekers very quickly.",
            "Response management from client's own Print Media Advertising.",
            "Allows HR manager to focus on other core functions",
          ].map((item, index) => (
            <ListItem
              key={index}
              sx={{ display: "list-item", listStyleType: "disc", pl: 2, ml: 2 }}
            >
              <Typography variant="body2">{item}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Recruitment Processes */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" fontWeight="bold">
          Recruitment processes that staffing companies or employers may
          outsource to SHSPL include
        </Typography>
        <List sx={{ mt: 1 }}>
          {[
            "Writing Job Descriptions / Job Specifications.",
            "Job Postings and management on the Company's Career site.",
            "Job Postings and management on external Job Portals.",
            "Resume Search using the client's or own subscription to a Job Portal.",
            "Response management from client's own Print Media Advertising.",
            "Screening through Tele interviews and Personal Interviews.",
            "Head Hunting Research (Organizations & skilled, qualified Professionals) using superior web tools, technology & intellect.",
            "Maintaining & Reporting metrics.",
          ].map((item, index) => (
            <ListItem
              key={index}
              sx={{ display: "list-item", listStyleType: "disc", pl: 2, ml: 2 }}
            >
              <Typography variant="body2">{item}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Client Expectations */}
      <Box sx={{ mt: 6 }}>
        <Grid container spacing={6}>
          {/* Row 1: Client Expectations */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold">
              What We Expect from Our Clients:
            </Typography>
            <List sx={{ mt: 2 }}>
              {[
                "Sharing the organization's Corporate strategy, vision, mission, culture, and values.",
                "Share job description and desired candidate profile.",
                "Providing initial direction and continued feedback to assure good results.",
                "Transparency, Trust, Confidence.",
              ].map((item, index) => (
                <ListItem
                  key={index}
                  sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}
                >
                  <Typography variant="body2">{item}</Typography>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Row 2: RPO Services */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold">
              RPO Services We Provide:
            </Typography>
            <List sx={{ mt: 2 }}>
              {[
                "Writing Job Specifications",
                "Job Postings",
                "Resume Database Search",
                "Resume Screening & Shortlisting",
                "Resume Management & Storage",
                "Employee Referral Schemes",
                "Walk-In Interviews",
              ].map((item, index) => (
                <ListItem
                  key={index}
                  sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}
                >
                  <Typography variant="body2">{item}</Typography>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Row 3: Additional Content */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold">
              Why Choose Our RPO Services:
            </Typography>
            <List sx={{ mt: 2 }}>
              {[
                "Industry Expertise & Knowledge",
                "Cost-Effective Talent Acquisition",
                "Faster Hiring Process",
                "Advanced Recruitment Technology",
                "Scalability & Flexibility",
              ].map((item, index) => (
                <ListItem
                  key={index}
                  sx={{ display: "list-item", listStyleType: "disc", pl: 2 }}
                >
                  <Typography variant="body2">{item}</Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>

      {/* Job Posting Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center">
          Job Postings
        </Typography>
        <List sx={{ mt: 2 }}>
          {[
            "Outsourcing the job posting process alone to Spirale Hr Solutions Pvt.Ltd.(Formerly Spirale india solutions), client's can save a lot of precious and valuable time & resources and can focus on their core HR activities.",
            "Clients share with us all the basic information/job specifications including Job designations, locations, desired qualifications, age, experience, salary, KRAs job type and description.",
            "Our recruitment Processing Executives are experts at extracting the relevant content and creating candidate-targeted recruitment advertisements from the job specifications shared by clients.",
            "We post /edit/renew client's job requirements manually on job boards where client's directly have subscriptions to Job Portals and also remotely on the client's Corporate Career site.",
          ].map((item, index) => (
            <ListItem
              key={index}
              sx={{ display: "list-item", listStyleType: "disc", pl: 2, ml: 2 }}
            >
              <Typography variant="body2">{item}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Resume Database Search */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center">
          Resume Database Search
        </Typography>
        <List sx={{ mt: 2 }}>
          {[
            "This is the most crucial functions within the Candidate Generation process that requires knowledge, experience, tact, time and people .By outsourcing this process you recruiting department grows without increasing head count.",
            "We optimise your resume Database search process through very effective utilisation of existing databases and database subscriptions for maximised return on expenditure.",
            "We undertake Resume Database search for our client's manpower needs from internal and external resume databases, Job Portals, social media networks deploying powerful E recruitment methods and technology to identify both active and passive jobseekers.",
          ].map((item, index) => (
            <ListItem
              key={index}
              sx={{ display: "list-item", listStyleType: "disc", pl: 2, ml: 2 }}
            >
              <Typography variant="body2">{item}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Resume Screening & Shortlisting */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" textAlign="center" mb={5}>
          Resume Screening & Shortlisting
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
          alignItems="center"
        >
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <img
              src={R1}
              alt="HR Solutions"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
          <Box sx={{ flex: 2 }}>
            <List>
              {[
                "This is the next step after resumes have been sourced through various methodologies like Job Postings, Print Media, Referrals, Placement agencies, Career site, and Resume databases. Outsourcing this function increases sourcing productivity by focusing only on pre-screened and evaluated candidates who have passed through the screening funnel by Spirale Hr Solutions Pvt.Ltd. (Formerly Spirale India Solutions). It also saves a lot of your core recruitment time.",
                "You just need to give us your job specifications, selection criteria, mandatory and desirable skills, and other selection parameters. We will carefully sift through all the resumes and shortlist the right resumes as per your specifications and present you those who match very close to your requirements. Acting as another layer in the virtual funnel, our screening solution delivers the most qualified and interested candidates into the hands of your recruitment team.",
                "Your recruiters may be wasting valuable time contacting candidates who are no longer available? Not interested? Not suitable? Or simply not contactable? Or you are faced with the situation where you had advertised on the job boards or your corporate website and are now inundated with resumes? Also, you are not sure about the screening criteria to follow in this case – having too stringent criteria can lead to the elimination of good candidates from the potential pool whereas having too lenient criteria can result in an unnecessarily large pool with too many unqualified candidates.",
              ].map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    display: "list-item",
                    listStyleType: "disc",
                    pl: 2,
                    ml: 2,
                  }}
                >
                  <Typography variant="body2">{item}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ mt: 6 }}>
        <Grid container spacing={4}>
          {/* How Does It Work? */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold">
              How does it work?
            </Typography>
            <List sx={{ mt: 2 }}>
              {[
                "We contact potential candidates by email and/or telephone.",
                "We contact candidates from 9:00 am to 10:00 pm 7 days a week.",
                "Uses customized templates with specific screening questions.",
                "Undertake detailed telephone assessments and skills validation.",
                "Administer the selection tests and schedule interviews.",
              ].map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    display: "list-item",
                    listStyleType: "disc",
                    pl: 2,
                    ml: 2,
                  }}
                >
                  <Typography variant="body2">{item}</Typography>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Your Benefits */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold">
              Your Benefits
            </Typography>
            <List sx={{ mt: 2 }}>
              {[
                "Increase sourcing productivity by only focusing on available, interested, and qualified candidates.",
                "Increase TAT by speedily contacting a high number of pre-screened candidates in a shorter time.",
              ].map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    display: "list-item",
                    listStyleType: "disc",
                    pl: 2,
                    ml: 2,
                  }}
                >
                  <Typography variant="body2">{item}</Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>

      {/* Resume Management */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" fontWeight="bold">
          Resume Management
        </Typography>
        <List sx={{ mt: 2 }}>
          <ListItem
            sx={{ display: "list-item", listStyleType: "disc", pl: 2, ml: 2 }}
          >
            <Typography variant="body2">
              Posting jobs on career sites and Job Portals is today an
              indispensable and therefore a widely used means of sourcing
              resumes. However, posting these advertisements, managing
              responses, shortlisting resumes, and integrating them with
              client's proprietary resume Management systems requires a colossal
              amount of time, resources, and energy. The Search House simplifies
              this process. Our dedicated team of Recruitment Process Executives
              work on your manpower requirements to ensure that all vacancies
              are timely advertised, responses monitored, all resumes received
              are dealt with as per your selection criteria, and prompt
              communications are sent out. All you do is E-mail and share your
              candidate requirements we take care of the rest. We can process
              and manage a huge amount of resumes received by e-mail and post
              etc. and convert this data into the electronic format and transmit
              the data for uploading onto a searchable Recruitment management
              system.
            </Typography>
          </ListItem>
        </List>
      </Box>

      {/* Head Hunt Research */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" textAlign="center" mb={5} fontWeight="bold">
          Head Hunt Research
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <img
              src={R2}
              alt="Head Hunt Research"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
          <Box sx={{ flex: 2 }}>
            <List>
              {[
                "Our RPO Executives are experts, highly focused, specialist internet researchers, who are adept at utilizing the web and published materials to compile valuable head-hunting leads for global client's Client's just need to specify the position and we identify the right candidate names in the right organizations. Our head hunters have a lot of expertise and are experts in mapping companies and people in their constant endeavor to identify the Right and the Best candidates for specialized positions.",
                "By outsourcing this crucial phase of your talent search process to us you are at an advantage. Our extensive search and reach lead to an extremely cost-effective solution for your hiring process while maximizing both quality and service excellence.",
              ].map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    display: "list-item",
                    listStyleType: "disc",
                    pl: 2,
                    ml: 2,
                  }}
                >
                  <Typography variant="body2">{item}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Rpo;
