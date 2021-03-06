import React from 'react';
import "./header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function header() {
    return (
        <div className="header">            
            <IconButton>
            <PersonIcon fontSize="large" className="header_icons" />
            </IconButton>
         
                <img 
                className="header__logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
                alt="tinder-logo"
                />
                {/* <img 
                className="header__logo"
                src={process.env.PUBLIC_URL+"/tinder.png"}
                alt="tinder-logo"
                /> */}
                <IconButton>
            <ForumIcon fontSize="large" className="header_icons" />
            </IconButton>
        
        </div>
    )
}

export default header
