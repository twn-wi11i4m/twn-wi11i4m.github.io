import React, { useState } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faTimes,
  faPlus,
  faComment,
  faJetFighter,
  faChartColumn,
  faChartLine,
  faPlaneDeparture,
  faUserEdit,
  faFeather,
  faWaveSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faApple,
  faMedium,
  faInstagram,
  faGithub,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

import copyTextToClipboard from "../utils/copyTextToClipboard.js";

const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioItem1 = {
    id: 1,
    title: "Time Series Attention Transformer (TSAT)",
    dividerIcon: <FontAwesomeIcon icon={faUserEdit} />,
    image: "assets/img/portfolio/portfolio_TSAT.png",
    imageAlt: "Time Series Attention Transformer (TSAT)",
    thumbnailAlt: "Portfolio Item 1 (Time Series Attention Transformer)",
    content: (
      <p className="mb-5">
        <h2 className="mb-4">Time Series Attention Transformer (TSAT)</h2>
        <p className="mb-4">
          Time series forecasting is a crucial task with applications in various
          domains, from finance to healthcare. Traditional time series models
          often struggle to capture the complex dependencies and patterns
          present in real-world data. To address this challenge, I developed the
          Time Series Attention Transformer (TSAT) - a novel deep learning model
          that leverages the power of attention mechanisms.
        </p>
        <p className="mb-4">
          Unlike conventional time series models, TSAT is able to adaptively
          focus on the most relevant past observations when making predictions.
          This allows the model to better capture both the temporal and spectral
          relationships within the time series data, leading to improved
          forecasting accuracy. TSAT also represents time series as
          edge-enhanced dynamic graphs, enabling the model to learn rich,
          contextual representations.
        </p>
        <h3 className="mb-4">TSAT Methodology</h3>
        <img
          className="img-fluid rounded mb-4"
          src="assets/img/portfolio/TSAT.png"
          alt="TSAT Methodology"
          onClick={() => window.open("assets/img/portfolio/TSAT.png", "_blank")}
        />
        <div className="mb-4">
          <a
            href="https://arxiv.org/pdf/2208.09300"
            className="btn btn-secondary mr-2"
          >
            <FontAwesomeIcon icon={faFeather} />
            {" Paper"}
          </a>
          <a
            href="https://github.com/RadiantResearch/TSAT"
            className="btn btn-secondary ml-2"
          >
            <FontAwesomeIcon icon={faGithub} />
            {" Github"}
          </a>
        </div>
      </p>
    ),
  };

  const portfolioItem2 = {
    id: 2,
    title: "Aviator",
    dividerIcon: <FontAwesomeIcon icon={faPlaneDeparture} />,
    image: "assets/img/portfolio/portfolio_aviator.png",
    imageAlt: "Aviator",
    thumbnailAlt: "Portfolio Item 2 (Aviator)",
    content: (
      <p class="mb-5">
        <h2 class="mb-4">Aviator</h2>
        <p class="mb-4">
          Aviation has been a lifelong passion of mine, and I'm proud to have
          obtained my Private Pilot License (PPL) in Adelaide, Australia. The
          process of learning to fly has been immensely rewarding, as it has
          allowed me to develop a deep understanding of aerodynamics, aircraft
          systems, and the art of piloting.
        </p>
        <p class="mb-4">
          During my training, I had the opportunity to fly a variety of
          single-engine Piper PA28 Cherokee aircraft. Each flight was an
          adventure, as I navigated through different weather conditions and
          airspace, honing my skills in areas such as takeoffs, landings, and
          emergency procedures. The sense of freedom and responsibility that
          comes with flying has been truly transformative.
        </p>
        <p class="mb-4">
          My lifelong dream of becoming an aviator has continued to take flight.
          I recently took a step further by experiencing the thrill of flying an
          Aero L-39 Albatros jet warbird in the U.S., an unforgettable milestone
          in my aviation journey.
        </p>
        <h3 class="mb-4">My Flying Experience</h3>
        <div class="mb-4 text-center">
          <a
            href="https://www.casa.gov.au/licences-and-certificates/pilots/pilot-licences/getting-private-pilot-licence-ppl"
            class="btn btn-secondary ml-1 mr-2 mb-1"
          >
            <FontAwesomeIcon icon={faPlaneDeparture} />
            {" CASA PPL Information"}
          </a>
          <a
            href="https://www.flycommand.com.au"
            class="btn btn-secondary ml-2 mr-2 mb-1"
          >
            <FontAwesomeIcon icon={faPlaneDeparture} />
            {" Command Flight Training"}
          </a>
          <a
            href="https://www.jetwarbird.com"
            class="btn btn-secondary ml-2 mr-1 mb-1"
          >
            <FontAwesomeIcon icon={faJetFighter} />
            {" Jet Warbird Training Center"}
          </a>
        </div>
      </p>
    ),
  };

  const portfolioItem3 = {
    id: 3,
    title: "Python Projects",
    dividerIcon: <FontAwesomeIcon icon={faPython} />,
    image: "assets/img/portfolio/portfolio_python.png",
    imageAlt: "Python Projects",
    thumbnailAlt: "Portfolio Item 3 (Python Projects)",
    content: (
      <p class="mb-5">
        <h2 class="mb-4">
          <FontAwesomeIcon icon={faPython} />
          {" Python Packages "}
          <FontAwesomeIcon icon={faPython} />
        </h2>
        <p class="mb-4">
          I have developed Python packages to simplify aviation-related data
          access:
        </p>
        <ul className="text-start">
          <li>
            <a href="https://github.com/twn-wi11i4m/VHHHATISpy" target="_blank">
              VHHHATISpy
            </a>{" "}
            for fetching Automatic Terminal Information Service (ATIS) data for
            Hong Kong International Airport (VHHH)
            <br />
            <kbd
              className="mb-4"
              onClick={() => copyTextToClipboard("pip install VHHHATISpy")}
            >
              $ pip install VHHHATISpy
            </kbd>
          </li>
        </ul>
        <ul className="text-start">
          <li>
            <a
              href="https://github.com/twn-wi11i4m/PyAviationWeather"
              target="_blank"
            >
              PyAviationWeather
            </a>{" "}
            for obtaining METAR and TAF data for specific airports
            <br />
            <kbd
              class="mb-4"
              onClick={() =>
                copyTextToClipboard("pip install PyAviationWeather")
              }
            >
              $ pip install PyAviationWeather
            </kbd>
          </li>
        </ul>
        <br />
        <h2 class="mb-4">
          <FontAwesomeIcon icon={faWaveSquare} />
          {" Matlab Project "}
          <FontAwesomeIcon icon={faWaveSquare} />
        </h2>
        <p class="mb-4">
          My Matlab project focuses on visualizing Fourier series and animating
          the Gibbs Phenomenon.
          <br />
          You can find the code on my
          <a
            href="https://github.com/twn-wi11i4m/Fourier_Series_Tool"
            target="_blank"
          >
            {" GitHub repository"}
          </a>
          .
        </p>
        <br />
        <h2 class="mb-4">
          <FontAwesomeIcon icon={faApple} />
          {" IOS Shortcut "}
          <FontAwesomeIcon icon={faApple} />
        </h2>
        <p class="mb-4">
          I have created a useful iOS Shortcut that provides voice-guided
          traffic camera locations in Adelaide, available through this
          <a
            href="https://www.icloud.com/shortcuts/d97de4b1f2eb49408f52f22f41cc4e40"
            target="_blank"
          >
            {" iCloud link"}
          </a>
          .
        </p>
        <br />
      </p>
    ),
  };

  const portfolioItem4 = {
    id: 4,
    title: "Aviation Knowledge Sharing",
    dividerIcon: <FontAwesomeIcon icon={faComment} />,
    image: "assets/img/portfolio/portfolio_ig.png",
    imageAlt: "Aviation Knowledge Sharing",
    thumbnailAlt: "Portfolio Item 4 (Aviation Knowledge Sharing)",
    content: (
      <p class="mb-5">
        <h2 class="mb-4">
          <FontAwesomeIcon icon={faInstagram} />
          {" Instagram "}
          <FontAwesomeIcon icon={faInstagram} />
        </h2>
        <p class="mb-4">
          I have an Instagram account where I share aviation knowledge:
          <br />
          <a
            href={process.env.REACT_APP_INSTAGRAM_AVIATOR_URL}
            target="_blank"
          >
            @william.n.aviator
          </a>
        </p>
        <br />
        <h2 class="mb-4">
          <FontAwesomeIcon icon={faMedium} />
          {" Medium "}
          <FontAwesomeIcon icon={faMedium} />
        </h2>
        <p class="mb-4">
          I also have a Medium page where I publish aviation-related articles:
          <br />
          <a href={process.env.REACT_APP_MEDIUM_URL} target="_blank">
            {process.env.REACT_APP_MEDIUM_URL}
          </a>
        </p>
      </p>
    ),
  };

  const portfolioItem5 = {
    id: 5,
    title: "Airline Traffic Dashboard",
    dividerIcon: <FontAwesomeIcon icon={faChartColumn} />,
    image: "assets/img/portfolio/portfolio_airline_traffic.png",
    imageAlt: "Airline Traffic Dashboard",
    thumbnailAlt: "Portfolio Item 5 (Airline Traffic Dashboard)",
    content: (
      <p class="mb-5">
        <h2 class="mb-4">Cathay Pacific Traffic Data Dashboard</h2>
        <div class="mb-4">
          I have created a dashboard that displays Cathay Pacific traffic data:
          <br />
          <a
            href="https://cathay-pacific-traffic-data.onrender.com"
            target="_blank"
          >
            https://cathay-pacific-traffic-data.onrender.com
          </a>
        </div>
      </p>
    ),
  };

  const portfolioItem6 = {
    id: 6,
    title: "Quantitative Finance",
    dividerIcon: <FontAwesomeIcon icon={faChartLine} />,
    image: "assets/img/portfolio/portfolio_finance.png",
    imageAlt: "Quantitative Finance",
    thumbnailAlt: "Portfolio Item 6 (Quantitative Finance)",
    content: (
      <p class="mb-5">
        <h2 class="mb-4">Trading Model Development</h2>
        <ul className="text-start">
          <li>
            Developed various equity trading models, including portfolio weight
            allocation models and order-based trading models.
          </li>
          <li>
            Techniques involved:
            <ul>
              <li>Dynamic Mode Decomposition (DMD)</li>
              <li>Advanced Technical Analysis</li>
              <li>Super Mode Decomposition (SMD)</li>
              <li>Modern Portfolio Theory</li>
              <li>Hidden Markov Model</li>
              <li>LSTM</li>
              <li>Reinforcement Learning</li>
              <li>Ornstein-Uhlenbeck Process</li>
            </ul>
          </li>
        </ul>
        <br />
        <h2 class="mb-4">Infrastructure and Control</h2>
        <ul className="text-start">
          <li>
            Developed a control mechanism to activate and deactivate the models
            for preventing large drawdown.
          </li>
          <li>
            Maintained client-side infrastructure and enhanced the performance
            of daily-used packages.
          </li>
          <li>
            Performed quantitative analysis and regularly monitored the model
            deactivation status.
          </li>
        </ul>
        <br />
        <h2 class="mb-4">Mathematics Courses Taken at HKU</h2>
        Throughout my studies at HKU, I have completed the following mathematics
        courses:
        <ul className="text-start">
          <li>
            <a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH1013">
              MATH1013 - University Mathematics II
            </a>
            <br />
          </li>
          <li>
            <a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH2012">
              MATH2012 - Fundamental Concepts of Mathematics
            </a>
            <br />
          </li>
          <li>
            <a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH2101">
              MATH2101 - Linear Algebra I
            </a>
            <br />
          </li>
          <li>
            <a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH2102">
              MATH2102 - Linear Algebra II
            </a>
            <br />
          </li>
          <li>
            <a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH2211">
              MATH2211 - Multivariable Calculus
            </a>
            <br />
          </li>
          <li>
            <a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH2241">
              MATH2241 - Introduction to Mathematical Analysis
            </a>
            <br />
          </li>
          <li>
            <a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH3301">
              MATH3301 - Algebra I
            </a>
            <br />
          </li>
          <li>
            <a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH3303">
              MATH3303 - Matrix Theory and Its Applications
            </a>
            <br />
          </li>
          <li>
            <a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH3304">
              MATH3304 - Introduction to Number Theory
            </a>
            <br />
          </li>
          <li>
            <a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH3401">
              MATH3401 - Analysis I
            </a>
            <br />
          </li>
          <li>
            <a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH3405">
              MATH3405 - Differential Equations
            </a>
            <br />
          </li>
          <li>
            <a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH3408">
              MATH3408 - Computational Methods and Differential Equations with
              Applications
            </a>
            <br />
          </li>
          <li>
            <a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH3541">
              MATH3541 - Introduction to Topology
            </a>
            <br />
          </li>
          <li>
            <a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH3601">
              MATH3601 - Numerical Analysis
            </a>
            <br />
          </li>
          <li>
            <a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH3904">
              MATH3904 - Introduction to Optimization
            </a>
            <br />
          </li>
          <li>
            <a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH3906">
              MATH3906 - Financial Calculus
            </a>
            <br />
          </li>
          <li>
            <a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH4406">
              MATH4406 - Introduction to Partial Differential Equations
            </a>
            <br />
          </li>
          <li>
            <a href="https://webapp.science.hku.hk/sr4/servlet/enquiry?Type=Course&course_code=MATH4602">
              MATH4602 - Scientific Computing
            </a>
            <br />
          </li>
        </ul>
      </p>
    ),
  };

  const projects = [
    portfolioItem1,
    portfolioItem2,
    portfolioItem3,
    portfolioItem4,
    portfolioItem5,
    portfolioItem6,
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  return (
    <section className="page-section portfolio" id="portfolio">
      <Container>
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          📝 Portfolio 📝
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon d-flex">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <Row>
          {projects.map((project) => (
            <Col key={project.id} md={6} lg={4} className="mb-5">
              <Card
                className="portfolio-item mx-auto"
                onClick={() => handleProjectClick(project)}
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <FontAwesomeIcon icon={faPlus} size="3x" />
                  </div>
                </div>
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.thumbnailAlt}
                  className="img-fluid"
                />
              </Card>
            </Col>
          ))}
        </Row>

        {selectedProject && (
          <Modal
            show={show}
            onHide={() => setShow(false)}
            size="xl"
            className="portfolio-modal"
            tabindex="-1"
            aria-labelledby={`portfolioModal${selectedProject.id}Label`}
          >
            <div className="modal-content">
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setShow(false)}
              >
                <span aria-hidden="true">
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </button>
              <div className="modal-body text-center">
                <Container>
                  <Row className="justify-content-center">
                    <Col lg={8}>
                      {/* Portfolio Modal - Title */}
                      <h2
                        className="portfolio-modal-title text-secondary text-uppercase mb-0"
                        id={`portfolioModal${selectedProject.id}Label`}
                      >
                        {selectedProject.title}
                      </h2>
                      {/* Icon Divider */}
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                          {selectedProject.dividerIcon}
                        </div>
                        <div className="divider-custom-line"></div>
                      </div>
                      {/* Portfolio Modal - Image */}
                      <img
                        className="img-fluid rounded mb-5"
                        src={selectedProject.image}
                        alt={selectedProject.imageAlt}
                      />
                      {/* Portfolio Modal - Content */}
                      {selectedProject.content}
                      {/* Portfolio Modal - Close Window Button */}
                      <button
                        className="btn btn-primary"
                        data-dismiss="modal"
                        onClick={() => setShow(false)}
                      >
                        <FontAwesomeIcon icon={faTimes} className="fa-fw" />{" "}
                        Close Window
                      </button>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Modal>
        )}
      </Container>
    </section>
  );
};

export default Portfolio;
