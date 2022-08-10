import React, { useEffect } from "react";
import {
  Container,
  // Form,
  // FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-router-dom";
import { logout } from "../actions/userActions";
import "./Screen.css";

const Header = ({ setSearch }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
  };
  useEffect(() => {}, [userInfo]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      className="navBar"
      style={{ width: "100%", height: "70px" }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={require("../logo.png")}
            width="100px"
            height="45px"
            className="d-inline-block align-top"
            alt="Project logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            {/* {userInfo && (
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form>
            )} */}
          </Nav>
          <Nav>
            <NavDropdown title="Covid-info" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/covid-occur">
                시도발생현황
              </NavDropdown.Item>
              <NavDropdown.Item href="/covid-gender">
                연령별, 성별 발생현황
              </NavDropdown.Item>

              <NavDropdown.Item href="/covid-hospital">
                전화상담 병의원 정보
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/board">Board</Nav.Link>
          </Nav>
          <Nav>
            {userInfo ? (
              <>
                <NavDropdown
                  title={`${userInfo.name}`}
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item href="/profile">
                    My Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
          <Nav>
            <Nav.Link href="http://ncov.mohw.go.kr/" target="_blank">
              <svg
                id="Layer_1"
                style={{ enableBackground: "new 0 0 48 48" }}
                version="1.1"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="xlink"
                xmlSpace="preserve"
                width="30px"
                heigh="30px"
              >
                <g>
                  <path d="M42.9,25.2V9.8l-1,0c-4.5-0.1-8.1-3.8-8.1-8.3v-1H9.6v1C9.6,6,6,9.7,1.5,9.8l-1,0v17.3c0,14.9,20.1,20.2,20.9,20.4l0.2,0.1   l0.2-0.1c0.1,0,2.6-0.7,5.9-2.1c2,1.4,4.4,2.2,7.1,2.2c6.9,0,12.6-5.6,12.6-12.6C47.5,31,45.7,27.5,42.9,25.2z M21.7,45.4   c-2.3-0.6-19.2-5.8-19.2-18.4V11.7c4.8-0.5,8.6-4.4,9.1-9.2h20.2c0.5,4.8,4.3,8.7,9.1,9.2v12.1c-0.9-0.5-1.9-0.9-3-1.1v-8.6   l-0.6-0.2c-3.5-1.4-6.3-4.2-7.6-7.7l-0.2-0.6H14l-0.2,0.6c-1.3,3.5-4.1,6.3-7.6,7.7l-0.6,0.2v13c0,9.3,12.2,13.9,15.9,15.2l0.3,0.1   l0.3-0.1c0.7-0.2,1.5-0.5,2.2-0.8c0.5,0.9,1.2,1.7,1.9,2.5C24,44.8,22.3,45.3,21.7,45.4z M23.3,39.6c-0.5,0.2-1,0.4-1.6,0.6   C18,39,7.5,34.8,7.5,27.1V15.4c3.5-1.6,6.3-4.4,7.9-8H28c1.5,3.5,4.4,6.4,7.9,8v6.9c-0.3,0-0.6,0-1,0c-6.9,0-12.6,5.6-12.6,12.6   C22.3,36.6,22.7,38.2,23.3,39.6z M34.9,45.5c-5.8,0-10.6-4.8-10.6-10.6c0-5.8,4.8-10.6,10.6-10.6c5.8,0,10.6,4.8,10.6,10.6   C45.5,40.7,40.7,45.5,34.9,45.5z" />
                  <path d="M41.2,37.3l-1.3-0.8c0.2-0.5,0.3-1.1,0.3-1.7s-0.1-1.2-0.3-1.7l1.3-0.8l0.4,0.7l1.7-1L41.5,29l-1.7,1l0.4,0.7l-1.3,0.8   c-0.7-0.9-1.8-1.5-2.9-1.7v-1.5h0.9v-2H33v2h0.9v1.5c-1.2,0.2-2.2,0.8-2.9,1.7l-1.3-0.8l0.4-0.7l-1.7-1l-1.9,3.2l1.7,1l0.4-0.7   l1.3,0.8c-0.2,0.5-0.3,1.1-0.3,1.7c0,0.6,0.1,1.2,0.3,1.7l-1.3,0.8l-0.4-0.7l-1.7,1l1.9,3.2l1.7-1l-0.4-0.7l1.3-0.8   c0.7,0.9,1.8,1.5,2.9,1.7l0,1.5H33v2h3.7v-2h-0.9l0-1.5c1.2-0.2,2.2-0.8,2.9-1.7l1.3,0.8l-0.4,0.7l1.7,1l1.9-3.2l-1.7-1L41.2,37.3z    M34.9,38.1c-1.8,0-3.2-1.4-3.2-3.2s1.4-3.2,3.2-3.2c1.8,0,3.2,1.4,3.2,3.2S36.7,38.1,34.9,38.1z" />
                </g>
              </svg>
              Covid-19
            </Nav.Link>
            <Nav.Link
              href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%BD%94%EB%A1%9C%EB%82%98"
              target="_blank"
            >
              <svg
                enableBackground="new 0 0 512 512"
                height="30px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 512 512"
                width="30px"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <circle cx="255.999" cy="256" r="246.455" />
                </g>
                <g>
                  <path
                    d="M124.152,139.41h91.746c0,0,83.332,125.871,85.793,129.246c2.52,3.41,2.812,0,2.812,0   c-3.844-19.477-8.016-28.219-8.016-59.379V139.41h91.359v233.18h-91.359c0,0-81.621-119.156-84.082-122.449   c-2.473-3.316-2.801,0-2.801,0c3.141,16.078,5.918,18.762,5.918,46.688v75.762h-91.371V139.41L124.152,139.41z"
                    fill="#FFFFFF"
                  />
                </g>
              </svg>
              Naver
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
