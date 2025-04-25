import Input from "./Input";
import useInput from "../Hooks/UseInput";

export default function StateLogin() {
  const {
    enteredValue: email,
    isFieldDirty: isEmailDirty,
    handleBlur: handleEmailBlur,
    handleChange: handleEmailChange,
  } = useInput("");
  const {
    enteredValue: password,
    isFieldDirty: isPasswordDirty,
    handleBlur: handlePasswordBlur,
    handleChange: handlePasswordChange,
  } = useInput("");

  const emailIsValid = !isEmailDirty || email.includes("@");
  const passwordIsValid = !isPasswordDirty || password.trim().length > 8;

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <Input
          id="email"
          title="EMAIL"
          type="email"
          name="email"
          value={email}
          onChange={() => handleEmailChange("email", event.target.value)}
          onBlur={() => handleEmailBlur("email", true)}
          error={!emailIsValid && "Please enter valid email!!"}
        />
        <Input
          id="password"
          title="PASSWORD"
          type="password"
          name="password"
          value={password}
          onChange={() => handlePasswordChange("password", event.target.value)}
          onBlur={() => handlePasswordBlur("password", true)}
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
