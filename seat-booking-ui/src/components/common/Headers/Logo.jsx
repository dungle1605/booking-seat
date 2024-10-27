import React from 'react';
import logoImg from "../../../images/logo.png";
import logoLightImg from "../../../images/logo-light.png";

function Logo() {
    return (
        <Link
            href="/"
            className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
        >
            {logoImg ? (
                <img
                    className={`block max-h-12 ${logoLightImg ? "dark:hidden" : ""}`}
                    src={logoImg}
                    alt="Logo"
                />
            ) : (
                "Logo Here"
            )}
            {logoLightImg && (
                <img
                    className="hidden max-h-12 dark:block"
                    src={logoLightImg}
                    alt="Logo-Light"
                />
            )}
        </Link>
    );
}

export default Logo;