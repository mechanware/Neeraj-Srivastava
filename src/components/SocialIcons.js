import React from 'react';
import { SocialIcon } from 'react-social-icons';
import {TwitterLink,LinkedInLink,FbLinkLink,GitLink,Mail} from '../constants/SocialMedia'

function SocialIcons(props) {
    return (
        <div className="socialText" > 
        <SocialIcon style={{ height: '30px' }} target="_blank" url={TwitterLink} />
        <SocialIcon style={{ height: '30px' }} target="_blank" url={LinkedInLink} />
        <SocialIcon style={{ height: '30px' }} target="_blank" url={FbLinkLink} />
        <SocialIcon style={{ height: '30px' }} target="_blank" url={GitLink}/>
        <SocialIcon style={{ height: '30px' }} target="_blank" url={Mail}/>
    </div>
    );
}

export default SocialIcons;