import React from "react";
import { Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faSnapchat,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SocialCard = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FontAwesomeIcon icon={faFacebookF} className="fa-lg me-3" />,
      url: process.env.REACT_APP_FACEBOOK_URL,
    },
    {
      name: "Instagram",
      icon: <FontAwesomeIcon icon={faInstagram} className="fa-lg me-3" />,
      url: process.env.REACT_APP_INSTAGRAM_URL,
    },
    {
      name: "LinkedIn",
      icon: <FontAwesomeIcon icon={faLinkedin} className="fa-lg me-3" />,
      url: process.env.REACT_APP_LINKEDIN_URL,
    },
    {
      name: "Snapchat",
      icon: <FontAwesomeIcon icon={faSnapchat} className="fa-lg me-3" />,
      url: process.env.REACT_APP_SNAPCHAT_URL,
    },
  ];

  return (
    <section className="bg-primary text-white min-vh-100 py-5" id="social">
      <Container className="d-flex align-items-center flex-column">
        {/* Avatar Image */}
        <div
          className="text-center mb-5"
          style={{ width: "100%", maxWidth: "300px" }}
        >
          <Image
            fluid
            className="rounded-circle"
            src="assets/img/avatar.png"
            alt="My Avatar"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "300px",
              "@media (max-width: 768px)": {
                maxWidth: "66.67vw",
              },
            }}
          />
        </div>

        {/* Name */}
        <h1 className="text-uppercase mb-4">William NG</h1>

        {/* Social Media Links */}
        <div className="w-100" style={{ maxWidth: "500px" }}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center bg-white text-primary rounded-pill mb-3 p-3 text-decoration-none hover-shadow"
              style={{ transition: "transform 0.2s", cursor: "pointer" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.04)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div className="d-flex align-items-center w-100">
                {link.icon}
                <span className="fw-bold">{link.name}</span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SocialCard;
