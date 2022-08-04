import React, { useState, useEffect } from "react";
import MainScreen from "../../components/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./../../actions/covidActions";
import Loading from "./../../components/Loading";
import { Container, Row, Col } from "react-bootstrap";
import ErrorMessage from "./../../components/ErrorMessage";

function CovidInfo() {
  const dispatch = useDispatch();
  const covidInfo = useSelector((state) => state.covidInfo);
  const { loading, error, data } = covidInfo;
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <MainScreen title="Welcome to CovidInfo">
      <Container>
        <Row></Row>
        <Col>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {loading && <Loading />}
        </Col>
        {data &&
          Object.keys(data).map((field, index) => {
            return (
              <Col key={field}>
                {field} : {data[field]}
              </Col>
            );
          })}
      </Container>
    </MainScreen>
  );
}

export default CovidInfo;
