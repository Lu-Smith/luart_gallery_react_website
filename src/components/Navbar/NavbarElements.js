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
height: 80px;
z-index: 1;
width: 100%:
padding: 0 24px;
max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
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
  margin: 40px 200px;

  @media screen and (max-width: 786px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-item: center;
text-decoration: none;
padding: 0 1 rem;
height: 100%;
cursor: pointer;

&.active {
    border-bottom: 3px solid #01bf71:
    
}

`;
