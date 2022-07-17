import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "bootswatch/dist/lumen/bootstrap.min.css";
import LandingPage from "./screens/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ minHeight: "90vh" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/my-notes" element={<MyNotes />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
