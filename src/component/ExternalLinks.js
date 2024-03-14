import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";




const ExternalLinks = () => {


  let navigate = useNavigate();

  const Button = styled.button`
    background-color: #3f51b5;
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    border: 0; 
    text-transform: uppercase;
    margin: 10px 0px;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
      background-color: #283593;
    }
    &:disabled {
      cursor: default;
      opacity: 0.7;
    }
  `
  

  const routeChange = () => {
    navigate(`https://steamcommunity.com/openid/login?openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select&openid.identity=http://specs.openid.net/auth/2.0/identifier_select&openid.mode=checkid_setup&openid.ns=http://specs.openid.net/auth/2.0&openid.realm=https://localhost:3000&openid.return_to=https://localhost:3000/settings/`);
  }

return (
  <div className="external-links">
    <Button onClick={routeChange}>Steam</Button>
  </div>
);
};

export default ExternalLinks;
