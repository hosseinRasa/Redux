import { Form, Formik } from "formik";

// import Counter from "./app/feature/counter/Counter";
// import Like from "./app/feature/counter/Like";
// import { useAppSelector } from "./app/hooks";
import Input from "../components/input/Input";
import * as Yup from "yup";
import Dropdown from "../components/dropdown/dropdown";
import type { ChangeEvent } from "react";
import Search from "../components/search/search";
import Button from "../components/button/Button";
import ErrorButton from "../components/button/ErrorButton";
 

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
function Page1() {
  // const count = useAppSelector((state) => state.counter.count);
  return (
    <div className="pageContainer">
      <Button
        onClick={() => {
          const form = document.getElementById("mainForm") as HTMLFormElement;
          console.log(form);
          if (form) form.requestSubmit();
        }}
        label="ذخیره"
        type="submit"
      />
      <ErrorButton label="حذف" type="submit" />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values) => console.log(values)}
        validateOnBlur={false}
        validateOnChange={false}
      >
        <Form id="mainForm" autoComplete="off">
          <Input label="نام کاربری" name="email" placeholder=" " />
          {/* <Input
          label="رمز عبور"
          name="password"
          placeholder=" "
          type="password"
        /> */}
          <Dropdown
            label="واحد اندازه گیری"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              alert(e.target.value);
            }}
            name="password"
            placeholder="  "
          />
          <Search label="واحد اندازه گیری" name="password" placeholder="  " />
        </Form>
      </Formik>
    </div>
  );
}

export default Page1;
