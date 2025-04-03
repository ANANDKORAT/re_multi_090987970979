import React from "react";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Container className="pt-4">
      <Row>
        <Col
          md={4}
          xs={4}
          className="text-center"
          onClick={() => {
            navigate("/profile");
          }}
        >
          <div>
            <svg
              className="svg-icon"
              style={{
                width: "25px",
                height: "25px",
                verticalAlign: "middle",
                fill: "currentColor",
                overflow: "hidden",
              }}
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M843.282963 870.115556c-8.438519-140.515556-104.296296-257.422222-233.908148-297.14963C687.881481 536.272593 742.4 456.533333 742.4 364.088889c0-127.241481-103.158519-230.4-230.4-230.4S281.6 236.847407 281.6 364.088889c0 92.444444 54.518519 172.183704 133.12 208.877037-129.611852 39.727407-225.46963 156.634074-233.908148 297.14963-0.663704 10.903704 7.964444 20.195556 18.962963 20.195556l0 0c9.955556 0 18.299259-7.774815 18.962963-17.73037C227.745185 718.506667 355.65037 596.385185 512 596.385185s284.254815 122.121481 293.357037 276.195556c0.568889 9.955556 8.912593 17.73037 18.962963 17.73037C835.318519 890.311111 843.946667 881.019259 843.282963 870.115556zM319.525926 364.088889c0-106.287407 86.186667-192.474074 192.474074-192.474074s192.474074 86.186667 192.474074 192.474074c0 106.287407-86.186667 192.474074-192.474074 192.474074S319.525926 470.376296 319.525926 364.088889z" />
            </svg>
          </div>
          <div className="mt-2">
            <h6 className="fw-bold mb-0"> My Account </h6>
            <span style={{ color: "rgb(40, 44, 63)", fontSize: "13px" }}>
              Find all your details here
            </span>
          </div>
        </Col>
        <Col md={4} xs={4} className="text-center">
          <div>
            <svg
              className="svg-icon"
              style={{
                width: "25px",
                height: "25px",
                verticalAlign: "middle",
                fill: "currentColor",
                overflow: "hidden",
              }}
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M240.693333 589.546667a32 32 0 0 0-22.666666 9.386666l-113.12 113.12a64 64 0 0 0 0 90.666667l113.12 113.013333a32 32 0 0 0 45.28-45.28L150.186667 757.333333l113.12-113.12a32 32 0 0 0-22.613334-54.666666zM783.306667 98.88a32 32 0 0 0-22.613334 54.666667L873.813333 266.666667l-113.12 113.12a32 32 0 1 0 45.28 45.28l113.12-113.12a64 64 0 0 0 0-90.666667L805.973333 108.266667a32 32 0 0 0-22.666666-9.386667z"
                fill="#333333"
              />
              <path
                d="M117.973333 544a32 32 0 0 1-32-32V437.333333a202.666667 202.666667 0 0 1 202.666667-202.666666h597.333333a32 32 0 0 1 0 64h-597.333333a138.666667 138.666667 0 0 0-138.666667 138.666666v74.666667a32 32 0 0 1-32 32zM736.64 789.333333h-602.666667a32 32 0 0 1 0-64h602.666667a138.666667 138.666667 0 0 0 138.666667-138.666666V512a32 32 0 0 1 64 0v74.666667a202.666667 202.666667 0 0 1-202.666667 202.666666z"
                fill="#333333"
              />
            </svg>
          </div>
          <div className="mt-2">
            <h6 className="fw-bold mb-0"> Return & Exchanges </h6>
            <span style={{ color: "rgb(40, 44, 63)", fontSize: "13px" }}>
              Return & Exchanges on the full Site
            </span>
          </div>
        </Col>
        <Col
          md={4}
          xs={4}
          className="text-center"
          onClick={() => {
            navigate("/order-tracking");
          }}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              width={25}
              height={25}
              viewBox="0 0 108.97 122.88"
            >
              <g>
                <path d="M91.36,103.58l11.21,12.23l-7.74,7.07l-10.81-11.9c-4.11,2.73-9.06,4.34-14.37,4.34c-7.16,0-13.64-2.9-18.32-7.58 c-4.7-4.7-7.58-11.18-7.58-18.32c0-7.16,2.9-13.64,7.58-18.32c4.7-4.7,11.18-7.58,18.32-7.58c7.16,0,13.64,2.9,18.32,7.58 c4.7,4.7,7.58,11.18,7.58,18.32c0,5.23-1.55,10.11-4.22,14.2L91.36,103.58L91.36,103.58z M105.23,8.54c0.6-0.12,1.22,0,1.73,0.31 c0.88,0.36,1.5,1.22,1.5,2.23l0.51,70.57c0.04,0.87-0.38,1.73-1.18,2.2l-3.05,1.82c-0.09-0.88-1.26-4.9-0.63-5.28l-0.47-65.32 l-23.7,14.94v0v25.3c-1.58-0.5-3.56-0.89-5.22-1.17V30.71l-31.54-4.07l-1.05,30.49l-11.2-7.63l-11.2,6.33l2.31-31.88L5.34,22.46 v66.13l28.03,3.04c0.11,1.65,0.33,3.51,0.65,5.09L2.31,93.2C1.02,93.13,0,92.07,0,90.76V18.99h0c-0.03-0.96,0.52-1.89,1.45-2.3 L38.98,0.2l0,0c0.39-0.17,0.84-0.24,1.29-0.19L105.23,8.54L105.23,8.54L105.23,8.54z M70.02,8.82L46.97,21.7l30.6,3.91l20.98-13.05 L70.02,8.82L70.02,8.82L70.02,8.82z M25.03,19.43L47.84,5.91l-7.52-0.99L11.3,17.68L25.03,19.43L25.03,19.43z M84.71,74.36 c-3.85-3.85-9.16-6.23-15.03-6.23c-5.88,0-11.19,2.38-15.03,6.23c-3.85,3.85-6.23,9.16-6.23,15.03c0,5.88,2.38,11.19,6.23,15.03 c3.85,3.85,9.16,6.23,15.03,6.23c5.88,0,11.19-2.38,15.03-6.23c3.85-3.85,6.23-9.16,6.23-15.03C90.94,83.51,88.55,78.2,84.71,74.36 L84.71,74.36z" />
              </g>
            </svg>
          </div>
          <div className="mt-2">
            <h6 className="fw-bold mb-0"> Order Tracking </h6>
            <span style={{ color: "rgb(40, 44, 63)", fontSize: "13px" }}>
              We'll always keep you updated{" "}
            </span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Accordion className="p-0 mt-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header
                className="contact-us-btn"
                onClick={() => navigate("/contact-us")}
              >
                <span>Contact Us</span>
              </Accordion.Header>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Our Policy</Accordion.Header>
              <Accordion.Body className="text-center">
                <div
                  style={{ color: "rgb(40, 44, 63)", fontSize: "13px" }}
                  className="my-3"
                  onClick={() => navigate("/refund-policy")}
                >
                  Refund Policy
                </div>
                <div
                  style={{ color: "rgb(40, 44, 63)", fontSize: "13px" }}
                  className="my-3"
                  onClick={() => navigate("/privacypolicy")}
                >
                  Privacy policy
                </div>
                <div
                  style={{ color: "rgb(40, 44, 63)", fontSize: "13px" }}
                  className="my-3"
                  onClick={() => navigate("/shippingpolicy")}
                >
                  Shipping policy
                </div>
                <div
                  style={{ color: "rgb(40, 44, 63)", fontSize: "13px" }}
                  className="my-3"
                  onClick={() => navigate("/termsofservice")}
                >
                  Terms of service
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>QUICK LINKS</Accordion.Header>
              <Accordion.Body className="text-center">
                <div
                  style={{ color: "rgb(40, 44, 63)", fontSize: "13px" }}
                  className="my-3"
                  onClick={() => navigate("/about-us")}
                >
                  About Us
                </div>
                <div
                  style={{ color: "rgb(40, 44, 63)", fontSize: "13px" }}
                  className="my-3"
                  onClick={() => navigate("/order-tracking")}
                >
                  Track Order
                </div>
                <div
                  style={{ color: "rgb(40, 44, 63)", fontSize: "13px" }}
                  className="my-3"
                  onClick={() => navigate("/faqs")}
                >
                  FAQ
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
