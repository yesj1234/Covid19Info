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
