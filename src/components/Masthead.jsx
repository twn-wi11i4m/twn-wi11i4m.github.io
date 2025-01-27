import React from "react";
import { Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Masthead = () => {
  return (
    <header className="masthead bg-primary text-white text-center">
      <Container className="d-flex align-items-center flex-column">
        {/* Masthead Avatar Image */}
        <Image
          className="masthead-avatar mb-5"
          src="assets/img/avatar.png"
          alt="My image"
        />
        {/* Masthead Heading */}
        <h1 className="masthead-heading text-uppercase mb-0">William NG</h1>
        {/* Icon Divider */}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon d-flex">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* Masthead Subheading */}
        <p className="masthead-subheading font-weight-light mb-0">
          Mathematician - Aviator - Programmer
        </p>
        <p className="masthead-subheading font-weight-light mb-0">
          📍 Hong Kong 🇭🇰
        </p>

        <p className="masthead-subsubheading font-weight-light mb-0 fst-italic text-white-50">
          {/* Hong Kong Coordinate */}
          (22° 19' 38"N, 114° 09' 38"E)
        </p>
      </Container>
    </header>
  );
};

export default Masthead;
