import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className=" border-2">
      <h3 className="text-2xl">History</h3>
      <ul className=''>
        {
          transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction} />)
        }

      </ul>
    </div>
  )
}

export default TransactionList