import React, { useState, useEffect } from "react";
import MainScreen from "../../components/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { getOccurData } from "../../actions/covidActions";
import Loading from "../../components/Loading";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import ErrorMessage from "../../components/ErrorMessage";

function CovidOccur() {
  const dispatch = useDispatch();
  const covidInfo = useSelector((state) => state.covidOccur);
  const { loading, error, data } = covidInfo;
  const [std, setStd] = useState("2021-12-15");
  const [gubun, setGubun] = useState("서울");

  useEffect(() => {
    dispatch(getOccurData());
  }, [dispatch]);
  const submitHandler = () => {
    dispatch(getOccurData(std, gubun));
  };
  return (
    <MainScreen title="코로나19 시도 발생현황">
      <Container>
        <Row>
          <Col>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {loading && <Loading />}
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="specificInfo">
                <Form.Label>기준 일자</Form.Label>
                <Form.Control
                  type="date"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setStd(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>시도</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setGubun(e.target.value)}
                  placeholder={gubun}
                ></Form.Control>
              </Form.Group>
              <Button type="submit">확인</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Table>
            <thead>
              <tr>
                {data &&
                  Object.keys(data).map((field, index) => {
                    return <th key={field}>{field}</th>;
                  })}
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
        </Row>
      </Container>
    </MainScreen>
  );
}

export default CovidOccur;
