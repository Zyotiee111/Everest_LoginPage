import React from 'react';
import style from '../Themes/Navbar.module.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Button from "@material-ui/core/Button";



export default function Home({ setLoginStatus }) {
  const handleLogout = () => {
    setLoginStatus(false)
    localStorage.removeItem("loginStatus")
  }

    function getGreetingMsg(){
        let currentHour = new Date().getHours()
        if (currentHour < 12){
          return "Good Morning !";
        }else if(currentHour < 17){
          return "Good Afternoon !";
        }else{
          return "Good Evening !"
        }
      }

    let greeting = getGreetingMsg()

    return (
        <div className={style.home}>
            <h1>{greeting}</h1>
            <h2>Welcome To Home Page</h2>
           <Button
              size="medium"
              variant="contained"
              color="primary"
              onClick={() => handleLogout()}
              >
              <ExitToAppIcon/>
              Logout
           </Button>
        </div>
    )
}
