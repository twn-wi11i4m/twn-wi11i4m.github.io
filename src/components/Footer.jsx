import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faMedium,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer class="footer text-center">
      <Container>
        <Row>
          {/* <!-- Footer Location--> */}
          <Col lg={4} className="mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Location</h4>
            <lead className="mb-0">Hong Kong 🇭🇰</lead>
          </Col>
          {/* <!-- Footer Social Icons--> */}
          <Col lg={4} className="mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Around the Web</h4>
            <a
              class="btn btn-outline-light btn-social mx-1"
              href={process.env.REACT_APP_FACEBOOK_URL}
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              class="btn btn-outline-light btn-social mx-1"
              href={process.env.REACT_APP_LINKEDIN_URL}
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              class="btn btn-outline-light btn-social mx-1"
              href={process.env.REACT_APP_INSTAGRAM_URL}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              class="btn btn-outline-light btn-social mx-1"
              href={process.env.REACT_APP_MEDIUM_URL}
            >
              <FontAwesomeIcon icon={faMedium} />
            </a>
            <a
              class="btn btn-outline-light btn-social mx-1"
              href={process.env.REACT_APP_GITHUB_URL}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Col>
          {/* <!-- Footer About Text--> */}
          <Col lg={4}>
            <h4 class="text-uppercase mb-4">About TWN-wi11i4m</h4>
            <lead class="mb-0">
              Python programmer, data scientist, and big data management
              programmer.
              <br />
              Want to work with me?
              <a href="#contact"> Contact Me</a>.
            </lead>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
