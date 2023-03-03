import { Card, Col, Container, Row } from "react-bootstrap";
import classes from "../OurServices/ourservices.module.css";
import webImage from "../../assets/website development.png";
import seo from "../../assets/seo.png";
import Email from "../../assets/email marketing.png";
import Social from "../../assets/social media marketing.png";
import Creative from "../../assets/creative development.png";
import Ads from "../../assets/ads.png";

function OurServices() {
  return (
    <Container className={classes.Container} id="services">
      <Row>
        <Col className="mt-4">
          <h1 className={classes.boldText1}>Our Services</h1>
        </Col>
      </Row>
      <Row className="mt-5"id={classes.rowLeft} >
        <Col>
          <Card className={classes.cardDesign}>
            <Card.Img
              variant="top"
              className={classes.iconStyle}
              src={webImage}
            />
            <Card.Body>
              <Card.Title className={classes.textContainer}>
                <span className={classes.boldText}>Website </span><span className={classes.normalText}>Developement</span>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className={classes.mobileStyle}>
          <Card className={classes.cardDesign}>
            <Card.Img 
              variant="top" 
              className={classes.iconStyle}
              src={seo} />
            <Card.Body className={classes.textSeoContainer}>
              <Card.Title>
                <span className={classes.normalText}>Search Engine</span>
                <span className={classes.boldText}> Optimization</span>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className={classes.mobileStyle} id={classes.EM}>
          <Card className={classes.cardDesign}>
            <Card.Img
              variant="top"
              className={classes.iconStyle}
              src={Email}
            />
            <Card.Body>
              <Card.Title className={classes.textEmailContainer}>
                <span className={classes.boldText}>Email </span><span className={classes.normalText}>marketing</span>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col id={classes.rowTopCard}>
          <Card className={classes.cardDesign}>
            <Card.Img
              variant="top"
              className={classes.iconStyle}
              src={Social}
            />
            <Card.Body>
              <Card.Title className={classes.textContainer}>
                <span className={classes.normalText}>Social Media </span><span className={classes.boldText}>Marketing</span>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col id={classes.rowTopCard}>
          <Card className={classes.cardDesign}>
            <Card.Img 
              variant="top" 
              className={classes.iconStyle}
              src={Ads} />
            <Card.Body>
              <Card.Title className={classes.textPaidContainer}>
                <span className={classes.normalText}>Paid </span><span className={classes.boldText}>Ads</span>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col id={classes.rowTopCard}>
          <Card className={classes.cardDesign}>
            <Card.Img
              variant="top"
              className={classes.iconStyle}
              src={Creative}
            />
            <Card.Body>
              <Card.Title className={classes.textContainer}>
                <span className={classes.boldText}>Creative </span><span className={classes.normalText}>Developement</span>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default OurServices;
