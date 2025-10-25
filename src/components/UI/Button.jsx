import "./Button.css";
function Button(props) {
  const classNames = `btn btn-${props.type} btn-${props.size}`;

  return <button className={classNames}>{props.title}</button>;
}
export default Button;
