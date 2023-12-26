import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import Clubs from "./components/clubs/clubs";
import Journal from "./components/journal/journal";
import Grades from "./components/grades/grades";
import {Route, Routes} from "react-router";
import Task from "./components/task/task";
import Course from "./components/courses/courses";
import './index.css'
import { LoginConnected } from "./components/login/loginContainer";
import { HeaderConnected } from "./components/header/headerContainer";
import { RegistConnected } from "./components/registration/registContainer";
import { ProfileConnected } from "./components/profile/profileContainer";


function App() {
  return (
    <div>
      <HeaderConnected /> 
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/profile" element={<ProfileConnected />} />
        <Route exact path="/login" element={<LoginConnected />} />
        <Route exact path="/register" element={<RegistConnected />} />
        <Route exact path="/journal" element={<Journal />} />
        <Route exact path="/clubs" element={<Clubs />} />
        <Route exact path="/grades" element={<Grades />} />
        <Route exact path="/task" element={<Task />} />
        <Route exact path="/course" element={<Course />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
