import React, { useEffect, useState } from "react";
import "../Form-style/register.css"
import { useNavigate } from "react-router-dom";
import { Error, Form } from "../Form-style/styled";
import { useFireContext } from "../Components/Context/FirebaseContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp, setisLoggedIn } = useFireContext();

  useEffect(() => {
    let err = setTimeout(() => {
      setError("");
    }, 3000);
    return () => {
      clearTimeout(err);
    };
  }, [error]);

  let navigate = useNavigate();
  const registerHandler = async (e) => {
    e.preventDefault();
    if (!name) {
      return setError(" Kindly fill in your name.");
    }
    try {
      await signUp(email, password);
      setisLoggedIn(true);
      navigate("/");
    } catch (err) {
      const error = err.code.split("/")[1];
      return setError(error);
    }
    setEmail("");
    setName("");
    setPassword("");
    return;
  };

  return (
    <article className="register">
      <main>
        {error && (
          <Error>
            <h4>{error}</h4>
          </Error>
        )}
        <Form>
          <fieldset>
            <legend className="legend">Register</legend>
            <div className="inputs">
              <label htmlFor="name">Name</label>
              <input
                className="form-input"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div className="inputs">
              <label htmlFor="email_address">Email</label>
              <input
                className="form-input"
                placeholder="text@text.com"
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="inputs">
              <label htmlFor="password">Password</label>
              <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
          </fieldset>
          <div className="submit">
            <input className="btn" type="submit" value="Register" onClick={registerHandler} />
          </div>
        </Form>
      </main>
    </article>
  );
};
export default Register;
