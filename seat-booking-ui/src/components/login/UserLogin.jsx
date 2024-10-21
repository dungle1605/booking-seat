import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDocumentTitle, useScrollTop } from '../../hooks';
import { STAFF_FORGOT_PASSWORD, USER_SIGNUP } from '../../constants/routes';
import { signIn } from '../../redux/actions/authActions';
import { setAuthenticating, setAuthStatus } from '../../redux/actions/miscActions';
import './UserLogin.css'
import PropTypes from 'prop-types';
import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
    phoneNumber: Yup.string()
                .required('Yêu cầu nhập số điện thoại.'),
    password: Yup.string()
                .required('Yêu cầu nhập mật khẩu.')
});

const UserLogin = ({history}) => {
    const {authStatus, isAuthenticating} = useSelector((state) => ({
        authStatus: state.app ? state.app.authStatus : null,
        isAuthenticating: state.app ? state.app.isAuthenticating : null
    }));

    const dispatch = useDispatch();

    useScrollTop();
    useDocumentTitle('Đăng nhập | Đặt vé xe');
    
    useEffect(() => () => {
        dispatch(setAuthStatus(null));
        dispatch(setAuthenticating(false));
      }, []);
    
    const onSignUp = () => history.push(USER_SIGNUP);
    
    const onSubmitForm = (form) => {
        dispatch(signIn(form.phoneNumber, form.password));
    }

    const [activeTab, setActiveTab] = useState('signin');
    const [buttonLabel, setButtonLabel] = useState('Đăng nhập');
    const [title, setTitle] = useState('Đăng nhập tài khoản');
    const [signInPhoneNumber, setSignInPhoneNumber] = useState('');

    const selectTab = tabId => {
        setActiveTab(tabId);
        tabId === 'signin' ? setButtonLabel('Đăng nhập') : setButtonLabel('Đăng ký');
        tabId === 'signin' ? setTitle('Đăng nhập tài khoản') : setTitle('Đăng ký tài khoản');
    }

    return (
        <div className='signin-form-body'>
            <div className="user-info">
                <div>
                    <span>Đăng nhập</span>
                    <span>/</span>
                    <span>Đăng ký</span>
                </div>
            </div>
            <div className="signin-form-container">
                <div className="image">
                    <img src="../../../public/beaitful-woman.jpg" alt="Image" />
                </div>
                <div className='signin-form'>
                    <div className='signin-title'>
                        <h2>{title}</h2>
                    </div>
                    <div className="tabs">
                        <div className={activeTab === 'signin' ? 'tab-content active' : 'tab-content'} onClick={() => selectTab('signin')}>
                            Đăng nhập
                        </div>
                        <div href="#" className={activeTab === 'signup' ? 'tab-content active' : 'tab-content'} onClick={() => selectTab('signup')}>
                            Đăng ký
                        </div>
                    </div>
                    <div id="signin" style={{ display: activeTab === 'signin' ? 'block' : 'none' }}>
                        <form>
                            <label>Số điện thoại</label>
                            <input type="text" id="phoneNumber" name="phoneNumber" required />
                            
                            <label>Mật khẩu</label>
                            <input type="password" id="password" name="password" required />
                            
                            <button type="submit">{buttonLabel}</button>
                        </form>
                    </div>

                    <div id="signup" style={{ display: activeTab === 'signup' ? 'block' : 'none' }}>

                        <form>
                            <label>Số điện thoại</label>
                            <input type="text" id="phoneNumber" name="phoneNumber" required />
                            
                            <button type="submit">{buttonLabel}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

UserLogin.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired
};

export default UserLogin;