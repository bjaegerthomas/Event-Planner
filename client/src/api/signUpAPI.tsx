import type { UserRegister } from '../interfaces/userRegister.ts';

const signUp = async (userInfo: UserRegister) => {
  try {
    const response = await fetch('/auth/register', { // <-- Updated endpoint to register users
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'User registration failed');
    }

    return data;
  } catch (err) {
    console.error('Error from user registration:', err);
    return Promise.reject('Could not register user');
  }
};

export { signUp };
