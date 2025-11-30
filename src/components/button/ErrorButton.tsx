import { FaTrash } from "react-icons/fa";
import "./css/style.css";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ErrorButton = ({ label, ...props }: any) => {
  return (
    <button className=" buttonComponentError buttonComponent" {...props}>
      <span>
        <FaTrash />
        {label}
      </span>
    </button>
  );
};

export default ErrorButton;
