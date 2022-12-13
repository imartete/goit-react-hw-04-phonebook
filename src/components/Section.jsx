import PropTypes from 'prop-types';

export default ({ children, title }) => {
  return (
    <div>
      <h1>{title ? title : 'Your title'}</h1>
      {children}
    </div>
  );
};
