import { useState } from "react";
import styles from "../style.module.css";

export default function Form({ addTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState();
  const [type, setType] = useState("income");

  const handleDes = (event) => {
    if (!isNaN(event.target.value)) {
      alert("Please do not enter number");
    } else {
      setDescription(event.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addTransaction({ description, amount: parseFloat(amount), type });
    setDescription("");
    setAmount("");
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <input
        className={styles.inputField}
        type="text"
        value={description}
        onChange={handleDes}
        required
        placeholder="Enter The Description"
      />
      <input
        className={styles.inputField}
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        placeholder="Enter The Amount"
      />
      <select name="type" onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button className={styles.btn} type="submit">
        Add
      </button>
    </form>
  );
}
