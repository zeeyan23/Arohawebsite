import React, { useMemo } from "react";
import {
  Alert,
  Badge,
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import classes from "./Form.module.css";
import { useState } from "react";
import { ThankYou } from "../ThankYou/ThankYou";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
// import SelectCountry from 'react-select-country';
export const ConnectForm = () => {
  const navigate = useNavigate();
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredNum, setEnteredNum] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [error, setError] = useState(null);
  // const enteredEmailIsValid = email;
  // const EmailInputIsInValid = !enteredEmailIsValid && enteredEmailTouched;
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredPinCode, setEnteredPinCode] = useState("");
  const [enteredCompanyName, setEnteredCompanyName] = useState("");
  const [showThankYoupage, setShowThankYouPage] = useState(false);

  const [email, setEmail] = useState("");
  const [validated, setValidated] = useState(false);

  const [show, setShow] = useState(false);

  // const [country, setCountry] = useState('');

  // const handleSelect = (event) => {

  //   setCountry(event.target.value);
  //   console.log(event.target.value)
  // };

  const handleClose = () => setShow(false);

  function firstNameChangeHandler(e) {
    setEnteredFirstName(e.target.value);
  }
  function lastNameChangeHandler(e) {
    setEnteredLastName(e.target.value);
  }
  function emailChangeHandler(e) {
    if (emailRegex.test(e.target.value)) {
      setError(null);
    } else {
      setError("Invalid email");
    }
    setEnteredEmail(e.target.value);
  }
  function phoneNumChangeHandler(e) {
    setEnteredNum(e.target.value);
  }
  function descpChangeHandler(e) {
    setEnteredDescription(e.target.value);
  }
  function locationChangeHandler(e) {
    setEnteredLocation(e.target.value);
  }
  function pinCodeChangeHandler(e) {
    setEnteredPinCode(e.target.value);
  }
  function companyNameChangeHandler(e) {
    setEnteredCompanyName(e.target.value);
  }
  const submitFormHandler = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    const formData = {
      enteredFirstName,
      enteredLastName,
      enteredNum,
      enteredEmail,
      enteredLocation,
      enteredCompanyName,
      enteredDescription,
    };
    if (
      enteredFirstName === "" ||
      enteredNum === "" ||
      enteredEmail === "" ||
      enteredLocation === ""
    ) {
      setValidated(false);
    } else {
      axios
        .post(
          "https://connect.arohagroup.com/savecontactusTableData.php",
          formData
        )
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            console.log("form submitted");
            setShowThankYouPage(true);

            setEnteredFirstName("");
            setEnteredLastName("");
            setEnteredEmail("");
            setEnteredNum("");
            setEnteredLocation("");
            setEnteredPinCode("");
            setEnteredCompanyName("");
            setEnteredDescription("");
            setValidated(false);

            navigate("/thankyou");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      
    }
    setValidated(true);
  };

  return (
    <>
      <Container>
        {/* <div>
          <h1>
            <Badge bg="#F39C12" className={classes.badge}>
              Lets Connect
            </Badge>
          </h1>
        </div> */}
        <Container>
          <Form
            noValidate
            validated={validated}
            className={classes.Form}
            onSubmit={submitFormHandler}
          >
            {/* <Row className={classes.connectMsgStyle}>
              <h5>Lets Connect</h5>
            </Row> */}

            <Row className="mb-4">
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom01"
                className={classes.mobileFieldStyle}
              >
                {/* <Form.Label className={classes.label}>First Name</Form.Label> */}
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  value={enteredFirstName}
                  onChange={firstNameChangeHandler}
                />
                <Form.Control.Feedback type="invalid" className={classes.test}>
                  Please provide name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom01"
                className={classes.widthStyle}
              >
                {/* <Form.Label className={classes.label}>Last Name</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  value={enteredLastName}
                  onChange={lastNameChangeHandler}
                />
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                {/* <Form.Label className={classes.label}>Phone Number</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Phone number"
                  maxLength={10}
                  required
                  value={enteredNum}
                  onChange={phoneNumChangeHandler}
                />
                <Form.Control.Feedback type="invalid" className={classes.test}>
                  Please enter number.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom01"
                className={classes.widthStyle}
              >
                {/* <Form.Label className={classes.label}>
                  E-mail Address
                </Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="E-mail"
                  required
                  value={enteredEmail}
                  onChange={emailChangeHandler}
                />
                <Form.Control.Feedback type="invalid" className={classes.test}>
                  Please enter e-mail address.
                </Form.Control.Feedback>
                {error && (
                  <p className={classes.invalidEmail}>
                    {error}
                  </p>
                )}
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} md="6"  controlId="validationCustom01">
                <Form.Control
                  required
                  type="text"
                  placeholder="Location"
                  value={enteredLocation}
                  onChange={locationChangeHandler}
                />
                {/* <SelectCountry
                  value={country}
                  id={classes.dropDownStyle}
                  onChange={handleSelect}
                  placeholder="Select a country"
                  
                /> */}
                <Form.Control.Feedback type="invalid" className={classes.test}>
                  Please provide location.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom01"
                className={classes.widthStyle}
              >
                {/* <Form.Label className={classes.label}>Company Name</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Company name"
                  value={enteredCompanyName}
                  onChange={companyNameChangeHandler}
                />
              </Form.Group>
            </Row>

            {/* <Row className="mb-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className={classes.label}>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Company name"
                  value={enteredCompanyName}
                  onChange={companyNameChangeHandler}
                />
              </Form.Group>
            </Row> */}
            <Row className="mb-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                {/* <Form.Label className={classes.label}>Comment</Form.Label> */}
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Type your message here..."
                  value={enteredDescription}
                  onChange={descpChangeHandler}
                />
              </Form.Group>
            </Row>

            {/* <Button type="submit" className={classes.btnStyle} size="lg" variant="warning">
              Submit
            </Button> */}
            <button type="submit" className={classes.btnflat}>
              Submit
            </button>
            {/* <Button size="xxl" >
              Submit
            </Button> */}
          </Form>
        </Container>
      </Container>

      {showThankYoupage && (
        <Container>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Thank You!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Your response has been saved successfully</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Okay
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      )}
    </>
  );
};
