import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import SingleNote from "./screens/SingleNote/SingleNote";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/SingleNote/CreateNote";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import Board from "./screens/Board/Board";
import CreatePost from "./screens/SinglePost/CreatePost";
import SinglePost from "./screens/SinglePost/SinglePost";
import CovidOccur from "./screens/CovidInfo/CovidOccur";
import CovidGender from "./screens/CovidInfo/CovidGender";
import CovidTotal from "./screens/CovidInfo/CovidTotal";
function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Header setSearch={(s) => setSearch(s)} />
      <main className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage></LandingPage>} />
          <Route exact path="/login" element={<LoginScreen></LoginScreen>} />
          <Route
            exact
            path="/register"
            element={<RegisterScreen></RegisterScreen>}
          />
          <Route exact path="/mynotes" element={<MyNotes search={search} />} />
          <Route exact path="/note/:id" element={<SingleNote></SingleNote>} />
          <Route exact path="/createnote" element={<CreateNote></CreateNote>} />
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
            path="/covid-total"
            element={<CovidTotal></CovidTotal>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
