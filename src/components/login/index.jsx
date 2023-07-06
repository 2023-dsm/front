import "./user-login.css";
import gosu from "../../../src/assets/고수.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    name: "",
    phone_number: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const onClick = () => {
    axios
      .post("http://192.168.0.25:8080/user/login", {
        ...loginData,
      })
      .then((res) => {
        console.log(res.data.access_token);
        localStorage.setItem("access_token", res.data.access_token);
        alert("로그인에 성공하셨습니다.");
        navigate("/main");
      })
      .catch((err) => console.log(err));
  };

  const Way = () => {
    navigate("/next");
  };

  return (
    <div className="App">
      <div className="Logo">
        <img src={gosu} alt="" width="30px" id="logo" />
      </div>
      <div className="login">LOGIN</div>
      <div className="name">
        <p className="op">이름</p>
        <input
          name="name"
          onChange={onChange}
          type="text"
          placeholder="이름을 입력하세요"
          autoComplete="off"
        />
      </div>
      <div className="tel">
        <p className="op">전화번호</p>
        <input
          name="phone_number"
          onChange={onChange}
          type="tel"
          placeholder="전화번호를 입력하세요"
          autoComplete="off"
        />
      </div>
      <div className="use">
        <button onClick={Way} type="submit" className="use">
          사용 방법 보기
        </button>
      </div>
      <div className="login-button">
        <button onClick={onClick} type="submit" className="loginin">
          로그인
        </button>
      </div>
    </div>
  );
}

export default Login;
