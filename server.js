require("dotenv").config();
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
connectDB();
const app = express(); // main thing
app.use(express.json()); //to accept json data
//Routes
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
