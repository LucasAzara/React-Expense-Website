import "./Card.css";

// Container with rounded corners
function Card(props) {
  // Any classes that is set on the div where the Composition is set will be added to the html
  const classes = "card " + props.className;
  // children prop will always be what's inside the opening and closing tags
  return <div className={classes}>{props.children}</div>;
}

export default Card;
