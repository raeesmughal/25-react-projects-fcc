import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


const Balance = () => {

  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map(transaction => transaction.amount);

  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);



  return (
    <div className=' border-2'>
      <h4 className=''>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  )
}

export default Balance