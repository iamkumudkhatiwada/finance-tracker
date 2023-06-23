import styles from "../style.module.css";
export default function List({ transactions }) {
    
  return (
    <ul className= {styles.listItems}>
      {transactions.map((transaction) => {
        const changeColor = {
            color: transaction.type === "income" ? "green" : "red" 
        }
        return (
          <li style = {changeColor}>
            {transaction.description}
            {transaction.type === "income" ? "+" : "-"}
            {transaction.amount}
          </li>
        );
      })}
    </ul>
  );
}
