import { useField } from "formik";
import "./css/style.css";
import type { ChangeEvent } from "react";
import { FaChevronDown  } from "react-icons/fa";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Dropdown = ({ label, width, ...props }: any) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className="select-container" style={{ width: width }}>
         <FaChevronDown  className={meta.touched && meta.error ? "error" : ""} />
      <select
        className={meta.touched && meta.error ? "error" : null}
        {...field}
        {...props}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {helpers.setValue(e.target.value)}}
      >
        <option className={meta.touched && meta.error ? "error" : ""} value="">انتخاب کنید...</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
      </select>
      <label className={meta.touched && meta.error ? "error" : ""}>
        {label}
      </label>
      {meta.touched && meta.error ? (
        <span className="error"> {meta.error}</span>
      ) : null}
    </div>
  );
};

export default Dropdown;
