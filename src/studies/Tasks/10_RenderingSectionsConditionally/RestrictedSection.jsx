import PropTypes from 'prop-types';

export default function RestrictedSection({ setIsLogin }) {
  return (
    <div>
      <h1>Welcome to the restricted area!</h1>
      <button onClick={() => setIsLogin(false)}>Log Out</button>
    </div>
  )
}

RestrictedSection.propTypes = {
  setIsLogin: PropTypes.func.isRequired,
};