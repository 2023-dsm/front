import "./head.css";
import gosu from "../../../src/assets/고수.png";

function Head() {
  return (
    <div className="head">
      <img src={gosu} width="30px" />
      <span>김승진님 안녕하세요</span>
    </div>
  );
}

export default Head;
