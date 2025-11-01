import "./Button.css";
function Button(props) {
  const classNames = `btn btn-${props.type} btn-${props.size}`;
  console.log(props.onclick);
  return (
    <button className={classNames} onClick={props.onclick}>
      {props.title ? props.title : props.children}
    </button>
  );
}
export default Button;
