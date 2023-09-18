import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";
import ApiCalls from "../../API/ApiCalls";

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const password = useRef("");
  const [cpassword, setcPassword] = useState("");
  const [error, setError] = useState("");
  const [login, setLogin] = useState([]);
  const navigate = useNavigate();

  const [pwdValidation, setPwdValidation] = useState({
    lowercase: false,
    uppercase: false,
    number: false,
    symbol: false,
    length: false,
  });

  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    ApiCalls.register(name, email, password)
      .then((res) => setLogin(res))
      .catch((err) => console.log(err));
  }, []);

  const { lowercase, uppercase, number, symbol, length } = pwdValidation;

  useEffect(() => {
    const isPwdValid = Object.values(pwdValidation).every(Boolean);
    console.log({ isPwdValid });
    setIsValid(isPwdValid);
    console.log({ isValid });
  }, [pwdValidation]);

  const validatePasword = (e) => {
    const password = e.target.value;
    // regex.test(string)
    const lowercase = /(?=.*[a-z])/.test(password);
    const uppercase = /(?=.*[A-Z])/.test(password);
    const number = /(?=.*\d)/.test(password);
    const symbol = /(?=.*[\W_])/.test(password);
    const length = password.length >= 8;
    // setPassword(password);
    setPwdValidation({ lowercase, uppercase, number, symbol, length });
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
      if (pass != cpassword) {
        alert("Password doesn't match");
      } else {
        ApiCalls.register(name, email, pass)
          .then((res) => setLogin(res))
          .catch((err) => console.log(err));
      }
    }
  };
  return (
    <Grid container>
      <Grid md={4}></Grid>
      <Grid md={4}>
        <Box className="mt-3 p-3 signup">
          <Typography>Signup</Typography>
          <Box>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="text-danger">{error}</div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => validatePasword(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setcPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              disabled={!isValid}
              onClick={(e) => handleSubmit(e)}
            >
              Signup
            </Button>
          </Box>
          <div className="pwd-strength">
            <div className={lowercase ? "text-success" : "text-danger"}>
              {lowercase ? "" : "Lowercase character :- a-z"}
            </div>
            <div className={uppercase ? "text-success" : "text-danger"}>
              {uppercase ? "" : "Uppercase character :- A-Z"}
            </div>
            <div className={number ? "text-success" : "text-danger"}>
              {number ? "" : "Numeric character :- 0-9"}
            </div>
            <div className={symbol ? "text-success" : "text-danger"}>
              {symbol ? "" : "Special character :- !@#$%^&*()_+"}
            </div>
            <div className={length ? "text-success" : "text-danger"}>
              {length ? "" : "Password should consist of 8 or more character"}
            </div>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}
