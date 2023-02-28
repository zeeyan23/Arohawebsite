import { Alert, Col, Container, Row } from "react-bootstrap";
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
        <Container>
          <Row>
            <Col className={classes.mainHeading}>
              <h1 className={classes.heading}>
                36O<sup className={classes.heading1}>o</sup> Digital Marketing
                Solution by
                <span className={classes.spanText}> Aroha Group</span>
              </h1>
              <h4 className={classes.quest}>Who we are?</h4>
              <p className={classes.aboutUs}>
              Aroha group is a full
              service digital marketing agency that
              specializes in helping businesses of all sizes achieve their online
              goals. Our team of experienced professionals are experts in a
              wide range of digital marketing services, including search engine
              optimization (SEO), pay per click (PPC) advertising, social media
              marketing, content marketing, email marketing and website
              design and development.
              We understand that every business is unique, and we work
              closely with our clients to develop custom strategies that are
              tailored to their specific needs. Our data-driven approach and
              focus on measurable results ensures that our clients see a
              positive return on their investment.
              </p>
              <Alert variant='info' className={classes.alertBox}>
                Let's Connect  <FontAwesomeIcon icon={faArrowCircleRight} />
              </Alert>
            </Col>
            <Col xs={6}>
              <ConnectForm />
            </Col>
          </Row>
        </Container>
        {/* <About /> */}
        <OurServices className={classes.OurServices}/>
        <div className={classes.Footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
