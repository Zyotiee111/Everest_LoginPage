import React, { useState } from 'react';
import style from '../Themes/LoginStyle.module.css';
import classes from '../Themes/RegisterStyle.module.css';
import register from "../Image/regsiter.jpg";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import SocialMedia from '../Components/SocialMedia';
import TextFieldComp from '../Components/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';


export const password_error = "Password must match and Password must be at least 8 characters containing number and alphabet.";
export const email_error = "Please enter the valid email."


 
export default function Register(props) {
    let history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

   
    const submitHandler =(e) =>{
        e.preventDefault();
        
        var email_check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var password_check = /(?=.*\d)(?=.*[A-Za-z]).{8,}/;

        if(email.match(email_check) && email!== ""){
            setEmailError(false)
        }else{
            setEmailError(true)
            }
    
        if  ((password !== "" && confirmPassword !== "") 
            && (password.match(password_check))
            &&(password === confirmPassword)){
                let newUser = {
                    email,
                    password
                }
                let newArray = props.users
                newArray.push(newUser)
                props.setUsers(newArray)
                setEmail("")
                setPassword("")
                setConfirmPassword("")
                alert("Successfully registered")
                props.history.push("/")
            } else {
                setPasswordError(true)
            }
        }


    return (
        <div className={classes.registerPage}>
            <div className={classes.container}>

                {/* left section */}
                <div className={classes.leftSection}>
                <img width="400px" src={register} alt="logo" />
                   
                </div>

                {/* right section */}
                <div className={classes.rightSection}>
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
                                onChange={setEmail}
                                msg = {email_error}
                                error={emailError}   
                            />

                            <TextFieldComp
                                value={password}
                                label="Password"
                                variant="outlined"
                                type="password"
                                onChange={setPassword}
                                error = {passwordError}
                            />
                        
                            <TextFieldComp
                                value={confirmPassword}
                                label="Confirm Password"
                                variant="outlined"
                                type="password"
                                onChange={setConfirmPassword}
                                msg={password_error}
                                error={passwordError}
                            />
                       

                        {/* forget msg */}
                        <div className={style.extraMsg}>
                            <p>Already a member ? </p>
                            <Link to="/" className={style.link}>
                                <p style={{color: "#3f51b5", marginLeft: "4px"}}>Sign In</p>
                            </Link>
                        </div>
                        <div className={style.signinBtn}>
                        <Button
                            type="submit"
                            size="medium"
                            variant="contained"
                            color="primary"
                        >
                         Sign up
                        </Button>
                        </div>
                    </form>
                    <SocialMedia />
                </div>

            </div>
        </div>
    )
}
