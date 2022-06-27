import { Link } from "react-router-dom";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Dashboard from "./routes/Dashboard";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Profile, { ProfileProtectedByHOC } from "./routes/Profile";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedRouteOutlet from "./ProtectedRouteOutlet";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App" style={{ margin: "10px" }}>
      <h1>React Router 6 Protected/Private Routes Demo</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/profileNested">Profile via Nested</Link> |{" "}
        <Link to="/profileOutlet">Profile via Outlet</Link> |{" "}
        <Link to="/profileHOC">Profile via HOC</Link>
      </nav>
      {loggedIn ? (
        <button onClick={() => setLoggedIn(false)}>Log out</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      )}
      <Routes>
        <Route path="/" element={<Home setLoggedIn={setLoggedIn} />} />
        <Route path="/dashboard" element={<Dashboard loggedIn={loggedIn} />} />
        <Route
          path="/profileNested"
          element={
            <ProtectedRoute redirectTo="/login" loggedIn={loggedIn}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profileOutlet"
          element={<ProtectedRouteOutlet auth={loggedIn} />}
        >
          <Route path="" element={<Profile />} />
        </Route>
        <Route
          path="/profileHOC"
          element={<ProfileProtectedByHOC loggedIn={loggedIn} />}
        />
        <Route path="/login" element={<Login {...{ loggedIn }} />} />
      </Routes>
    </div>
  );
}
