import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import sha256 from 'crypto-js/sha256';
import isEmail from 'validator/lib/isEmail';
import { useUserContext } from '../context/user_context';

const Login = () => {
  const [login, setLogin] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState('');
  const [credentials, setCredentials] = useState({
    email: 'leonekohler@surfeu.de',
    password: 'password',
  });
  const { user, userLogin, errorLogin } = useUserContext();

  const navigate = useNavigate();
  const landingPage = () => {
    navigate('/');
  };

  useEffect(() => {
    if (user) {
      navigate('/main/profile');
    }
  });

  const handleSignIn = (e) => {
    e.preventDefault();
    const { email, password } = credentials;
    if (email && password) {
      if (!isEmail(email)) {
        setIsValidEmail('Please enter a valid email');
        setTimeout(() => {
          setIsValidEmail('');
        }, 2500);
      } else {
        const shaPassword = sha256(password).toString();
        userLogin(email, shaPassword);
      }
    }
  };

  return (
    <Wrapper>
      {login ? (
        <div className="container">
          <div className="form-wrap">
            <div className="close-btn">
              <MdClose size={30} onClick={landingPage} />
            </div>
            <form onSubmit={handleSignIn}>
              <h1>Sign in</h1>
              {errorLogin && (
                <h4 style={{ color: '#D75134' }}>
                  Incorrect username/password ..{' '}
                </h4>
              )}
              <div className="form-group">
                <label htmlFor="user">
                  Email <span className="span-email">{isValidEmail}</span>
                </label>
                <input
                  type="text"
                  name="user"
                  value={credentials.email}
                  onChange={(e) =>
                    setCredentials({ ...credentials, email: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                />
              </div>
              <button type="submit">Sign In</button>
            </form>
            <div className="other-users">
              <div>
                <h4>Other users:</h4>
                <p>
                  ftremblay@gmail.com <strong>password</strong>
                </p>
                <p>
                  bjorn.hansen@yahoo.no <strong>password</strong>
                </p>
              </div>
            </div>
            {/* 
              UNCOMMENT FOR FUTURE DEVELOPMENT
            <div className="wrap">
              <div className="line">
                <div className="line-text">Or</div>
              </div>
            </div>
            <button onClick={() => setLogin(!login)}>Sign Up</button> */}
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="form-wrap">
            <div className="close-btn">
              <MdClose size={30} onClick={landingPage} />
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <h1>Sign up</h1>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
              </div>
              <div className="form-group">
                <label htmlFor="name">First Name</label>
                <input type="text" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" />
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <div className="wrap">
              <div className="line">
                <div className="line-text">Or</div>
              </div>
            </div>
            <button onClick={() => setLogin(!login)}>Sign In</button>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: rgba(96, 130, 182, 0.6);
  height: 100vh;
  line-height: 1.8;
  padding-top: 30px;
  .container {
    margin: auto;
    max-width: 400px;
    padding: 20px;
  }

  .form-wrap {
    background-color: #fff;
    padding: 15px 25px;
    color: #333;
    position: relative;
    h1 {
      text-align: center;
    }
    button {
      display: block;
      width: 100%;
      padding: 10px;
      margin-top: 20px;
      cursor: pointer;
      border: #ddd 2px solid;
      :hover {
        background-color: #5072a7;
        color: #fff;
      }
    }
    .wrap {
      margin-top: 20px;
      text-align: center;
      position: relative;
      ::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        border-top: 1px solid rgba(96, 130, 182, 0.6);
        background: black;
        width: 100%;
        transform: translateY(-50%);
      }
    }

    .line {
      padding: 0 10px;
      display: flex;
      justify-content: center;
      position: relative;
    }
    .line-text {
      width: 30px;
      height: 28px;
      border-radius: 50%;
      background: #fff;
    }
  }

  .span-email {
    color: red;
    font-weight: bold;
  }

  .close-btn {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    cursor: pointer;
  }

  .form-group {
    margin-top: 15px;
    label {
      display: block;
    }
    input {
      width: 100%;
      padding: 10px;
      border: #ddd 1px solid;
      border-radius: 5px;
    }
  }
  .other-users {
    padding: 0.25rem;
    margin-top: 0.5rem;
  }
`;

export default Login;
