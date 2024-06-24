import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

function Signin() {
  return (
    <>
      <Header />
      <div className="signin-background">
        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "50vh", marginTop: "10px", display: "grid", backgroundColor: "white"}}>
          <div className="card p-5 m-2" style={{ maxWidth: "400px", width: "100%", backgroundColor: "lightgray" }}>
            <div className="card-body">
              <h2 className="card-title text-center mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Login</h2>
              <form className="login-form">
                <div className="form-group mb-3">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
                    </div>
                    <input className="form-control" type="text" id="email-login" placeholder="Email" />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
                    </div>
                    <input className="form-control" type="password" id="password-login" placeholder="Password" />
                  </div>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-block" type="submit" style={{ fontFamily: "Poppins, sans-serif"}}>Login</button>
                </div>
              </form>
            </div>
          </div>
          <div className="card p-5 m-2" style={{ maxWidth: "400px", width: "100%", backgroundColor: "lightgray"  }}>
            <div className="card-body">
              <h2 className="card-title text-center mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Register Today!</h2>
              <form className="signup-form" action="/register" method="POST">
                <div className="form-group mb-3">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
                    </div>
                    <input className="form-control" type="text" id="name-signup" name="name" placeholder="Your Name" required />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
                    </div>
                    <input className="form-control" type="email" id="email-signup" name="email" placeholder="Email" required />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
                    </div>
                    <input className="form-control" type="password" id="password-signup" name="password" placeholder="Password" required />
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