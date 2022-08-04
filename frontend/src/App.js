import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
import CovidInfo from "./screens/CovidInfo/CovidInfo";
function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Header setSearch={(s) => setSearch(s)} />
      <main className="App">
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>} exact />
          <Route path="/login" element={<LoginScreen></LoginScreen>} />
          <Route path="/register" element={<RegisterScreen></RegisterScreen>} />
          <Route path="/mynotes" element={<MyNotes search={search} />} />
          <Route path="/note/:id" element={<SingleNote></SingleNote>} />
          <Route path="/createnote" element={<CreateNote></CreateNote>} />
          <Route path="/profile" element={<ProfileScreen></ProfileScreen>} />
          <Route path="createPost" element={<CreatePost></CreatePost>}></Route>
          <Route path="/board" element={<Board></Board>}></Route>
          <Route path="/board/:id" element={<SinglePost></SinglePost>}></Route>
          <Route path="/covid-info" element={<CovidInfo></CovidInfo>}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
