import React, { FC, useEffect, useState } from "react";
import beautifulGirl from "images/beautifulGirl.jpg";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signUp, settingSignUpPassword } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import ReactLoading from 'react-loading';
import toast from 'react-hot-toast';

export interface PageLoginProps {
  className?: string;
}

const PageLogin: FC<PageLoginProps> = ({ className = "" }) => {
  const defaultTab = "Đăng nhập"
  const [isFetching, setFetching] = useState(false);
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [phoneNumberSignIn, setPhoneNumberSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");

  const [phoneNumberSignUp, setPhoneNumberSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");

  const [optInputs, setOtpInputs] = useState(Array(6).fill(''));
  const [otpInputStep, setOtpInputStep] = useState(false);
  const [passwordSignUpStep, setPasswordSignUpStep] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const store = useSelector((state: any) => ({
    otp: state.auth?.otp,
    userName: state.auth?.name,
    state: state,
  }));

  useEffect(() => {
    if (store.userName != null && store.userName != '' && !isFetching)
      navigate('/');
  }, [store.userName != null && !isFetching]);

  useEffect(() => {
    setTimeout(() => {
      console.log('Delay 3 seconds for fetching');
      setFetching(false);
    }, 3000)
  }, [isFetching == true])

  const handleSignIn = (e: any) => {
    e.preventDefault();
    var phoneNumberPattern = /^0[1-9][0-9]{8,9}$/;
    var passwordPattern = /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/
    if(!phoneNumberPattern.test(phoneNumberSignIn)){
      toast.error('Số điện thoại ko đúng định dạng, vui lòng nhập lại!', {
        position: "top-right"
      });
      return;
    }

    if(!passwordPattern.test(passwordSignIn))
    {
      toast.error('Mật khẩu không đúng định dạng, vui lòng nhập lại!', {
        position: "top-right"
      });
      return;
    }

    setFetching(true);
    dispatch(signIn(phoneNumberSignIn, passwordSignIn));
  };

  const handleFinalSignUpStep = (e: any) => {
    e.preventDefault();
    dispatch(settingSignUpPassword(passwordSignUp));
    setActiveTab(defaultTab)
  }

  const handleSignUp = (e: any) => {
    e.preventDefault();
    dispatch(signUp(phoneNumberSignUp));
    setOtpInputStep(true)
  };

  const handleOtpInputForm = (e: any) => {
    e.preventDefault();

    if (optInputs.length < 6 && store.otp !== optInputs.join('')) {
      console.log('Wrong OTP');
      setOtpInputs(Array(6).fill(''))
    }
    else
      setPasswordSignUpStep(true);
  }

  const handleOtpInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const newPin = [...optInputs];

    // Allow only digits and limit to 1 character per input
    if (/^[0-9]$/.test(value) || value === '') {
      newPin[index] = value;

      // Move to the next input if the current one is filled
      if (value && index < optInputs.length - 1) {
        const nextInput = document.getElementById(`pin-input-${index + 1}`);

        if (nextInput) {
          nextInput.focus();
        }
      }

      setOtpInputs(newPin);
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Move to the previous input if backspace is pressed
    if (event.key === 'Backspace' && !optInputs[index] && index > 0) {
      const prevInput = document.getElementById(`pin-input-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  return (

    <div className="flex h-2/4 m-12">
      {isFetching && (<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50"><ReactLoading type='spin' color='#ffffff' delay={200} height={667} width={375} /></div>)}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={beautifulGirl}
          className="w-3/4 mx-auto"
          alt="beautifulGirl"
        />
      </div>

      <div className="flex-1">
        <h1 className="text-3xl font-bold text-center mb-4">{activeTab}</h1>
        <div className="flex">
          <button
            className="text-white px-4 py-2 rounded-md mr-4 w-full"
            onClick={() => setActiveTab("Đăng nhập")}
          >
            Đăng nhập
          </button>
          <button
            className="text-white px-4 py-2 rounded-md w-full"
            onClick={() => setActiveTab("Đăng ký")}
          >
            Đăng ký
          </button>
        </div>

        {activeTab === "Đăng nhập" ? (
          <form className="w-full" onSubmit={(e) => handleSignIn(e)}>
            <div className="mb-4">
              <label className="block text-gray-700">Số điện thoại</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                onChange={(e) => setPhoneNumberSignIn(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Nhập số điện thoại"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Mật khẩu</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Nhập mật khẩu"
                onChange={(e) => setPasswordSignIn(e.target.value)}
              />
            </div>
            <button className="bg-purple-700 text-white py-2 px-4 rounded-md w-full">
              Đăng nhập
            </button>
          </form>
        ) : (
          !otpInputStep ? (
            <form className="w-full" onSubmit={(e) => handleSignUp(e)}>
              <div className="mb-4">
                <label className="block text-gray-700">Số điện thoại</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="email"
                  onChange={(e) => setPhoneNumberSignUp(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Nhập số điện thoại"
                />
              </div>
              <button
                type="submit"
                className="bg-purple-700 text-white py-2 px-4 rounded-md w-full"
              >
                Đăng ký
              </button>
            </form>) : (
            !passwordSignUpStep ?
              (
                <form className="w-full" onSubmit={(e) => handleOtpInputForm(e)}>
                  <div className="mb-4">
                    <label className="block text-gray-700">Mã OTP</label>
                    <div className="flex space-x-4">
                      {optInputs.map((value, index) => (
                        <input
                          key={index}
                          id={`pin-input-${index}`}
                          type="text"
                          value={value}
                          className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          maxLength={1}
                          onChange={(e) => handleOtpInputChange(e, index)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                      ))}
                    </div>

                  </div>
                  <button
                    type="submit"
                    className="bg-purple-700 text-white py-2 px-4 rounded-md w-full"
                  >
                    Kiểm tra
                  </button>
                </form>
              ) : (<form className="w-full" onSubmit={(e) => handleFinalSignUpStep(e)}>
                <div className="mb-4">
                  <label className="block text-gray-700">Mật khẩu</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Nhập mật khẩu"
                    onChange={(e) => setPasswordSignUp(e.target.value)}
                  />
                </div>
                <button className="bg-purple-700 text-white py-2 px-4 rounded-md w-full">
                  Đăng ký
                </button>
              </form>)
          )
        )}
      </div>
    </div>
  );
};

export default PageLogin;
