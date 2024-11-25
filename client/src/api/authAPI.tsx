interface UserInfo {
  username: string;
  password: string;
}

export const login = async (userInfo: UserInfo) => {
  const response = await fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const { token } = await response.json();
  localStorage.setItem('token', token); // Store token
};

export const logout = () => {
  localStorage.removeItem('token'); // Clear token
};

export const getToken = () => localStorage.getItem('token');
