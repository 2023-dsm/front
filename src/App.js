import UserSign from "./components/sign/user_sign";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./components/startt";
import Login from "./components/login";
import Tab from "./components/common/tab";
import WritePage from "../src/pages/WritePage";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Tab />} />
          <Route path="/" element={<Start />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign" element={<UserSign />}></Route>
          <Route path="/write" element={<WritePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
