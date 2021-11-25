import React from "react";
import styled from "styled-components";
import EpicGamesWhiteLogo from "../../../assets/img/epicgames-whitelogo.png"
import { AiOutlineGlobal } from "react-icons/ai";
import { RiUser3Fill } from "react-icons/ri";

const NavBar = () => {
    return (
        <StyledWrapper>
            <Nav>
                <Logo src={EpicGamesWhiteLogo} alt="Epic Games logo" />
                <NavOptions>store</NavOptions>
                <NavOptions>novidades</NavOptions>
                <NavOptions>perguntas frequentes</NavOptions>
                <NavOptions>ajuda</NavOptions>
                <NavOptions>unreal engine</NavOptions>
            </Nav>
            <Nav>
                <NavOptions>
                    < AiOutlineGlobal color="grey" size="2em"/></NavOptions>
                <NavOptions>
                    <RiUser3Fill color="grey" size="1.5em" />
                    <p>Entrar</p>
                </NavOptions>
                <NavOptions>
                    <DownloadEpic>Baixar epic games</DownloadEpic>
                </NavOptions>
            </Nav>
                
        </StyledWrapper>
    )
}


const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 52px;
    width: 100%;
    background-color: #2a2a2a;
`;

const Nav = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
`
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
    height: 100%
`;

const DownloadEpic = styled.div`
    background-color: #0078f2;
    height: 100%;
    display: flex;
    align-items: center;
    color: #FFFFFF;
`;



export default NavBar;