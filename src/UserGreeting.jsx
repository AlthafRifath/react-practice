import PropTypes from 'prop-types';

function UserGreeting(props) {

    const WelcomeMessage = <h1 className="welcome-message">
                            Welcome back, {props.username}!
                            </h1>
    const LoginPrompt =     <h1 className="login-prompt">
                            Please log in to continue!
                            </h1>
    return(
        props.isLoggedIn ? WelcomeMessage : LoginPrompt);
}
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}
export default UserGreeting;