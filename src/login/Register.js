import "./login.css";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import axios from "../api/axios";
import { Link } from "react-router-dom";
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&*]).{8,24}$/;
const Register = () => {
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  
  const [isLoading,setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const userRef = useRef();


  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const match = user.match(USER_REGEX);
    setValidName(match);
    setErrMsg('');
  }, [user]);

  useEffect(() => {
    const match = password.match(PASSWORD_REGEX);
    setValidPassword(match);
    const match2 = password === matchPwd;
    setValidMatch(match2);
    setErrMsg('');
  }, [password, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const matchforuser = user.match(USER_REGEX);
    const matchforpwd = password.match(PASSWORD_REGEX);

    if (!matchforuser && !matchforpwd) {
      setErrMsg("Check username or password");
      return;
    }

    try {
      const body = {
        user,
        pwd: password,
      };
      setIsLoading(true);
      await axios.post("/register", JSON.stringify(body), {
        headers: {
          Accept: "application/json , text/plain",
          "Content-Type": "application/json",
        },
      });
      setSuccess(true);
    } catch (err) {
      if (!err.response) {
        setErrMsg("No server response");
      }
      if (err.response.status === 409) {
        setErrMsg("Username already taken");
      }
      else {
        setErrMsg("Network error");
      }
    }
    finally {
      setIsLoading(false);
    }
  };
  return (
    <main>
    <>
      <section className={`App-register ${isLoading ? `blur` : null}`}>
        {success ? (
          <section>
            <h1>Success!</h1>
            <Link
              style={{
                textDecoration: "underline",
                color: "whitesmoke",
                textAlign: "center",
              }}
              to="/signin"
            >
              Sign In
            </Link>
          </section>
        ) : (
          <>
            {errMsg && !userFocus ? <p className="err-msg">{`${errMsg}`}</p> : null}
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">
                Username :{" "}
                {user ? (
                  validName ? (
                    <FaCheck
                      style={{
                        color: "lightgreen",
                        marginBottom: "-0.1rem",
                      }}
                    />
                  ) : (
                    <FaTimes
                      style={{ color: "red", marginBottom: "-0.1rem" }}
                    />
                  )
                ) : null}
              </label>
              <input
                ref={userRef}
                id="username"
                placeholder="Enter Username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />

              <label htmlFor="password">
                Password :{" "}
                {password ? (
                  validPassword ? (
                    <FaCheck
                      style={{
                        color: "lightgreen",
                        marginBottom: "-0.1rem",
                      }}
                    />
                  ) : (
                    <FaTimes
                      style={{ color: "red", marginBottom: "-0.1rem" }}
                    />
                  )
                ) : null}
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter Password"
                value={password}
                aria-describedby="pwd-note"
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              {password && pwdFocus && !validPassword && (
                <p className="pwd-note" id="pwd-note">
                  <li>Must contain atleast one special character</li>
                  <li>
                    Must contain atleast one UPPERCASE and lowercase character
                  </li>
                  <li>Must contain atleast one digit</li>
                  <li>Must contain 8-23 characters</li>
                </p>
              )}
              <label htmlFor="re-enter">
                Re-Enter Password:{" "}
                {matchPwd ? (
                  validMatch ? (
                    <FaCheck
                      style={{
                        color: "lightgreen",
                        marginBottom: "-0.1rem",
                      }}
                    />
                  ) : (
                    <FaTimes
                      style={{ color: "red", marginBottom: "-0.1rem" }}
                    />
                  )
                ) : null}
              </label>
              <input
                id="re-enter"
                type="password"
                placeholder="Enter Password Again"
                value={matchPwd}
                onChange={(e) => setMatchPwd(e.target.value)}
              />

              <button className="auth-btn"
                type="submit"
                disabled={
                  !validName || !validPassword || !validMatch || isLoading ? true : false
                }
              >
                Sign Up
              </button>

              <p className="already">Already Registered?</p>
              <Link className="sign-in" to="/signin">
                Sign In
              </Link>
            </form>
          </>
        )}
      </section>
    </>
    </main>
  );
};
export default Register
