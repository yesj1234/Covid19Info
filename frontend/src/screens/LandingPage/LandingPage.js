import React from "react";
import { Button, Container, Row, Dropdown, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./LandingStyles.css";

function LandingPage() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div className="main">
      <Container>
        <Row className="justify-content-md-center">
          <div className="intro-text">
            <div>
              <h1 className="title">이겨내요 코로나</h1>
              <p className="subtitle">
                코로나 현황에 대한 정보와 정보 나눔 게시판 기능을 <br />
                갖춘 프로젝트 사이트입니다
              </p>
            </div>
          </div>
          <div className="buttonContainer">
            {userInfo ? (
              <>
                <Container>
                  <Row>
                    <Col>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Covid Info
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="/covid-occur">
                            시도별 발생 현황
                          </Dropdown.Item>
                          <Dropdown.Item href="/covid-gender">
                            연령별, 성별 발생현황
                          </Dropdown.Item>
                          <Dropdown.Item href="/covid-hospital">
                            전화상담 병의원 정보
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                    <Col>
                      <Link to="/board">
                        <Button
                          variant="outline-primary"
                          size="sm"
                          className="landingbutton"
                        >
                          게시판
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </Container>
              </>
            ) : (
              <Container>
                <Row>
                  <Col>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Covid Info
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="/covid-total">
                          감염 현황 총괄 통계
                        </Dropdown.Item>
                        <Dropdown.Item href="/covid-occur">
                          시도별 발생 현황
                        </Dropdown.Item>
                        <Dropdown.Item href="/covid-gender">
                          연령별, 성별 발생현황
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <Col>
                    <Link to="/login" size="sm">
                      <Button size="sm" className="landingbutton">
                        Login
                      </Button>
                    </Link>
                  </Col>
                  <Col>
                    <Link to="/register">
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="landingbutton"
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Container>
            )}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
