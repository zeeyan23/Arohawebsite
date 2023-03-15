import { Col, Container, Nav, Row } from "react-bootstrap";
import classes from '../Footer/footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';

function Footer(){
    return(
        <Container className={classes.footerContainer}>
            <Row className={classes.footerContainerRow}>
                <Col className={classes.colStyle}>
                <Container>
                    <Col>
                        <Row><h5 className={classes.textHeadingStyle}>HEAD OFFICE</h5></Row>
                        <Row className="pt-3" id={classes.dividerCont}><hr className={classes.divider}/></Row>
                        <Row className={classes.textColor}>Aroha Group, Nakshatra Complex, 1st floor, Shivalli Village, Manipal, Karnataka 576104</Row>
                        <Row className={classes.mailLinkContainer}><a href="mailto:contact@arohagroup.com" className={classes.mailTextColor} id={classes.mailText}>contact@arohagroup.com</a></Row>
                    </Col>
                </Container>
                </Col>
                <Col className={classes.colStyle}>
                    <Container>
                        <Col>
                            <Row className={classes.branchStyle}><h5 className={classes.textHeadingStyle}>DUBAI OFFICE</h5></Row>
                            <Row className="pt-3" id={classes.dividerCont}><hr className={classes.divider}/></Row>
                            <Row className={classes.textColor}>AKBARPOOR-BUILDING. Office 12.
                            PO Box 62776. Nadd Al Hamar – Dubai – United Arab Emirates</Row>
                        </Col>
                    </Container>
                </Col>
                <Col className={classes.colStyleArticle}>
                    <Container className={classes.cont}>
                        <Col className="tabletColo">
                            <Row className={classes.articleStyle}><h5 className={classes.textHeadingStyle}>ARTICLES</h5></Row>
                            <Row className="pt-3" id={classes.dividerCont}><hr className={classes.divider}/></Row>
                            <Row><a className={classes.mailTextColor} id='link1'  href="https://arohagroup.com/tips-to-make-a-high-quality-website-development/" target='_blank'><FontAwesomeIcon className={classes.arrowMark} icon={faLongArrowRight} />Website developer in india</a></Row>
                            <Row><a className={classes.mailTextColor} href="https://arohagroup.com/graphic-design-in-udupi-manipal/" target='_blank'><FontAwesomeIcon className={classes.arrowMark} icon={faLongArrowRight} />Magazine Designing Steps</a></Row>
                            <Row className={classes.links}><a className={classes.mailTextColor} href="https://arohagroup.com/why-social-media-is-important-to-your-business/" target='_blank'><FontAwesomeIcon className={classes.arrowMark} icon={faLongArrowRight} />Why social media is important?</a></Row>
                            <Row className={classes.links}><a className={classes.mailTextColor} href="https://arohagroup.com/portfolio-website-developers-in-udupi-mangalore/" target='_blank'><FontAwesomeIcon className={classes.arrowMark} icon={faLongArrowRight} />Portfolio Website Importtance</a></Row>
                            <Row className={classes.links}><a className={classes.mailTextColor} href="https://arohagroup.com/wordpress-website-development-in-udupi/" target='_blank'><FontAwesomeIcon className={classes.arrowMark} icon={faLongArrowRight} />WordPress Website Development</a></Row>
                        </Col>
                    </Container>
                </Col>
                <Col className={classes.colStyle} id="connectCont">
                    <Container>
                        <Col>
                            <Row className={classes.connectRow}><h5 className={classes.textHeadingStyle}>CONNECT</h5></Row>
                            <Row className="pt-3" id={classes.dividerCont}><hr className={classes.divider}/></Row>
                            <Container className={classes.contactStyle}>
                                <Row>
                                    <Col className="mr-1 mt-4">
                                        <Nav.Link style={{width:'25px'}} className={classes.containerImage} href="https://www.facebook.com/arohagroup27/" target='_blank'><svg className="e-font-icon-svg e-fab-facebook" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg></Nav.Link>
                                    </Col>
                                    <Col className="mr-1 mt-4">
                                        <Nav.Link style={{width:'25px'}} className={classes.containerImage} href="https://www.instagram.com/arohagroupmanipal/" target='_blank'><svg className="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></Nav.Link>
                                    </Col>
                                    <Col className="mr-1 mt-4">
                                        <Nav.Link style={{width:'25px'}} className={classes.containerImage} href="https://www.linkedin.com/company/arohagroup?originalSubdomain=in" target='_blank'><svg className="e-font-icon-svg e-fab-linkedin" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></Nav.Link>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Container>
                </Col>
            </Row>
            <Col>
                    <Container>
                        <Col>
                        <Row><p className={classes.copyRightText}>© 2023 All rights reserved Aroha Group.</p></Row>
                        </Col>
                    </Container>
                </Col>
        </Container>
    )
}

export default Footer;