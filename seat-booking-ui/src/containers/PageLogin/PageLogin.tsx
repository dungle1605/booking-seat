import React, { FC } from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import beautifulGirl from "images/beautifulGirl.jpg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import { Link } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";

export interface PageLoginProps {
  className?: string;
}

const loginSocials = [
  {
    name: "Continue with Facebook",
    href: "#",
    icon: facebookSvg,
  },
  {
    name: "Continue with Twitter",
    href: "#",
    icon: twitterSvg,
  },
  {
    name: "Continue with Google",
    href: "#",
    icon: googleSvg,
  },
];

const PageLogin: FC<PageLoginProps> = ({ className = "" }) => {
  return (
    // <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
    //   <Helmet>
    //     <title>Login || Booking React Template</title>
    //   </Helmet>
    //   <div className="container mb-24 lg:mb-32">
    //     <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
    //       Login
    //     </h2>
    //     <div className="max-w-md mx-auto space-y-6">
    //       <div className="grid gap-3">
    //         {loginSocials.map((item, index) => (
    //           <a
    //             key={index}
    //             href={item.href}
    //             className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
    //           >
    //             <img
    //               className="flex-shrink-0"
    //               src={item.icon}
    //               alt={item.name}
    //             />
    //             <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
    //               {item.name}
    //             </h3>
    //           </a>
    //         ))}
    //       </div>
    //       {/* OR */}
    //       <div className="relative text-center">
    //         <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
    //           OR
    //         </span>
    //         <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
    //       </div>
    //       {/* FORM */}
    //       <form className="grid grid-cols-1 gap-6" action="#" method="post">
    //         <label className="block">
    //           <span className="text-neutral-800 dark:text-neutral-200">
    //             Email address
    //           </span>
    //           <Input
    //             type="email"
    //             placeholder="example@example.com"
    //             className="mt-1"
    //           />
    //         </label>
    //         <label className="block">
    //           <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
    //             Password
    //             <Link to="/forgot-pass" className="text-sm">
    //               Forgot password?
    //             </Link>
    //           </span>
    //           <Input type="password" className="mt-1" />
    //         </label>
    //         <ButtonPrimary type="submit">Continue</ButtonPrimary>
    //       </form>

    //       {/* ==== */}
    //       <span className="block text-center text-neutral-700 dark:text-neutral-300">
    //         New user? {` `}
    //         <Link to="/signup">Create an account</Link>
    //       </span>
    //     </div>
    //   </div>
    // </div>
    <div className="flex h-3/4 w-2/4 m-auto border-4 rounded-lg">
      <div
        className="flex-1 bg-cover bg-center"
        style={{ background: "url('tropical-plant-image.jpg')" }}
      >
        <div className="text-white">
          <img src={beautifulGirl} alt="" />
        </div>
      </div>
      <div className="flex-1 bg-purple-600 p-8 flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl font-bold mb-4">
          Đăng nhập tài khoản
        </h1>
        <form className="mt-8 bg-white p-6 rounded-lg shadow-md w-80">
          <label className="block text-gray-700">Số điện thoại</label>
          <input
            type="text"
            id="phoneNumber"
            className="w-full border border-gray-300 rounded-md p-2 mt-2"
            placeholder="Nhập số điện thoại"
          />

          <label className="block text-gray-700 mt-4">Mật khẩu</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-300 rounded-md p-2 mt-2"
            placeholder="Nhập mật khẩu"
          />

          <div className="flex items-center justify-between mt-4">
            <button className="bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800">
              Đăng nhập
            </button>
            <a href="#" className="text-purple-300">
              Đăng ký
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PageLogin;
