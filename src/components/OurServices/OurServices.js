import { Card, Col, Container, Row } from "react-bootstrap";
import classes from "../OurServices/ourservices.module.css";
import webImage from '../../assets/website development.png'
import seo from '../../assets/seo.png'
import Email from '../../assets/email marketing.png'
import Social from '../../assets/social media marketing.png'
import Creative from '../../assets/creative development.png'
import Ads from '../../assets/ads.png'

function OurServices() {
  return (
    <Container className={classes.Container} id="services">
      <Row>
        <Col className="mt-5">
          <h2 className={classes.boldText}>Our Services</h2>
        </Col>
      </Row>
      <Row className="mt-5" id={classes.rowLeft}>
        <Col>
          <Card className={classes.ourservices}>
            <Card.Img
              variant="top"
              className={classes.imageStyle}
              height="50"
              src={webImage}
            />
            <Card.Body>
              <Card.Title className="mt-3">
                <span className={classes.boldText}>Website</span> Developement
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className={classes.mobileStyle}>
          <Card className={classes.ourservices}>
            <Card.Img
              variant="top"
              className={classes.imageStyle}
              
              src={seo}
            />
            <Card.Body>
              <Card.Title>
                Search Engine{" "}
                <span className={classes.boldText}>Optimization</span>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className={classes.mobileStyle} id={classes.em}>
          <Card className={classes.ourservices}>
            <Card.Img
              variant="top"
              className={classes.imageStyle}
              src={Email}
            />
            <Card.Body>
              <Card.Title>
                <span className={classes.boldText}>Email</span> marketing
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className={classes.mobileStyle} id={classes.sp}>
          <Card className={classes.ourservices}>
            <Card.Img
              variant="top"
              className={classes.imageStyle}
              src={Social}
            />
            <Card.Body>
              <Card.Title>
                Social Media <span className={classes.boldText}>Marketing</span>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className={classes.mobileStyle} id={classes.sp}>
          <Card className={classes.ourservices}>
            <Card.Img
              variant="top"
              className={classes.imageStyle}
              src={Ads}
            />
            <Card.Body>
              <Card.Title className={classes.paidTextStyle}>
                Paid <span className={classes.boldText}>Ads</span>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className={classes.mobileStyle} id={classes.sp}>
          <Card className={classes.ourservices} id='creativeDevelopement'>
            <Card.Img
              variant="top"
              className={classes.imageStyle}
              src={Creative}
            />
            <Card.Body>
              <Card.Title>
                Creative <span className={classes.boldText}>Developement</span>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        
      </Row>
    </Container>
  );
}

export default OurServices;
