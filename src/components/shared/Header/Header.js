import React from "react";
import styled from "styled-components";
import EpicGamesWhiteLogo from "../../../assets/img/epicgames-whitelogo.png"

const Header = () => {
    return (
        <StyledWrapper>
            <Logo src={EpicGamesWhiteLogo} alt="Epic Games logo" />
            <NavOptions>store</NavOptions>
            <NavOptions>novidades</NavOptions>
            <NavOptions>perguntas frequentes</NavOptions>
            <NavOptions>ajuda</NavOptions>
            <NavOptions>unreal engine</NavOptions>
        </StyledWrapper>
    )
}


const StyledWrapper = styled.div`
    display: flex;
    height: 52px;
    width: 100%;
    background-color: #2a2a2a;
`;

const Logo = styled.img`
    height: 2.5em;
    padding: 0 1em
`;

const NavOptions = styled.div`
    font-family: OpenSans,sans-serif,arial;
    text-transform: uppercase;
    text-shadow: 1px 1px 1px rgb(0 0 0 / 0%);
    color: #ccc;
    font-size: 0.61em;
    letter-spacing: .075em;
    padding: 0 1em;
    font-weight: 400;
    display: flex;
    align-items: center;
`;

export default Header;