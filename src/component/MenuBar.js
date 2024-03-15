import React from 'react';
import { Navigate, Link } from "react-router-dom";

const MenuBar = () => {
    return (
        <header className="App-header2">

        <nav>
          <ul class="nav ul">
            <li class="nav li"><a href="/games"><img src="VF3_0.png" alt="Logo" className="logo-menu-right" /></a></li>
            <li class="nav li"><a href="/settings"><img src="settings.png" alt="Logo" className="logo-menu-left" /></a></li>
          </ul>
        </nav>
      </header>
        
    );
};

export default MenuBar;