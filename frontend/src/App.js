import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import LandingPage from "./screens/LandingPage/LandingPage";
// import MyNotes from "./screens/MyNotes/MyNotes";
// import SingleNote from "./screens/SingleNote/SingleNote";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
// import CreateNote from "./screens/SingleNote/CreateNote";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import Board from "./screens/Board/Board";
import CreatePost from "./screens/SinglePost/CreatePost";
import SinglePost from "./screens/SinglePost/SinglePost";
import CovidOccur from "./screens/CovidInfo/CovidOccur";
import CovidGender from "./screens/CovidInfo/CovidGender";
import CovidHospital from "./screens/CovidInfo/CovidHospital";
function App() {
  return (
    //Routing을 담당해줄 BrowserRouter로 전체 App의 구조를 감싸줍니다.
    //Header와 Footer는 어떤 경로에도 항상 포함 될 것이기 때문에 Routes바깥에 위치시켜줍니다.
    //정해진 경로로 요청이 들어올 경우 미리 정의 해둔 페이지를 보여주도록 Route를 위치시켜줍니다.
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

export default App;
