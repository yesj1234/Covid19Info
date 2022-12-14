# Covid19Info

#### 해당 프로젝트는 https://github.com/piyush-eon/notezipper 를 참고하여 진행한 프로젝트입니다.

1. 프로젝트 소개

- 프로젝트명 : 이겨내요 코로나
- 프로젝트 개요 : 공공데이터 포털의 open API를 활용해 코로나에 대한 다양한 정보 제공과 유저들간의 간단한 정보 공유 게시판 기능을 제공하는 웹사이트 프로젝트입니다.
- 프로젝트 배포 : 헤로쿠(https://cov1dinfo.herokuapp.com/)
- 사용 스택 : React, Express, MongoDB, Node.js
- dependency : axios, bcryptjs, colors, dotenv, express, express-async-handler, jsonwebtoken, mongoose, node-fetch, xml2js 등
- 소요 기간 : 3주
- 팀원 : 고하나, 김지영, 정하연, 양승준
- 디렉토리 구조 :

=======

- frontend
  ![frontend](https://user-images.githubusercontent.com/86505279/184131614-1274ca6e-f4d8-439f-ba0c-dedd70f9c8a3.png)
- backend
  ![backend](https://user-images.githubusercontent.com/86505279/184131666-0b306996-6030-406b-88f5-5f644138de1e.png)
- 전체 구조
  ![all](https://user-images.githubusercontent.com/86505279/184131682-3ffc2ac2-14f2-44ed-b326-63eb961aea86.png)

2. frontend 코드 설명

- App.js 라우팅 구조입니다. Header, MainScreen, Footer 를 Component로 만들고 Header와 Footer는 항상 보이도록 해주고 요청 경로에 맞춰 알맞은 페이지를 보여주도록 라우팅을 해주었습니다.

```javascript
function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage></LandingPage>} />
          <Route exact path="/login" element={<LoginScreen></LoginScreen>} />
          <Route
            exact
            path="/register"
            element={<RegisterScreen></RegisterScreen>}
          />
          <Route
            exact
            path="/profile"
            element={<ProfileScreen></ProfileScreen>}
          />
          <Route
            exact
            path="createPost"
            element={<CreatePost></CreatePost>}
          ></Route>
          <Route path="/board" element={<Board></Board>}></Route>
          <Route
            exact
            path="/board/:id"
            element={<SinglePost></SinglePost>}
          ></Route>
          <Route
            exact
            path="/covid-gender"
            element={<CovidGender></CovidGender>}
          ></Route>
          <Route
            exact
            path="/covid-occur"
            element={<CovidOccur></CovidOccur>}
          ></Route>

          <Route
            exact
            path="/covid-hospital"
            element={<CovidHospital></CovidHospital>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}
```

- Frontend>src>screens>LandingPage>LandingPage.js
  제일 처음 보여지는 LandingPage입니다. 메뉴바, 프로젝트에 대한 소개 등이 있는 페이지입니다. Redux로 로그인 상태를 받아오고 로그인이 안된 상태라면 회원가입버튼과 로그인 버튼이 보이도록 해주고, 로그인이 된 상태라면 게시판 버튼이 보이도록 해주었습니다.

```javascript
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
                코로나 현황에 대한 정보와 간단한 정보 나눔 게시판 기능을 <br />
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

                        <Dropdown.Menu className="covid-dropdown-menu">
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
                          size="lg"
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

                      <Dropdown.Menu className="covid-dropdown-menu">
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
```

- Frontend>src>screens>CovidInfo>CovidHospital.js
  공공데이터 포털의 open api를 통해 전화상담이 가능한 병원에 대한 정보를 받아와 지도에 표시해주고 한 페이지에 4개씩 보여줍니다. Kakao Map과 React-bootstrap을 활용해 만들었습니다.

```javascript
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
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
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
        position={position}
        onClick={(marker) => map.panTo(marker.getPosition())}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        {isVisible && content}
      </MapMarker>
    );
  };
  return (
    <MainScreen>
      <Container>
        <Row
          style={{
            height: "100%",
            weight: "100%",
            margin: "10px",
          }}
        >
          <Map
            center={state.center}
            style={{
              width: "50%",
              height: "72vh",
              overflow: "hidden",
            }}
          >
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
                  position={position.latlng}
                  image={{
                    src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
                    size: {
                      width: 24,
                      height: 35,
                    },
                  }}
                  title={position.title}
                />
              ))}
          </Map>
          <Col>
            <Container className="hospital-container">
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
                          <ListGroup.Item>
                            전화번호 : {each.telno}
                          </ListGroup.Item>
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
    </MainScreen>
  );
}
export default CovidHospital;
```

- Frontend>src>screens>CovidInfo>CovidGender.js
  CovidGender.js 파일은 공공데이터 포털의 open api를 활용하여 연령별, 성별 확진자, 확진률, 사망자, 사망률, 치명률을 nivo Bar 컴포넌트를 활용하여 바그래프 형태로 보여줍니다.

```javascript
function CovidGender() {
  //BarChart에 전달해줄 data의 형식입니다.
  const [dt, setDt] = useState([
    {
      gubun: "AD",
      confCase: 11,
      confCaseColor: "hsl(172, 70%, 50%)",
      confCaseRate: 125,
      confCaseRateColor: "hsl(352, 70%, 50%)",
      criticalRate: 53,
      criticalRateColor: "hsl(222, 70%, 50%)",
      death: 105,
      deathColor: "hsl(315, 70%, 50%)",
      deathRate: 167,
      deathRateColor: "hsl(277, 70%, 50%)",
    },
    {
      gubun: "AD",
      confCase: 11,
      confCaseColor: "hsl(172, 70%, 50%)",
      confCaseRate: 125,
      confCaseRateColor: "hsl(352, 70%, 50%)",
      criticalRate: 53,
      criticalRateColor: "hsl(222, 70%, 50%)",
      death: 105,
      deathColor: "hsl(315, 70%, 50%)",
      deathRate: 167,
      deathRateColor: "hsl(277, 70%, 50%)",
    },
    {
      gubun: "AD",
      confCase: 11,
      confCaseColor: "hsl(172, 70%, 50%)",
      confCaseRate: 125,
      confCaseRateColor: "hsl(352, 70%, 50%)",
      criticalRate: 53,
      criticalRateColor: "hsl(222, 70%, 50%)",
      death: 105,
      deathColor: "hsl(315, 70%, 50%)",
      deathRate: 167,
      deathRateColor: "hsl(277, 70%, 50%)",
    },
    {
      gubun: "AD",
      confCase: 11,
      confCaseColor: "hsl(172, 70%, 50%)",
      confCaseRate: 125,
      confCaseRateColor: "hsl(352, 70%, 50%)",
      criticalRate: 53,
      criticalRateColor: "hsl(222, 70%, 50%)",
      death: 105,
      deathColor: "hsl(315, 70%, 50%)",
      deathRate: 167,
      deathRateColor: "hsl(277, 70%, 50%)",
    },
    {
      gubun: "AD",
      confCase: 11,
      confCaseColor: "hsl(172, 70%, 50%)",
      confCaseRate: 125,
      confCaseRateColor: "hsl(352, 70%, 50%)",
      criticalRate: 53,
      criticalRateColor: "hsl(222, 70%, 50%)",
      death: 105,
      deathColor: "hsl(315, 70%, 50%)",
      deathRate: 167,
      deathRateColor: "hsl(277, 70%, 50%)",
    },
    {
      gubun: "AD",
      confCase: 11,
      confCaseColor: "hsl(172, 70%, 50%)",
      confCaseRate: 125,
      confCaseRateColor: "hsl(352, 70%, 50%)",
      criticalRate: 53,
      criticalRateColor: "hsl(222, 70%, 50%)",
      death: 105,
      deathColor: "hsl(315, 70%, 50%)",
      deathRate: 167,
      deathRateColor: "hsl(277, 70%, 50%)",
    },
    {
      gubun: "AD",
      confCase: 11,
      confCaseColor: "hsl(172, 70%, 50%)",
      confCaseRate: 125,
      confCaseRateColor: "hsl(352, 70%, 50%)",
      criticalRate: 53,
      criticalRateColor: "hsl(222, 70%, 50%)",
      death: 105,
      deathColor: "hsl(315, 70%, 50%)",
      deathRate: 167,
      deathRateColor: "hsl(277, 70%, 50%)",
    },
    {
      gubun: "AD",
      confCase: 11,
      confCaseColor: "hsl(172, 70%, 50%)",
      confCaseRate: 125,
      confCaseRateColor: "hsl(352, 70%, 50%)",
      criticalRate: 53,
      criticalRateColor: "hsl(222, 70%, 50%)",
      death: 105,
      deathColor: "hsl(315, 70%, 50%)",
      deathRate: 167,
      deathRateColor: "hsl(277, 70%, 50%)",
    },
    {
      gubun: "AD",
      confCase: 11,
      confCaseColor: "hsl(172, 70%, 50%)",
      confCaseRate: 125,
      confCaseRateColor: "hsl(352, 70%, 50%)",
      criticalRate: 53,
      criticalRateColor: "hsl(222, 70%, 50%)",
      death: 105,
      deathColor: "hsl(315, 70%, 50%)",
      deathRate: 167,
      deathRateColor: "hsl(277, 70%, 50%)",
    },
    {
      gubun: "AD",
      confCase: 11,
      confCaseColor: "hsl(172, 70%, 50%)",
      confCaseRate: 125,
      confCaseRateColor: "hsl(352, 70%, 50%)",
      criticalRate: 53,
      criticalRateColor: "hsl(222, 70%, 50%)",
      death: 105,
      deathColor: "hsl(315, 70%, 50%)",
      deathRate: 167,
      deathRateColor: "hsl(277, 70%, 50%)",
    },
    {
      gubun: "AD",
      confCase: 11,
      confCaseColor: "hsl(172, 70%, 50%)",
      confCaseRate: 125,
      confCaseRateColor: "hsl(352, 70%, 50%)",
      criticalRate: 53,
      criticalRateColor: "hsl(222, 70%, 50%)",
      death: 105,
      deathColor: "hsl(315, 70%, 50%)",
      deathRate: 167,
      deathRateColor: "hsl(277, 70%, 50%)",
    },
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //데이터 가공함수입니다.
    const dataHandler = (item) => {
      let newData = [...dt];
      item.forEach((each, index) => {
        newData[index].gubun = each.gubun;
        newData[index].confCase = each.confCase;
        newData[index].confCaseRate = each.confCaseRate;
        newData[index].criticalRate = each.criticalRate;
        newData[index].death = each.death;
        newData[index].deathRate = each.deathRate;
      });
      setDt(newData);
      console.log(newData);
    };

    const today = moment().subtract(1, "days").format("YYYYMMDD");
    const params = { startCreateDt: today, endCreateDt: today };
    setLoading(true);
    //페이지에 DOM요소가 모두 업데이트 되고 나면 useEffect의 첫번째 인자로 전달 해준 callback함수가 실행됩니다.
    //페이지를 열었을 때 한번만 실행하면 되기 때문에 dependency에 빈 배열을 넣어줍니다.
    axios({
      method: "get",
      url: `/api/covid-info/gender`, //해당 경로로 서버에 요청을 보내면
      params: params,
    })
      .then((res) => {
        return res.data.item; //알맞은 응답을 받아 데이터 가공에 필요한 item을 받아서
      })
      .then((item) => {
        dataHandler(item); //미리 정의해둔 데이터 가공함수에 넣어주고
        setLoading(false); //loading 상태를 false로 바꿔줍니다.
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const confKeys = ["confCase"];
  const confRateKeys = ["confCaseRate"];
  const deathKeys = ["death"];
  const deathRateKeys = ["deathRate"];
  const criticalKeys = ["criticalRate"];

  return (
    <MainScreen title="코로나19 연령별 성별 발생현황">
      <Carousel fade interval={null} style={{ overflow: "hidden" }}>
        <Carousel.Item>
          <Container style={{ height: "70vh", backgroundColor: "#769bd6" }}>
            <BarChart
              data={dt}
              keys={confKeys}
              title="연령별, 성별 확진자"
            ></BarChart>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container style={{ height: "70vh", backgroundColor: "#769bd6" }}>
            <BarChart
              data={dt}
              keys={confRateKeys}
              title="연령별, 성별 확진률"
            ></BarChart>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container style={{ height: "70vh", backgroundColor: "#769bd6" }}>
            <BarChart
              data={dt}
              keys={deathKeys}
              title="연령별, 성별 사망자"
            ></BarChart>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container style={{ height: "70vh", backgroundColor: "#769bd6" }}>
            <BarChart
              data={dt}
              keys={deathRateKeys}
              title="연령별, 성별 사망률"
            ></BarChart>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container style={{ height: "70vh", backgroundColor: "#769bd6" }}>
            <BarChart
              data={dt}
              keys={criticalKeys}
              title="연령별, 성별 치명률"
            ></BarChart>
          </Container>
        </Carousel.Item>
      </Carousel>
    </MainScreen>
  );
}

export default CovidGender;
```

- Frontend>src>screens>CovidInfo>CovidOccur.js
  CovidOccur.js파일도 CovidGender.js파일과 마찬가지로 공공데이터 포털에서 데이터를 받아오고 Pie 그래프 형식으로 데이터를 보여줍니다. 각 지역별로 확진자, 사망자, 전일대비 확진자 증감 을 한눈에 확인 할 수 있습니다.

```javascript
function CovidOccur() {
  const [death, setDeath] = useState([]);
  const [loc, setLoc] = useState([]);
  const [inc, setInc] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    function generateNum() {
      const rand1 = Math.ceil(Math.random() * 200);
      return rand1;
    }
    //지역발생수 데이터 가공
    const localDataHandler = (data) => {
      const arrtemp2Box = [];
      data.forEach((cur) => {
        const gubun = cur.gubun[0];
        const localOccCnt = cur.localOccCnt[0];
        const obj = {
          id: gubun,
          label: gubun,
          value: localOccCnt,
          color: "hsl(100, 70%,50%)",
        };
        arrtemp2Box.push(obj);
      });
      //받아오는 데이터에 같은 Object가 중복으로 들어간 경우가 너무 많이 있어서 중복을 없애주기 위해 key가 unique한 Map 객체의 특징을 이용해 uniqueArr을 정의해주었습니다. https://yagisanatode.com/2021/07/03/get-a-unique-list-of-objects-in-an-array-of-object-in-javascript/ (중복없애기)
      let uniqueArr = [
        ...new Map(arrtemp2Box.map((item) => [item["id"], item])).values(),
      ];
      uniqueArr.map((each) => (each.color = `hsl(${generateNum()}, 70%,50%)`));
      setLoc(uniqueArr);
    };
    //사망수 데이터 가공
    const deathDataHandler = (data) => {
      const arrtemp2Box = [];
      data.forEach((cur) => {
        const gubun = cur.gubun[0];
        const deathCnt = cur.deathCnt[0];
        const obj = {
          id: gubun,
          label: gubun,
          value: deathCnt,
          color: "hsl(100, 70%,50%)",
        };
        arrtemp2Box.push(obj);
      });
      let uniqueArr = [
        ...new Map(arrtemp2Box.map((item) => [item["id"], item])).values(),
      ];
      uniqueArr.map((each) => (each.color = `hsl(${generateNum()}, 70%,50%)`));
      setDeath(uniqueArr);
    };
    //전일대비 확진자 증감수
    const incDataHandler = (data) => {
      const arrtemp2Box = [];
      data.forEach((cur) => {
        const gubun = cur.gubun[0];
        const incDec = cur.incDec[0];
        const obj = {
          id: gubun,
          label: gubun,
          value: incDec,
          color: "hsl(100, 70%,50%)",
        };
        arrtemp2Box.push(obj);
      });
      let uniqueArr = [
        ...new Map(arrtemp2Box.map((item) => [item["id"], item])).values(),
      ];
      uniqueArr.map((each) => (each.color = `hsl(${generateNum()}, 70%,50%)`));
      setInc(uniqueArr);
    };
    const today = moment().subtract(1, "days").format("YYYY-MM-DD");
    const params = { date: today };
    setLoading(true);
    axios({
      method: "get",
      url: `/api/covid-info/occur`,
      params: params,
    })
      .then((res) => {
        const initialObj = JSON.parse(res.data);
        const infoObj = initialObj.response.body[0].items[0].item;
        return infoObj;
      })
      .then((dt) => {
        setLoading(false);
        deathDataHandler(dt);
        localDataHandler(dt);
        incDataHandler(dt);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div
          style={{
            display: "flex",
          }}
        >
          <PieChart
            data={death}
            title={"누적사망자수"}
            theme={{
              background: "#FFBD33",
              axis: {
                fontSize: "14px",
                tickColor: "#eee",
                ticks: {
                  line: {
                    stroke: "#555555",
                  },
                  text: {
                    fill: "#ffffff",
                  },
                },
                legend: {
                  text: {
                    fill: "#aaaaaa",
                  },
                },
              },
              grid: {
                line: {
                  stroke: "#555555",
                },
              },
            }}
          ></PieChart>
          <PieChart data={loc} title={"지역별 발생수"}></PieChart>
          <PieChart data={inc} title={"전일대비확진자증감수"}></PieChart>
        </div>
      )}
    </>
  );
}
export default CovidOccur;
```

2. backend 코드 설명

   - server.js

```javascript
require("dotenv").config(); //환경변수(process.env.변수명)를 사용하기 위해 dotenv 를 사용했습니다. 환경 변수를 사용하기 전에 선언해주어야 오류 없이 사용이 가능합니다.
const express = require("express"); //express 객체선언
const connectDB = require("./backend/config/db"); //MongoDB 연결
const colors = require("colors");
const path = require("path");
const userRoutes = require("./backend/routes/userRoutes");
const noteRoutes = require("./backend/routes/noteRoutes");
const postRoutes = require("./backend/routes/boardRoutes");
const covidRoutes = require("./backend/routes/covidRoutes");
const {
  errorHandler,
  notFound,
} = require("./backend/middlewares/errorMiddleware.js");
//END OF IMPORT --------------------------------------------------
//
connectDB(); //DB에 연결해줍니다.
const app = express(); // express instance app 생성
app.use(express.json()); //json data를 받아오기 위해 미들웨어로 설정해줍니다.
//Routes (들어오는 요청을 처리해줄 라우터들을 연결해줍니다. )
app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/board", postRoutes);
app.use("/api/covid-info", covidRoutes);
//END OF ROUTES------------------------
//deployment
__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
//END OF DEPLOYMENT-------------------
//ERROR HANDLING MIDDLEWARES
app.use(notFound); //잘못된 경로로 요청이 들어올 경우 notFound error 미들웨어 연결.
app.use(errorHandler); //정상적인 응답이 아닐경우 일반적으로 적용해줄 에러 헨들러도 연결해줍니다.
//SERVER START
const PORT = process.env.PORT || 4000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`.yellow
      .bold
  )
);
```

- backend>routes>covidRoutes.js

```javascript
const express = require("express");
const router = express.Router();

const {
  getOccurData,
  getGenderData,
  getHospitalData,
} = require("../controllers/covidController"); //라우터파일에서는 라우팅만 해주고 이후의 로직에 요청과 응답 로직은 Controllers에서 관리해줍니다.

router.route("/occur").get(getOccurData);
router.route("/gender").get(getGenderData);
router.route("/hospital").get(getHospitalData);
module.exports = router;
```

- backend>controllers>covidController.js

```javascript
const asyncHandler = require("express-async-handler");
const xml2js = require("xml2js");
const axios = require("axios");

// @description Get datas from open api
// @route       GET /api/covid-info/occur
// @access      Public
const getOccurData = asyncHandler(async (req, res) => {
  let { date } = req.query;
  date = encodeURI(date);
  const url = `http://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=${process.env.SERVICEKEY}&pageNo=1&numOfRows=500&apiType=xml&std_day=${date}`;

  const xmlResponse = await axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      const parser = new xml2js.Parser();
      parser
        .parseStringPromise(data)
        .then((result) => {
          const json = JSON.stringify(result);

          res.json(json);
        })
        .catch((err) => console.log(err));
    });
});

