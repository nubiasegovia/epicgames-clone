import React from "react";
import styled from "styled-components";
import EpicGamesWhiteLogo from "../../../assets/img/epicgames-whitelogo.png"

const Header = () => {
    return (
        <StyledWrapper>
            <Logo src={EpicGamesWhiteLogo} alt="Epic Games logo" />
            <HeaderOptions>store</HeaderOptions>
            <HeaderOptions>novidades</HeaderOptions>
            <HeaderOptions>perguntas frequentes</HeaderOptions>
            <HeaderOptions>ajuda</HeaderOptions>
            <HeaderOptions>unreal engine</HeaderOptions>
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
    margin-left: 11px;
`;

const HeaderOptions = styled.div`
    font-family: OpenSans,sans-serif,arial;
    text-shadow: 1px 1px 1px rgb(0 0 0 / 0%);
    color: #ccc;
`;

export default Header;