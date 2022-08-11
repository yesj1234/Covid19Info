# notezipper-clone

#### 해당 프로젝트는 https://github.com/piyush-eon/notezipper 를 참고하여 진행한 프로젝트입니다.

1. 프로젝트 소개

- 프로젝트명 : 이겨내요 코로나
- 프로젝트 개요 : 공공데이터 포털의 open API를 활용해 코로나에 대한 다양한 정보 제공과 유저들간의 간단한 정보 공유 게시판 기능을 제공하는 웹사이트 프로젝트입니다.
- 프로젝트 배포 : 헤로쿠(https://notezipper-clone.herokuapp.com/)
- 사용 스택 : React, Express, MongoDB, Node.js
- dependency : axios, bcryptjs, colors, dotenv, express, express-async-handler, jsonwebtoken, mongoose, node-fetch, xml2js 등
- 디렉토리 구조 :
  1. backend
     📦backend
     ┣ 📂config
     ┃ ┗ 📜db.js
     ┣ 📂controllers
     ┃ ┣ 📜boardController.js
     ┃ ┣ 📜covidController.js
     ┃ ┣ 📜noteController.js
     ┃ ┗ 📜userController.js
     ┣ 📂middlewares
     ┃ ┣ 📜authMiddleware.js
     ┃ ┗ 📜errorMiddleware.js
     ┣ 📂models
     ┃ ┣ 📜noteModel.js
     ┃ ┣ 📜postModel.js
     ┃ ┗ 📜userModel.js
     ┣ 📂routes
     ┃ ┣ 📜boardRoutes.js
     ┃ ┣ 📜covidRoutes.js
     ┃ ┣ 📜noteRoutes.js
     ┃ ┗ 📜userRoutes.js
     ┗ 📂utils
     ┃ ┗ 📜generateToken.js
  2. frontend
     📦frontend  
     ┣ 📂public
     ┃ ┣ 📜favicon.ico
     ┃ ┣ 📜index.html
     ┃ ┣ 📜logo192.png
     ┃ ┣ 📜logo512.png
     ┃ ┣ 📜manifest.json
     ┃ ┗ 📜robots.txt
     ┣ 📂src
     ┃ ┣ 📂actions
     ┃ ┃ ┣ 📜boardActions.js
     ┃ ┃ ┣ 📜covidActions.js
     ┃ ┃ ┣ 📜notesActions.js
     ┃ ┃ ┗ 📜userActions.js
     ┃ ┣ 📂components
     ┃ ┃ ┣ 📜BarChart.js
     ┃ ┃ ┣ 📜ErrorMessage.js
     ┃ ┃ ┣ 📜Footer.js
     ┃ ┃ ┣ 📜Header.js
     ┃ ┃ ┣ 📜LineChart.js
     ┃ ┃ ┣ 📜Loading.js
     ┃ ┃ ┣ 📜MainScreen.js
     ┃ ┃ ┣ 📜NotFound.js
     ┃ ┃ ┣ 📜PieChart.js
     ┃ ┃ ┗ 📜Screen.css
     ┃ ┣ 📂constants
     ┃ ┃ ┣ 📜boardConstants.js
     ┃ ┃ ┣ 📜covidConstants.js
     ┃ ┃ ┣ 📜notesConstants.js
     ┃ ┃ ┗ 📜userConstants.js
     ┃ ┣ 📂reducers
     ┃ ┃ ┣ 📜boardReducers.js
     ┃ ┃ ┣ 📜covidReducers.js
     ┃ ┃ ┣ 📜notesReducers.js
     ┃ ┃ ┗ 📜userReducers.js
     ┃ ┣ 📂screens
     ┃ ┃ ┣ 📂Board
     ┃ ┃ ┃ ┗ 📜Board.js
     ┃ ┃ ┣ 📂CovidInfo
     ┃ ┃ ┃ ┣ 📜CovidGender.js
     ┃ ┃ ┃ ┣ 📜CovidHospital.js
     ┃ ┃ ┃ ┣ 📜CovidOccur.js
     ┃ ┃ ┃ ┗ 📜style.css
     ┃ ┃ ┣ 📂LandingPage
     ┃ ┃ ┃ ┣ 📜LandingPage.js
     ┃ ┃ ┃ ┗ 📜LandingStyles.css
     ┃ ┃ ┣ 📂LoginScreen
     ┃ ┃ ┃ ┣ 📜LoginScreen.css
     ┃ ┃ ┃ ┗ 📜LoginScreen.js
     ┃ ┃ ┣ 📂MyNotes
     ┃ ┃ ┃ ┗ 📜MyNotes.js
     ┃ ┃ ┣ 📂ProfileScreen
     ┃ ┃ ┃ ┣ 📜ProfileScreen.css
     ┃ ┃ ┃ ┗ 📜ProfileScreen.js
     ┃ ┃ ┣ 📂RegisterScreen
     ┃ ┃ ┃ ┣ 📜RegisterScreen.css
     ┃ ┃ ┃ ┗ 📜RegisterScreen.js
     ┃ ┃ ┣ 📂SingleNote
     ┃ ┃ ┃ ┣ 📜CreateNote.js
     ┃ ┃ ┃ ┗ 📜SingleNote.js
     ┃ ┃ ┗ 📂SinglePost
     ┃ ┃ ┃ ┣ 📜CreatePost.js
     ┃ ┃ ┃ ┗ 📜SinglePost.js
     ┃ ┣ 📜App.css
     ┃ ┣ 📜App.js
     ┃ ┣ 📜bootstrap.min.css
     ┃ ┣ 📜index.css
     ┃ ┣ 📜index.js
     ┃ ┣ 📜logo.png
     ┃ ┣ 📜maskBoy.png
     ┃ ┣ 📜reportWebVitals.js
     ┃ ┣ 📜setupTests.js
     ┃ ┗ 📜store.js
     ┣ 📜.gitignore
     ┣ 📜package-lock.json
     ┣ 📜package.json
     ┗ 📜README.md

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

- 제일 처음 보여지는 LandingPage입니다. 메뉴바, 프로젝트에 대한 소개 등이 있는 페이지입니다. Redux로 로그인 상태를 받아오고 로그인이 안된 상태라면 회원가입버튼과 로그인 버튼이 보이도록 해주고, 로그인이 된 상태라면 게시판 버튼이 보이도록 해주었습니다.

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
  // @nivo/Bar 에서 제공하는 Bar컴포넌트가 필요로 하는 데이터의 형식입니다. 공공데이터 포털에서 받아온 데이터도 마찬가지로 다음과 같은 형식으로 가공해주어야 합니다.
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
    //데이터 가공함수입니다. 미리 기본값으로 저장해둔 dt를 복사 한 후 받아온 데이터들로 필드에 맞게 데이터를 바꾸어 주고 setDt함수로 새롭게 저장해줍니다.
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
    //useEffect함수의 dependency에 아무것도 넣어 주지 않으므로 화면이 전체적으로 렌더링 된 이후에 useEffect 내부에 넣어둔 코드들이 실행 될 것입니다. 위에 정의해둔 dataHandler함수를 사용해 axios모듈을 통해 서버로 요청을 보내면 서버에서 공공데이터 포털의 open api에 다시 요청을 보내 데이터를 받아와서 응답을 보내줍니다.
    const today = moment().subtract(1, "days").format("YYYYMMDD");
    const params = { startCreateDt: today, endCreateDt: today };
    setLoading(true);
    axios({
      method: "get",
      url: `/api/covid-info/gender`,
      params: params,
    })
      .then((res) => {
        //저한테 필요한 데이터는 res.data.item안에 들어있으므로 필요한 만큼만 받겠습니다.
        console.log(res.data.item);
        return res.data.item;
      })
      .then((item) => {
        dataHandler(item);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //데이터간의 숫자 차이가 너무 커서 한 그래프 안에 다 보여줄 수 가 없습니다. 따라서 항목별로 따로따로 보여주기 위해 Carousel을 활용했습니다. 다음과 같이 정의해둔 key들은 BarChart의 인수로 들어갈 key들입니다.
  const confKeys = ["confCase"];
  const confRateKeys = ["confCaseRate"];
  const deathKeys = ["death"];
  const deathRateKeys = ["deathRate"];
  const criticalKeys = ["criticalRate"];

  return (
    <MainScreen title="코로나19 연령별 성별 발생현황">
      <Carousel fade interval={null}>
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
  CovidOccur.js파일도 CovidGender.js파일과 마찬가지로 공공데이터 포털에서 데이터를 받아오긴 하지만 Bar그래프 형식이 아닌 Pie 그래프 형식으로 데이터를 보여줍니다. 각 지역별로 확진자, 사망자, 전일대비 확진자 증감 을 한눈에 확인 할 수 있습니다.

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
      //받아오는 데이터에 같은 Object가 중복으로 들어간 경우가 너무 많이 있어서 중복을 없애주기 위해 다음과 같은 uniqueArr을 정의해주었습니다. https://yagisanatode.com/2021/07/03/get-a-unique-list-of-objects-in-an-array-of-object-in-javascript/ (중복없애기)
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
require("dotenv").config(); //.env에 설정해둔 환경변수를 사용하기 위해 가장 위에 선언해줍니다.
const express = require("express");
const connectDB = require("./backend/config/db");
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
connectDB(); //MongoDB에 연결
const app = express(); // express로 서버를 열어주기 위해 app을 생성해줍니다.
app.use(express.json()); //json데이타를 사용하기 위해서 미들웨어로 추가해줍니다.
//Routes
app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/board", postRoutes);
app.use("/api/covid-info", covidRoutes);
//END OF ROUTES------------------------
//deployment 배포시에 사용될 코드입니다.
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
app.use(notFound);
app.use(errorHandler);
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
