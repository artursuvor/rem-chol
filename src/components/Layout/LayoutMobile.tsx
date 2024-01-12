import React from "react";
import { Outlet } from "react-router-dom";
import HeaderMobile from "../Header/HeaderMobile";

const Layout: React.FC = () => {
    return (
        <div className="site-wrapper">
            <HeaderMobile />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
