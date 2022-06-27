const Login = ({ loggedIn }) => {
  if (loggedIn)
    return <div>You are logged in and can visit protected routes!</div>;
  else return <div>You need to login!</div>;
};

export default Login;
