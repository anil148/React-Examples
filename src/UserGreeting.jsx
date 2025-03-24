import PropTypes from 'prop-types'
function UserGreeting(props){
   const welcomeMessage =  <h2 className="welcome-message"> Welcome {props.name};
    </h2>;
    const guestWelcomeMessage = <h2 className="login-prompt"> Welcome Guest</h2>;
    return(props.isUserLoggedIn ?welcomeMessage:guestWelcomeMessage);
}
UserGreeting.PropTypes = {
    isUserLoggedIn:PropTypes.bool,
    name:PropTypes.name
}
UserGreeting.defaultProps = {
    isUserLoggedIn: false,
    name: "Guest"
}
export default UserGreeting