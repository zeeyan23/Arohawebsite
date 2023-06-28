import React from "react";
import { Alert, Container, Row } from "react-bootstrap";
import classes from "./thankyou.module.css";
import Header from "../Navbar/Header";
export const ThankYou = () => {
  return (
    <>
      <Header />
      <Container className={classes.thankyou}>
        
          <h1 className={classes.textStyle}>Thank you for sharing your details! One of our customer representative will be getting back to you within a few hours.</h1>
        
      </Container>
    </>
  );
};
