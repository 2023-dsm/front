import "./start.css";
import gosu from "../../../src/assets/고수.png";

function Start() {
  return (
    <div className="start">
      <div className="img">
        <img src={gosu} width="210px" />
      </div>
      <div className="pagename">고수들의 직장</div>
      <a href="http://localhost:3000/login">
        <div className="lg">로그인</div>
      </a>
      <div className="sign">
        회원이 아니신가요?
        <a href="http://localhost:3000/sign" className="signin">
          회원가입
        </a>
      </div>
    </div>
  );
}

export default Start;
