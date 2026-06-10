function UserGreeting(props) {

    return props.isLoggedIn ? (
        <h2 className="welcome-msg">welcome {props.username}</h2>
    ) : (
        <h2 className="login-prompt">Please Log-in</h2>
    );
}
export default UserGreeting;