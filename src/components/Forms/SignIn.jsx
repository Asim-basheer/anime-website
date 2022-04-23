import "./forms.scss";
import { Form, Formik } from "formik";
import * as yup from "yup";
import FormikControl from "./Form/FormikControl";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

// import FormImg from "../../images/login&register.jpg";
function SignIn() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup.string().email("invalid format email").required("required"),
    password: yup.string().required("required"),
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
            <section className="form">
              <div className="form-img">
                {/* <img src={FormImg} alt="form img" /> */}
              </div>
              <div className="form-container">
                <div className="content">
                  <h2>Login form</h2>
                  <div className="form-icons">
                    <div className="form-google-icon">
                      <AiOutlineGooglePlus />
                    </div>
                    <div className="form-facebook-icon">
                      <FaFacebookF />
                    </div>
                  </div>
                  <p>Or use your email</p>
                </div>
                <Form>
                  <FormikControl
                    control="input"
                    type="email"
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
                  <input
                    type="submit"
                    value={"login"}
                    disabled={!isValid}
                    className="submit"
                  />
                </Form>
                <p className="dont-have">
                  Don't have an acount? <Link to={"/signup"}>Sign up</Link>
                </p>
              </div>
            </section>
          </div>
        );
      }}
    </Formik>
  );
}

export default SignIn;
