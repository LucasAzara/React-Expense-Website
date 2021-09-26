import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [formActive, setFormActive] = useState(false);

  //   // using one state instead of multiple
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  // In react the moment a function is called on change it already acts like an event listener in Vanilla JS
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   // Vanilla javascript that inserts all of the values into object
    //  // Spread Opperator
    //   ...userInput,
    //   //   Override or write over the enteredTitle that already exists in the object with a new one
    //   enteredTitle: event.target.value,
    // });
    // //When updating an object that is dependent on previous values to update the object, use a function inside the function, this causes the parameter to the previous object that you can use to override and update the object
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const toggleForm = () => {
    setFormActive((form) => !form);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    toggleForm();

    const expenseData = {
      title: enteredTitle,
      // + in javascript converts string to numbers
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // Clearing Form
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  if (!formActive) {
    return (
      <div className="new-expense__add">
        <button type="submit" onClick={toggleForm}>
          Add New Expense
        </button>
      </div>
    );
  }

  return (
    //   onSubmit, because forms already have a default action when a submit button is pressed
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            // Two-Way binding
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={toggleForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
