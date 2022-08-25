import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import MainScreen from "../../components/MainScreen";
import { Container, Carousel } from "react-bootstrap";
import BarChart from "../../components/BarChart";
import "./style.css";
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
