import PropTypes from 'prop-types';
// import css from './FriendList.module.css';

export const TransactionHistory = ({ items }) => {
  const tableRaws = items.map(item => (
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  ));

  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{tableRaws}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
