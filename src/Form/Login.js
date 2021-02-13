import React, { useState, useContext } from "react";
import style from "../Themes/LoginStyle.module.css";
import { Link } from 'react-router-dom';
import login from "../Image/login.jpg";
import SocialMedia from "../Components/SocialMedia";
import TextFieldComp from "../Components/TextField";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';

export const login_error = "Invalid credentials. Please try again !";



export default function Login({users, setLoginStatus}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginError, setLoginError] = useState(false)

   
    const submitHandler = (e) => {
        e.preventDefault();

        if (email === "" || password === ""){
            alert("Please register first!")
            return;
        }else{
            for(let i=0; i<users.length; i++){
                if(users[i].email === email && users[i].password === password){
                    setLoginStatus(true)
                    localStorage.setItem("loginStatus", "true")
                }else{
                    setLoginError(true)
                }
            }
            setLoginError(true)
        }
    };

    return (
        <div className={style.login_page}>
            <div className={style.container}>

                <div className={style.leftSection}>
                    <img
                        width="400px"
                        src={login}
                        alt="itCompany" />
                </div>

                <div className={style.rightSection}>

                    {/* title */}
                    <Typography variant="h6" color= "primary" >
                        <Box fontWeight="fontWeightBold" m={1}>EverestWalk Groups</Box>
                    </Typography>

                    {/* form */}
                    <form
                        onSubmit={(e) => submitHandler(e)}
                        className={style.form}
                    >
                        <TextFieldComp
                            value={email}
                            label="Email"
                            variant="outlined"
                            type="text"
                            error={loginError}
                            onChange={setEmail}
                        />

                        <TextFieldComp
                            value={password}
                            label="Password"
                            variant="outlined"
                            type="password"
                            onChange={setPassword}
                            msg={login_error}
                            error={loginError}
                        />

                        {/* extra  */}
                        <div className={style.extraMsg}>
                            <p>Forgot Password ?</p>
                            <Link to="/register" className={style.link}>
                                <p style={{ color: "#3f51b5", marginLeft: "4px" }}>Sign Up</p>
                            </Link>
                        </div>
                        <div className={style.signinBtn}>
                            <Button
                                type="submit"
                                size="medium"
                                variant="contained"
                                color="primary"
                            >
                            Sign In
                            </Button>
                        </div>
                    </form>

                    {/* SocialMedia component*/}
                    <SocialMedia />
                    <div className={style.terms}>
                        <small style={{ color: "#9C9C9C" }}>
                            Privacy Policy &bull; Terms & Condition
                    </small>
                    </div>
                </div>

               
            </div>
        </div>
    );
}
