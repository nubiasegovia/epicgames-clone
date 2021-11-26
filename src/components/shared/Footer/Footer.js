import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <footer>
            <StyledFooter>
                <StyledWrapper>
                    <Copyright>
                        © 2021, Epic Games, Inc. Todos os direitos reservados. Epic, Epic Games, o logotipo da Epic Games, Fortnite, o logotipo do Fortnite, Unreal, Unreal Engine, o logotipo do Unreal Engine, Unreal Tournament e o logotipo do Unreal Tournament são marcas comerciais ou registradas da Epic Games, Inc. nos Estados Unidos da América e em outros lugares. Outras marcas e nomes de produtos são marcas registradas de seus respectivos donos. Transações para além dos EUA são feitas através da Epic Games International, S.à r.l.   
                        </Copyright>
                </StyledWrapper>
            </StyledFooter>
        </footer>

    )
}

const StyledFooter = styled.footer`
    display: flex;
    height: 200px;
    width: 100%;
    background-color: #2a2a2a;
    color: #CCCCCC;
    letter-spacing: .075em;
    padding: 0 1em;
    font-weight: 400;
    position: fixed;
    bottom: 0;
    font-size: 0.79em;
`;

const StyledWrapper = styled.div`
    padding: 1.25em 4.5em 2.5em;
`;

const Copyright = styled.div`
    text-align: justify;
    line-height: 1.43
    border: 1px solid #CCCCCC;
    padding: 2% 0;
`;

export default Footer;