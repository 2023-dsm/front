import "./user-login.css";
import gosu from "../src/assets/고수.png";

function App() {
  return (
    <div className="App">
      <div className="Logo">
        <img src={gosu} alt="" width="30px" id="logo" />
      </div>
      <div className="login">LOGIN</div>
      <div className="name">
        <p>이름</p>
        <input type="text" placeholder="이름을 입력하세요" />
      </div>
      <div className="tel">
        <p>전화번호</p>
        <input type="tel" placeholder="전화번호를 입력해주세요"></input>
      </div>
      <div className="login-button">
        <from>
          <button type="submit">로그인</button>
        </from>
      </div>
    </div>
  );
}

export default App;
