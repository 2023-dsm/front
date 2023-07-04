import "./user_sign.css";
import gosu from "../../assets/고수.png";

function UserSign() {
  return (
    <div className="Sign">
      <img src={gosu} className="logo" />
      <div className="sign-fontsize">SIGN UP</div>
      <p>
        <b>이름</b>
      </p>
      <input type="text" placeholder="이름을 입력해주세요"></input>
      <p className="font-grap">
        <b>전화번호</b>
      </p>
      <input type="text" placeholder="전화번호를 입력해주세요"></input>
      <p className="font-grap">
        <b>성별</b>
      </p>
      <div className="gander-radio">
        <input className="radio-width" type="radio" name="성별" checked />
        <p className="ps">여자</p>
        <input className="radio-width" type="radio" name="성별" />
        <p className="ps">남자</p>
      </div>
      <p className="age">
        <b>나이</b>
      </p>
      <input type="number" placeholder="나이를 입력해주세요"></input>
      <p className="adress">
        <b>주소</b>
      </p>
      <input type="text" placeholder="주소를 입력해주세요"></input>
      <div className="CU">
        <div className="cancel-btn">취소</div>
        <div className="user-Sign-btn">회원가입</div>
      </div>
    </div>
  );
}

export default UserSign;
