import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Header from "./compoenents/Header";
import About from "./pages/About";
import PrivateRoute from "./compoenents/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/about" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
