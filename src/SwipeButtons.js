import React from 'react';
import  './swipebuttons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
function SwipeButtons() {
    return (
        <div className="SwipeButtons">
             <IconButton className="swipebuttons__replay">
            <ReplayIcon fontSize="large" className="" />
            </IconButton>

            <IconButton className="swipebuttons__left">
            <CloseIcon fontSize="large" className="" />
            </IconButton>

            <IconButton className="swipebuttons__star">
            <StarRateIcon fontSize="large" className="" />
            </IconButton>

            <IconButton className="swipebuttons__right">
            <FavoriteIcon fontSize="large" className="" />
            </IconButton>

            <IconButton className="swipebuttons__lightning">
            <FlashOnIcon fontSize="large" className="" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
