import React, { useState, useEffect, createContext } from "react";
import Login from "./Form/Login";
import Register from "./Form/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";


function App() {
  const [users, setUsers] = useState([
    {
      email: "",
      password: ""
    },
  ])
  const [loginStatus, setLoginStatus] = useState(false)

  useEffect(() => {
    let isLoggedIn = JSON.parse(localStorage.getItem("loginStatus"))
    if(isLoggedIn === null || isLoggedIn === false){
      setLoginStatus(false)
    }else{
      setLoginStatus(true)
    }
  },[])

return (
  <div className="App">
    <Navbar/>
   <Router>
      <Switch>
        <Route exact path="/register"
        render={(props) => (<Register {...props} users={users} setUsers={setUsers} />)}/>
        <Route
          exact
          path="/"
          render={(props) => (
            loginStatus ?
              <Home setLoginStatus={setLoginStatus} loginStatus={loginStatus} /> :
              <Login users={users} loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
          )}
        />
      </Switch>
    </Router>

  </div>
);
          }

export default App;
