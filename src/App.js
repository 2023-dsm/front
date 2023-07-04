import UserSign from "./components/sign/user_sign";
import { BrowserRouter , Routes,  Route } from 'react-router-dom';
import Start from "./components/start";
import Login from "./components/login";


function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <Routes>
          <Route path="/start" element={<Start />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign" element={<UserSign />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
