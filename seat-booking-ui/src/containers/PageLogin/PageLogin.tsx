import React, { FC, useEffect, useState } from "react";
import beautifulGirl from "images/beautifulGirl.jpg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import { Link } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signUp } from "../../redux/actions/authActions";

export interface PageLoginProps {
  className?: string;
}

const PageLogin: FC<PageLoginProps> = ({ className = "" }) => {
  const [activeTab, setActiveTab] = useState("Đăng nhập");
  const [phoneNumberSignIn, setPhoneNumberSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");

  const [phoneNumberSignUp, setPhoneNumberSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const dispatch = useDispatch();

  const store = useSelector((state: any) => ({
    otp: state.auth.otp,
    state: state,
  }));

  useEffect(() => {

  }, [store.otp])

  const handleSignIn = () => {
    dispatch(signIn(phoneNumberSignIn, passwordSignIn));
  };

  const handleSignUp = (e: any) => {
    e.preventDefault();
    dispatch(signUp(phoneNumberSignUp));
  };
  return (
    <div className="flex h-2/4 m-12">
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
          <form className="w-full">
            <div className="mb-4">
              <label className="block text-gray-700">Số điện thoại</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                onChange={() => setPhoneNumberSignIn(phoneNumberSignIn)}
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
              />
            </div>
            <button className="bg-purple-700 text-white py-2 px-4 rounded-md w-full">
              Đăng nhập
            </button>
          </form>
        ) : (
          store.otp != null ? (
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
              Kiểm tra
            </button>
          </form>
          )
        )}
      </div>
    </div>
  );
};

export default PageLogin;
