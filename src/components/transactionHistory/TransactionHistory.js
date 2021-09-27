import React from 'react'
import { TransactionHistoryStyled } from './TransactionHistoryStyled';
import PropTypes from 'prop-types';

const TransactionHistory = ({items}) => {
  return (
<TransactionHistoryStyled>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map((item)=> <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>)}
  </tbody>
</TransactionHistoryStyled>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
}


export default TransactionHistory;