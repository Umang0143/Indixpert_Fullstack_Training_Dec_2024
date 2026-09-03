import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import logo from "../assets/logo/logo.svg";

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full name required")
    .matches(/^[A-Za-z\s]+$/, "Only alphabets allowed"),

  email: yup
    .string()
    .required("Email required")
    .email("Invalid email")
    .matches("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"),

  password: yup
    .string()
    .required("Password required")
    .min(6, "Min 6 characters")
    .max(10, "Max 10 characters")
    .matches(/^\S*$/, "No spaces allowed"),

  confirmPassword: yup
    .string()
    .required("Confirm password required")
    .oneOf([yup.ref("password")], "Password does not match"),

  terms: yup.boolean().oneOf([true], "Accept terms & conditions"),
});

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    setLoading(true);
    setLoginError("");

    const { confirmPassword, terms, ...userData } = data;

    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify(userData));

      setLoading(false);
      reset();
    }, 1000);
  };

  return (
    <Container fluid className="vh-100">
      <Row className="h-100 ">
        <Col lg={6} className="d-flex justify-content-center pe-sm-3">
          <Card className="p-5 text-start border-0">
            <div className="display-5 mb-md-5 mb-sm-3">
              <img
                className="me-3"
                src={logo}
                width="67"
                height="70"
                alt="logo"
              />
              SelseInfo
            </div>
            <h3 className="fw-semibold mb-4 display-6 mt-5 pe-4">
              If opportunity doesn’t knock, build a{" "}
              <span className="text-primary">door</span>.
            </h3>

            <p className="fs-3 pe-4">
              A designer knows he has achieved perfection not when there is
              nothing left to add, but when there is nothing left to take away.
            </p>

            {loginError && (
              <p className="text-danger fw-medium">{loginError}</p>
            )}

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  {...register("fullName")}
                  className={`border-0 border-top border-light ${
                    errors.fullName ? "border-danger" : ""
                  }`}
                />
                {errors.fullName && (
                  <small className="text-danger">
                    {errors.fullName.message}
                  </small>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  {...register("email")}
                  className={`border-0 border-top border-light ${
                    errors.email ? "border-danger" : ""
                  }`}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email.message}</small>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <div className="">
                  <Form.Label className="mb-0">Password</Form.Label>
                </div>
                <div className="position-relative">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    className={`border-0 border-top border-light pe-5 
                        ${errors.password ? "border-danger" : ""}`}
                  />

                  <i
                    className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"}`}
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      fontSize: "1.2rem",
                      color: "#6c757d",
                    }}
                  ></i>
                </div>

                {errors.password && (
                  <small className="text-danger">
                    {errors.password.message}
                  </small>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <div className="">
                  <Form.Label className="mb-0">Confirm Password</Form.Label>
                </div>
                <div className="position-relative">
                  <Form.Control
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirmPassword")}
                    className={`border-0 border-top border-light pe-5 
                    ${errors.confirmPassword ? "border-danger" : ""}`}
                  />

                  <i
                    className={`bi ${showConfirmPassword ? "bi-eye" : "bi-eye-slash"}`}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      fontSize: "1.2rem",
                      color: "#6c757d",
                    }}
                  ></i>
                </div>

                {errors.confirmPassword && (
                  <small className="text-danger">
                    {errors.confirmPassword.message}
                  </small>
                )}
              </Form.Group>

              <Form.Group className="mb-5">
                <Form.Check
                  type="checkbox"
                  label="I agree to all the Term of conditions & Privacy Policy"
                  {...register("terms")}
                  className={errors.terms ? "text-danger" : ""}
                />

                {errors.terms && (
                  <small className="text-danger">{errors.terms.message}</small>
                )}
              </Form.Group>

              <Button
                variant="danger"
                type="submit"
                className="w-50 bg-primary border-0 p-2"
                disabled={loading}
              >
                {loading ? "Createing Accout..." : "Create Accout"}
              </Button>
            </Form>

            <p className="mt-5">
              Already have an account?{" "}
              <span
                className="text-primary"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
              >
                Log In
              </span>
            </p>
          </Card>
        </Col>

        <Col
          lg={6}
          className="bg-primary bg-opacity-10 d-flex align-items-end justify-content-center p-5"
        >
          <Card className="bg-transparent border-0">
            <Card.Img
              variant="top"
              className="img-fluid rounded mb-3"
              src="https://img.freepik.com/free-photo/sales-sell-selling-commerce-costs-profit-retail-concept_53876-132327.jpg?semt=ais_hybrid&w=740&q=80"
            />
            <Card.Body className="text-center">
              <Card.Title className="display-5 mt-sm-4 mb-3">
                Where{" "}
                <span className="remote-word">
                  remote
                  <span className="remote-line"></span>
                </span>{" "}
                teams get work done
              </Card.Title>

              <Card.Text className="fs-3 fw-medium pt-3">
                The online collaborative whiteboard platform to bring teams
                together, anytime, anywhere.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
