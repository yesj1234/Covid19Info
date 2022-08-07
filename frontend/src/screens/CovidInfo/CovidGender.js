import React, { useState, useEffect } from "react";
import MainScreen from "../../components/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { getGenderData } from "../../actions/covidActions";
import Loading from "../../components/Loading";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import ErrorMessage from "../../components/ErrorMessage";

function CovidGender() {
  const dispatch = useDispatch();
  const covidInfo = useSelector((state) => state.covidGender);
  const { loading, error, data } = covidInfo;
  const [startDt, setStartDt] = useState("20200315");
  const [endDt, setEndDt] = useState("20200315");
  const [infos, setInfos] = useState([]);
  const section = [
    "확진자",
    "확진률",
    "생성일",
    "치명률",
    "사망자",
    "사망률",
    "구분",
    "SEQ",
    "수정일",
  ];
  //   useEffect(() => {
  //     dispatch(getGenderData());
  //     console.log(data);
  //   }, [dispatch]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getGenderData(startDt, endDt));
    setInfos(data);
    console.log(data);
  };
  return (
    <MainScreen title="코로나19 연령별 성별 발생현황">
      <Container>
        <Row>
          <Col>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {loading && <Loading />}
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="specificInfo">
                <Form.Label>검색할 생성일 범위의 시작</Form.Label>
                <Form.Control
                  type="date"
                  onChange={(e) => {
                    console.log(e.target.value.replaceAll("-", ""));
                    setStartDt(e.target.value.replaceAll("-", ""));
                  }}
                />
                <Form.Label>검색할 생성일 범위의 종료</Form.Label>
                <Form.Control
                  type="date"
                  onChange={(e) => {
                    setEndDt(e.target.value.replaceAll("-", ""));
                  }}
                />
              </Form.Group>
              <Button type="submit">확인</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Table striped responsive>
            <thead>
              <tr>
                {section.map((each, index) => (
                  <th key={index}>{each}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {infos &&
                infos.map((info) => (
                  <tr>
                    {Object.keys(info).map((field) => {
                      return <td key={Date.now() + field}>{info[field]}</td>;
                    })}
                  </tr>
                ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </MainScreen>
  );
}

export default CovidGender;
