function UserGreeting(props){
   return(props.isLoggedIn ? <h2 className="welcome-message">welcom {props.username}</h2> :
                              <h2 className="login-prompt">please login to continue </h2>);
}

export default UserGreeting