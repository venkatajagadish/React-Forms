import { useState } from "react";

export default function StateLogin() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [isFormDirty, setIsFormDirty] = useState({
    email: false,
    password: false,
  });

  const emailIsValid = !isFormDirty.email || formState.email?.includes("@");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formState);
  }
  function handleChange(field, value) {
    setFormState((prevState) => ({ ...prevState, [field]: value }));
    setIsFormDirty((prevState) => ({ ...prevState, [field]: false }));
  }
  function handleBlur(field, value) {
    setIsFormDirty((prevState) => ({ ...prevState, [field]: value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formState.email}
            onChange={() => handleChange("email", event.target.value)}
            onBlur={() => handleBlur("email", true)}
          />
          {!emailIsValid && <div id="error">Please add a valid email</div>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formState.password}
            onChange={() => handleChange("password", event.target.value)}
            onBlur={() => handleBlur("password", true)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
