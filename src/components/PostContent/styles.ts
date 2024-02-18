import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    padding: 40px;
  
    p{
      font-size: 16px;
      font-weight: 400;
      line-height: 25.6px;
      color: ${props => props.theme['base-text']};
    }  
    ; 
  `