import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function ExpenseComponent(props) {
  const [year, setYear] = useState("2022");

  const changeYearHandler = (year) => {
    setYear(year);
  };

  const items = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeYear={changeYearHandler} />
        <ExpensesChart expenses={items} />
        <ExpensesList items={items} />
      </Card>
    </div>
  );
}

export default ExpenseComponent;
