import React, { useState, useEffect } from "react";
import MainScreen from "../../components/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { getGenderData } from "../../actions/covidActions";
import Loading from "../../components/Loading";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  Pagination,
} from "react-bootstrap";
import ErrorMessage from "../../components/ErrorMessage";

function CovidGender() {
  const dispatch = useDispatch();
  const covidInfo = useSelector((state) => state.covidGender);
  const { loading, error, data } = covidInfo;
  const [startDt, setStartDt] = useState("20200315");
  const [endDt, setEndDt] = useState("20200315");
  const [infos, setInfos] = useState([1]);
  const columns = [
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
  const [active, setActive] = useState(1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    dispatch(getGenderData());
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getGenderData(startDt, endDt));
    setInfos(data);
    let tempItems = [];
    for (let number = 1; number <= Math.ceil(infos.length / 11); number++) {
      tempItems.push(
        <Pagination.Item
          key={number}
          onClick={(e) => {
            setActive(number);
          }}
        >
          {number}
        </Pagination.Item>
      );
    }
    setItems(tempItems);
  };
  return (
    <MainScreen title="코로나19 연령별 성별 발생현황">
      <Container>
        <Row>
          <Col>
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
                {columns.map((each, index) => (
                  <th key={index}>{each}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {infos &&
                active === 1 &&
                infos.slice(0, 11).map((info) => (
                  <tr>
                    {Object.keys(info).map((field) => {
                      return <td key={Date.now() + field}>{info[field]}</td>;
                    })}
                  </tr>
                ))}
              {infos &&
                active >= 2 &&
                infos.slice((active - 1) * 11, active * 11).map((info) => (
                  <tr>
                    {Object.keys(info).map((field) => {
                      return <td key={Date.now() + field}>{info[field]}</td>;
                    })}
                  </tr>
                ))}
            </tbody>
          </Table>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {loading && <Loading />}
        </Row>
        <Pagination>{items}</Pagination>
      </Container>
    </MainScreen>
  );
}

export default CovidGender;
