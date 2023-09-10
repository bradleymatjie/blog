import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.scss';

export const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const userAuth = async (e) => {
    e.preventDefault();
    navigate('/blog/home');
  }
  
  return (
    <section className="signup">
      <div className='signup_container'>
        <form onSubmit={userAuth} action='' method='POST'>
        <h1>Sign up</h1>
          <input
            type="text"
            placeholder='username'
            name='username'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            required/>
          <input
            type="email"
            placeholder='Email'
            name='email'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required/>
          <input
            type="password"
            placeholder='password'
            name='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required/>
          <button type="submit">Register</button>
        </form>

        <div className="signUp-login">
          <h2>Already have an account?</h2>
          <Link to='/blog/login'>
            Sign In
          </Link>
        </div>
      </div>

    </section>
  );
}