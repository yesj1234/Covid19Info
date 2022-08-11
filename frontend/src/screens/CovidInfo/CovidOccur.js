import React, { useState, useEffect } from "react";
// import MainScreen from "../../components/MainScreen";
import Loading from "../../components/Loading";
// import { Container, Row, Col } from "react-bootstrap";
// import ErrorMessage from "../../components/ErrorMessage";
import PieChart from "../../components/PieChart";
import axios from "axios";
import moment from "moment";
import "./style.css";
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
