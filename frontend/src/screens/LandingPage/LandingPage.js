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
      <Container className="containerBack">
        <div className="virus"></div>
        <Row className="justify-content-md-center" id="main-content">
          <div className="intro-text">
            <div>
              <div className="subtteam">SW엔지니어트랙 4조 프로젝트</div>
              <h1 className="title">이겨내요 코로나</h1>
              <p className="subtitle">
                코로나 현황에 대한 정보와 정보 나눔 게시판 기능을 갖춘 프로젝트
                사이트입니다
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
                          코로나정보
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item href="/covid-occur">
                            시도발생현황
                          </Dropdown.Item>
                          <Dropdown.Item href="/covid-gender">
                            연령별, 성별 발생현황
                          </Dropdown.Item>

                          <Dropdown.Item href="/covid-hospital">
                            전화상담 병의원 정보
                          </Dropdown.Item>
                          <Dropdown.Item href="http://ncov.mohw.go.kr/">
                            코로나19 공식홈페이지
                          </Dropdown.Item>
                          <Dropdown.Item href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%BD%94%EB%A1%9C%EB%82%98">
                            코로나19 네이버
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
                  <Col style={{ width: "150px" }}>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className="landingbutton"
                      >
                        코로나정보
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="/covid-occur">
                          시도별 발생 현황
                        </Dropdown.Item>
                        <Dropdown.Item href="/covid-gender">
                          연령별, 성별 발생현황
                        </Dropdown.Item>
                        <Dropdown.Item href="/covid-hospital">
                          전화상담 병원 정보
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="http://ncov.mohw.go.kr/"
                          target="_blank"
                        >
                          코로나19 공식홈페이지
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%BD%94%EB%A1%9C%EB%82%98"
                          target="_blank"
                        >
                          코로나19 네이버
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>

                  <Col>
                    <Link to="/register">
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="landingbutton"
                      >
                        회원가입
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
