import { useState, type FormEvent, type ChangeEvent } from 'react';
import { signUp } from '../api/signUpAPI';
import { Link } from 'react-router-dom';
import type { User } from '../interfaces/user';

const Register = () => {
  const [registerData, setRegisterData] = useState<User>({
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Ensure passwords match
    if (registerData.password !== registerData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await signUp({
        name: registerData.name,
        username: registerData.username,
        password: registerData.password,
        email: registerData.username,
        confirmPassword: registerData.confirmPassword,
      });

    } catch (err) {
      console.error('Failed to sign up', err);
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className='form-container'>
      <form className='form signup-form' onSubmit={handleSubmit}>
        <h1>Create an Account</h1>
        {error && <p className='error-message'>{error}</p>}
        <div className='form-group'>
          <label>Full Name</label>
          <input
            className='form-input'
            type='text'
            name='name'
            value={registerData.name}
            onChange={handleChange}
            placeholder='Enter your full name'
            required
          />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input
            className='form-input'
            type='email'
            name='username'
            value={registerData.username}
            onChange={handleChange}
            placeholder='Enter your email'
            required
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            value={registerData.password}
            onChange={handleChange}
            placeholder='Enter a password'
            required
          />
        </div>
        <div className='form-group'>
          <label>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='confirmPassword'
            value={registerData.confirmPassword}
            onChange={handleChange}
            placeholder='Re-enter your password'
            required
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-primary' type='submit'>
            <Link to='/'>Submit</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
