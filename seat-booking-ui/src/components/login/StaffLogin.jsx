import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDocumentTitle, useScrollTop } from '../../hooks';
import { STAFF_FORGOT_PASSWORD, STAFF_SIGNUP } from '../../constants/routes';
import { signIn } from '../../redux/actions/authActions';
import { setAuthenticating, setAuthStatus } from '../../redux/actions/miscActions';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
    userName: Yup.string()
                .required('Yêu cầu nhập tên tài khoản.'),
    password: Yup.string()
                .required('Yêu cầu nhập mật khẩu.')
});

const StaffLogin = ({history}) => {
    // const {authStatus, isAuthenticating} = useSelector((state) => ({
    //     authStatus: state.app.authStatus,
    //     isAuthenticating: state.app.isAuthenticating
    // }));

    const dispatch = useDispatch();

    useScrollTop();
    useDocumentTitle('Đăng nhập | Đặt vé xe');
    
    useEffect(() => () => {
        dispatch(setAuthStatus(null));
        dispatch(setAuthenticating(false));
      }, []);
    
    const onSignUp = () => history.push(STAFF_SIGNUP);
    
    const onSubmitForm = (form) => {
        dispatch(signIn(form.userName, form.password))
    }
    
    const onClickLink = e => {
        if(isAuthenticating) e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <input type='text' name='userName' />
                <br />
                <input type='password' name='password' />

                <button type="submit">Login</button>
            </form>
            
        </div>
    );
}

StaffLogin.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired
};

export default StaffLogin;