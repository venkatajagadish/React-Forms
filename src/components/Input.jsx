export default function Input({ id, error, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>Password</label>
      <input id={id} {...props} />
      {error && <div id="error">{error}</div>}
    </div>
  );
}
