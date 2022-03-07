import { Field, ErrorMessage } from "formik";
import IconError from "../IconError";

function UserName({ name, ...rest }) {
  return (
    <div className="form-control-input">
      <Field id={name} name={name} {...rest} />
      <div className="icon-input"></div>
      <ErrorMessage name={name} component={IconError} />
    </div>
  );
}

export default UserName;
