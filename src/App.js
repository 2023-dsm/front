// import UserSign from "./components/sign/user_sign";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./components/startt";
import Login from "./components/login";
import Menu from "./components/menu/menu";
import Head from "./components/head/head";

function App() {
  return (
    <div className="main">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/start" element={<Start />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign" element={<UserSign />}></Route>
        </Routes>
      </BrowserRouter> */}
      <Head />
      <Menu />
    </div>
  );
}

export default App;
