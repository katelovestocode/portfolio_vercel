import styled from '@emotion/styled'


export const FlexContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 30px;
margin: 30px 0;

  @media (max-width: 840px) {
    flex-direction: column-reverse;
    text-align: center;
  }

`
export const Title = styled.h2`
    font-weight: 700;
    font-size: 45px;

    @media (max-width: 840px) {
    font-size: 35px;
  }
`

export const SubTitle = styled.h3`
    font-weight: 700;
    font-size: 36px;
    margin-bottom: 15px;

     @media (max-width: 840px) {
    font-size: 28px;
  }
`

export const Text = styled.p`
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 15px;

    @media (max-width: 840px) {
    font-size: 14px;
  }
`