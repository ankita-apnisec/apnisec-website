import React, { useState } from "react";
import { AppBar, Toolbar, Button, Container, Typography, TextField, Box, Grid, Link, Paper } from "@mui/material";
import { IconButton } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; // For the dropdown icons
import './CybersecurityPage.css'; // Import the CSS file
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import PublicIcon from '@mui/icons-material/Public';
import LockIcon from '@mui/icons-material/Lock';
import BuildIcon from '@mui/icons-material/Build';

const CybersecurityPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    console.log(formData);

    // Convert form data to JSON string
    const fileData = JSON.stringify(formData, null, 2);

    // Create a Blob from the data
    const blob = new Blob([fileData], { type: 'application/json' });

    // Create a link element
    const link = document.createElement('a');

    // Set the download attribute with a filename
    link.download = 'form-data.json';

    // Create a URL for the Blob and set it as the href attribute
    link.href = URL.createObjectURL(blob);

    // Append the link to the document body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Clean up by removing the link element
    document.body.removeChild(link);
    // Handle form submission logic here
  };
  const services = [
    {
      title: 'Endpoint Security Solutions',
      description: `Protect your devices and networks from malware, ransomware, 
      and other cyber threats with our comprehensive endpoint security solutions. 
      Safeguard sensitive data and ensure business continuity with real-time threat detection and response.`,
      icon: <LockIcon fontSize="large" sx={{ color: '#4ce0b3' }} />,
    },
    {
      title: 'Network Security Solutions',
      description: `Secure your network infrastructure from unauthorized access and data breaches 
      with our advanced network security solutions. Defend against evolving cyber threats 
      and maintain network integrity with robust firewalls.`,
      icon: <PublicIcon fontSize="large" sx={{ color: '#4ce0b3' }} />,
    },
    {
      title: 'Cloud Security Solutions',
      description: `Enhance the security of your cloud infrastructure with advanced protection 
      measures. Prevent unauthorized access, monitor potential threats, and ensure data security 
      in the cloud environment.`,
      icon: <BuildIcon fontSize="large" sx={{ color: '#4ce0b3' }} />,
    },
  ];
  return (
    <div className="root">
      {/* Navigation Bar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.9)", // Black background with slight transparency
          borderBottom: "0.5px solid #f5f5f5", // Off-white border
          paddingLeft: "10vw", // Adjust left padding if needed
          paddingRight: "10vw", // Adjust right padding if needed
          height: "10vh",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>

          {/* Middle section with dropdown buttons */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button color="inherit" endIcon={<ArrowDropDownIcon />} sx={{ color: "#fff", fontSize: "1vw" }}>
              Products
          </Button>
            <Button color="inherit" endIcon={<ArrowDropDownIcon />} sx={{ color: "#fff", marginLeft: "10px", fontSize: "1vw" }}>
              Services
          </Button>
          </Box>

          {/* Right section with "Book Demo" button */}
          <Button
            variant="contained"
            color="primary"
            sx={{ marginRight: 2, backgroundColor: "#00FFB2", color: "black", marginTop: "10px", fontSize: "1vw" }}
          >
            Book a Demo
              </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}

      <Box
        className="content"
        sx={{
          width: "101vw",
          height: "72vh",
          backgroundImage: "url('/assets/background.png')", // Replace with your image path
          backgroundSize: "cover", // Ensures the image covers the entire container
          backgroundPosition: "center", // Centers the background image
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          color: "#fff" // Optional: Set text color to white for readability over the background
        }}
      >
        <Box
          sx={{
            width: "50vw",
            textAlign: "left",
            paddingLeft: "6vw",
            marginTop: "15vh"
          }}>
          <Typography className="heading" sx={{ fontWeight: 900, fontSize: "3vw" }}>
            Comprehensive <span style={{ color: "#00FFB2" }}>Cybersecurity</span>
            <br /> Strategies for Growth and Resilience
          </Typography>
          <Typography className="subheading">
            Unlock your business's full potential with our comprehensive cybersecurity strategies.
            Safeguard your growth and resilience in the digital age.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginRight: 2, backgroundColor: "#00FFB2", color: "black", marginTop: "20px", width: "18vw", fontSize: "1vw" }}
          >
            Book an Appointment
              </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{ color: "#00FFB2", borderColor: "#00FFB2", marginTop: "20px", width: "13vw", fontSize: "1vw" }}
          >
            Talk with Us
              </Button>
        </Box>
      </Box>

      <Box
        className="content"
        sx={{
          width: "100vw",
          height: "15vh",
          maxWidth: "100vw",
          backgroundColor: "#000",
          padding: "1vh 0"
        }}
      >
        <Typography
          className="subheading"
          sx={{
            marginTop: "2vh",
            fontSize: "1.5vw",
            textAlign: "center",
            color: "#fff"
          }}
        >
          We are providing cybersecurity services to some of the world's leading companies
  </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "3vh",
            flexWrap: "wrap",
            gap: "1vw"
          }}
        >
          <img
            src="/assets/ola.png"
            alt="Ola"
            className="companyLogo"
            style={{ height: "5vh" }}
          />
          <img
            src="/assets/dominos.png"
            alt="Domino's"
            className="companyLogo"
            style={{ height: "4vh" }}
          />
          <img
            src="/assets/meesho.png"
            alt="Meesho"
            style={{
              height: "3vh"
            }}
          />
          <img
            src="/assets/carDekho1.png"
            alt="CarDekho"
            style={{
              height: "3vh",
              filter: "invert(1)"
            }}
          />
          <img
            src="/assets/upgrad.png"
            alt="Upgrad"
            style={{
              height: "2vh"
            }}
          />
          <img
            src="/assets/lenskart1.jpg"
            alt="Lenskart"
            className="companyLogo"
            style={{ height: "4vh" }}
          />
          <img
            src="/assets/kalki.png"
            alt="Kalki"
            className="companyLogo"
            style={{ height: "5vh" }}
          />
          <img
            src="/assets/delhivery.png"
            alt="Delhivery"
            style={{
              height: "2vh",
              filter: "invert(1)"
            }}
          />
        </Box>
      </Box>




      {/* Stats Section */}
      <Box sx={{ background: "linear-gradient(45deg, #00FFB2, white)", py: 4, marginTop: "10vh", color: "black", width: "80vw", marginLeft: "10vw", borderRadius: "50px" }}>
        <Container>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={3}>
              <Typography variant="h3" align="center" sx={{ fontWeight: "bold" }}>
                10+
              </Typography>
              <Typography variant="body1" align="center">
                Years of Experience
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h3" align="center" color="red" sx={{ fontWeight: "bold" }}>
                13689+
              </Typography>
              <Typography variant="body1" align="center">
                Vulnerabilities detected
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h3" align="center" sx={{ fontWeight: "bold" }}>
                100+
              </Typography>
              <Typography variant="body1" align="center">
                Organizations
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h3" align="center" sx={{ fontWeight: "bold" }}>
                99%
              </Typography>
              <Typography variant="body1" align="center">
                Customer retention
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>




      <Box sx={{ backgroundColor: '#000', color: '#fff', p: 5, marginTop: "10vh" }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', marginTop: "20px" }}>
          Services we offer
      </Typography>
        <Grid container spacing={4} justifyContent="center" marginTop="20px">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{ p: 4, borderRadius: 3, backgroundColor: '#121212', textAlign: 'center', color: "white" }}
              >
                {service.icon}
                <Typography variant="h5" gutterBottom sx={{ color: '#4ce0b3', mt: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body1">{service.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>


      {/* CTA Section */}
      <Box sx={{ backgroundColor: "#000", color: "#fff", py: 5, marginTop: "10vh", height: "20vh", display: "flex", alignItems: "center" }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Typography variant="h4">
                How to choose cybersecurity solution
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Having difficulties choosing the right solution for your business?
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginRight: 2, backgroundColor: "#00FFB2", color: "black", marginTop: "20px" }}
              >
                Book an Appointment
              </Button>
              <Button
                variant="outlined"
                color="primary"
                sx={{ color: "#00FFB2", borderColor: "#00FFB2", marginTop: "20px" }}
              >
                Talk with Us
              </Button>
            </Grid>
          </Grid>


          {/* <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography>Apni sec is started by passionate security researchers, white hat hackers and bug bounty hunters with an aim to protect organisations data from attackers by detecting, investigating and responding to cyber-threat. Our autonomous cyber defence platform have a 24/7 watch on potential attacks, all delivered as Security as a Service (SECaaS).</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Email: info@apnisec.com
              Address: Metropolis Office Park Plot No: 128-P2, EPIP ZONE, Adjacent to Ginger Hotel, Whitefield Industrial Area, Bangalore 560066</Typography>
            </Grid>
          </Grid> */}
        </Container>
      </Box>


      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
      </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Name"
                variant="filled"
                fullWidth
                required
                value={formData.name}
                onChange={handleChange}
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                variant="filled"
                fullWidth
                required
                value={formData.email}
                onChange={handleChange}
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="subject"
                label="Subject"
                variant="filled"
                fullWidth
                value={formData.subject}
                onChange={handleChange}
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="message"
                label="Message"
                variant="filled"
                fullWidth
                multiline
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
              />
            </Grid>
          </Grid>
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // sx={{ mt: 3, mb: 2 }}
            variant="contained"
            color="primary"
            sx={{ marginRight: 2, backgroundColor: "#00FFB2", color: "black", marginTop: "2vh", borderRadius: "10px" }}
          >
            Submit
        </Button> */}
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            sx={{ color: "#00FFB2", borderColor: "#00FFB2", marginTop: "20px", borderRadius: "10px"  }}
          >
            Talk with Us
              </Button>
        </Box>
      </Container>


      <Box sx={{ backgroundColor: '#000', color: '#fff', p: 4, marginTop: "10vh" }}>

        <Grid container spacing={4}>
          {/* Solutions */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>Solutions</Typography>
            <Link href="#" color="inherit" underline="hover">Application Services</Link><br />
            <Link href="#" color="inherit" underline="hover">Security Servers</Link><br />
            <Link href="#" color="inherit" underline="hover">Security FireWalls</Link><br />
            <Link href="#" color="inherit" underline="hover">Cloud Services</Link><br />
            <Link href="#" color="inherit" underline="hover">Social Engineering</Link>
          </Grid>

          {/* Partners */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>Clients</Typography>
            <Link href="#" color="inherit" underline="hover">Lipspace</Link><br />
            <Link href="#" color="inherit" underline="hover">Oziva</Link><br />
            <Link href="#" color="inherit" underline="hover">RangDe</Link><br />
            <Link href="#" color="inherit" underline="hover">WorkIndia</Link><br />
            <Link href="#" color="inherit" underline="hover">Axio</Link><br />
            <Link href="#" color="inherit" underline="hover">Purplle</Link><br />
            <Link href="#" color="inherit" underline="hover">Blackbucn</Link><br />
            <Link href="#" color="inherit" underline="hover">mCaffeine</Link><br />
            <Link href="#" color="inherit" underline="hover">Precisa</Link><br />
            <Link href="#" color="inherit" underline="hover">Tribytetech</Link>
          </Grid>

          {/* Resources */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>Resources</Typography>
            <Link href="#" color="inherit" underline="hover">Academy</Link><br />
            <Link href="#" color="inherit" underline="hover">Blog</Link><br />
            <Link href="#" color="inherit" underline="hover">Themes</Link><br />
            <Link href="#" color="inherit" underline="hover">Hosting</Link><br />
            <Link href="#" color="inherit" underline="hover">Developers</Link><br />
            <Link href="#" color="inherit" underline="hover">Support</Link>
          </Grid>

          {/* Company */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>Company</Typography>
            <Link href="#" color="inherit" underline="hover">About Us</Link><br />
            <Link href="#" color="inherit" underline="hover">Careers</Link><br />
            <Link href="#" color="inherit" underline="hover">FAQs</Link><br />
            <Link href="#" color="inherit" underline="hover">Teams</Link><br />
            <Link href="#" color="inherit" underline="hover">Contact Us</Link>
          </Grid>
        </Grid>





        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2">© 2024 All Rights Reserved</Typography>
          <Box mt={2}>
            <IconButton color="inherit" href="#">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" href="#">
              <TelegramIcon />
            </IconButton>
            <IconButton color="inherit" href="#">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit" href="#">
              <PublicIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

    </div>
  );
};

export default CybersecurityPage;