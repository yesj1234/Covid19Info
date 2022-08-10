import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import MainScreen from "../../components/MainScreen";
import Loading from "../../components/Loading";
import { Container, Carousel } from "react-bootstrap";
import ErrorMessage from "../../components/ErrorMessage";
import BarChart from "../../components/BarChart";

function CovidGender() {
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
    //데이터 가공
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
    axios({
      method: "get",
      url: `/api/covid-info/gender`,
      params: params,
    })
      .then((res) => {
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
