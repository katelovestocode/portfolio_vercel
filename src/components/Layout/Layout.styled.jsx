import styled from 'styled-components';
import { NavLink } from "react-router-dom"
import {primaryColor, accentColor, cubicBezier, borderColor, boxShadow} from "../../utils/colors"


export const Header = styled.header`
padding: 15px 0;
border-bottom: 1px solid ${borderColor};


`

export const FlexContainer = styled.div`
max-width: 1170px;
padding-left: 15px;
padding-right: 15px;
display: flex;
justify-content: space-between;
align-items: center;
margin-left: auto;
margin-right: auto;
`


export const Navigation = styled.nav`
display: flex; 
gap: 60px;
`
export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${primaryColor};
  font-weight: bold;
  transition: color 250ms ${cubicBezier};


  &.active {
  color: ${accentColor};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
      color: ${accentColor};
  }
`;

export const Link = styled.a`



`;

export const Image = styled.img`
filter: drop-shadow(0 0 0.6rem ${accentColor});

`;
