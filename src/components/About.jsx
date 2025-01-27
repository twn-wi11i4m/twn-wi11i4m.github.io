import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const aboutSections = [
    {
      title: "Academic Background",
      content:
        "I graduated from The University of Hong Kong with a Bachelor's degree in Pure Mathematics. My academic journey has equipped me with a strong foundation in Scientific Computing, Optimization, Numerical Analysis, and Data Science.",
    },
    {
      title: "Aviation Passion",
      content:
        "As an aviation enthusiast, I aspire to become an airline pilot. I hold a Private Pilot License (PPL), which has provided me with hands-on experience in aerodynamics, meteorology, navigation, and aeromedical factors. My dedication to aviation is reflected in my continuous learning and practical training.",
    },
    {
      title: "Programming Skills",
      content:
        "In addition to my academic and aviation pursuits, I am an amateur programmer proficient in MATLAB, Python, and JavaScript. I have practical experience in data science and big data handling and am currently enhancing my skills in web development and deep learning.",
    },
  ];

  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <Container>
        <h2 className="page-section-heading text-center text-uppercase text-white">
          About Me
        </h2>

        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon d-flex">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <Row>
          {aboutSections.map((section, index) => (
            <Col key={index} lg={4} className="ml-auto">
              <p className="lead">{section.content}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;
