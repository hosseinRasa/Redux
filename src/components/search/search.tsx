import { useField } from "formik";
import "./css/style.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Search = ({ label, width, ...props }: any) => {
  const [field, meta] = useField(props);
  const [showTable, setShowTable] = useState<boolean>(false);
  return (
    <div
      onMouseOver={() => {
        setShowTable(true);
      }}
      onMouseLeave={() => {
        setShowTable(false);
      }}
      className="search-container"
      style={{ width: width }}
    >
      <FaSearch className={meta.touched && meta.error ? "error" : ""} />
      <input
        className={meta.touched && meta.error ? "error" : null}
        {...field}
        {...props}
      />
      <label className={meta.touched && meta.error ? "error" : ""}>
        {label}
      </label>
      <table
        onMouseLeave={() => {
          setShowTable(false);
        }}
        onMouseOver={() => {
          setShowTable(true);
        }}
        hidden={!showTable}
      >
        <thead>
          <tr>
            <th>ستون یک</th>
            <th>ستون یک</th>
            <th>ستون یک</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>داده یک</td>
            <td>داده یک</td>
            <td>داده یک</td>
          </tr>
          <tr>
            <td>داده یک</td>
            <td>داده یک</td>
            <td>داده یک</td>
          </tr>
        </tbody>
      </table>
      {meta.touched && meta.error ? (
        <span className="error"> {meta.error}</span>
      ) : null}
    </div>
  );
};

export default Search;
