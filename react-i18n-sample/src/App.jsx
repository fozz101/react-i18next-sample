import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
const App = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
