import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./LandingStyles.css";

function LandingPage() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [userInfo]);
  return (
    <div className="main">
      <Container>
        <Row className="justify-content-md-center">
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Note Zipper</h1>
              <p className="subtitle">One Safe place for all your notes </p>
            </div>
          </div>
          <div className="buttonContainer">
            <Link to="/login">
              <Button size="lg" className="landingbutton">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button
                variant="outline-primary"
                size="lg"
                className="landingbutton"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
