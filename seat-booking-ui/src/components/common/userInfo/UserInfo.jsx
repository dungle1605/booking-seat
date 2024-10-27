import React, { useEffect, useState } from 'react';
import './UserInfo.css';
import PropTypes from 'prop-types';

UserInfo.propTypes = {
    
};



function UserInfo(props) {
    const [mouseOver, setMouseOver] = useState('login-link');

    return (
        <div className="user-info">
                <span style={mouseOver === 'login-link' ? {cursor: 'pointer'} : {}} onMouseOver={() => setMouseOver('login-link')}>Đăng nhập</span>
                <span>&nbsp;/&nbsp;</span>
                <span style={mouseOver === 'signin-link' ? {cursor: 'pointer'} : {}} onMouseOver={() => setMouseOver('signin-link')}>Đăng ký</span>
            </div>
    );
}

export default UserInfo;