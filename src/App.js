import UserSign from "./components/sign/user_sign";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./components/startt";
import Login from "./components/login";
import Menu from "./components/menu/menu";
import Head from "./components/head/head";
import Pages from "./pages/menupage";

function App() {
  return (
    // <div className="main">
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/start" element={<Start />}></Route>
    //       <Route path="/login" element={<Login />}></Route>
    //       <Route path="/sign" element={<UserSign />}></Route>
    //       <Route path="/menu" element={<Menu />}></Route>
    //       <Route path="/head" element={<Head />}></Route>
    //       <Route path="/pages" element={<Pages />}></Route>
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <Pages />
  );
}

export default App;
