import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Button1 from "../buttons/Button1.jsx";
import "./cardSlider.css";
import { useNavigate } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

const CardSlider = () => {
  const [nextSlide, setNextSlide] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("nextSlide", nextSlide);
    if (nextSlide < 2) {
      setNextSlide(nextSlide + 1);
    } else {
      console.log("asfda");
      navigate("/register");
    }
  };
  return (
    <>
      {nextSlide == 0 && (
        <Container className="my-5">
          <Fade delay={1e1} cascade damping={1e-1}>
            <Row className="justify-content-center">
              {/* Card 1 */}
              <Col md={4} className="mb-4">
                <div
                  className="custom-card custom-card-1"
                  style={{ position: "relative" }}
                >
                  {" "}
                  {/* Add a specific class for the first card */}
                  <Card className="border-0">
                    <Card.Img
                      variant="top"
                      src="./cardImg3.svg"
                      alt="Illustration 1"
                      className="custom-image"
                    />
                    <Card.Body className="text-center mx-3">
                      <Card.Title className="fw-bold ">
                        Stay in the Loop, Always
                      </Card.Title>
                      <Card.Text>
                        Track your application progress in real-time and never
                        miss a single update
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <div
                    className="custom-card custom-card-1"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: "25%",
                      top: 0,
                    }}
                  >
                    <Card className="border-0">
                      <Card.Img
                        variant="top"
                        src="./cardImg1.svg"
                        alt="Illustration 1"
                        className="custom-image"
                      />
                      <Card.Body className="text-center mx-3">
                        <Card.Title className="fw-bold">
                          Find Your Perfect Match
                        </Card.Title>
                        <Card.Text>
                          Instantly check your eligibility for top universities
                          and courses tailored to your goals
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Col>

              {/* Card 2 */}
              <Col md={4} className="mb-4">
                <div className="custom-card">
                  <Card className="border-0 h-100">
                    <Card.Img
                      variant="top"
                      src="./cardImg2.svg"
                      alt="Illustration 2"
                      className="custom-image"
                    />
                    <Card.Body className="text-center mx-3">
                      <Card.Title className="fw-bold">
                        Expert Support, Anytime
                      </Card.Title>
                      <Card.Text>
                        Connect directly with admission experts through chats
                        and calls, all within the app.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Fade>

          {/* Button */}
          <Slide>
            <div className="text-center mt-4 d-flex justify-content-center">
              <Button1 value="Let’s get started" handleClick={handleClick} />
            </div>
          </Slide>
        </Container>
      )}
      {nextSlide == 1 && (
        <Container className="my-5">
          <Fade delay={1e1} cascade damping={1e-1}>
            <Row className="justify-content-center">
              {/* Card 1 */}
              <Col md={4} className="mb-4">
                <div
                  className="custom-card custom-card-1"
                  style={{ position: "relative" }}
                >
                  {" "}
                  {/* Add a specific class for the first card */}
                  <Card className="border-0">
                    <Card.Img
                      variant="top"
                      src="./cardImg1.svg"
                      alt="Illustration 1"
                      className="custom-image"
                    />
                    <Card.Body className="text-center mx-3">
                      <Card.Title className="fw-bold ">
                        Find Your Perfect Match
                      </Card.Title>
                      <Card.Text>
                        Instantly check your eligibility for top universities
                        and courses tailored to your goals
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <div
                    className="custom-card custom-card-1"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: "25%",
                      top: 0,
                    }}
                  >
                    <Card className="border-0">
                      <Card.Img
                        variant="top"
                        src="./cardImg2.svg"
                        alt="Illustration 1"
                        className="custom-image"
                      />
                      <Card.Body className="text-center mx-3">
                        <Card.Title className="fw-bold">
                          Expert Support, Anytime
                        </Card.Title>
                        <Card.Text>
                          Connect directly with admission experts through chats
                          and calls, all within the app
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Col>

              {/* Card 2 */}
              <Col md={4} className="mb-4">
                <div className="custom-card">
                  <Card className="border-0 h-100">
                    <Card.Img
                      variant="top"
                      src="./cardImg3.svg"
                      alt="Illustration 2"
                      className="custom-image"
                    />
                    <Card.Body className="text-center mx-3">
                      <Card.Title className="fw-bold">
                        Stay in the Loop, Always
                      </Card.Title>
                      <Card.Text>
                        Track your application progress in real-time and never
                        miss a single update
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Fade>

          {/* Button */}
          <Slide>
            <div className="text-center mt-4 d-flex justify-content-center">
              <Button1 value="Let’s get started" handleClick={handleClick} />
            </div>
          </Slide>
        </Container>
      )}
      {nextSlide == 2 && (
        <Container className="my-5">
          <Fade delay={1e1} cascade damping={1e-1}>
            <Row className="justify-content-center">
              {/* Card 1 */}
              <Col md={4} className="mb-4">
                <div
                  className="custom-card custom-card-1"
                  style={{ position: "relative" }}
                >
                  {" "}
                  {/* Add a specific class for the first card */}
                  <Card className="border-0">
                    <Card.Img
                      variant="top"
                      src="./cardImg2.svg"
                      alt="Illustration 1"
                      className="custom-image"
                    />
                    <Card.Body className="text-center mx-3">
                      <Card.Title className="fw-bold ">
                        Expert Support, Anytime
                      </Card.Title>
                      <Card.Text>
                        Connect directly with admission experts through chats
                        and calls, all within the app
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <div
                    className="custom-card custom-card-1"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: "25%",
                      top: 0,
                    }}
                  >
                    <Card className="border-0">
                      <Card.Img
                        variant="top"
                        src="./cardImg3.svg"
                        alt="Illustration 1"
                        className="custom-image"
                      />
                      <Card.Body className="text-center mx-3">
                        <Card.Title className="fw-bold">
                          Stay in the Loop, Always
                        </Card.Title>
                        <Card.Text>
                          Track your application progress in real-time and never
                          miss a single update
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Col>

              {/* Card 2 */}
              <Col md={4} className="mb-4">
                <div className="custom-card">
                  <Card className="border-0 h-100">
                    <Card.Img
                      variant="top"
                      src="./cardImg1.svg"
                      alt="Illustration 2"
                      className="custom-image"
                    />
                    <Card.Body className="text-center mx-3">
                      <Card.Title className="fw-bold">
                        Find Your Perfect Match
                      </Card.Title>
                      <Card.Text>
                        Instantly check your eligibility for top universities
                        and courses tailored to your goals
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Fade>

          {/* Button */}
          <Slide>
            <div className="text-center mt-4 d-flex justify-content-center">
              <Button1 value="Let’s get started" handleClick={handleClick} />
            </div>
          </Slide>
        </Container>
      )}
    </>
  );
};

export default CardSlider;
