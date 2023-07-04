import "./Instruction.css";
import AB from "../../../src/assets/A.png";
import Next from "../../../src/assets/next.png";

function Dpgb() {
  return (
    <div className="imgw">
      <img src={AB} alt="" />
      <a href="#">
        <div className="imgg">
          <img src={Next} />
        </div>
      </a>
    </div>
  );
}

export default Dpgb;