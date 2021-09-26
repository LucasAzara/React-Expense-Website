// Import CSS for Component
import "./ExpenseDate.css";
import Card from "../UI/Card";

function ExpenseDate(props) {
  /* Date cannot be just added to curly braces and aspect to become a string, so it needs to be converted into a string to appear on webpage */
  // toLocaleString is a js code that converts date to specific string created from the Date
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  // div changed to Card, Composition
  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{day}</div>
      <div className="expense-date__day">{year}</div>
    </Card>
  );
}

export default ExpenseDate;
