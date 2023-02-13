import React from "react";
import "../Layout/Header.css";
import logo from "../../Assets/logo-bird.png";
import discord from "../../Assets/icon-discord.png";
import dokuznokta from "../../Assets/icon-dokuznokta.png";
import notification from "../../Assets/icon-notification.png";
import search from "../../Assets/icon-search.png";
import userpp from "../../Assets/icon-user.png";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { user } = useSelector((state) => state.auth);
  console.log("header mail: ", user.user.email);

  return (
    <div className="header-bodyy">
      <div className="header-body">
        <div className="logo-ve-firmaismi">
          <a href="/">
            <img className="logo-container" src={logo} alt="logo" />
          </a>
          <a href="/" className="logo-postaguvercin">
            <li id="pg">Posta Güvercini</li>
            <li className="version-text">v0.v.9</li>
          </a>
        </div>

        <div>
          <table className="firma-table">
            <tr className="tr-table">
              <th className="th-firma">Firma</th>
              <th className="th-postaguvercini">Posta Güvercini Ltd. Şti</th>
            </tr>
          </table>
        </div>
        <nav className="menu-container">
          <ul>
            <li>
              <a href="/">
                <img className="icon-container" src={search} alt="logo" />
              </a>
            </li>
            <li>
              <a href="/">
                <img className="icon-container" src={discord} alt="logo" />
              </a>
            </li>
            <li>
              <a href="/">
                <img className="icon-container" src={dokuznokta} alt="logo" />
              </a>
            </li>
            <li>
              <a href="/">
                <img className="icon-container" src={notification} alt="logo" />
              </a>
            </li>
          </ul>
          <div className="user-img-group">
            <div>
              <p className="user-adsoyad">Hamza Çakmak</p>
              <p className="user-email">{user.user.email}</p>
            </div>
          </div>
          <img className="user-account-img" src={userpp}></img>
          
        </nav>
      </div>
    </div>
  );
}

export default Header;
