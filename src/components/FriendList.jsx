import PropTypes from 'prop-types';
// import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  const listeItem = friends.map(friend => (
    <li key={friend.id} class="item">
      <span
        class="status"
        style={{
          backgroundColor: friend.isOnline ? 'magenta' : 'darkgreen',
        }}
      ></span>
      <img class="avatar" src={friend.avatar} alt={friend.name} width="48" />
      <p class="name">{friend.name}</p>
    </li>
  ));
  return <ul class="friend-list">{listeItem}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
