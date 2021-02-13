import React from 'react';
import style from '../Themes/LoginStyle.module.css';
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function SocialMedia(){
    return (
        <div>
            <Typography variant="h6" color= "primary">
            <Box m={1}>
               OR
            </Box>
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

        </div>
    );
}
