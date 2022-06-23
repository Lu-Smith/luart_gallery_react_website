import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
display: flex;
margin: 0 auto;
height: 80px;
z-index: 1;
width: 100%:
padding: 0 24px;
max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  color: #e7eaf6;
  cursor: pointer;
  font-size: 1.5rem;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  font-family: "Potta One", cursive;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 786px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    transform: translates(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-itmes: center;
  list-style: none;
  text-align: center;
  margin: 40px 40px 20px 160px;

  @media screen and (max-width: 786px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  padding-left: 20px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-item: center;
  text-decoration: none;
  padding: 0 1 rem;
  height: 100%;
  cursor: pointer;

  &:active {
    border-bottom: 3px solid #38598b;
    height: 40%;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 786px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #38598b;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  curosr: pointer;
  transition: all 0.2s easi-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
