import { Route, Routes } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/homepage/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  // const user = true;
  const user = false;
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login/>} />
        <Route path="/write" element={user ?  <Write/> : <Login/>} />
        <Route path="/settings" element={user ? <Settings/> : <Login/>} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;
