import Footer from "../Footer/Footer";
import Header from '../Header/Header/Header.tsx';
import React from "react";
import Main from "../Main/Main.tsx";
import {Outlet} from "react-router-dom";
import {LayoutProps} from "../../helpers/interfases.ts";

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
