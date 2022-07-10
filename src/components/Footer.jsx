import React from "react";
import "../styles/Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <p className="footer-links">
          <a className="link-1" href="#">
            Home
          </a>

          <a href="#">Blog</a>

          <a href="#">Pricing</a>

          <a href="#">About</a>

          <a href="#">FAQ</a>

          <a href="#">Contact</a>
        </p>

        <p>
          &copy; All rights reserved -{" "}
          <a href="#" style={{ textDecoration: "none", color: "#ffffff" }}>
            Robin Joseph
          </a>
        </p>
      </div>
      <div className="footer-right">
        <a href="#">
          <FacebookIcon />
        </a>
        <a href="#">
          <InstagramIcon />
        </a>
        <a href="#">
          <LinkedInIcon />
        </a>
        <a href="#">
          <GitHubIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
