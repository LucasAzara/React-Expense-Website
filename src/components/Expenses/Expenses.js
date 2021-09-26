import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import React, { useState } from "react";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2022");
  // const [expenses, setExpenses] = useState(props.expenses);
  const yearChangeHandler = (year) => {
    setEnteredYear(year);
    // const expenseFilter = props.expenses.filter(
    //   (expense) => expense.date.getFullYear().toString() === year
    // );
    // setExpenses(expenseFilter);
  };

  // // The reason this works is because everytime year is updated it reloads the page, meaning it will always execute this
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === enteredYear
  );

  // // Can store html without it being string into a variable to work in react
  // // default value
  // let expensesContent = <p>No expenses found.</p>;

  // // if there is content then override
  // if (props.expenses.length > 0) {
  //   expensesContent = props.expenses.map((expense) => (
  //     <ExpenseItem
  //       // Key prop, used to inform react specific item
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <div>
      {/* Controlled Component */}
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredYear}
          onYearChange={yearChangeHandler}
        />
        {/* Using ExpenseItem like a HTML element */}
        {/* It can be reused as many times as needed */}
        {/* props.expenses to get the array inside of the object */}
        {/* Utilizing map to create a new array that is in fact a react JSX */}
        {/* JS && to shortcode */}
        {/* {filteredExpenses.length === 0 && expensesContent} */}
        {
          // terniary expressions work in curly braces return
          // filteredExpenses.length === 0 ? (
          //   <p>No expenses found.</p>
          // ) : (
          // filteredExpenses.length > 0 && expensesContent
        }
        {/* Due to the logic being located somewhere else, can just add the variable */}
        {/* {expensesContent} */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
