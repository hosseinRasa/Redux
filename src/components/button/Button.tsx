import { FaSave } from "react-icons/fa";
import "./css/style.css";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button = ({ label, ...props }: any) => {
  return (
    <button className="buttonComponent  buttonComponentSpace" {...props}>
      <span>

      <FaSave/>
      {label}
      </span>
    </button>
  );
};

export default Button;
