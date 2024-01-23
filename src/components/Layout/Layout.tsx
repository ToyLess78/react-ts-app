import Footer from "../Footer/Footer";
import Header from '../Header/Header/Header.tsx';
import React, {ReactNode} from "react";
import Main from "../Main/Main.tsx";
import {Outlet} from "react-router-dom";

interface LayoutProps {
    children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
  return (
      <>
      <Header />
          <Main>
              <Outlet />
          </Main>
      <Footer/>
      </>
  );
};

export default Layout;
