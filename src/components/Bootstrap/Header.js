import React from 'react'
import HeaderUserMeta from '../HeaderUserMeta';

const Header = ({ dark, children, className, UserMeta }) => {
  dark = !!dark ? "dark" : "light";
    return (
        <nav
        className={
          `navbar navbar-${dark} bg-${dark}` + (className ? " " + className : "")
        }>
  <div class="container">
      <a class="navbar-brand" href="/">
      <img src="/logo512.png"
       alt={children + " Logo"}
       className="me-2"/>
      {children}
    </a>
    {UserMeta && <HeaderUserMeta {...UserMeta} />}
  </div>
</nav>
    );
};

export default Header
