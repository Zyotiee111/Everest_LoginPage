import React from 'react';
import style from '../Themes/LoginStyle.module.css';
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";
import Typography from '@material-ui/core/Typography';

export default function Title() {
    return (
        <div>
            <Typography variant="h6" color= "primary">
                OR
            </Typography>

            {/* social auth */}
            <div className={style.social_media}>
                <div>
                    <FaFacebook />
                </div>
                <div>
                    <FaLinkedin />
                </div>
                <div>
                    <FaGoogle />
                </div>
            </div>

            <div>
                <small style={{ color: "#9C9C9C" }}>or use your own email</small>
            </div>
        </div>
    );
}
