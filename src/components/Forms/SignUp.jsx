import "./forms.scss";
import { Form, Formik } from "formik";
import * as yup from "yup";
import FormikControl from "./Form/FormikControl";
import { Link } from "react-router-dom";

// import FormImg from "../../images/login&register.jpg";
function SignUp() {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = yup.object({
    userName: yup.string().min(8).required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), ""], "passwords must match")
      .required("required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isValid, touched, errors }) => {
        return (
          <div className="container">
            <section className="form signup">
              <div className="form-img">
                {/* <img src={FormImg} alt="form img" /> */}
              </div>
              <div className="form-container">
                <div className="content">
                  <h2>Create a new acount</h2>
                </div>
                <Form>
                  <FormikControl
                    control="input"
                    name="userName"
                    placeholder="userName"
                    className={
                      errors.userName && touched.userName
                        ? "error"
                        : null || (touched.userName && !errors.userName)
                        ? "passed"
                        : null
                    }
                  />
                  <FormikControl
                    control="input"
                    name="email"
                    placeholder="email"
                    className={
                      errors.email && touched.email
                        ? "error"
                        : null || (touched.email && !errors.email)
                        ? "passed"
                        : null
                    }
                  />
                  <FormikControl
                    control="input"
                    type="password"
                    name="password"
                    placeholder="password"
                    className={
                      errors.password && touched.password
                        ? "error"
                        : null || (touched.password && !errors.password)
                        ? "passed"
                        : null
                    }
                  />
                  <FormikControl
                    control="input"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className={
                      errors.confirmPassword && touched.confirmPassword
                        ? "error"
                        : null ||
                          (touched.confirmPassword && !errors.confirmPassword)
                        ? "passed"
                        : null
                    }
                  />
                  <input
                    type="submit"
                    value={"login"}
                    disabled={!isValid}
                    className="submit"
                  />
                </Form>
                <p className="dont-have">
                  Already a member? <Link to={"/signin"}>log in</Link>
                </p>
              </div>
            </section>
          </div>
        );
      }}
    </Formik>
  );
}

export default SignUp;
