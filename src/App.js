import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Summary from "./components/Summary";
import styles from "./style.module.css"; 

function App() {
  const [transactions, setTransactions] = useState([]);
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className= {styles.App}>
      <h1 className= {styles.header}>Personal Budget Tracker</h1>
      <Form addTransaction={addTransaction} />
      <List transactions={transactions} />
      <Summary transactions = {transactions}/>
    </div>
  );
}

export default App;
