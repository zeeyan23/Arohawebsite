import { Alert, Col, Container, Nav, Row } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import { ConnectForm } from "../components/Form/ConnectForm";
import Header from "../components/Navbar/Header";
import OurServices from "../components/OurServices/OurServices";

import connectUsImage from "../../src/assets/Asset 5illus.web2 (1).png";
import classes from "../pages/dashboard.module.css";
import About from "../components/About/About";
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Dashboard() {
  return (
    <>
      <div>
        <Header className={classes.headerStyle} />
        <Container className={classes.textForm}>
            <div className={classes.mobileCont}>
            <h1 className={classes.heading1}>
                <span className={classes.digi}>360⁰ Digital </span><span className={classes.marketingText}>Marketing</span>
                <div><span className={classes.heading2}> Solution by </span><span className={classes.spanText}>Aroha Group</span></div>
              </h1>
              <h4 className={classes.quest}>Explore New Business Solutions With Us</h4>
            </div>
          <Row className={classes.flexDirection} id={classes.mobileStyle}>
            <Col className={classes.mainHeading}>
              <div className={classes.noMobile}>
              <h1 className={classes.heading1}>
                <span className={classes.digi}>360⁰ Digital </span><span className={classes.marketingText}>Marketing</span><span className={classes.heading2}> Solution by </span><span className={classes.spanText}>Aroha Group</span>
              </h1>
              <h4 className={classes.quest}>Explore New Business Solutions With Us</h4>
              </div>
              
              <p className={classes.aboutUs}>
                  Aroha Group is a full-service digital marketing agency that offers a wide range of services such as SEO, PPC 
                  advertising, social media marketing, content marketing, email marketing, website design and development to 
                  help businesses of all sizes achieve their online goals. We take a data-driven approach and work closely 
                  with clients to develop customized strategies that deliver measurable results and positive ROI.<br />
                {/* <p className={classes.aboutUsAnother}>
                  We understand that every business is unique, and we work
                  closely with our clients to develop custom strategies that are
                  tailored to their specific needs. Our data-driven approach and
                  focus on measurable results ensures that our clients see a
                  positive return on their investment.
                </p> */}
              </p>
              <Alert variant='info' className={classes.alertBox}>
                Let's Connect  <FontAwesomeIcon icon={faArrowCircleRight} />
              </Alert>
            </Col>
            <Col xs={6} className={classes.formTop}>
            <Alert variant='info' className={classes.mobile}>
                Let's Connect  <FontAwesomeIcon icon={faArrowCircleRight} />
              </Alert>
              <ConnectForm />
            </Col>
          </Row>
        </Container>
        {/* <About /> */}
        <OurServices className={classes.OurServices}/>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              {/* <button type="submit" className={classes.btnflat}>
                Learn More
              </button> */}
              <Nav.Link
                    href="https://arohagroup.com/#home"
                    target="_blank"
                    style={{color:'white'}}
                    className={classes.btnflat}>
                    Learn More
                  </Nav.Link>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <div className={classes.Footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
