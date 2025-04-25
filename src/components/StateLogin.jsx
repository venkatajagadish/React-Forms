import { useState } from "react";
import Input from "./Input";

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
  const passwordIsValid =
    !isFormDirty.password || formState.password.trim().length > 8;

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
        <Input
          id="email"
          type="email"
          name="email"
          value={formState.email}
          onChange={() => handleChange("email", event.target.value)}
          onBlur={() => handleBlur("email", true)}
          error={!emailIsValid && "Please enter valid email!!"}
        />
        <Input
          id="password"
          type="password"
          name="password"
          value={formState.password}
          onChange={() => handleChange("password", event.target.value)}
          onBlur={() => handleBlur("password", true)}
          error={!passwordIsValid && "Please enter valid password!!"}
        />
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
