import styled from 'styled-components';
import {boxShadow, accentColor} from "../../utils/colors"

export const Title = styled.h3`
`;

export const Subtitle = styled.p``;

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 50px;

`;

export const Link = styled.a`

color: #212121;

  &:hover,  &:focus  {
      color: ${accentColor};
  }
`

export const Item = styled.li`
max-width: 500px;
 

  @media (min-width: 1070px) {
    width: calc((100% - 2 * 30px) / 2);
    margin: 15px;
  }

`;

export const Image = styled.img`
width: 500px;
height: 250px;
`
export const Box = styled.div`
  overflow: hidden;
  box-shadow: ${boxShadow};
  border-radius: 4px;
`