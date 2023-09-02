import Nav from "./Nav";
import style from "./Nav.module.css";
// import { ReactPropTypes } from "react";

const Layout = (props) => {
  return (
    <div>
      <Nav />
      <main className={style.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
