import React, { useState } from "react";
import MainScreen from "../../components/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { getTotalData } from "../../actions/covidActions";
import Loading from "../../components/Loading";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import ErrorMessage from "../../components/ErrorMessage";

function CovidTotal() {
  const dispatch = useDispatch();
  const covidInfo = useSelector((state) => state.covidTotal);
  const { loading, error, data } = covidInfo;
  const [std, setStd] = useState("20200425");
  const section = [
    "누적확진률",
    "누적검사수",
    "누적검사완료수",
    "치료중환자수",
    "격리해제수",
    "사망자수",
    "확진자수",
    "결과음성수",
    "기준일자",
    "기준시간",
    "검사중수",
  ];
  //   useEffect(() => {}, []);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getTotalData(std));
  };
  return (
    <MainScreen title="코로나19 감염현황 총괄 통계">
      <Container>
        <Row>
          <Col>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="specificInfo">
                <Form.Label>기준 일자</Form.Label>
                <Form.Control
                  type="date"
                  onChange={(e) => {
                    setStd(e.target.value.replaceAll("-", ""));
                  }}
                />
              </Form.Group>

              <Button type="submit">확인</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Table responsive striped>
            <thead>
              <tr>
                {section.map((each, index) => (
                  <th key={Date.now() + index}>{each}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {data &&
                  Object.keys(data).map((field, index) => {
                    return <th key={index}>{data[field]}</th>;
                  })}
              </tr>
            </tbody>
          </Table>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {loading && <Loading />}
        </Row>
      </Container>
    </MainScreen>
  );
}

export default CovidTotal;
