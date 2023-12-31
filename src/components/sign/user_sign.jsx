import "./user_sign.css";
import gosu from "../../assets/고수.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserSign() {
  const navigate = useNavigate();
  const [signData, setSignData] = useState({
    name: "",
    phone_number: "",
    age: 0,
    address: "",
    sex: "남성",
  });

  const onClick = () => {
    console.log(signData);
    axios
      .post("http://192.168.0.25:8080/user/signup", {
        ...signData,
      })
      .catch((err) => console.log(err));
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setSignData({
      ...signData,
      [name]: value,
    });
  };

  const onGenderChange = (e) => {
    const { value } = e.target;
    setSignData({
      ...signData,
      gender: value,
    });
  };

  const onClickCancle = () => {
    navigate("/");
  };

  return (
    <div className="Sign">
      <img src={gosu} className="logo" />
      <div className="sign-fontsize">SIGN UP</div>
      <p>
        <b>이름</b>
      </p>
      <input
        name="name"
        onChange={onChange}
        type="text"
        placeholder="이름을 입력해주세요"
        autoComplete="off"
      />
      <p className="font-grap">
        <b>전화번호</b>
      </p>
      <input
        name="phone_number"
        onChange={onChange}
        type="text"
        placeholder="전화번호를 입력해주세요"
        autoComplete="off"
      />
      <p className="font-grap">
        <b>성별</b>
      </p>
      <div className="gander-radio">
        <input
          className="radio-width"
          type="radio"
          name="sex"
          value="여성"
          checked={signData.gender === "여성"}
          onChange={onGenderChange}
        />
        <p className="ps">여성</p>
        <input
          className="radio-width"
          type="radio"
          name="sex"
          value="남성"
          checked={signData.gender === "남성"}
          onChange={onGenderChange}
        />
        <p className="ps">남성</p>
      </div>
      <p className="age">
        <b>나이</b>
      </p>
      <input
        name="age"
        onChange={onChange}
        type="number"
        placeholder="나이를 입력해주세요"
        autoComplete="off"
      />
      <p className="adress">
        <b>주소</b>
      </p>
      <input
        name="address"
        onChange={onChange}
        type="text"
        placeholder="주소를 입력해주세요"
        autoComplete="off"
      />
      <div className="CU">
        <div onClick={onClickCancle} className="cancel-btn">
          취소
        </div>
        <div className="user-Sign-btn" onClick={onClick}>
          회원가입
        </div>
      </div>
    </div>
  );
}

export default UserSign;
