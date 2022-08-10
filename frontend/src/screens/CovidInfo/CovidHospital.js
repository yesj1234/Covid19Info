import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Pagination,
  ListGroup,
} from "react-bootstrap";
import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import axios from "axios";
import Loading from "../../components/Loading";

function CovidHospital() {
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });
  const [dt, setDt] = useState([]);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(1);
  const [positions, setPositions] = useState([]);
  const pageItems = [];
  for (let i = 1; i <= 10; i++) {
    pageItems.push(
      <Pagination.Item
        key={i}
        onClick={(e) => {
          setActive(parseInt(e.target.text));
        }}
      >
        {i}
      </Pagination.Item>
    );
  }

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
    setLoading(true);
    axios({
      method: "get",
      url: `/api/covid-info/hospital`,
    })
      .then((res) => {
        let newPositions = [];
        res.data.item.forEach((each) => {
          const position = {
            title: each.yadmNm,
            latlng: {
              lat: Number(each.YPosWgs84),
              lng: Number(each.XPosWgs84),
            },
          };
          newPositions.push(position);
        });
        setPositions(newPositions);
        setDt(res.data.item);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const EventMarkerContainer = ({ position, content }) => {
    const map = useMap();
    const [isVisible, setIsVisible] = useState(false);

    return (
      <MapMarker
        position={position} // 마커를 표시할 위치
        // @ts-ignore
        onClick={(marker) => map.panTo(marker.getPosition())}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        {isVisible && content}
      </MapMarker>
    );
  };
  return (
    <Container style={{ height: "100vh", weight: "100vw" }}>
      <Row style={{ height: "100%", weight: "100%", margin: "10px" }}>
        <Map center={state.center} style={{ width: "50%", height: "95%" }}>
          {!state.isLoading && (
            <MapMarker position={state.center}>
              <div style={{ padding: "5px", color: "#000" }}>
                {state.errMsg ? state.errMsg : "여기에 계신가요?!"}
              </div>
            </MapMarker>
          )}
          {positions &&
            positions.map((position, index) => (
              <EventMarkerContainer
                key={`${position.title}-${position.latlng}`}
                position={position.latlng} // 마커를 표시할 위치
                image={{
                  src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
                  size: {
                    width: 24,
                    height: 35,
                  }, // 마커이미지의 크기입니다
                }}
                title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
              />
            ))}
        </Map>
        <Col>
          <Container>
            {loading ? (
              <Loading></Loading>
            ) : (
              <Row xs={1} md={2} className="g-4">
                {dt.slice(active * 4, (active + 1) * 4).map((each, idx) => (
                  <Col key={each.XPos} style={{ padding: "10px" }}>
                    <Card border="primary">
                      <Card.Title
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {each.yadmNm}
                      </Card.Title>
                      <ListGroup variant="flush">
                        <ListGroup.Item>주소 : {each.addr}</ListGroup.Item>
                        <ListGroup.Item>전화번호 : {each.telno}</ListGroup.Item>
                        <ListGroup.Item>
                          운영시작일자 : {each.mgtStaDd}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Card.Link
                            href={`https://map.kakao.com/link/map/${each.yadmNm},${each.YPosWgs84},${each.XPosWgs84}`}
                            target="_blank"
                          >
                            지도 바로보기
                          </Card.Link>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Col>
                ))}
                <Pagination style={{ alignSelf: "center" }}>
                  {pageItems}
                </Pagination>
              </Row>
            )}
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default CovidHospital;
