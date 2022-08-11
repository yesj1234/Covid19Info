# notezipper-clone

#### 해당 프로젝트는 https://github.com/piyush-eon/notezipper 를 참고하여 진행한 프로젝트입니다.

CovidGender.js 파일은 공공데이터 포털의 open api를 활용하여 연령별, 성별 확진자, 확진률, 사망자, 사망률, 치명률을 nivo Bar 컴포넌트를 활용하여 바그래프 형태로 보여줍니다.

```javascript
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment"; //시간을 계산하기 위한 모듈입니다.
import MainScreen from "../../components/MainScreen";
import Loading from "../../components/Loading";
import { Container, Carousel } from "react-bootstrap";
import ErrorMessage from "../../components/ErrorMessage";
import BarChart from "../../components/BarChart";

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

CovidOccur.js파일도 CovidGender.js파일과 마찬가지로 공공데이터 포털에서 데이터를 받아오긴 하지만 Bar그래프 형식이 아닌 Pie 그래프 형식으로 데이터를 보여줍니다. 각 지역별로 확진자, 사망자, 전일대비 확진자 증감 을 한눈에 확인 할 수 있습니다.

```javascript
import React, { useState, useEffect } from "react";
import MainScreen from "../../components/MainScreen";
import Loading from "../../components/Loading";
// import { Container, Row, Col } from "react-bootstrap";
// import ErrorMessage from "../../components/ErrorMessage";
import PieChart from "../../components/PieChart";
import axios from "axios";
import moment from "moment";
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
    //
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
