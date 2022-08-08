# notezipper-clone

## 공공데이터 오픈api 받아오는 데이터 흐름 (express, react-redux)

## react-redux에 대한 자세한 정보는 https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow 를 참고해주세요. 데이터 흐름에 대해 자세하게 나와있습니다.

### CovidTotal.js

```javascript
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
  // useEffect(() => {}, []);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getTotalData(std)); //dispatch함수에 covidActions에 정의해놓은 함수를 불러줍니다.
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
                    setStd(e.target.value.replaceAll("-", "")); //파라미터에 넣어줄 날짜형식입니다.
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
```

```javascript
export const getTotalData =
  (
    std = "20220425" //기본 날짜로 22년4월25일을 설정했습니다.
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: COVIDTOTAL_LIST_REQUEST,
      });
      const params = { date: std };
      const { data } = await axios({
        method: "get",
        url: `/api/covid-info/total`, //해당 경로로 요청을 보내면 백엔드에서 데이터를 반환해줍니다.
        params: params,
      });
      const initialObj = JSON.parse(data);
      const infoObj = initialObj.response.body[0].items[0].item[0];
      dispatch({
        type: COVIDTOTAL_LIST_SUCCESS,
        payload: infoObj,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: COVIDTOTAL_LIST_FAIL,
        payload: message,
      });
    }
  };
```

server.js안에 api/covid-info로 요청이 올경우 covidRoutes로 연결되도록 해줍니다.

```javascript
app.use("/api/covid-info", covidRoutes);
```

covidRoute.js 안에서 /api/covid-info/total 경로로 요청이 올경우 getTotalData가 실행되도록 연결을 해줍니다. 함수는 따로 covidController.js 에서 관리해줍니다.

```javascript
const express = require("express");
const router = express.Router();

const {
  getOccurData,
  getGenderData,
  getTotalData,
} = require("../controllers/covidController");

router.route("/occur").get(getOccurData);
router.route("/gender").get(getGenderData);
router.route("/total").get(getTotalData);
module.exports = router;
```

covidController.js

```javascript
// @description Get datas from open api
// @route       GET /api/covid-info/total
// @access      Public
const getTotalData = asyncHandler(async (req, res) => {
  let { date } = req.query; //파라미터로 받아온 날짜를 req.query로 받아옵니다.
  date = encodeURI(date); // url에 넣어주기 위해 encodeURI로 한번 감싸줍니다.
  const url = `http://apis.data.go.kr/1352000/ODMS_COVID_02/callCovid02Api?serviceKey=${process.env.SERVICEKEY}&pageNo=1&numOfRows=500&apiType=xml&status_dt=${date}`; //요청 url입니다.

  const xmlResponse = await axios //여기선 axios로 요청을 보내고 있지만 fetch함수를 써도 됩니다.
    .get(url)
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      const parser = new xml2js.Parser(); //받아온 데이터의 형식이 xml형식이기 때문에 json형식으로 바꿔주기 위해 xml2js 모듈을 사용해줬습니다.
      parser
        .parseStringPromise(data)
        .then((result) => {
          const json = JSON.stringify(result);
          res.json(json);
        })
        .catch((err) => console.log(err));
    });
});
```

이제 다시 프론트로 돌아와 받아온 데이터를 적절하게 배치해줍니다.

```javascript
function CovidTotal() {
  const dispatch = useDispatch();
  const covidInfo = useSelector((state) => state.covidTotal);
  const { loading, error, data } = covidInfo; //data에 백엔드에서 전달해준 데이터가 저장됩니다.
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
  // useEffect(() => {}, []);
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
                    return <th key={index}>{data[field]}</th>; //key로 index를 넣는것은 지양해야 하지만 적절한 id를 만들방법을 찾지 못해 임시방편으로 넣어두었습니다.
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
```
