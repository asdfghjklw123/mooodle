import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import Clubs from "./components/clubs/clubs";
import Journal from "./components/journal/journal";
import {Route, Routes} from "react-router";
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

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
