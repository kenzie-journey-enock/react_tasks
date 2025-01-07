import PropTypes from 'prop-types';

export default function LoginSection({ setIsLogin }) {
  return (
    <div>
      <h1>Welcome! Please log in to continue.</h1>
      <button onClick={() => setIsLogin(true)}>Log In</button>
    </div>
  )
}

LoginSection.propTypes = {
  setIsLogin: PropTypes.func.isRequired,
};