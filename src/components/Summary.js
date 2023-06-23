export default function Summary({ transactions }) {
  const income = transactions
    .filter((transaction) => {
      return transaction.type === "income";
    })
    .reduce((total, transaction) => {
      return total + transaction.amount;
    }, 0);

  const expense = transactions
    .filter((transaction) => {
      return transaction.type === "expense";
    })
    .reduce((total, transaction) => {
      return total + transaction.amount;
    }, 0);

  const balance = income - expense;

  const incomeEl = {
    color: "green",
  };
  const expenseEl = {
    color: "red",
  };
  const balanceEl = {
    color: balance < 0 ? "red" : "green",
  };

  return (
    <div>
      <p>
        Total Income: <b style={incomeEl}>{income}</b>
      </p>
      <p>
        Total Expenses: <b style={expenseEl}>{expense}</b>
      </p>
      <p>
        Remaining Balance: <b style={balanceEl}>{balance}</b>
      </p>
    </div>
  );
}
