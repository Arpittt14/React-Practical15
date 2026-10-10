
import { useRef, useState } from "react";

function App() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    setSubmittedData({
      username: username,
      password: password
    });
  }

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "25px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        fontFamily: "Arial"
      }}
    >
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <br />
        <input
          type="text"
          ref={usernameRef}
          placeholder="Enter username"
          required
        />

        <br /><br />

        <label>Password:</label>
        <br />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Enter password"
          required
        />

        <br /><br />

        <button type="submit">Login</button>
      </form>

      {submittedData && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#e8f5e9",
            borderRadius: "8px"
          }}
        >
          <h2>Submitted Information</h2>
          <p>
            <strong>Username:</strong> {submittedData.username}
          </p>
          <p>
            <strong>Password:</strong> {submittedData.password}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
