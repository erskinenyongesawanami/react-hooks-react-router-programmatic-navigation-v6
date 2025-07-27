import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🆕 import

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate(); // 🆕 call the hook

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleLogin(e) {
    e.preventDefault();

    // Fake login logic - just navigate for now
    navigate("/"); // 🆕 programmatic navigation to Home
  }

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Username</label>
      <div>
        <input
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <label htmlFor="password">Password</label>
      <div>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />      
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

