export default function Input({ id, error, title, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{title}</label>
      <input id={id} {...props} />
      {error && <div id="error">{error}</div>}
    </div>
  );
}
