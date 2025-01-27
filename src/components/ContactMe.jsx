import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  FormControl,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setStatus("invalidEmail");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xqkgdvwv", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="page-section" id="contact">
      <Container>
        {/* Contact Section Heading */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Contact Me
        </h2>
        {/* Icon Divider */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* Contact Section Form */}
        <Row>
          <Col lg="8" className="mx-auto">
            {/* Short introduction from Contact section Form */}
            <Col lg="4" className="ml-auto">
              <p className="supplementary_note">*required to fill in</p>
            </Col>
            <Form
              id="contactForm"
              onSubmit={async (e) => {
                setIsLoading(true);
                await handleSubmit(e);
                setIsLoading(false);
              }}
            >
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  disabled={isLoading}
                  data-validation-required-message="Please enter your name."
                  style={{ border: "none", borderBottom: "1px solid #ced4da" }}
                />
                <p className="help-block text-danger"></p>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="_replyto"
                  type="email"
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  disabled={isLoading}
                  data-validation-required-message="Please enter your email address."
                  style={{ border: "none", borderBottom: "1px solid #ced4da" }}
                />
                <p className="help-block text-danger fst-italic">
                  {status === "invalidEmail" && (
                    <p>{"Invalid email address"}</p>
                  )}
                </p>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  type="text"
                  rows={5}
                  placeholder="Message*"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  disabled={isLoading}
                  data-validation-required-message="Please enter a message."
                  style={{ border: "none", borderBottom: "1px solid #ced4da" }}
                />
                <p className="help-block text-danger"></p>
              </Form.Group>
              <br />
              {status === "success" && (
                <div className="alert alert-success">
                  {"Message sent successfully! I will contact you later 😊"}
                </div>
              )}
              {status === "error" && (
                <div className="alert alert-danger">
                  {"Failed to send message. Please try again later."}
                </div>
              )}
              {status === "invalidEmail" && (
                <div className="alert alert-danger">
                  {"Invalid email address. Please enter a valid email address."}
                </div>
              )}
              <Form.Group>
                <Button
                  type="submit"
                  className="btn-primary"
                  id="sendMessageButton"
                  size="xl"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Sending...
                    </>
                  ) : (
                    "Send"
                  )}
                </Button>
              </Form.Group>
              <small className="text-muted">Powered by Formspree.</small>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactMe;
