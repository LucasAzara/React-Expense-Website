// Function used for state ( React Hook ) all React hooks have the word use in the start of the name
// import React, { useState } from "react";

// Adding CSS to React
import "./ExpenseItem.css";
// Import ExpenseDate
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// A component in react is just a JS function
// React gets 1 parameter that is a object as properties
// props name is a convention in React ( props short for property )
function ExpenseItem(props) {
  // // March 28,2021
  // // In Date the month start with 0, that's why the month in 2
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;

  // Should always be inside of the main function
  // useState returns the variable in the parameter and a function that is used to update the variable
  // always returns 2 values the first being the variable with the value and the second being the function to update variable

  // const [title, setTitle] = useState(props.title);

  // let title = props.title;

  // const clickHandler = () => {
  //   // Update the title
  //   setTitle();
  // };

  // One snippet per return
  return (
    // Wrapping li// adding class css to div (className)
    <li>
      <Card className="expense-item">
        {/* Short Code to add  component*/}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          {/* To add javascript into react expression is to use curly braces */}
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        {/* Adding a javascript function on button that executes on click*/}
        {/* Can add function directly in the on onClick */}
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

// to use the component, use export
export default ExpenseItem;
