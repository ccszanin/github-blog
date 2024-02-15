import styled from "styled-components";

export const ModalContainer = styled.section`
     width: 100%;
     max-width: 864px;
     margin: 0 auto;
     padding: 0 1.5rem;
     display: flex;
      margin-top: -5rem;
      background:  ${props => props.theme['base-profile']};
    border-radius: 6px;
    padding: 2rem;
    box-shadow: 0px 2px 28px 0px #00000033;

    h1{
      font-weight:700;
      font-size: 24px;
      line-height: 31.2px;
      color:${props => props.theme["base-title"]};
    }

    a {
      font-weight:700;
      font-size: 12px;
      line-height: 19.2px;
      color:${props => props.theme["blue"]};
      text-decoration: none;
    }
    
    img{
      width: 148px;
      height: 148px;
      top:32px;
      left: 40px;
      border-radius: 8px;
    }
    header{
       display: flex;
       justify-content: space-between;
       color: ${props => props.theme["base-title"]};
       margin-bottom: 8px;
    }

    p {
      display: block;
      font-size: 16px;
      color: ${props => props.theme["base-text"]};
    }; 

  `

  export const FlexContainer = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
   
  `
   export const HeaderContent = styled.div`
    display: flex;
    gap:12px;
    border-bottom: 1px solid transparent;
    
    &:hover {
      border-bottom: 1px solid ${props => props.theme["blue"]};
    }
`

 export const Container = styled.div`
     padding-left: 32px;
 `

export const Description = styled.p`
 padding-bottom: 24px;

`