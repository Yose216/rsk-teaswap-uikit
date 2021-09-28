import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {LogoIcon} from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import {HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText} from "../icons";
import MenuButton from "./MenuButton";

interface Props {
    isPushed: boolean;
    isDark: boolean;
    togglePush: () => void;
    href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 205px;
    height: 26px;
    ${({theme}) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 156px;
    display: none;
    ${({theme}) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

const Logo: React.FC<Props> = ({isPushed, togglePush, isDark, href}) => {
    const isAbsoluteUrl = href.startsWith("http");
    const innerLogo = (
        <>
            <LogoIcon className="mobile-icon"/>
            <LogoWithText className="desktop-icon" isDark={isDark}/>
        </>
    );

    return (
        <Flex>
            <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="5px">
                {isPushed ? (
                    <HamburgerCloseIcon width="24px" color="textSubtle"/>
                ) : (
                    <HamburgerIcon width="24px" color="textSubtle"/>
                )}
            </MenuButton>
            {isPushed ? (
              isAbsoluteUrl ? (
                <StyledLink as="a" href={href} aria-label="Teaswap home page">
                  {innerLogo}
                </StyledLink>
              ) : (
                <StyledLink to={href} aria-label="Teaswap home page">
                  {innerLogo}
                </StyledLink>
              )
            ) : null
      }
        </Flex>
    );
};

export default Logo;
