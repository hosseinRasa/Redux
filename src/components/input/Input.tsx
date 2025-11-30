import { useField } from "formik";
import "./css/style.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Input = ({ label, width, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div className="input-container" style={{ width: width }}>
      <input  className={(meta.touched && meta.error) ? "error" : null}  {...field} {...props} />
      <label  className={(meta.touched && meta.error) ? "error" : ""} >{label}</label>
      {meta.touched && meta.error ? (
        <span className="error"> {meta.error}</span>
      ) : null}
    </div>
  );
};

export default Input;
