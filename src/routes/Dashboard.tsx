type DashboardProps = {
  loggedIn: boolean;
};

const Dashboard = ({ loggedIn }: DashboardProps) => {
  return (
    <div>
      <h2>Dashboard</h2>
      {loggedIn ? <div>Logged In</div> : <div>Logged Out</div>}
    </div>
  );
};

export default Dashboard;
