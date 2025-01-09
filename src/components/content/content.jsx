import React, { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import "./content.css";
import Carousel from "react-bootstrap/Carousel";

const Content = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className="container-fluid">
      <Carousel activeIndex={index} onSelect={handleSelect}pause="false" interval={3000} className="h-auto">
        <Carousel.Item>
          <div className="row">
            <div className="col-md-7 px-4">
              <Slide>
                <h1>About The Company</h1>
              </Slide>
              <div className="contentContainer">
                <Fade delay={1e3} cascade damping={1e-1}>
                  <div
                    style={{
                      maxWidth: "600px",
                      textAlign: "justify",
                      wordWrap: "break-word",
                    }}
                  >
                    At Daltin, we connect students with universities worldwide
                    through our innovative all-in-one platform, streamlining the
                    student recruiting process. We empower students with
                    educational opportunities that enhance their quality of life
                    and promote global betterment. By bridging international
                    education providers and recruiting partners, we provide
                    students access to diverse study options from anywhere in
                    the world, transforming lives through education.
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-md-5 m-0 p-0">
              <div class="image-container">
                <img
                  src="./about-us1.svg"
                  alt="First Image"
                  class="first-image"
                />
                <img
                  src="./about-us2.svg"
                  alt="Second Image"
                  class="second-image"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="mx-4 row">
            <div className="col-md-6 m-0 px-4 ">
              <div className="container d-flex flex-column" >
                <div className="" style={{position: 'relative'}}>
                    <div className="">
                        <img
                            src="./ourStory1.svg"
                            alt="Our Story"
                            className=" rounded shadow"
                            style={{maxHeight: '300px'}}
                        />
                        <div className="year-text text-black fw-bold">
                            <Slide>
                                2023
                            </Slide>
                        </div>
                    </div>
                    <div className="" style={{position: 'absolute', right: '0', left: '70%', bottom: '0'}}>
                        <div className="overlay-text  translate-middle-y text-black">
                            <Slide>
                                Our Story
                            </Slide>
                        </div>
                        <div className="">
                        <img
                            src="./ourStory1.svg"
                            alt="Our Story"
                            className="img-fluid rounded shadow"
                            style={{ width: "180px" }}
                        />
                        </div>
                    </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 px-4" style={{display: 'inline-flex'}}>
              <div className="contentContainer">
                <Fade delay={1e3} cascade damping={1e-1}>
                  <div
                    style={{
                      maxWidth: "600px",
                      textAlign: "justify",
                      wordWrap: "break-word",
                    }}
                  >
                    Founded in April 2023, Daltin aims to transform education by
                    blending global best practices with cutting-edge technology.
                    Partnering with over 500 institutions worldwide, we provide
                    innovative, tech-driven study options that meet the evolving
                    needs of students. Our AI-based portal combines traditional
                    teaching with advanced tools, including virtual assistants
                    and chatbots, for real-time support, creating a dynamic and
                    interactive learning experience. Daltin is pioneering a new
                    era in international education.
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <div className="col-md-7 px-4">
              <Slide>
                <h1>Our Mission & Vision</h1>
              </Slide>
              <div className="contentContainer">
                <Fade delay={1e3} cascade damping={1e-1}>
                  <div
                    style={{
                      maxWidth: "600px",
                      textAlign: "justify",
                      wordWrap: "break-word",
                    }}
                  >
                    We seek to simplify the educational landscape using technology. We are empowering students to make more informed decisions about their educational paths. Everything is right here, with us, right now.
                    We seek to simplify the educational landscape using technology. We are empowering students to make more informed decisions about their educational paths. Everything is right here, with us, right now.
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-md-5 m-0 p-0" style={{display: 'contents'}}>
              <div class="image-container">
                <img
                  src="./ourMission1.svg"
                  alt="First Image"
                  class="first-image1"
                />
                <img
                  src="./ourMission2.svg"
                  alt="Second Image"
                  class="second-image2"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="p-0">
          <div className="row container-fluid">
            <div className="col-md-7 px-4">
              <Slide>
                <h2>Our USPs</h2>
                <p>Unique selling points encompass:</p>
              </Slide>
              <div className="contentContainer">
                <Fade delay={1e3} cascade damping={1e-1}>
                  <div class="usps-container">
                    <ul>
                      <li>
                        Course Finder seamlessly integrated with student
                        information, providing an extensive and swift list of
                        available university and course selections.
                      </li>
                      <li>
                        My Office, a comprehensive CRM tool designed for agents
                        and their teams, facilitates access to all
                        documentation, tracks employee performance, and offers
                        the flexibility of branch integration.
                      </li>
                      <li>
                        An intuitive Easy Dashboard featuring scholarships, open
                        intakes, application fee waivers, and the ability to
                        explore top colleges and universities at a single click.
                      </li>
                    </ul>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-md-5 m-0 p-0">
                <div class="image-grid">
                    <div>
                        <div class="image-wrapper">
                            <img src="./ourUsp1.svg" alt="Image 1" />
                        </div>
                        <div class="image-wrapper">
                            <img src="./ourUsp2.svg" alt="Image 2" />
                        </div>
                    </div>
                    <div>
                        <div class="image-wrapper">
                            <img src="./ourUsp2.svg" alt="Image 3" />
                        </div>
                        <div class="image-wrapper">
                            <img src="./ourUsp1.svg" alt="Image 4" />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="mx-4 px-4">
          <div className="container mx-4">
              <div className="d-flex justify-content-between">
                <Slide>
                <div
                    style={{
                      maxWidth: "700px",
                      textAlign: "justify",
                      wordWrap: "break-word",
                    }}
                  >
                  <h2>Our Partners</h2>
                  </div>
                </Slide>
                <Slide>
                  <div
                    style={{
                      maxWidth: "700px",
                      textAlign: "justify",
                      wordWrap: "break-word",
                    }}
                  >
                    Discover the incredible organizations we partner with to bring you the best opportunities and resources. Together, we’re creating pathways to help you achieve your goals and unlock your potential. Meet our trusted partners on the journey to success!
                  </div>
                </Slide>
            </div>
            <div className="partnerContainer">
                {[1, 2, 3, 4, 5].map((item, index) => {
                    if(item % 2 == 0) {
                        return <img src="./partner2.svg" alt="" />
                    }
                    else if(item == 3) {
                        return <img src="./partner3.svg" alt="" />
                    }
                    else {
                        return <img src="./partner1.svg" alt="" />
                    }
                })}
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Content;
