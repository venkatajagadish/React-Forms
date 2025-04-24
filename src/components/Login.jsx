import { useRef, useState } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const [isFormValid, setIsFormValid] = useState({
    email: true,
    password: true,
  });

  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    console.log(enteredEmail.includes("@"), enteredPassword.length >= 8);
    if (!enteredEmail.includes("@") || enteredPassword.length < 8) {
      setIsFormValid({
        email: enteredEmail.includes("@"),
        password: enteredPassword.length >= 8,
      });
      return;
    }
    setIsFormValid({
      email: true,
      password: true,
    });
    // Proceed with api call
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          {!isFormValid.email && <div id="error">Please add a valid email</div>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
          {!isFormValid.password && (
            <div id="error">Please add a valid password</div>
          )}
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
