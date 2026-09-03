import { useState } from "react";
import { Card, Button, Form, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../reduxs/AuthSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name || !email) {
      alert("Fill all fields");
      return;
    }

    dispatch(loginUser({ name, email }));
    navigate("/myaccount");
  };

  return (
    <Container className="py-5">
      <Card className="p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h4 className="text-center mb-3">Login</h4>

        <Form.Control
          className="mb-3"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Form.Control
          className="mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button onClick={handleLogin} className="w-100">
          Login
        </Button>
      </Card>
    </Container>
  );
}
