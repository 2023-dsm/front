import "./start.css";
import gosu from "../../../src/assets/고수.png";

function Start() {
  return (
    <div className="start">
      <div className="img">
        <img src={gosu} width="210px" />
      </div>
      <div className="pagename">고수들의 직장</div>
      <a href="https://www.naver.com">
        <div className="lg">로그인</div>
      </a>
      <div className="sign">
        회원이 아니신가요?
        <a href="https://www.google.com" className="signin">
          회원가입
        </a>
      </div>
    </div>
  );
}

export default Start;
