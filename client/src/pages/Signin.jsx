import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signin() {
  const [loginData, setLoginData] = useState({email: '', password: ''})
  const [registerData, setRegisterData] = useState({ username: '', email: '', password:''})
  const navigate = useNavigate()
  const [signup, {signuperror, signupdata}] = useMutation(ADD_USER)
  const [login, {loginerror, logindata}] = useMutation(LOGIN_USER)

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log(loginData);
      const {data} = await login({
        variables: {...loginData},
      });
      console.log(data);
      Auth.login(data.login.token);
      navigate("/aboutus");
    } catch (error) {
      console.log(loginerror);
    }
  };


  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const { data } = await signup({
        variables: {...registerData},
      });
      console.log(data);
      Auth.login(data.adduser.token);
      navigate("/aboutus");
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <>
      <Header />
      <div className="signin-background">
        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "50vh", marginTop: "10px", display: "grid", backgroundColor: "white" }}>
          <div className="card p-5 m-2" style={{ maxWidth: "400px", width: "100%", backgroundColor: "lightgray" }}>
            <div className="card-body">
              <h2 className="card-title text-center mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Login</h2>
              <form className="login-form" onSubmit={handleLogin}>
                <div className="form-group mb-3">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
                    </div>
                    <input
                      className="form-control"
                      name = "email"
                      type="text"
                      id="email-login"
                      placeholder="Email"
                      value={loginData.username}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
                    </div>
                    <input
                      className="form-control"
                      name = "password"
                      type="password"
                      id="password-login"
                      placeholder="Password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-block" type="submit" style={{ fontFamily: "Poppins, sans-serif" }}>Login</button>
                </div>
              </form>
            </div>
          </div>
          <div className="card p-5 m-2" style={{ maxWidth: "400px", width: "100%", backgroundColor: "lightgray" }}>
            <div className="card-body">
              <h2 className="card-title text-center mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Register Today!</h2>
              <form className="signup-form" onSubmit={handleRegister}>
                <div className="form-group mb-3">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
                    </div>
                    <input
                      className="form-control"
                      name="name"
                      type="text"
                      id="name-signup"
                      placeholder="Your Name"
                      value={registerData.username}
                      onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
                    </div>
                    <input
                      className="form-control"
                      type="email"
                      id="email-signup"
                      placeholder="Email"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
                    </div>
                    <input
                      className="form-control"
                      type="password"
                      id="password-signup"
                      placeholder="Password"
                      value={registerData.password}
                      onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-block" type="submit" style={{ fontFamily: "Poppins, sans-serif" }}>Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signin;
