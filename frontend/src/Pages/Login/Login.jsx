import { Typography, Grid, Box } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ApiCalls from "../../API/ApiCalls";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logindetails, setloginDetails] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    ApiCalls.login(email, password)
      .then((res) => localStorage.setItem("ecommuser", JSON.stringify(res)))
      .catch((err) => console.log(err));
    localStorage.setItem("ecommuser", JSON.stringify(logindetails));
    console.log(logindetails);

    navigate("/");
  };
  return (
    <Grid container>
      <Grid md={4}></Grid>
      <Grid md={4}>
        <Box className="mt-3 p-3 signup">
          <Typography>Login</Typography>
          <Box>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={(e) => handleSubmit(e)}
              disabled={!(email.length > 0 && password.length > 0)}
            >
              Login
            </Button>
          </Box>
          <Link to="/signup">
            <Button>Create an account</Button>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}
