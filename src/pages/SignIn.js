import { useState, useEffect } from "react";
import "../Form-style/register.css"
import { useNavigate } from "react-router-dom";
import { Error, Form } from "../Form-style/styled";
import { useFireContext } from "../Components/Context/FirebaseContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();
  const { login, setisLoggedIn } = useFireContext();
console.log("signin");
  useEffect(() => {
    let err = setTimeout(() => {
      setError("");
    }, 3000);
    return () => {
      clearTimeout(err);
    };
  }, [error]);

  const registerHandler = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      return setError("Fill in required field");
    }
    try {
      setError("");
      await login(email, password);
      setisLoggedIn(true);
      navigate("/");
    } catch (err) {
      const error =
        err.code.split("/")[1] === "wrong-password"
          ? "Incorrect Password"
          : "Incorrect Email";

      return setError(error);
    }
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
            <legend className="legend">Login</legend>
            <div className="inputs">
              <label htmlFor="email_address">Email</label>
              <input
                className="form-input"
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
            <input
              type="submit"
              className="login-btn"
              value="Login"
              onClick={registerHandler}
            />
            <input
              type="button"
              className="register-link"
              onClick={() => {
                navigate("/Register");
              }}
              value="Register"
            />
          </div>
        </Form>
      </main>
    </article>
  );
};
export default SignIn;