// @description Get datas from open api
// @route       GET /api/covid-info/gender
// @access      Public
const getGenderData = asyncHandler(async (req, res) => {
  let { startCreateDt, endCreateDt } = req.query;
  startCreateDt = encodeURI(startCreateDt);
  endCreateDt = encodeURI(endCreateDt);
  const url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19GenAgeCaseInfJson?serviceKey=${process.env.SERVICEKEY}&pageNo=1&numOfRows=10&apiType=xml&startCreateDt=${startCreateDt}&endCreateDt=${endCreateDt}`;

  const xmlResponse = await axios
    .get(url)
    .then((res) => {
      return res.data.response.body.items;
    })
    .then((data) => {
      res.json(data);
    });
});

// @description Get datas from open api
// @route       GET /api/covid-info/hospital
// @access      Public
const getHospitalData = asyncHandler(async (req, res) => {
  let { pageNo } = req.query;
  pageNo = encodeURI(pageNo);
  const url = `http://apis.data.go.kr/B551182/telCnslHospService/getTelCnslHospList?serviceKey=${process.env.SERVICEKEY}&pageNo=${pageNo}&numOfRows=44`;
  const xmlResponse = await axios
    .get(url)
    .then((res) => {
      return res.data.response.body.items;
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
});

module.exports = { getOccurData, getGenderData, getHospitalData };
```

- backend>models>userModel.js

```javascript
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
//Mongoose는 MongoDB를 쉽게 사용하게 해주는 모듈입니다. Schema를 이용해 모델의 구조를 정의해줄 수 있습니다. User에는 이름, 이메일, 비밀번호, 관리자격, 프로필사진 등을 속성으로 정의해줬습니다.
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  pic: {
    type: String,
    required: true,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
});
// 로그인시에 비밀번호가 맞는지 확인하는 로직입니다.
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
// 유저를 생성할때 입력받은 비밀번호를 그대로 저장하는게 아니라 일방향으로 암호화된 새로운 값으로 바꾸어 저장해줍니다.
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next;
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
// mongoose.model을 이용해 위에서 정의한 Schema를 User에 등록해줍니다.
const User = mongoose.model("User", userSchema);
module.exports = User;
```
