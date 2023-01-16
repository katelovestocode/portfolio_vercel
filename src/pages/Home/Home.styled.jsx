import styled from '@emotion/styled'
import { greyTextColor} from "../../utils/colors"


export const FlexContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 30px;
margin: 80px 0;

  @media (max-width: 840px) {
    flex-direction: column-reverse;
    text-align: center;
  }

`
export const Title = styled.h1`
    font-weight: 700;
    font-size: 45px;

 @media (min-width: 840px) { 
      font-size: 40px;
    }

    @media (min-width: 1200px) {
     font-size: 50px;
  }
`

export const SubTitle = styled.h2`
    font-weight: 700;
    font-size: 35px;
    margin-bottom: 15px;
    color: ${greyTextColor};

  @media (min-width: 840x) { 
      font-size: 28px;
    }

   @media (min-width: 1200px) {
     font-size: 40px;
  }
`

export const Text = styled.p`
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 60px;
    color: ${greyTextColor};
  
  @media (min-width: 840px) { 
      font-size: 18px;
    }

    @media (min-width: 1200px) {
    font-size: 22px;
  }
`
